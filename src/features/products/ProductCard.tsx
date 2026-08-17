import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Determine badge
  let badgeText = '';
  let badgeClass = '';

  if (product.isBestSeller) {
    badgeText = 'Bán chạy';
    badgeClass = 'badge-hot';
  } else if (product.isHot) {
    badgeText = 'Tiết kiệm điện';
    badgeClass = 'badge-new';
  } else if (product.isNew) {
    badgeText = 'Mới';
    badgeClass = '';
  }

  return (
    <div className="product-card">
      <div className="product-img">
        {badgeText && (
          <span className={`product-badge ${badgeClass}`}>{badgeText}</span>
        )}
        <a href={`/san-pham/${product.category}/${product.slug}`} data-astro-prefetch="hover">
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
          <a href={`/san-pham/${product.category}/${product.slug}`} data-astro-prefetch="hover">{product.title}</a>
        </h3>
        <div style={{ flexGrow: 1, marginBottom: '15px' }}>
          <a href={`/san-pham/${product.category}`} className="product-card-category" data-astro-prefetch="hover">
            <i className="fas fa-tag"></i> {product.categoryName}
          </a>
        </div>
        <a href={`/lien-he?product=${encodeURIComponent(product.title)}`} className="product-card-btn" data-astro-prefetch="hover">
          Liên hệ báo giá ngay
        </a>
      </div>
    </div>
  );
}
