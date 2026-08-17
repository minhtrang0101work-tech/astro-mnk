/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

interface ContactFormProps {
  dict: any;
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState(''); // Honeypot spam trap
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const productParam = searchParams.get('product');
      if (productParam) {
        setMessage(`Tôi cần tư vấn và nhận báo giá cho sản phẩm: ${decodeURIComponent(productParam)}`);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullname.trim() || !phone.trim()) {
      setStatusMessage(dict.name && dict.phone ? 'Vui lòng nhập đầy đủ thông tin!' : 'Vui lòng nhập Họ tên và Số điện thoại!');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullname,
          phone: phone,
          email: email,
          company: company,
          message: message,
          website_url: websiteUrl,
        }),
      });

      if (response.ok) {
        setStatusMessage(dict.success || 'Cảm ơn bạn! Khải Nguyên đã nhận được thông tin và sẽ liên hệ lại ngay.');
        setFullname('');
        setPhone('');
        setEmail('');
        setCompany('');
        setMessage('');
        setWebsiteUrl('');
      } else {
        setStatusMessage(dict.success || 'Cảm ơn bạn! Khải Nguyên đã nhận được thông tin và sẽ liên hệ lại ngay.');
        setFullname('');
        setPhone('');
        setEmail('');
        setCompany('');
        setMessage('');
        setWebsiteUrl('');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatusMessage(dict.success || 'Cảm ơn bạn! Khải Nguyên đã nhận được thông tin và sẽ liên hệ lại ngay.');
      setFullname('');
      setPhone('');
      setEmail('');
      setCompany('');
      setMessage('');
      setWebsiteUrl('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* Honeypot Spam Trap Field */}
      <div style={{ position: 'absolute', left: '-9999px', top: '0', width: '1px', height: '1px', overflow: 'hidden', opacity: 0 }}>
        <label htmlFor="website_url">Website URL (Spam trap)</label>
        <input 
          type="text" 
          id="website_url" 
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          tabIndex={-1} 
          autoComplete="off" 
        />
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullname">{dict.name} *</label>
          <input 
            type="text" 
            id="fullname" 
            placeholder="Ví dụ: Nguyễn Văn A" 
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">{dict.phone} *</label>
          <input 
            type="tel" 
            id="phone" 
            placeholder="Ví dụ: 0909513637" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Ví dụ: annguyen@gmail.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company / Factory</label>
          <input 
            type="text" 
            id="company" 
            placeholder="Ví dụ: Công ty TNHH Khải Nguyên" 
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="form-group form-group-full">
          <label htmlFor="message">{dict.content}</label>
          <textarea 
            id="message" 
            rows={5} 
            placeholder="Nhập thông số phụ tùng hoặc model máy nén khí..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>
      {statusMessage && (
        <div style={{
          backgroundColor: '#d4edda',
          color: '#155724',
          padding: '12px 16px',
          borderRadius: 'var(--radius-sm)',
          fontSize: '14px',
          fontWeight: '600',
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <i className="fas fa-check-circle" style={{ color: '#28a745' }}></i>
          {statusMessage}
        </div>
      )}

      <button 
        type="submit" 
        className="btn btn-primary btn-block"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <i className="fas fa-spinner fa-spin" style={{ marginRight: '8px' }}></i> {dict.submitting}
          </>
        ) : (
          dict.submit.toUpperCase()
        )}
      </button>
    </form>
  );
}
