import { PageMetadata } from '@/types';
import { PageRepository } from '@/repositories/page.repository';

export class PageService {
  static async getPageMetadata(pageKey: string): Promise<PageMetadata> {
    return PageRepository.getPageMetadata(pageKey);
  }
}
