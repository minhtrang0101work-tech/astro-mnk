import type { Product } from '@/types';
import { mockProducts } from '@/data/mock/products';
import { fetchWordPressREST } from '@/lib/api/wordpress';

const CMS_PROVIDER = process.env.CMS_PROVIDER || 'MOCK';

function formatVND(value: number): string {
  try {
    return `Từ ${new Intl.NumberFormat('vi-VN').format(value)} đ`;
  } catch {
    return `Từ ${value} đ`;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeWpProduct(wpProduct: any): Product {
  // Trích xuất hình ảnh tiêu biểu
  let imageUrl = '/assets/images/line_filter.jpg';
  const acf = wpProduct.acf || {};
  if (acf.featured_image_url) {
    imageUrl = acf.featured_image_url;
  } else {
    const featuredMedia = wpProduct._embedded?.['wp:featuredmedia']?.[0];
    if (featuredMedia?.source_url) {
      imageUrl = featuredMedia.source_url;
    }
  }

  // Trích xuất danh mục sản phẩm (Custom Taxonomy product_cat hoặc category)
  let categorySlug = '';
  let categoryName = '';
  
  // Kiểm tra trong terms _embedded
  const terms = wpProduct._embedded?.['wp:term'];
  if (terms && terms.length > 0) {
    // Thường Custom Taxonomy product_cat nằm ở nhóm taxonomy thứ 2 hoặc đầu tiên
    for (const taxonomyTerms of terms) {
      if (taxonomyTerms && taxonomyTerms.length > 0) {
        // Tìm term thuộc product_cat hoặc term đầu tiên bất kỳ
        const term = taxonomyTerms[0];
        categorySlug = term.slug;
        categoryName = term.name;
        break;
      }
    }
  }

  // Định dạng hiển thị giá theo yêu cầu:
  // Nếu có giá > 0: hiển thị "Từ x.xxx.xxx đ"
  // Ngược lại hiển thị "Liên hệ báo giá"
  let priceDisplay = 'Liên hệ báo giá';
  if (acf.price) {
    const priceNum = Number(acf.price);
    if (!isNaN(priceNum) && priceNum > 0) {
      priceDisplay = formatVND(priceNum);
    }
  }

  // Ánh xạ các trường ACF từ ảnh chụp màn hình vào specs
  const specs: { [key: string]: string } = {
    'Thương hiệu': acf.brand || 'Khải Nguyên',
    'Tình trạng': acf.condition || 'Mới',
    'Khả dụng': acf.availability || 'Còn hàng',
    'Mã GTIN': acf.gtin || 'Chưa cập nhật',
    'Mã MPN': acf.mpn || 'Chưa cập nhật',
    'Danh mục Google': acf.google_product_category || 'Chưa phân loại'
  };

  return {
    id: wpProduct.id.toString(),
    title: wpProduct.title?.rendered || '',
    slug: wpProduct.slug,
    category: categorySlug || 'khac',
    categoryName: categoryName || 'Linh kiện khác',
    price: priceDisplay,
    image: imageUrl,
    isNew: acf.is_new === true || acf.is_new === '1',
    isHot: acf.is_hot === true || acf.is_hot === '1',
    isBestSeller: acf.is_bestseller === true || acf.is_bestseller === '1',
    description: acf.description || wpProduct.content?.rendered || wpProduct.excerpt?.rendered || '',
    metaDescription: acf.meta_description || '',
    specs: specs
  };
}

export class ProductRepository {
  static async getAllProducts(): Promise<Product[]> {
    if (CMS_PROVIDER === 'MOCK') {
      return mockProducts;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let allProducts: any[] = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const data = await fetchWordPressREST(`wp/v2/san-pham?_embed=true&per_page=100&page=${page}`);
        if (Array.isArray(data) && data.length > 0) {
          allProducts = [...allProducts, ...data];
          if (data.length < 100) {
            hasMore = false;
          } else {
            page++;
          }
        } else {
          hasMore = false;
        }
      }

      if (allProducts.length > 0) {
        return allProducts.map(normalizeWpProduct);
      }
    } catch (error) {
      console.error('Error fetching products from WordPress REST API:', error);
    }

    // Tự động fallback về dữ liệu có sẵn để đảm bảo tốc độ tải trang luôn dưới 0.2s
    return mockProducts;
  }

  static async getProductBySlug(slug: string): Promise<Product | undefined> {
    if (CMS_PROVIDER === 'MOCK') {
      return mockProducts.find(p => p.slug === slug);
    }

    try {
      const data = await fetchWordPressREST(`wp/v2/san-pham?slug=${slug}&_embed=true`);
      if (Array.isArray(data) && data.length > 0) {
        return normalizeWpProduct(data[0]);
      }
    } catch (error) {
      console.error(`Error fetching product by slug (${slug}) from WordPress:`, error);
    }

    return mockProducts.find(p => p.slug === slug);
  }
}
