export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <div className="cta-content">
          <h2>BẠN CẦN TƯ VẤN HỆ THỐNG KHÍ NÉN?</h2>
          <p>
            Đội ngũ kỹ sư của Khải Nguyên sẵn sàng hỗ trợ khảo sát và tư vấn hệ thống tối ưu nhất cho nhà{'\u00a0'}máy của bạn.
          </p>
        </div>
        <a href="/lien-he" className="btn btn-primary btn-lg" data-astro-prefetch="hover">
          LIÊN HỆ NGAY <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}
