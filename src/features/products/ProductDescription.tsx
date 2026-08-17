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
  const [maxHeight, setMaxHeight] = useState('none');
  const [isMobile, setIsMobile] = useState(false);

  const isEn = locale === 'en';
  const isZh = locale === 'zh';

  const titleText = isEn ? 'Detailed Product Description' : isZh ? '产品详细说明与技术规格' : 'Mô tả chi tiết sản phẩm';
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
      <h3 className="specs-title">{titleText}</h3>
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
        </div>
        
        {showButton && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
            <button 
              className="desc-toggle-btn"
              onClick={() => {
                if (!isCollapsed) {
                  contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                setIsCollapsed(!isCollapsed);
              }}
            >
              {isCollapsed ? (
                <>
                  {expandText} <i className="fas fa-chevron-down"></i>
                </>
              ) : (
                <>
                  {collapseText} <i className="fas fa-chevron-up"></i>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
