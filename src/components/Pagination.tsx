interface PaginationProps {
  total: number;
  limit: number;
  currentPage: number;
  baseUrl?: string;
}

export default function Pagination({ total, limit, currentPage, baseUrl = '/san-pham' }: PaginationProps) {
  const totalPages = Math.ceil(total / limit);
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getPageUrl = (pageNumber: number) => {
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}page=${pageNumber}`;
  };

  return (
    <div className="pagination">
      {pages.map(page => {
        const isActive = page === currentPage;
        return (
          <a 
            key={page} 
            href={getPageUrl(page)}
            className={`pagination-item ${isActive ? 'active' : ''}`}
            data-astro-prefetch="hover"
          >
            {page}
          </a>
        );
      })}
    </div>
  );
}
