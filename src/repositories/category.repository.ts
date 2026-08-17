import { Category } from '@/types';
import { mockCategories } from '@/data/mock/categories';
import { fetchWordPressREST } from '@/lib/api/wordpress';

const CMS_PROVIDER = process.env.CMS_PROVIDER || 'MOCK';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeWpCategory(wpTerm: any): Category {
  return {
    id: wpTerm.id.toString(),
    name: wpTerm.name || '',
    slug: wpTerm.slug || '',
    count: wpTerm.count || 0
  };
}

export class CategoryRepository {
  static async getAllCategories(): Promise<Category[]> {
    if (CMS_PROVIDER === 'MOCK') {
      return mockCategories;
    }

    try {
      // Gọi API lấy danh mục phân loại Custom Taxonomy của sản phẩm
      // Mặc định Custom Taxonomy của CPT UI thường đặt tên là 'product_cat'
      // Thêm hide_empty=false để luôn hiển thị các danh mục kể cả khi chưa có sản phẩm nào
      const data = await fetchWordPressREST('wp/v2/product_cat?per_page=100&hide_empty=false');
      if (Array.isArray(data)) {
        return data.map(normalizeWpCategory);
      }
    } catch (error) {
      console.error('Error fetching categories from WordPress REST API (falling back to product categories):', error);
      
      // Fallback thử gọi mặc định 'categories' (dành cho bài viết) nếu product_cat bị lỗi/chưa tạo
      try {
        const defaultData = await fetchWordPressREST('wp/v2/categories?per_page=100&hide_empty=false');
        if (Array.isArray(defaultData)) {
          return defaultData.map(normalizeWpCategory);
        }
      } catch {
        console.error('Error fetching default categories');
      }
    }

    return [];
  }
}
