import { useState, useEffect, useRef } from 'react';

export default function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [lang, setLang] = useState('vi');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      if (typeof window !== 'undefined') {
        const path = window.location.pathname;
        if (path.startsWith('/en')) {
          setLang('en');
        } else if (path.startsWith('/zh')) {
          setLang('zh');
        } else {
          setLang('vi');
        }
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

  const getSearchUrl = (q: string) => {
    let prefix = '';
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/en')) prefix = '/en';
      else if (path.startsWith('/zh')) prefix = '/zh';
    }
    return `${prefix}/san-pham?search=${encodeURIComponent(q)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    
    closeSearch();
    window.location.href = getSearchUrl(trimmed);
  };

  const handleSuggestionClick = (suggestion: string) => {
    closeSearch();
    window.location.href = getSearchUrl(suggestion);
  };

  if (!isOpen) return null;

  const isEn = lang === 'en';
  const isZh = lang === 'zh';

  const title = isEn ? 'SEARCH PRODUCTS' : isZh ? '产品搜索' : 'TÌM KIẾM SẢN PHẨM';
  const placeholder = isEn ? 'Enter keywords (oil filter, compressor oil, valve...)...' : isZh ? '输入关键词 (油滤、空压机油、电磁阀...)...' : 'Nhập từ khóa tìm kiếm (lọc dầu, dầu máy, van...)...';
  const submitText = isEn ? 'Search' : isZh ? '搜索' : 'Tìm kiếm';
  const suggestText = isEn ? 'Suggestions:' : isZh ? '热门推荐:' : 'Gợi ý:';

  const suggestions = isZh ? [
    { label: '机油滤清器', query: '油滤' },
    { label: '空气滤芯', query: '空滤' },
    { label: '油气分离芯', query: '油分' },
    { label: '空压机专用油', query: '油' },
    { label: '先导电磁阀', query: '电磁阀' }
  ] : isEn ? [
    { label: 'Oil Filter', query: 'oil filter' },
    { label: 'Air Filter', query: 'air filter' },
    { label: 'Oil Separator', query: 'separator' },
    { label: 'Compressor Oil', query: 'oil' },
    { label: 'Solenoid Valve', query: 'valve' }
  ] : [
    { label: 'Lọc dầu', query: 'Lọc dầu' },
    { label: 'Lọc gió', query: 'Lọc gió' },
    { label: 'Lọc tách dầu', query: 'Lọc tách dầu' },
    { label: 'Dầu máy', query: 'Dầu máy nén khí' },
    { label: 'Van điện từ', query: 'Van điện từ' }
  ];

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
          {suggestions.map((s, idx) => (
            <button 
              key={idx} 
              className="suggest-tag-btn" 
              onClick={() => handleSuggestionClick(s.query)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
