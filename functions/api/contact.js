export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const sheetApiUrl = context.env.GOOGLE_SHEET_API_URL || '';

    // 1. Honeypot check
    if (body.website_url && body.website_url.trim() !== '') {
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

    // 3. Forward to Google Sheets if configured
    if (sheetApiUrl) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        await fetch(sheetApiUrl, {
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
      } catch (fetchErr) {
        console.warn('Google Sheets forward error:', fetchErr);
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
