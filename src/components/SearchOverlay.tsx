import { useState, useEffect, useRef } from 'react';

export default function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [lang, setLang] = useState('vi');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      // Đọc cookie ngôn ngữ mỗi khi mở khung tìm kiếm
      const match = document.cookie.match(/(^| )locale=([^;]+)/);
      if (match && ['vi', 'en', 'zh'].includes(match[2])) {
        setLang(match[2]);
      }
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    };

    window.addEventListener('open-search', handleOpen);
    return () => {
      window.removeEventListener('open-search', handleOpen);
    };
  }, []);

  const closeSearch = () => {
    setIsOpen(false);
    setQuery('');
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    
    closeSearch();
    window.location.href = `/san-pham?search=${encodeURIComponent(trimmed)}`;
  };

  const handleSuggestionClick = (suggestion: string) => {
    closeSearch();
    window.location.href = `/san-pham?search=${encodeURIComponent(suggestion)}`;
  };

  if (!isOpen) return null;

  const isEn = lang === 'en';
  const isZh = lang === 'zh';

  const title = isEn ? 'SEARCH PRODUCTS' : isZh ? '产品搜索' : 'TÌM KIẾM SẢN PHẨM';
  const placeholder = isEn ? 'Enter keywords (oil filter, compressor oil, valve...)...' : isZh ? '输入关键词 (油滤、空压机油、电磁阀...)...' : 'Nhập từ khóa tìm kiếm (lọc dầu, dầu máy, van...)...';
  const submitText = isEn ? 'Search' : isZh ? '搜索' : 'Tìm kiếm';
  const suggestText = isEn ? 'Suggestions:' : isZh ? '热门推荐:' : 'Gợi ý:';

  return (
    <div 
      className="search-overlay active" 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeSearch();
        }
      }}
    >
      <button className="search-close" onClick={closeSearch} aria-label="Close search">&times;</button>
      <div className="search-container">
        <h2>{title}</h2>
        <form className="search-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder} 
            autoComplete="off" 
            required 
          />
          <button type="submit" className="search-submit-btn"><i className="fas fa-search"></i> {submitText}</button>
        </form>
        <div className="search-suggestions">
          <span>{suggestText}</span>
          <button className="suggest-tag-btn" onClick={() => handleSuggestionClick('Lọc dầu')}>Lọc dầu</button>
          <button className="suggest-tag-btn" onClick={() => handleSuggestionClick('Lọc gió')}>Lọc gió</button>
          <button className="suggest-tag-btn" onClick={() => handleSuggestionClick('Lọc tách dầu')}>Lọc tách dầu</button>
          <button className="suggest-tag-btn" onClick={() => handleSuggestionClick('Dầu máy nén khí')}>Dầu máy</button>
          <button className="suggest-tag-btn" onClick={() => handleSuggestionClick('Van điện từ')}>Van điện từ</button>
        </div>
      </div>
    </div>
  );
}
