'use client';

import { useState, useRef, useEffect } from 'react';

interface ProductDescriptionProps {
  description: string;
  specs?: { [key: string]: string };
  locale?: string;
}

export default function ProductDescription({ description, specs, locale = 'vi' }: ProductDescriptionProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>('none');
  const [isMobile, setIsMobile] = useState(false);

  const isEn = locale === 'en';
  const isZh = locale === 'zh';

  const titleText = isEn ? 'Detailed Product Description' : isZh ? '产品详细说明与技术规格' : 'Mô tả chi tiết sản phẩm';
  const specsHeader = isEn ? 'Technical Specifications' : isZh ? '主要技术参数' : 'Thông số kỹ thuật sản phẩm';
  const expandText = isEn ? 'Read More Details' : isZh ? '展开查看更多' : 'Xem thêm chi tiết';
  const collapseText = isEn ? 'Collapse Details' : isZh ? '收起内容' : 'Rút gọn nội dung';

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      const actualHeight = contentRef.current.scrollHeight;
      const threshold = isMobile ? 220 : 320;
      if (actualHeight > threshold) {
        setShowButton(true);
        setIsCollapsed(true);
      } else {
        setShowButton(false);
        setIsCollapsed(false);
      }
    }
  }, [description, specs, isMobile]);

  useEffect(() => {
    if (contentRef.current) {
      if (showButton) {
        const collapsedHeight = isMobile ? '220px' : '300px';
        setMaxHeight(isCollapsed ? collapsedHeight : `${contentRef.current.scrollHeight + 50}px`);
      } else {
        setMaxHeight('none');
      }
    }
  }, [isCollapsed, showButton, isMobile]);

  const hasSpecs = specs && Object.keys(specs).length > 0;

  return (
    <div className="product-description-container">
      <h3 className="specs-title" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '18px' }}>
        {titleText}
      </h3>
      
      <div className="product-description-wrapper" style={{ position: 'relative' }}>
        <div 
          ref={contentRef}
          className={`product-description-content ${isCollapsed ? 'collapsed' : ''}`} 
          style={{ 
            maxHeight: maxHeight, 
            overflow: 'hidden', 
            transition: 'max-height 0.4s ease-in-out',
            position: 'relative'
          }}
        >
          {/* Main Description HTML */}
          <div 
            style={{ lineHeight: '1.8', fontSize: '15px', color: 'var(--text-color)', marginBottom: '20px' }} 
            dangerouslySetInnerHTML={{ __html: description }} 
          />

          {/* Technical Specs Table - Temporarily hidden as requested */}
          {/* hasSpecs && (
            <div style={{ marginTop: '25px', marginBottom: '20px' }}>
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '12px' }}>
                {specsHeader}
              </h4>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14.5px', border: '1px solid #e2e8f0' }}>
                  <tbody>
                    {Object.entries(specs!).map(([key, val], idx) => (
                      <tr key={key} style={{ backgroundColor: idx % 2 === 0 ? '#f8fafc' : '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
                        <td style={{ padding: '10px 14px', fontWeight: 600, color: 'var(--text-dark)', width: '38%', borderRight: '1px solid #e2e8f0' }}>
                          {key}
                        </td>
                        <td style={{ padding: '10px 14px', color: 'var(--text-color)' }}>
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) */}

          {/* Gradient Fade Overlay when collapsed */}
          {showButton && isCollapsed && (
            <div 
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '90px',
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.95) 80%, rgba(255, 255, 255, 1) 100%)',
                pointerEvents: 'none'
              }}
            />
          )}
        </div>
        
        {/* Toggle Expand / Collapse Button */}
        {showButton && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
            <button 
              type="button"
              className="desc-toggle-btn"
              onClick={() => {
                if (!isCollapsed) {
                  const elem = document.querySelector('.specs-title');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                setIsCollapsed(!isCollapsed);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 24px',
                backgroundColor: '#f1f5f9',
                color: 'var(--primary-color)',
                border: '1px solid #cbd5e1',
                borderRadius: '30px',
                fontSize: '14.5px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f1f5f9';
                e.currentTarget.style.color = 'var(--primary-color)';
              }}
            >
              {isCollapsed ? (
                <>
                  <span>{expandText}</span>
                  <i className="fas fa-chevron-down" style={{ fontSize: '13px' }}></i>
                </>
              ) : (
                <>
                  <span>{collapseText}</span>
                  <i className="fas fa-chevron-up" style={{ fontSize: '13px' }}></i>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
