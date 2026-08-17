export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const sheetApiUrl = (import.meta.env.GOOGLE_SHEET_API_URL || process.env.GOOGLE_SHEET_API_URL) as string;

    if (!sheetApiUrl) {
      console.warn('Missing GOOGLE_SHEET_API_URL environment variable');
    }

    // 1. Honeypot check
    if (body.website_url && body.website_url.trim() !== '') {
      console.warn('Spam detected via Honeypot field:', body.website_url);
      return new Response(JSON.stringify({ success: true, message: 'Spam filtered successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { name, phone, email, company, message } = body;

    // 2. Server-side validation
    if (!name || !name.trim() || !phone || !phone.trim()) {
      return new Response(JSON.stringify({ error: 'Họ tên và Số điện thoại là bắt buộc' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 3. Forward data to Google Sheets
    if (sheetApiUrl) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const response = await fetch(sheetApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            name: name.trim(),
            phone: phone.trim(),
            email: (email || '').trim(),
            company: (company || '').trim(),
            message: (message || '').trim(),
          }).toString(),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          console.error('Google Sheets Apps Script error status:', response.status);
        }
      } catch (fetchErr) {
        console.warn('Google Sheets forward notice:', fetchErr);
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in contact API endpoint:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
