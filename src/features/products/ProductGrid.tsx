import { useState, useEffect } from 'react';
import type { Product } from '@/types';
import ProductCard from './ProductCard';
import { removeAccents } from '@/lib/utils';

interface ProductGridProps {
  products: Product[];
  searchQuery?: string;
  locale?: string;
}

const PAGE_SIZE = 12;

export default function ProductGrid({ products: initialProducts, searchQuery: initialSearch, locale = 'vi' }: ProductGridProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState(initialSearch || '');

  const isEn = locale === 'en';
  const isZh = locale === 'zh';
  const prefix = isEn ? '/en' : isZh ? '/zh' : '';

  // Handle URL filters and query params
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get('search') || params.get('q') || '';
    const catParam = params.get('category') || '';
    const sortParam = params.get('sort') || 'newest';
    const pageParam = parseInt(params.get('page') || '1', 10);

    if (!isNaN(pageParam) && pageParam > 0) {
      setCurrentPage(pageParam);
    } else {
      setCurrentPage(1);
    }

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
      filtered.sort((a, b) => a.title.localeCompare(b.title, locale));
    } else if (sortParam === 'name-desc') {
      filtered.sort((a, b) => b.title.localeCompare(a.title, locale));
    }

    setFilteredProducts(filtered);
  }, [initialProducts, locale]);

  // Calculate pagination
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);
  const validCurrentPage = Math.min(Math.max(currentPage, 1), Math.max(totalPages, 1));
  
  const startIndex = (validCurrentPage - 1) * PAGE_SIZE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + PAGE_SIZE);

  const handlePageChange = (page: number, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (page < 1 || page > totalPages || page === validCurrentPage) return;

    setCurrentPage(page);

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      params.set('page', page.toString());
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({ path: newUrl }, '', newUrl);

      // Smooth scroll to top of product grid
      const gridElem = document.querySelector('.product-listing-header') || document.querySelector('.products-main');
      if (gridElem) {
        gridElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  if (totalItems === 0) {
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

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <div className="products-grid">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} locale={locale} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination" style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
          {validCurrentPage > 1 && (
            <button
              onClick={(e) => handlePageChange(validCurrentPage - 1, e)}
              className="pagination-item"
              style={{ cursor: 'pointer', border: '1px solid #ddd', background: '#fff', borderRadius: '4px', minWidth: '40px', height: '40px' }}
              aria-label="Previous Page"
            >
              &laquo;
            </button>
          )}

          {pages.map(page => {
            const isActive = page === validCurrentPage;
            return (
              <button
                key={page}
                onClick={(e) => handlePageChange(page, e)}
                className={`pagination-item ${isActive ? 'active' : ''}`}
                style={{ 
                  cursor: 'pointer', 
                  border: isActive ? 'none' : '1px solid #ddd', 
                  backgroundColor: isActive ? 'var(--primary-color)' : '#fff', 
                  color: isActive ? '#fff' : 'var(--text-dark)',
                  fontWeight: isActive ? '700' : '500',
                  borderRadius: '4px', 
                  minWidth: '40px', 
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '15px'
                }}
              >
                {page}
              </button>
            );
          })}

          {validCurrentPage < totalPages && (
            <button
              onClick={(e) => handlePageChange(validCurrentPage + 1, e)}
              className="pagination-item"
              style={{ cursor: 'pointer', border: '1px solid #ddd', background: '#fff', borderRadius: '4px', minWidth: '40px', height: '40px' }}
              aria-label="Next Page"
            >
              &raquo;
            </button>
          )}
        </div>
      )}
    </>
  );
}
