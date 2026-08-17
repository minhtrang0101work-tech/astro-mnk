/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  dict: any;
  locale?: 'vi' | 'en' | 'zh';
}

export default function Header({ dict, locale = 'vi' }: HeaderProps) {
  const [pathname, setPathname] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setPathname(window.location.pathname);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getUrl = (path: string) => {
    if (locale === 'en') {
      return path === '/' ? '/en' : `/en${path}`;
    }
    if (locale === 'zh') {
      return path === '/' ? '/zh' : `/zh${path}`;
    }
    return path;
  };

  const dropdownLinkStyle = isMobile ? {
    color: 'var(--text-dark)',
    fontSize: '14.5px',
    fontWeight: '600',
    padding: '6px 0',
    display: 'block',
    opacity: 1,
    visibility: 'visible' as const
  } : undefined;

  const triggerSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-search'));
  };

  const isActive = (path: string) => {
    const localized = getUrl(path);
    if (localized === '/' && (pathname === '/' || pathname === '')) return true;
    if (localized !== '/' && pathname.startsWith(localized)) return true;
    return false;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-info">
            <span><i className="fas fa-map-marker-alt"></i> 762a tổ 25, khu phố 5, Phường Long Bình, Biên Hòa, Đồng Nai</span>
          </div>
          <div className="top-bar-right" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className="top-bar-hotline">
              <a href="tel:0909513637">
                <i className="fas fa-phone-alt phone-ring"></i> {dict.common.hotline}: <span>0909 513 637</span>
              </a>
            </div>
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container header-container">
          <a href={getUrl('/')} className="logo" data-astro-prefetch="hover">
            <img src="/assets/images/logo.png" alt="Khải Nguyên Logo" />
            <span className="logo-text">Máy nén khí <span>Khải Nguyên</span></span>
          </a>
          
          <button 
            className="mobile-menu-toggle" 
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
              <a href={getUrl('/')} data-astro-prefetch="hover" onClick={() => setIsMobileMenuOpen(false)}>{dict.common.home}</a>
            </li>
            <li className={`nav-item ${isActive('/gioi-thieu') ? 'active' : ''}`}>
              <a href={getUrl('/gioi-thieu')} data-astro-prefetch="hover" onClick={() => setIsMobileMenuOpen(false)}>{dict.common.about}</a>
            </li>
            <li className={`nav-item dropdown ${isActive('/san-pham') ? 'active' : ''} ${isDropdownOpen ? 'active' : ''}`}>
              <a 
                href={getUrl('/san-pham')} 
                className="dropdown-trigger"
                data-astro-prefetch="hover"
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {dict.common.products} <i className="fas fa-chevron-down"></i>
              </a>
              <div 
                className="dropdown-menu mega-dropdown"
                style={isMobile ? {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  border: 'none',
                  opacity: 1,
                  visibility: 'visible',
                  display: isDropdownOpen ? 'flex' : 'none',
                  flexDirection: 'column',
                  padding: '10px 0 10px 15px',
                  position: 'static',
                  transform: 'none',
                  width: '100%',
                  gap: '12px'
                } : undefined}
              >
                <ul className="dropdown-column" style={isMobile ? { display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' } : undefined}>
                  <li><a href={getUrl('/san-pham/binh-chua-va-dau-may-nen-khi')} style={dropdownLinkStyle} onClick={() => setIsMobileMenuOpen(false)} data-astro-prefetch="hover">{dict.categories.airTankBlock}</a></li>
                  <li><a href={getUrl('/san-pham/bo-loc-va-tach-khi-nen')} style={dropdownLinkStyle} onClick={() => setIsMobileMenuOpen(false)} data-astro-prefetch="hover">{dict.categories.filterSeparator}</a></li>
                  <li><a href={getUrl('/san-pham/cam-bien-do-luong-dieu-khien')} style={dropdownLinkStyle} onClick={() => setIsMobileMenuOpen(false)} data-astro-prefetch="hover">{dict.categories.sensorControl}</a></li>
                  <li><a href={getUrl('/san-pham/dau-may-va-phu-tung-boi-tron')} style={dropdownLinkStyle} onClick={() => setIsMobileMenuOpen(false)} data-astro-prefetch="hover">{dict.categories.lubricationOil}</a></li>
                  <li><a href={getUrl('/san-pham/he-thong-cac-loai-van-khi-nen')} style={dropdownLinkStyle} onClick={() => setIsMobileMenuOpen(false)} data-astro-prefetch="hover">{dict.categories.valvesSystem}</a></li>
                </ul>
                <ul className="dropdown-column" style={isMobile ? { display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' } : undefined}>
                  <li><a href={getUrl('/san-pham/he-thong-giai-nhiet-va-lam-mat')} style={dropdownLinkStyle} onClick={() => setIsMobileMenuOpen(false)} data-astro-prefetch="hover">{dict.categories.coolingSystem}</a></li>
                  <li><a href={getUrl('/san-pham/luc-nen-co-khi-dong-co')} style={dropdownLinkStyle} onClick={() => setIsMobileMenuOpen(false)} data-astro-prefetch="hover">{dict.categories.mechanicalEngine}</a></li>
                  <li><a href={getUrl('/san-pham/ong-dan-day-phun-khop-noi')} style={dropdownLinkStyle} onClick={() => setIsMobileMenuOpen(false)} data-astro-prefetch="hover">{dict.categories.hosesConnectors}</a></li>
                  <li><a href={getUrl('/san-pham/thiet-bi-xu-ly-nuoc-va-am')} style={dropdownLinkStyle} onClick={() => setIsMobileMenuOpen(false)} data-astro-prefetch="hover">{dict.categories.waterTreatment}</a></li>
                  <li><a href={getUrl('/san-pham/truyen-dong-va-linh-kien-khac')} style={dropdownLinkStyle} onClick={() => setIsMobileMenuOpen(false)} data-astro-prefetch="hover">{dict.categories.transmissionOther}</a></li>
                  <li><a href={getUrl('/san-pham')} style={isMobile ? { fontWeight: 700, color: 'var(--accent-color)', fontSize: '14.5px', padding: '6px 0', display: 'block' } : { fontWeight: 700, color: 'var(--accent-color)' }} onClick={() => setIsMobileMenuOpen(false)} data-astro-prefetch="hover">{dict.common.allProducts} &raquo;</a></li>
                </ul>
              </div>
            </li>
            <li className={`nav-item ${isActive('/tin-tuc') ? 'active' : ''}`}>
              <a href={getUrl('/tin-tuc')} data-astro-prefetch="hover" onClick={() => setIsMobileMenuOpen(false)}>{dict.common.news}</a>
            </li>
            <li className={`nav-item ${isActive('/lien-he') ? 'active' : ''}`}>
              <a href={getUrl('/lien-he')} data-astro-prefetch="hover" onClick={() => setIsMobileMenuOpen(false)}>{dict.common.contact}</a>
            </li>
            <li className="nav-item mobile-only-lang" style={{ marginTop: '10px', paddingTop: '15px', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LanguageSwitcher currentLocale={locale} />
              </div>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '10px', 
                backgroundColor: 'rgba(255, 107, 0, 0.05)', 
                padding: '15px', 
                borderRadius: '8px',
                border: '1px dashed rgba(255, 107, 0, 0.2)'
              }}>
                <a href="tel:0909513637" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '700', color: 'var(--accent-color)', textDecoration: 'none' }}>
                  <i className="fas fa-phone-alt"></i> Hotline: 0909 513 637
                </a>
                <span style={{ fontSize: '12px', color: 'var(--text-light)', lineHeight: '1.4' }}>
                  <i className="fas fa-map-marker-alt"></i> 762a tổ 25, KP 5, P. Long Bình, Biên Hòa, Đồng Nai
                </span>
              </div>
            </li>
          </ul>

          <div className="header-actions">
            <button className="search-trigger" aria-label="Tìm kiếm" onClick={triggerSearch}>
              <i className="fas fa-search"></i>
            </button>
            <a href={getUrl('/lien-he')} className="btn btn-primary" data-astro-prefetch="hover">{dict.header.requestQuote}</a>
          </div>
        </div>
      </header>
    </>
  );
}
