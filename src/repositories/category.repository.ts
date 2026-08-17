import type { Category } from '@/types';
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

import { ProductRepository } from './product.repository';

export class CategoryRepository {
  static async getAllCategories(): Promise<Category[]> {
    let categories: Category[] = [];

    if (CMS_PROVIDER === 'MOCK') {
      categories = [...mockCategories];
    } else {
      try {
        const data = await fetchWordPressREST('wp/v2/product_cat?per_page=100&hide_empty=false');
        if (Array.isArray(data) && data.length > 0) {
          categories = data.map(normalizeWpCategory);
        } else {
          const defaultData = await fetchWordPressREST('wp/v2/categories?per_page=100&hide_empty=false');
          if (Array.isArray(defaultData) && defaultData.length > 0) {
            categories = defaultData.map(normalizeWpCategory);
          } else {
            categories = [...mockCategories];
          }
        }
      } catch (error) {
        console.error('Error fetching categories from WordPress REST API:', error);
        categories = [...mockCategories];
      }
    }

    // Luôn tính toán số lượng sản phẩm thực tế theo từng danh mục
    try {
      const allProducts = await ProductRepository.getAllProducts('vi');
      const countMap = new Map<string, number>();

      for (const p of allProducts) {
        if (p.category) {
          countMap.set(p.category, (countMap.get(p.category) || 0) + 1);
        }
      }

      categories = categories
        .map(cat => ({
          ...cat,
          count: countMap.get(cat.slug) !== undefined ? countMap.get(cat.slug)! : (cat.count || 0)
        }))
        .filter(cat => cat.slug !== 'uncategorized' || cat.count > 0);
    } catch (e) {
      console.error('Error calculating category product counts:', e);
    }

    return categories;
  }
}
