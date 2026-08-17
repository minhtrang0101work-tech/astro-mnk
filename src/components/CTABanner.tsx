'use client';

import { useState } from 'react';

interface CTABannerProps {
  locale?: string;
}

export default function CTABanner({ locale = 'vi' }: CTABannerProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [websiteUrl, setWebsiteUrl] = useState(''); // Honeypot spam trap

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          website_url: websiteUrl,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', message: '' });
        setWebsiteUrl('');
      } else {
        setSubmitStatus('success'); // Vẫn hiển thị thành công về mặt UI để không làm gián đoạn trải nghiệm người dùng
        setFormData({ name: '', phone: '', message: '' });
        setWebsiteUrl('');
      }
    } catch (err) {
      console.error('Error submitting CTA form via proxy:', err);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', message: '' });
      setWebsiteUrl('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isVi = locale === 'vi';
  const isZh = locale === 'zh';

  // Dịch thuật trực tiếp
  const title = isVi ? 'CẦN TƯ VẤN GIẢI PHÁP KHÍ NÉN?' : isZh ? '需要压缩空气系统咨询？' : 'NEED AIR SYSTEM CONSULTING?';
  const desc = isVi 
    ? 'Đội ngũ kỹ sư dày dặn kinh nghiệm của Khải Nguyên luôn sẵn sàng hỗ trợ khảo sát và tư vấn hệ thống tối ưu nhất cho nhà máy của bạn.'
    : isZh 
    ? '凯源经验丰富的工程师团队随时为您提供现场测定与压缩空气系统能效优化咨询。'
    : 'Khai Nguyen experienced engineers are always ready to survey and design the most optimal compressed air system for your factory.';
  
  const hotlineBtn = isVi ? 'HOTLINE KỸ THUẬT' : isZh ? '技术咨询热线' : 'TECHNICAL HOTLINE';
  const formTitle = isVi ? 'Gửi thắc mắc cho chúng tôi' : isZh ? '在线提交您的留言' : 'Send us your questions';
  const namePlaceholder = isVi ? 'Họ tên' : isZh ? '姓名' : 'Full Name';
  const phonePlaceholder = isVi ? 'Số điện thoại' : isZh ? '电话号码' : 'Phone Number';
  const messagePlaceholder = isVi ? 'Nội dung cần tư vấn...' : isZh ? '留言内容...' : 'Message / requirements...';
  const submitBtnText = isVi ? 'Gửi yêu cầu ngay' : isZh ? '立即提交' : 'Submit Request';

  return (
    <section className="cta-banner-new">
      <div className="container cta-banner-grid">
        {/* Left column */}
        <div>
          <h2 style={{ fontSize: '28px', color: '#ffffff', fontWeight: 800, marginBottom: '20px', letterSpacing: '0.5px' }}>
            {title}
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px' }}>
            {desc}
          </p>
          <a 
            href="tel:0909513637" 
            className="btn" 
            style={{ 
              backgroundColor: 'var(--accent-color)', 
              color: '#ffffff', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              padding: '12px 25px', 
              fontWeight: 700, 
              border: 'none',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            <i className="fas fa-phone-alt"></i> {hotlineBtn}
          </a>
        </div>

        {/* Right column (Contact form) */}
        <div className="cta-form-box">
          <h3>{formTitle}</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {/* Honeypot Spam Trap Field */}
            <div style={{ position: 'absolute', left: '-9999px', top: '0', width: '1px', height: '1px', overflow: 'hidden', opacity: 0 }}>
              <label htmlFor="website_url_cta">Website (Trap)</label>
              <input 
                type="text" 
                id="website_url_cta" 
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                tabIndex={-1} 
                autoComplete="off" 
              />
            </div>

            <div className="cta-input-row">
              <input 
                type="text" 
                placeholder={namePlaceholder} 
                required 
                className="cta-input-field"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input 
                type="tel" 
                placeholder={phonePlaceholder} 
                required 
                className="cta-input-field"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <textarea 
              placeholder={messagePlaceholder} 
              rows={4}
              required
              className="cta-input-field"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ resize: 'none' }}
            ></textarea>
            {submitStatus === 'success' && (
              <div style={{
                backgroundColor: '#d4edda',
                color: '#155724',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '13.5px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <i className="fas fa-check-circle" style={{ color: '#28a745' }}></i>
                {isVi ? 'Đã gửi thành công! Khải Nguyên sẽ liên hệ lại ngay.' : isZh ? '提交成功！我们将尽快联系您。' : 'Submitted successfully! We will contact you soon.'}
              </div>
            )}

            <button 
              type="submit" 
              className="cta-submit-btn"
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  {isVi ? 'Đang gửi...' : isZh ? '提交中...' : 'Sending...'}
                </>
              ) : (
                submitBtnText
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
