import type { NewsItem } from '@/types';
import { NewsRepository } from '@/repositories/news.repository';
import { removeAccents } from '@/lib/utils';

export class NewsService {
  static async getNews(filters: {
    category?: string;
    search?: string;
    page?: number;
    limit?: number;
  } = {}): Promise<{ news: NewsItem[]; total: number }> {
    let news = await NewsRepository.getAllNews();

    // 1. News Category Filter
    if (filters.category) {
      if (filters.category === 'tu-van') {
        news = news.filter(n => n.category === 'tu-van' || n.category === 'ky-thuat' || n.category === 'kien-thuc');
      } else if (filters.category === 'tin-tuc') {
        news = news.filter(n => n.category === 'tin-tuc' || n.category === 'cong-nghe');
      } else {
        news = news.filter(n => n.category === filters.category);
      }
    }

    // 2. Search Query Filter
    if (filters.search) {
      const searchNormalized = removeAccents(filters.search.toLowerCase());
      news = news.filter(n => {
        const titleNormalized = removeAccents(n.title.toLowerCase());
        const descNormalized = removeAccents(n.description.toLowerCase());
        return titleNormalized.includes(searchNormalized) || descNormalized.includes(searchNormalized);
      });
    }

    // 3. Pagination
    const total = news.length;
    if (filters.page && filters.limit) {
      const startIndex = (filters.page - 1) * filters.limit;
      news = news.slice(startIndex, startIndex + filters.limit);
    }

    return { news, total };
  }

  static async getNewsBySlug(slug: string): Promise<NewsItem | undefined> {
    return NewsRepository.getNewsBySlug(slug);
  }

  static async getLatestNews(limit = 3): Promise<NewsItem[]> {
    const { news } = await this.getNews();
    return news.slice(0, limit);
  }

  static async getRelatedNews(newsId: string, category: string, limit = 3): Promise<NewsItem[]> {
    const { news } = await this.getNews({ category });
    let related = news.filter(n => n.id !== newsId);
    
    if (related.length < limit) {
      const { news: allNews } = await this.getNews();
      const extraNews = allNews.filter(n => n.id !== newsId && !related.some(r => r.id === n.id));
      related = [...related, ...extraNews].slice(0, limit);
    }
    
    return related;
  }

  static async searchNews(query: string): Promise<NewsItem[]> {
    const { news } = await this.getNews({ search: query });
    return news;
  }
}
