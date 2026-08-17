import { useEffect, useState } from 'react';

interface ProductSortProps {
  locale: string;
}

export default function ProductSort({ locale }: ProductSortProps) {
  const [activeSort, setActiveSort] = useState('newest');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const sort = params.get('sort');
      if (sort) {
        setActiveSort(sort);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setActiveSort(val);
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (val && val !== 'newest') {
        params.set('sort', val);
      } else {
        params.delete('sort');
      }
      window.location.href = `/san-pham?${params.toString()}`;
    }
  };

  const isEn = locale === 'en';
  const isZh = locale === 'zh';

  const labelText = isEn ? 'Sort by:' : isZh ? '排序:' : 'Sắp xếp:';
  const optNewest = isEn ? 'Newest' : isZh ? '最新' : 'Mới nhất';
  const optNameAsc = isEn ? 'Name A-Z' : isZh ? '名称 A-Z' : 'Tên A-Z';
  const optNameDesc = isEn ? 'Name Z-A' : isZh ? '名称 Z-A' : 'Tên Z-A';

  return (
    <div className="sort-selector">
      <label htmlFor="sort-products">{labelText}</label>
      <select id="sort-products" value={activeSort} onChange={handleChange}>
        <option value="newest">{optNewest}</option>
        <option value="name-asc">{optNameAsc}</option>
        <option value="name-desc">{optNameDesc}</option>
      </select>
    </div>
  );
}
