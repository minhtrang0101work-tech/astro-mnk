export interface Product {
  id: string;
  title: string;
  slug: string;
  category: string; // matches Category.slug
  categoryName: string;
  price: string; // e.g. "Liên hệ báo giá"
  image: string; // path under /assets/images/
  isNew?: boolean;
  isHot?: boolean;
  isBestSeller?: boolean;
  description: string; // narrative text
  metaDescription?: string; // SEO meta description (max 160 chars)
  specs?: { [key: string]: string }; // technical specifications
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: string; // e.g. "bao-tri", "cong-nghe", "du-an", "tu-van", "tin-tuc"
  date: string;
  rawDate?: string;
  image: string;
  description: string;
  content: string;
  // Hỗ trợ bản địa hóa đa ngôn ngữ (Tiếng Trung & Tiếng Anh)
  titleZh?: string;
  descriptionZh?: string;
  contentZh?: string;
  titleEn?: string;
  descriptionEn?: string;
  contentEn?: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}
