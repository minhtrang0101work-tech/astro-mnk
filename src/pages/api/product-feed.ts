export const prerender = false;

import type { APIRoute } from 'astro';
import { ProductRepository } from '@/repositories/product.repository';

function escapeXml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function cleanDescription(html: string): string {
  if (!html) return '';
  const text = html.replace(/<[^>]*>/g, ' ');
  const cleanText = text.replace(/\s+/g, ' ').trim();
  return escapeXml(cleanText);
}

export const GET: APIRoute = async () => {
  try {
    const products = await ProductRepository.getAllProducts();
    let itemsXml = '';

    for (const product of products) {
      const id = escapeXml(product.id);
      const title = escapeXml(product.title);
      const description = cleanDescription(product.description || product.title);
      const link = escapeXml(`https://maynenkhikhainguyen.com/san-pham/${product.category}/${product.slug}`);
      
      let imageLink = '';
      if (product.image.startsWith('http')) {
        let wpHostname = '';
        const wpApiUrl = (import.meta.env.WORDPRESS_API_URL || process.env.WORDPRESS_API_URL) as string;
        if (wpApiUrl) {
          try {
            wpHostname = new URL(wpApiUrl).hostname;
          } catch (e) {}
        }
        
        const isExternal = 
          product.image.includes('pantheonsite.io') || 
          product.image.includes('lovestoblog.com') ||
          (wpHostname && product.image.includes(wpHostname));

        if (isExternal) {
          imageLink = escapeXml(`https://maynenkhikhainguyen.com/api/product-image?url=${encodeURIComponent(product.image)}`);
        } else {
          imageLink = escapeXml(product.image);
        }
      } else {
        imageLink = escapeXml(`https://maynenkhikhainguyen.com${product.image}`);
      }
      
      const condition = 'new';
      
      let availability = 'in_stock';
      const availSpec = product.specs?.['Khả dụng'] || '';
      if (availSpec.toLowerCase().includes('hết hàng') || availSpec.toLowerCase().includes('out_of_stock')) {
        availability = 'out_of_stock';
      }
      
      let priceVal = 3000000;
      if (product.price && product.price !== 'Liên hệ báo giá') {
        const numbersOnly = product.price.replace(/[^0-9]/g, '');
        if (numbersOnly) {
          priceVal = parseInt(numbersOnly, 10);
        }
      }
      const price = `${priceVal} VND`;
      const brand = escapeXml(product.specs?.['Thương hiệu'] || 'Khải Nguyên');
      
      let gpc = '2843';
      const titleLower = product.title.toLowerCase();
      if (titleLower.includes('máy nén khí') && !titleLower.includes('phụ tùng') && !titleLower.includes('lọc') && !titleLower.includes('dầu') && !titleLower.includes('két') && !titleLower.includes('van')) {
        gpc = '2842';
      }
      const googleProductCategory = gpc;

      itemsXml += `    <item>
      <g:id>${id}</g:id>
      <title>${title}</title>
      <description>${description}</description>
      <link>${link}</link>
      <g:image_link>${imageLink}</g:image_link>
      <g:condition>${condition}</g:condition>
      <g:availability>${availability}</g:availability>
      <g:price>${price}</g:price>
      <g:brand>${brand}</g:brand>
      <g:google_product_category>${googleProductCategory}</g:google_product_category>
    </item>\n`;
    }

    const xml = `<?xml version="1.0"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Máy nén khí Khải Nguyên Product Feed</title>
    <link>https://maynenkhikhainguyen.com</link>
    <description>Danh sách sản phẩm phụ tùng máy nén khí Khải Nguyên</description>
${itemsXml}  </channel>
</rss>`;

    return new Response(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Error generating Google Merchant product feed:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
