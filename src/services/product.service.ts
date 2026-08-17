import type { Product } from '@/types';
import { ProductRepository } from '@/repositories/product.repository';
import { removeAccents } from '@/lib/utils';

export class ProductService {
  static async getProducts(
    filters: {
      search?: string;
      categories?: string[];
      sort?: 'newest' | 'name-asc' | 'name-desc';
      page?: number;
      limit?: number;
    } = {},
    locale: string = 'vi'
  ): Promise<{ products: Product[]; total: number }> {
    let products = await ProductRepository.getAllProducts(locale);

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
        products.sort((a, b) => a.title.localeCompare(b.title, locale));
      } else if (filters.sort === 'name-desc') {
        products.sort((a, b) => b.title.localeCompare(a.title, locale));
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

  static async getProductBySlug(slug: string, locale: string = 'vi'): Promise<Product | undefined> {
    return ProductRepository.getProductBySlug(slug, locale);
  }

  static async getProductsByCategory(categorySlug: string, locale: string = 'vi'): Promise<Product[]> {
    const { products } = await this.getProducts({ categories: [categorySlug] }, locale);
    return products;
  }

  static async getBestSellers(limit: number = 12, locale: string = 'vi'): Promise<Product[]> {
    const allProducts = await ProductRepository.getAllProducts(locale);
    const bestSellers = allProducts.filter(p => p.isBestSeller || p.isHot || p.isNew);
    return bestSellers.length > 0 ? bestSellers.slice(0, limit) : allProducts.slice(0, limit);
  }

  static async getRelatedProducts(currentSlug: string, category: string, limit: number = 4, locale: string = 'vi'): Promise<Product[]> {
    const allProducts = await ProductRepository.getAllProducts(locale);
    const related = allProducts.filter(p => p.category === category && p.slug !== currentSlug);
    if (related.length >= limit) {
      return related.slice(0, limit);
    }
    const otherProducts = allProducts.filter(p => p.slug !== currentSlug && !related.includes(p));
    return [...related, ...otherProducts].slice(0, limit);
  }
}
