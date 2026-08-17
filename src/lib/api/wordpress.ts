const WORDPRESS_API_URL = (import.meta.env.WORDPRESS_API_URL || process.env.WORDPRESS_API_URL || '').replace(/\/+$/, '');

export async function fetchWordPressREST(endpoint: string, options: RequestInit = {}) {
  if (!WORDPRESS_API_URL) return null;

  let baseUrl = WORDPRESS_API_URL;
  let cleanEndpoint = endpoint.replace(/^\/+/, '');

  // Tự động chuẩn hóa URL linh hoạt
  if (!baseUrl.includes('/wp-json')) {
    baseUrl = `${baseUrl}/wp-json`;
  }
  
  if (baseUrl.endsWith('/wp/v2') && cleanEndpoint.startsWith('wp/v2/')) {
    cleanEndpoint = cleanEndpoint.replace(/^wp\/v2\//, '');
  }

  const url = `${baseUrl}/${cleanEndpoint}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        ...options.headers,
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn(`WordPress REST API non-200 response: ${res.status} ${res.statusText} (${url})`);
      return null;
    }

    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      console.warn(`WordPress API response is not valid JSON from URL: ${url}`);
      return null;
    }
  } catch (error) {
    console.warn(`WordPress REST API fetch error (${url}):`, error);
    return null;
  }
}
