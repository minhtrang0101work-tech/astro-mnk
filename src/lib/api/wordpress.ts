const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || '';

export async function fetchWordPressREST(endpoint: string, options: RequestInit = {}) {
  if (!WORDPRESS_API_URL) return null;

  const url = `${WORDPRESS_API_URL}/${endpoint}`;

  try {
    // Tối ưu hóa: Giới hạn timeout 3 giây để tránh làm đơ website khi server WordPress ngủ hoặc chậm
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
      next: {
        revalidate: 3600, // Bộ nhớ đệm tĩnh ISR 1 giờ giúp tải trang tức thì (< 0.1s)
        ...options.next
      },
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        ...options.headers,
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn(`WordPress REST API non-200 response: ${res.status} ${res.statusText}`);
      return null;
    }

    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      console.warn(`WordPress API response is not valid JSON from URL: ${url}`);
      return null;
    }
  } catch (err: unknown) {
    if (err instanceof Error && err.name === 'AbortError') {
      console.warn(`WordPress API request timed out (3s limit) for URL: ${url}`);
    } else {
      console.warn(`WordPress API fetch error for URL ${url}:`, err);
    }
    return null;
  }
}
