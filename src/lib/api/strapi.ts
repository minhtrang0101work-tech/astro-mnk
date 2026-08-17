const STRAPI_API_URL = process.env.STRAPI_API_URL || '';

export async function fetchStrapi(endpoint: string, options: RequestInit = {}) {
  if (!STRAPI_API_URL) return null;
  const res = await fetch(`${STRAPI_API_URL}/${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  if (!res.ok) throw new Error(`Strapi API error: ${res.statusText}`);
  return res.json();
}
