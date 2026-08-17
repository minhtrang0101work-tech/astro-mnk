import { useState, useEffect } from 'react';
import type { Product } from '@/types';
import ProductCard from './ProductCard';
import { removeAccents } from '@/lib/utils';

interface ProductGridProps {
  products: Product[];
  searchQuery?: string;
  locale?: string;
}

export default function ProductGrid({ products: initialProducts, searchQuery: initialSearch, locale = 'vi' }: ProductGridProps) {
  const [displayProducts, setDisplayProducts] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState(initialSearch || '');

  const isEn = locale === 'en';
  const isZh = locale === 'zh';
  const prefix = isEn ? '/en' : isZh ? '/zh' : '';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get('search') || params.get('q') || '';
    const catParam = params.get('category') || '';
    const sortParam = params.get('sort') || 'newest';

    setSearchQuery(searchParam);

    let filtered = [...initialProducts];

    // 1. Search Query Filter
    if (searchParam) {
      const searchNormalized = removeAccents(searchParam.toLowerCase().trim());
      filtered = filtered.filter(p => {
        const titleNormalized = removeAccents((p.title || '').toLowerCase());
        const descNormalized = removeAccents((p.description || '').toLowerCase());
        const catNormalized = removeAccents((p.categoryName || '').toLowerCase());
        return (
          titleNormalized.includes(searchNormalized) ||
          descNormalized.includes(searchNormalized) ||
          catNormalized.includes(searchNormalized)
        );
      });
    }

    // 2. Category Checkboxes Filter
    if (catParam) {
      const categories = catParam.split(',');
      filtered = filtered.filter(p => categories.includes(p.category));
    }

    // 3. Sorting
    if (sortParam === 'name-asc') {
      filtered.sort((a, b) => a.title.localeCompare(b.title, 'vi'));
    } else if (sortParam === 'name-desc') {
      filtered.sort((a, b) => b.title.localeCompare(a.title, 'vi'));
    }

    setDisplayProducts(filtered);
  }, [initialProducts]);

  if (displayProducts.length === 0) {
    const notFoundTitle = isEn ? 'No products found' : isZh ? '未找到相关产品' : 'Không tìm thấy sản phẩm';
    const notFoundMsg = isEn 
      ? `No products matching ${searchQuery ? `"${searchQuery}"` : 'your criteria'}.`
      : isZh 
      ? `没有找到匹配关键词 ${searchQuery ? `"${searchQuery}"` : ''} 的产品。`
      : `Không tìm thấy sản phẩm nào khớp với từ khóa ${searchQuery ? `"${searchQuery}"` : 'yêu cầu'}.`;
    const viewAllText = isEn ? 'View all products' : isZh ? '查看所有产品' : 'Xem tất cả sản phẩm';

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
            {notFoundTitle}
          </h3>
          <p style={{ marginBottom: '20px', fontSize: '14.5px' }}>
            {notFoundMsg}
          </p>
          <a href={`${prefix}/san-pham`} className="btn btn-primary" style={{ padding: '10px 25px', fontSize: '14px', display: 'inline-block' }} data-astro-prefetch="hover">
            {viewAllText}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {displayProducts.map(product => (
        <ProductCard key={product.id} product={product} locale={locale} />
      ))}
    </div>
  );
}
