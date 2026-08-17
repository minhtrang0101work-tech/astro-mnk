import { useEffect, useState, useTransition } from 'react';

export default function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState<'vi' | 'en' | 'zh'>('vi');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // Đọc cookie ngôn ngữ của trình duyệt (hỗ trợ cả locale và googtrans)
    const matchLocale = document.cookie.match(/(^| )locale=([^;]+)/);
    const matchGoog = document.cookie.match(/(^| )googtrans=([^;]+)/);

    if (matchLocale && ['vi', 'en', 'zh'].includes(matchLocale[2])) {
      setCurrentLocale(matchLocale[2] as 'vi' | 'en' | 'zh');
    } else if (matchGoog) {
      if (matchGoog[2].includes('zh')) setCurrentLocale('zh');
      else if (matchGoog[2].includes('en')) setCurrentLocale('en');
      else setCurrentLocale('vi');
    }
  }, []);

  const changeLocale = (locale: 'vi' | 'en' | 'zh') => {
    if (locale === currentLocale) return;

    // 1. Thiết lập cookie locale
    const domain = window.location.hostname;
    document.cookie = `locale=${locale}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;

    // 2. Thiết lập cookie googtrans cho bộ dịch tự động toàn trang
    let googLang = '/vi/vi';
    if (locale === 'en') googLang = '/vi/en';
    if (locale === 'zh') googLang = '/vi/zh-CN';

    document.cookie = `googtrans=${googLang}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
    document.cookie = `googtrans=${googLang}; path=/; domain=${domain}; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;

    setCurrentLocale(locale);

    // 3. Sử dụng startTransition và reload để áp dụng bản dịch ngay lập tức
    startTransition(() => {
      window.location.reload();
    });
  };

  return (
    <>
      {/* Hiệu ứng thanh tiến trình ở trên cùng khi đang tải ngôn ngữ */}
      {isPending && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3.5px',
          background: 'linear-gradient(90deg, var(--accent-color) 0%, var(--primary-color) 50%, var(--accent-color) 100%)',
          zIndex: 99999,
          animation: 'loading-bar-anim 1.2s infinite ease-in-out',
          transformOrigin: '0% 50%',
          boxShadow: '0 1px 10px rgba(225, 92, 30, 0.5)'
        }} />
      )}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes loading-bar-anim {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); opacity: 0; }
        }
      `}} />

      <div className="language-selector" style={{ display: 'flex', gap: '8px', alignItems: 'center', opacity: isPending ? 0.7 : 1, transition: 'opacity 0.2s' }}>
        {/* Tiếng Việt */}
        <button 
          onClick={() => changeLocale('vi')} 
          disabled={isPending}
          style={{
            background: currentLocale === 'vi' ? 'rgba(225, 92, 30, 0.08)' : 'transparent',
            border: currentLocale === 'vi' ? '1.5px solid var(--accent-color)' : '1.5px solid rgba(0, 0, 0, 0.1)',
            cursor: isPending ? 'not-allowed' : 'pointer',
            fontSize: '12px',
            fontWeight: 700,
            color: currentLocale === 'vi' ? 'var(--accent-color)' : 'var(--text-color)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '20px',
            boxShadow: currentLocale === 'vi' ? '0 2px 4px rgba(225, 92, 30, 0.15)' : 'none',
            transition: 'all 0.2s ease',
          }}
          title="Tiếng Việt"
        >
          <img 
            src="https://flagcdn.com/w40/vn.png" 
            alt="Việt Nam" 
            style={{ width: '18px', height: '12px', objectFit: 'cover', borderRadius: '1.5px', boxShadow: '0 1px 2px rgba(0,0,0,0.15)' }} 
          />
          <span>VI</span>
        </button>

        {/* English */}
        <button 
          onClick={() => changeLocale('en')} 
          disabled={isPending}
          style={{
            background: currentLocale === 'en' ? 'rgba(225, 92, 30, 0.08)' : 'transparent',
            border: currentLocale === 'en' ? '1.5px solid var(--accent-color)' : '1.5px solid rgba(0, 0, 0, 0.1)',
            cursor: isPending ? 'not-allowed' : 'pointer',
            fontSize: '12px',
            fontWeight: 700,
            color: currentLocale === 'en' ? 'var(--accent-color)' : 'var(--text-color)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '20px',
            boxShadow: currentLocale === 'en' ? '0 2px 4px rgba(225, 92, 30, 0.15)' : 'none',
            transition: 'all 0.2s ease',
          }}
          title="English"
        >
          <img 
            src="https://flagcdn.com/w40/gb.png" 
            alt="English" 
            style={{ width: '18px', height: '12px', objectFit: 'cover', borderRadius: '1.5px', boxShadow: '0 1px 2px rgba(0,0,0,0.15)' }} 
          />
          <span>EN</span>
        </button>

        {/* Chinese */}
        <button 
          onClick={() => changeLocale('zh')} 
          disabled={isPending}
          style={{
            background: currentLocale === 'zh' ? 'rgba(225, 92, 30, 0.08)' : 'transparent',
            border: currentLocale === 'zh' ? '1.5px solid var(--accent-color)' : '1.5px solid rgba(0, 0, 0, 0.1)',
            cursor: isPending ? 'not-allowed' : 'pointer',
            fontSize: '12px',
            fontWeight: 700,
            color: currentLocale === 'zh' ? 'var(--accent-color)' : 'var(--text-color)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '20px',
            boxShadow: currentLocale === 'zh' ? '0 2px 4px rgba(225, 92, 30, 0.15)' : 'none',
            transition: 'all 0.2s ease',
          }}
          title="中文"
        >
          <img 
            src="https://flagcdn.com/w40/cn.png" 
            alt="中文" 
            style={{ width: '18px', height: '12px', objectFit: 'cover', borderRadius: '1.5px', boxShadow: '0 1px 2px rgba(0,0,0,0.15)' }} 
          />
          <span>ZH</span>
        </button>
      </div>
    </>
  );
}
