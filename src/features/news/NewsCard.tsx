import type { NewsItem } from '@/types';

interface NewsCardProps {
  news: NewsItem;
  locale?: string;
}

export const categoryMap: { [key: string]: { vi: string; zh: string; en: string } } = {
  'bao-tri': { vi: 'Bảo trì', zh: '设备维护', en: 'Maintenance' },
  'cong-nghe': { vi: 'Công nghệ', zh: '核心技术', en: 'Technology' },
  'du-an': { vi: 'Dự án', zh: '工程案例', en: 'Projects' },
  'tu-van': { vi: 'Tư vấn', zh: '专业咨询', en: 'Consulting' },
  'tin-tuc': { vi: 'Tin tức', zh: '行业新闻', en: 'News' },
  'kien-thuc': { vi: 'Kiến thức', zh: '知识手册', en: 'Knowledge' },
  'ky-thuat': { vi: 'Kỹ thuật', zh: '技术指南', en: 'Technical' }
};

export default function NewsCard({ news, locale = 'vi' }: NewsCardProps) {
  const isZh = locale === 'zh';
  const isEn = locale === 'en';

  const catObj = categoryMap[news.category] || { vi: news.category, zh: news.category, en: news.category };
  const categoryName = (isZh ? catObj.zh : isEn ? catObj.en : catObj.vi).toUpperCase();

  const title = isZh ? (news.titleZh || news.title) : isEn ? (news.titleEn || news.title) : news.title;
  const description = isZh ? (news.descriptionZh || news.description) : isEn ? (news.descriptionEn || news.description) : news.description;
  const readMoreText = isZh ? '阅读全文' : isEn ? 'Read more' : 'Đọc thêm';

  return (
    <article className="news-card">
      <div className="news-img-container">
        <a href={`/tin-tuc/${news.category}/${news.slug}`} data-astro-prefetch="hover">
          <img src={news.image} alt={title} loading="lazy" decoding="async" />
        </a>
      </div>
      <div className="news-body">
        <div className="news-meta" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <a href={`/tin-tuc/${news.category}`} className="news-category" style={{ fontWeight: 700 }} data-astro-prefetch="hover">
            {categoryName}
          </a>
          <span className="news-date">
            {news.date}
          </span>
        </div>
        <h3>
          <a href={`/tin-tuc/${news.category}/${news.slug}`} data-astro-prefetch="hover">{title}</a>
        </h3>
        <p>{description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <a href={`/tin-tuc/${news.category}/${news.slug}`} className="news-readmore" data-astro-prefetch="hover">
            {readMoreText} <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
          </a>
          <button style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer', fontSize: '14px' }} aria-label="Bookmark">
            <i className="far fa-bookmark"></i>
          </button>
        </div>
      </div>
    </article>
  );
}
