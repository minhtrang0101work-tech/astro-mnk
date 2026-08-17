import type { NewsItem } from '@/types';
import { mockNews } from '@/data/mock/news';
import { fetchWordPressREST } from '@/lib/api/wordpress';
import { translateNews } from '@/lib/translate';

const CMS_PROVIDER = import.meta.env.CMS_PROVIDER || process.env.CMS_PROVIDER || 'MOCK';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeWpPost(wpPost: any): NewsItem {
  // Trích xuất hình ảnh tiêu biểu từ _embedded hoặc ACF
  let imageUrl = '/assets/images/hero_bg.jpg';
  const acf = wpPost.acf || {};
  if (acf.featured_image_url) {
    imageUrl = acf.featured_image_url;
  } else {
    const featuredMedia = wpPost._embedded?.['wp:featuredmedia']?.[0];
    if (featuredMedia?.source_url) {
      imageUrl = featuredMedia.source_url;
    }
  }

  // Trích xuất danh mục từ _embedded
  let categorySlug = 'tin-tuc';
  const terms = wpPost._embedded?.['wp:term']?.[0];
  if (terms && terms.length > 0) {
    categorySlug = terms[0].slug;
  }

  // Chuẩn hóa slug danh mục từ WordPress
  if (categorySlug === 'tin-tuc-nganh') categorySlug = 'tin-tuc';
  if (categorySlug === 'tu-van-ky-thuat') categorySlug = 'tu-van';
  if (categorySlug === 'bao-tri-bao-duong') categorySlug = 'bao-tri';
  if (categorySlug === 'du-an-lap-dat') categorySlug = 'du-an';

  // Xử lý Meta SEO từ ACF hoặc fallback về tóm tắt bài viết
  const description = acf.meta_description
    ? acf.meta_description
    : wpPost.excerpt?.rendered
      ? wpPost.excerpt.rendered.replace(/<[^>]*>/g, '').replace(/\r?\n|\r/g, ' ').trim()
      : '';

  // Định dạng ngày hiển thị
  let formattedDate = '';
  try {
    const d = new Date(wpPost.date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    formattedDate = `${day}/${month}/${year}`;
  } catch {
    formattedDate = wpPost.date;
  }

  return {
    id: wpPost.id.toString(),
    title: wpPost.title?.rendered || '',
    slug: wpPost.slug,
    category: categorySlug,
    date: formattedDate,
    rawDate: wpPost.date,
    image: imageUrl,
    description: description,
    content: wpPost.content?.rendered || '',
  };
}

export class NewsRepository {
  static async getAllNews(locale: string = 'vi'): Promise<NewsItem[]> {
    let news: NewsItem[] = [];

    if (CMS_PROVIDER === 'MOCK') {
      news = mockNews;
    } else {
      try {
        const data = await fetchWordPressREST('wp/v2/posts?_embed=true&per_page=100');
        if (Array.isArray(data) && data.length > 0) {
          news = data.map(normalizeWpPost);
        } else {
          news = mockNews;
        }
      } catch (error) {
        console.error('Error fetching news from WordPress REST API:', error);
        news = mockNews;
      }
    }

    return news.map(n => translateNews(n, locale));
  }

  static async getNewsBySlug(slug: string, locale: string = 'vi'): Promise<NewsItem | undefined> {
    let item: NewsItem | undefined;

    if (CMS_PROVIDER === 'MOCK') {
      item = mockNews.find(n => n.slug === slug);
    } else {
      try {
        const data = await fetchWordPressREST(`wp/v2/posts?slug=${slug}&_embed=true`);
        if (Array.isArray(data) && data.length > 0) {
          item = normalizeWpPost(data[0]);
        } else {
          item = mockNews.find(n => n.slug === slug);
        }
      } catch (error) {
        console.error(`Error fetching news by slug (${slug}) from WordPress:`, error);
        item = mockNews.find(n => n.slug === slug);
      }
    }

    if (item) {
      return translateNews(item, locale);
    }
    return undefined;
  }
}
