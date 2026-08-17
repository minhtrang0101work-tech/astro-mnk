const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || '';

export async function fetchWordPressREST(endpoint: string, options: RequestInit = {}) {
  if (!WORDPRESS_API_URL) return null;

  const url = `${WORDPRESS_API_URL}/${endpoint}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

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
  } catch (error) {
    console.warn(`WordPress REST API fetch error (${url}):`, error);
    return null;
  }
}
