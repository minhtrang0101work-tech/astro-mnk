'use client';

import { useState, useRef, useEffect } from 'react';

interface ProductDescriptionProps {
  description: string;
  specs?: { [key: string]: string };
}

export default function ProductDescription({ description, specs }: ProductDescriptionProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('none');
  const [isMobile, setIsMobile] = useState(false);

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
      const threshold = isMobile ? 400 : 550;
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
        const collapsedHeight = isMobile ? '320px' : '500px';
        setMaxHeight(isCollapsed ? collapsedHeight : `${contentRef.current.scrollHeight}px`);
      } else {
        setMaxHeight('none');
      }
    }
  }, [isCollapsed, showButton, isMobile]);

  return (
    <div>
      <h3 className="specs-title">Mô tả chi tiết sản phẩm</h3>
      <div className="product-description-wrapper">
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
          <div style={{ lineHeight: '1.8', marginBottom: '20px', fontSize: '15px' }} dangerouslySetInnerHTML={{ __html: description }} />
          
          {/* Tạm thời ẩn bảng thông số kỹ thuật theo yêu cầu khách hàng
          specs && Object.keys(specs).length > 0 && (
            <div style={{ marginTop: '25px' }}>
              <h4 style={{ fontSize: '17px', color: 'var(--primary-color)', fontWeight: '700', marginBottom: '15px' }}>
                Thông tin chi tiết
              </h4>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', fontSize: '14.5px' }}>
                <tbody>
                  {Object.entries(specs).map(([key, val], idx) => (
                    <tr key={key} style={{ backgroundColor: idx % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent' }}>
                      <td style={{ padding: '10px 15px', fontWeight: 'bold', borderBottom: '1px solid rgba(0,0,0,0.06)', width: '35%', color: 'var(--text-dark)' }}>{key}</td>
                      <td style={{ padding: '10px 15px', borderBottom: '1px solid rgba(0,0,0,0.06)', color: 'var(--text-light)' }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )*/}
        </div>
        
        {showButton && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
            <button 
              className="desc-toggle-btn"
              onClick={() => {
                if (!isCollapsed) {
                  // Cuộn nhẹ lên đầu phần mô tả khi thu gọn để tránh bị lạc hướng
                  contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                setIsCollapsed(!isCollapsed);
              }}
            >
              {isCollapsed ? (
                <>
                  Xem thêm chi tiết <i className="fas fa-chevron-down"></i>
                </>
              ) : (
                <>
                  Rút gọn nội dung <i className="fas fa-chevron-up"></i>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
