'use client';

import { useState, useEffect } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [lang, setLang] = useState('vi');

  useEffect(() => {
    // Đọc cookie ngôn ngữ của trình duyệt
    const match = document.cookie.match(/(^| )locale=([^;]+)/);
    if (match && ['vi', 'en', 'zh'].includes(match[2])) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(match[2]);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const isEn = lang === 'en';
    const isZh = lang === 'zh';

    const successMessage = isEn 
      ? `Thank you! Email ${email} has been subscribed successfully.` 
      : isZh 
      ? `谢谢您！邮箱 ${email} 已成功订阅。` 
      : `Cám ơn bạn! Email ${email} đã được đăng ký nhận bản tin thành công.`;

    alert(successMessage);
    setEmail('');
  };

  const isEn = lang === 'en';
  const isZh = lang === 'zh';

  const placeholder = isEn ? 'Your email address' : isZh ? '您的电子邮箱' : 'Email của bạn';
  const btnText = isEn ? 'SUBSCRIBE NOW' : isZh ? '立即订阅' : 'ĐĂNG KÝ NGAY';

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder={placeholder} 
        required 
        aria-label="Email" 
        className="cta-input-field" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ 
          backgroundColor: 'var(--bg-light)', 
          border: '1px solid var(--border-color)', 
          color: 'var(--text-dark)', 
          marginBottom: '15px', 
          width: '100%', 
          padding: '12px 15px', 
          borderRadius: 'var(--radius-sm)' 
        }} 
      />
      <button 
        type="submit" 
        className="btn" 
        style={{ 
          width: '100%', 
          backgroundColor: 'var(--primary-color)', 
          color: '#ffffff', 
          border: 'none', 
          padding: '12px 15px', 
          borderRadius: 'var(--radius-sm)', 
          fontWeight: 700, 
          cursor: 'pointer', 
          transition: 'var(--transition-fast)' 
        }}
      >
        {btnText}
      </button>
    </form>
  );
}
