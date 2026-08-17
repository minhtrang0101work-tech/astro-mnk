import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  searchQuery?: string;
}

export default function ProductGrid({ products, searchQuery }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="products-grid" style={{ display: 'block' }}>
        <div 
          className="no-results-msg" 
          style={{ 
            gridColumn: '1 / -1', 
            textAlign: 'center', 
            padding: '60px 20px', 
            color: 'var(--text-light)' 
          }}
        >
          <i 
            className="fas fa-search-minus" 
            style={{ 
              fontSize: '45px', 
              color: 'var(--accent-color)', 
              marginBottom: '20px', 
              display: 'block' 
            }}
          ></i>
          <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--text-dark)' }}>
            Không tìm thấy sản phẩm
          </h3>
          <p style={{ marginBottom: '20px', fontSize: '14.5px' }}>
            Không tìm thấy sản phẩm nào khớp với từ khóa {searchQuery ? `"${searchQuery}"` : 'yêu cầu'}.
          </p>
          <a href="/san-pham" className="btn btn-primary" style={{ padding: '10px 25px', fontSize: '14px', display: 'inline-block' }} data-astro-prefetch="hover">
            Xem tất cả sản phẩm
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
