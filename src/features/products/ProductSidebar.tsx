import { useState, useEffect } from 'react';
import type { Category } from '@/types';

interface ProductSidebarProps {
  categories: Category[];
  locale: string;
  selectedCategories?: string[];
}

export default function ProductSidebar({ categories, locale, selectedCategories = [] }: ProductSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSelected, setActiveSelected] = useState<string[]>(selectedCategories);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      if (catParam) {
        setActiveSelected(catParam.split(','));
      }
    }
  }, []);

  const handleCheckboxChange = (slug: string, checked: boolean) => {
    let newSelected = [...activeSelected];
    if (checked) {
      if (!newSelected.includes(slug)) {
        newSelected.push(slug);
      }
    } else {
      newSelected = newSelected.filter(s => s !== slug);
    }
    setActiveSelected(newSelected);

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (newSelected.length > 0) {
        params.set('category', newSelected.join(','));
      } else {
        params.delete('category');
      }
      params.delete('page');
      const basePath = locale === 'en' ? '/en/san-pham' : locale === 'zh' ? '/zh/san-pham' : '/san-pham';
      window.location.href = `${basePath}?${params.toString()}`;
    }
  };

  const getCategoryDisplayName = (name: string, slug: string) => {
    const isEn = locale === 'en';
    const isZh = locale === 'zh';
    switch (slug) {
      case 'binh-chua-va-dau-may-nen-khi':
        return isEn ? 'Air Receivers & Compressor Blocks' : isZh ? '储气罐及压缩机头' : name;
      case 'bo-loc-va-tach-khi-nen':
        return isEn ? 'Compressed Air Filters & Separators' : isZh ? '压缩空气过滤器及分离器' : name;
      case 'cam-bien-do-luong-dieu-khien':
        return isEn ? 'Sensors, Measuring & Control Devices' : isZh ? '传感器、测量与控制设备' : name;
      case 'dau-may-va-phu-tung-boi-tron':
        return isEn ? 'Lubricating Oil & Lubricants Parts' : isZh ? '润滑油及润滑配件' : name;
      case 'he-thong-cac-loai-van-khi-nen':
        return isEn ? 'Pneumatic & Air Compressor Valves' : isZh ? '气动与空气压缩机阀门系统' : name;
      case 'he-thong-giai-nhiet-va-lam-mat':
        return isEn ? 'Coolers & Cooling Systems' : isZh ? '散热器与冷却系统' : name;
      case 'luc-nen-co-khi-dong-co':
        return isEn ? 'Mechanical Components & Engines' : isZh ? '机械部件与发动机' : name;
      case 'ong-dan-day-phun-khop-noi':
        return isEn ? 'Pipes, Hoses & Connectors' : isZh ? '管道、软管与接头' : name;
      case 'thiet-bi-xu-ly-nuoc-va-am':
        return isEn ? 'Water & Moisture Treatment Equipment' : isZh ? '水与湿气处理设备' : name;
      case 'truyen-dong-va-linh-kien-khac':
        return isEn ? 'Transmission & Other Parts' : isZh ? '传动及其他零配件' : name;
      default:
        return name;
    }
  };

  const isEn = locale === 'en';
  const isZh = locale === 'zh';

  const filterTitle = isEn ? 'Search Filters' : isZh ? '搜索筛选' : 'Bộ lọc tìm kiếm';
  const catTitle = isEn ? 'Categories' : isZh ? '产品分类' : 'Danh mục';
  const supportTitle = isEn ? '24/7 Technical Support' : isZh ? '24/7 技术支持' : 'Hỗ trợ kỹ thuật 24/7';
  const supportDesc = isEn 
    ? 'Our experienced engineers are ready to consult optimal compressed air solutions.'
    : isZh 
    ? '凯源经验丰富的工程师团队随时待命为您提供最佳空气系统方案。'
    : 'Đội ngũ kỹ sư giàu kinh nghiệm sẵn sàng tư vấn giải pháp khí nén tối ưu nhất.';

  return (
    <aside className="product-sidebar">
      {/* Mobile Accordion Trigger Button */}
      <button 
        className="mobile-filter-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="trigger-left">
          <i className="fas fa-filter"></i> 
          <span>{isOpen ? (isEn ? 'CLOSE FILTERS' : isZh ? '关闭筛选' : 'ĐÓNG BỘ LỌC SẢN PHẨM') : (isEn ? 'PRODUCT FILTERS' : isZh ? '产品筛选' : 'BỘ LỌC SẢN PHẨM')}</span>
        </span>
        <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </button>

      {/* Collapsible Content Wrapper */}
      <div className={`sidebar-content-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-filter-box">
          <h3 className="filter-widget-title">{filterTitle}</h3>
          <h4 className="filter-section-title">{catTitle}</h4>
          <ul className="checkbox-list">
            {categories.map(cat => {
              const isChecked = activeSelected.includes(cat.slug);
              return (
                <li key={cat.id}>
                  <label className="checkbox-item">
                    <input 
                      type="checkbox" 
                      value={cat.slug}
                      checked={isChecked}
                      onChange={(e) => handleCheckboxChange(cat.slug, e.target.checked)}
                    />
                    <span>
                      {getCategoryDisplayName(cat.name, cat.slug)} 
                      <span className="count" style={{ color: 'var(--text-light)', fontWeight: 500, marginLeft: '4px' }}>
                        ({cat.count})
                      </span>
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="sidebar-support-card">
          <div className="sidebar-support-icon"><i className="fas fa-headset"></i></div>
          <h3>{supportTitle}</h3>
          <p>{supportDesc}</p>
          <a href="tel:0909513637" className="sidebar-support-link">
            0909 513 637 <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </aside>
  );
}
