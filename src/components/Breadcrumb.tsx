export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  title: string;
  items: BreadcrumbItem[];
  locale?: string;
}

export default function Breadcrumb({ title, items, locale = 'vi' }: BreadcrumbProps) {
  const homeLabel = locale === 'en' ? 'Home' : locale === 'zh' ? '首页' : 'Trang chủ';
  const homeUrl = locale === 'en' ? '/en' : locale === 'zh' ? '/zh' : '/';

  return (
    <div className="page-banner">
      <div className="container page-banner-container">
        <h1>{title}</h1>
        <div className="breadcrumbs">
          <a href={homeUrl} data-astro-prefetch="hover">{homeLabel}</a>
          {items.map((item, idx) => (
            <span key={idx}>
              <span style={{ margin: '0 8px', color: 'rgba(255,255,255,0.5)' }}>&raquo;</span>
              {item.href ? (
                <a href={item.href} data-astro-prefetch="hover">{item.label}</a>
              ) : (
                <span>{item.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
