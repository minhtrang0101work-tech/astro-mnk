import { NewsItem } from '@/types';
import { mockNews } from '@/data/mock/news';
import { fetchWordPressREST } from '@/lib/api/wordpress';

const CMS_PROVIDER = process.env.CMS_PROVIDER || 'MOCK';

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

  // Trích xuất danh mục từ _embedded (nếu sử dụng _embed=true)
  let categorySlug = 'tin-tuc';
  const terms = wpPost._embedded?.['wp:term']?.[0];
  if (terms && terms.length > 0) {
    // Lấy slug của danh mục đầu tiên
    categorySlug = terms[0].slug;
  }

  // Chuẩn hóa slug danh mục từ WordPress khớp với cấu hình của hệ thống website
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

  // Định dạng ngày hiển thị (DD/MM/YYYY hoặc vi-VN)
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
  static async getAllNews(): Promise<NewsItem[]> {
    if (CMS_PROVIDER === 'MOCK') {
      return mockNews;
    }

    try {
      const data = await fetchWordPressREST('wp/v2/posts?_embed=true&per_page=100');
      if (Array.isArray(data) && data.length > 0) {
        return data.map(normalizeWpPost);
      }
    } catch (error) {
      console.error('Error fetching news from WordPress REST API:', error);
    }
    
    // Tự động fallback về mockNews để trang luôn tải nhanh tức thì
    return mockNews;
  }

  static async getNewsBySlug(slug: string): Promise<NewsItem | undefined> {
    if (CMS_PROVIDER === 'MOCK') {
      return mockNews.find(n => n.slug === slug);
    }

    try {
      const data = await fetchWordPressREST(`wp/v2/posts?slug=${slug}&_embed=true`);
      if (Array.isArray(data) && data.length > 0) {
        return normalizeWpPost(data[0]);
      }
    } catch (error) {
      console.error(`Error fetching news by slug (${slug}) from WordPress:`, error);
    }

    return mockNews.find(n => n.slug === slug);
  }
}
