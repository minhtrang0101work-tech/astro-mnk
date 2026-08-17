'use client';

import { useState, useEffect } from 'react';
import type { Product } from '@/types';
import ProductCard from '@/features/products/ProductCard';

interface RandomProductsProps {
  products: Product[];
  locale: string;
}

export default function RandomProducts({ products, locale }: RandomProductsProps) {
  const [randomized, setRandomized] = useState<Product[]>([]);

  useEffect(() => {
    if (!products || products.length === 0) return;

    // Shuffle the products list using Fisher-Yates algorithm
    const shuffled = [...products];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Select the first 4 products
    setRandomized(shuffled.slice(0, 4));
  }, [products]);

  // Fallback default render (first 4 products) for server-side pre-rendering
  const displayProducts = randomized.length > 0 ? randomized : products.slice(0, 4);

  return (
    <div style={{ marginTop: '40px' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .random-parts-grid {
          display: grid;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .random-parts-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 767px) and (min-width: 480px) {
          .random-parts-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 479px) {
          .random-parts-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
      `}} />
      <h3 style={{ fontSize: '18px', color: 'var(--text-dark)', marginBottom: '20px', fontWeight: 700 }}>
        ⚙️ {locale === 'vi' 
          ? 'Linh kiện, phụ tùng máy nén khí tiêu biểu:' 
          : locale === 'zh' 
          ? '代表性空压机零配件与耗材:' 
          : 'Featured Air Compressor Parts:'}
      </h3>
      <div className="random-parts-grid">
        {displayProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
