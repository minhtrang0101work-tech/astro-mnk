import type { Product } from '@/types';
import { ProductRepository } from '@/repositories/product.repository';
import { removeAccents } from '@/lib/utils';

export class ProductService {
  static async getProducts(filters: {
    search?: string;
    categories?: string[];
    sort?: 'newest' | 'name-asc' | 'name-desc';
    page?: number;
    limit?: number;
  } = {}): Promise<{ products: Product[]; total: number }> {
    let products = await ProductRepository.getAllProducts();

    // 1. Search Query Filter
    if (filters.search) {
      const searchNormalized = removeAccents(filters.search.toLowerCase());
      products = products.filter(p => {
        const titleNormalized = removeAccents(p.title.toLowerCase());
        const descNormalized = removeAccents(p.description.toLowerCase());
        const catNormalized = removeAccents(p.categoryName.toLowerCase());
        return (
          titleNormalized.includes(searchNormalized) ||
          descNormalized.includes(searchNormalized) ||
          catNormalized.includes(searchNormalized)
        );
      });
    }

    // 2. Categories Checkboxes Filter
    if (filters.categories && filters.categories.length > 0) {
      products = products.filter(p => filters.categories!.includes(p.category));
    }

    // 3. Sorting
    if (filters.sort) {
      if (filters.sort === 'name-asc') {
        products.sort((a, b) => a.title.localeCompare(b.title, 'vi'));
      } else if (filters.sort === 'name-desc') {
        products.sort((a, b) => b.title.localeCompare(a.title, 'vi'));
      }
    }

    // 4. Pagination
    const total = products.length;
    if (filters.page && filters.limit) {
      const startIndex = (filters.page - 1) * filters.limit;
      products = products.slice(startIndex, startIndex + filters.limit);
    }

    return { products, total };
  }

  static async getProductBySlug(slug: string): Promise<Product | undefined> {
    return ProductRepository.getProductBySlug(slug);
  }

  static async getProductsByCategory(categorySlug: string): Promise<Product[]> {
    const { products } = await this.getProducts({ categories: [categorySlug] });
    return products;
  }

  static async getFeaturedProducts(limit = 4): Promise<Product[]> {
    const { products } = await this.getProducts();
    // Best seller or Hot or New
    return products.filter(p => p.isBestSeller || p.isHot || p.isNew).slice(0, limit);
  }

  static async getBestSellers(limit = 12): Promise<Product[]> {
    const { products } = await this.getProducts();
    // Sắp xếp ưu tiên: Bán chạy (isBestSeller) -> Hot (isHot) -> Mới (isNew) -> Các sản phẩm khác
    const bestSellers = products.filter(p => p.isBestSeller);
    const hotProducts = products.filter(p => p.isHot && !p.isBestSeller);
    const newProducts = products.filter(p => p.isNew && !p.isBestSeller && !p.isHot);
    const otherProducts = products.filter(p => !p.isBestSeller && !p.isHot && !p.isNew);
    
    const sorted = [...bestSellers, ...hotProducts, ...newProducts, ...otherProducts];
    return sorted.slice(0, limit);
  }

  static async getLatestProducts(limit = 4): Promise<Product[]> {
    const { products } = await this.getProducts();
    return products.filter(p => p.isNew).slice(0, limit);
  }

  static async getRelatedProducts(productId: string, categorySlug: string, limit = 4): Promise<Product[]> {
    const { products } = await this.getProducts({ categories: [categorySlug] });
    let related = products.filter(p => p.id !== productId);
    
    if (related.length < limit) {
      const { products: allProducts } = await this.getProducts();
      const extraProducts = allProducts.filter(p => p.id !== productId && !related.some(r => r.id === p.id));
      related = [...related, ...extraProducts].slice(0, limit);
    }
    
    return related;
  }

  static async searchProducts(query: string): Promise<Product[]> {
    const { products } = await this.getProducts({ search: query });
    return products;
  }
}
