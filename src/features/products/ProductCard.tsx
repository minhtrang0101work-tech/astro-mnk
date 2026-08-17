import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  locale?: string;
}

export default function ProductCard({ product, locale = 'vi' }: ProductCardProps) {
  const isEn = locale === 'en';
  const isZh = locale === 'zh';

  // Determine badge
  let badgeText = '';
  let badgeClass = '';

  if (product.isBestSeller) {
    badgeText = isEn ? 'Best Seller' : isZh ? '热销' : 'Bán chạy';
    badgeClass = 'badge-hot';
  } else if (product.isHot) {
    badgeText = isEn ? 'Energy Saving' : isZh ? '节能' : 'Tiết kiệm điện';
    badgeClass = 'badge-new';
  } else if (product.isNew) {
    badgeText = isEn ? 'New' : isZh ? '新品' : 'Mới';
    badgeClass = '';
  }

  const prefix = isEn ? '/en' : isZh ? '/zh' : '';
  const detailUrl = `${prefix}/san-pham/${product.category}/${product.slug}`;
  const categoryUrl = `${prefix}/san-pham/${product.category}`;
  const contactUrl = `${prefix}/lien-he?product=${encodeURIComponent(product.title)}`;
  const btnText = isEn ? 'Request a Quote' : isZh ? '立即询价' : 'Liên hệ báo giá ngay';

  return (
    <div className="product-card">
      <div className="product-img">
        {badgeText && (
          <span className={`product-badge ${badgeClass}`}>{badgeText}</span>
        )}
        <a href={detailUrl} data-astro-prefetch="hover">
          <img 
            src={product.image} 
            alt={product.title} 
            width={400} 
            height={400}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </a>
      </div>
      <div className="product-body">
        <h3 style={{ marginBottom: '10px', flexGrow: 0 }}>
          <a href={detailUrl} data-astro-prefetch="hover">{product.title}</a>
        </h3>
        <div style={{ flexGrow: 1, marginBottom: '15px' }}>
          <a href={categoryUrl} className="product-card-category" data-astro-prefetch="hover">
            <i className="fas fa-tag"></i> {product.categoryName}
          </a>
        </div>
        <a href={contactUrl} className="product-card-btn" data-astro-prefetch="hover">
          {btnText}
        </a>
      </div>
    </div>
  );
}
