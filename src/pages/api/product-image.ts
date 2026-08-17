export const prerender = false;

import type { APIRoute } from 'astro';

const ALLOWED_DOMAINS = [
  'dev-maynenkhikhainguyen.pantheonsite.io',
  'maynenkhikhainguyen.lovestoblog.com',
  'pantheonsite.io',
  'lovestoblog.com'
];

export const GET: APIRoute = async ({ request }) => {
  try {
    const { searchParams } = new URL(request.url);
    const imageUrl = searchParams.get('url');

    if (!imageUrl) {
      return new Response('Missing image URL parameter', { status: 400 });
    }

    let parsedUrl: URL;
    try {
      parsedUrl = new URL(imageUrl);
    } catch {
      return new Response('Invalid image URL format', { status: 400 });
    }

    if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
      return new Response('Unsupported protocol', { status: 400 });
    }

    const isDomainAllowed = ALLOWED_DOMAINS.some(domain => 
      parsedUrl.hostname === domain || parsedUrl.hostname.endsWith('.' + domain)
    );

    if (!isDomainAllowed) {
      console.warn(`Blocked image proxy request for unauthorized domain: ${parsedUrl.hostname}`);
      return new Response('Unauthorized domain', { status: 403 });
    }

    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    if (!response.ok) {
      return new Response('Failed to fetch image', { status: response.status });
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    
    if (!contentType.startsWith('image/')) {
      return new Response('Requested URL is not an image', { status: 400 });
    }

    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error in product image proxy route:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
