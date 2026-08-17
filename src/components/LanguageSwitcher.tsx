import { useEffect, useState, useTransition } from 'react';

interface LanguageSwitcherProps {
  currentLocale?: 'vi' | 'en' | 'zh';
}

export default function LanguageSwitcher({ currentLocale: propLocale }: LanguageSwitcherProps) {
  const [currentLocale, setCurrentLocale] = useState<'vi' | 'en' | 'zh'>(propLocale || 'vi');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname.startsWith('/en/') || pathname === '/en') {
        setCurrentLocale('en');
      } else if (pathname.startsWith('/zh/') || pathname === '/zh') {
        setCurrentLocale('zh');
      } else {
        setCurrentLocale('vi');
      }
    }
  }, [propLocale]);

  const switchLanguage = (targetLocale: 'vi' | 'en' | 'zh') => {
    if (targetLocale === currentLocale || typeof window === 'undefined') return;

    const pathname = window.location.pathname;
    const search = window.location.search;
    const hash = window.location.hash;

    // Remove existing locale prefix to get the clean base path
    let basePath = pathname;
    if (basePath.startsWith('/en/')) {
      basePath = basePath.replace(/^\/en/, '');
    } else if (basePath === '/en') {
      basePath = '/';
    } else if (basePath.startsWith('/zh/')) {
      basePath = basePath.replace(/^\/zh/, '');
    } else if (basePath === '/zh') {
      basePath = '/';
    }

    if (!basePath.startsWith('/')) {
      basePath = '/' + basePath;
    }

    let targetUrl = '';
    if (targetLocale === 'vi') {
      targetUrl = basePath;
    } else if (targetLocale === 'en') {
      targetUrl = basePath === '/' ? '/en' : `/en${basePath}`;
    } else if (targetLocale === 'zh') {
      targetUrl = basePath === '/' ? '/zh' : `/zh${basePath}`;
    }

    targetUrl += search + hash;

    startTransition(() => {
      window.location.href = targetUrl;
    });
  };

  return (
    <>
      {/* Hiệu ứng loading nhẹ nhàng khi chuyển trang */}
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
          onClick={() => switchLanguage('vi')} 
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
          onClick={() => switchLanguage('en')} 
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
          onClick={() => switchLanguage('zh')} 
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
