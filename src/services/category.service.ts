import type { Category } from '@/types';
import { CategoryRepository } from '@/repositories/category.repository';

export class CategoryService {
  static async getCategories(): Promise<Category[]> {
    return CategoryRepository.getAllCategories();
  }
}
