/* eslint-disable @typescript-eslint/no-explicit-any */
interface FooterProps {
  dict: any;
  locale?: 'vi' | 'en' | 'zh';
}

export default function Footer({ dict, locale = 'vi' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const getUrl = (path: string) => {
    if (locale === 'en') {
      return path === '/' ? '/en' : `/en${path}`;
    }
    if (locale === 'zh') {
      return path === '/' ? '/zh' : `/zh${path}`;
    }
    return path;
  };

  const isEn = locale === 'en';
  const isZh = locale === 'zh';

  const keyServicesTitle = isEn ? 'Key Industrial Services' : isZh ? '重点工业服务' : 'Dịch Vụ Trọng Điểm';

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Column 1: About */}
        <div className="footer-col footer-about">
          <div className="footer-logo">
            <img src="/assets/images/logo.png" alt="Khải Nguyên Logo" />
            <span className="logo-text">Máy nén khí <span>Khải Nguyên</span></span>
          </div>
          <p className="footer-desc">
            {dict.footer.aboutText}
          </p>
          <div className="footer-socials">
            <a href="tel:0909513637" aria-label="Điện thoại"><i className="fas fa-phone-alt"></i></a>
            <a href="https://zalo.me/0909513637" target="_blank" rel="noopener noreferrer" aria-label="Zalo"><i className="fas fa-comments"></i></a>
            <a href="mailto:khainguyen209@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
          </div>
        </div>

        {/* Column 2: Key SEO Services */}
        <div className="footer-col">
          <h3>{keyServicesTitle}</h3>
          <ul className="footer-links">
            <li><a href={getUrl('/may-nen-khi-dong-nai')} data-astro-prefetch="hover">{isEn ? 'Dong Nai Air Compressor Store' : isZh ? '同奈空压机销售中心' : 'Cửa Hàng Máy Nén Khí Đồng Nai'}</a></li>
            <li><a href={getUrl('/linh-kien-may-nen-khi-dong-nai')} data-astro-prefetch="hover">{isEn ? 'Dong Nai Air Compressor Spare Parts' : isZh ? '同奈空压机配件中心' : 'Linh Kiện Máy Nén Khí Đồng Nai'}</a></li>
            <li><a href={getUrl('/linh-kien-may-nen-khi')} data-astro-prefetch="hover">{isEn ? 'Screw Compressor Spare Parts' : isZh ? '螺杆式空压机配件' : 'Phụ Tùng Máy Nén Khí Trục Vít'}</a></li>
            <li><a href={getUrl('/san-pham/may-nen-khi-cao-ap')} data-astro-prefetch="hover">{isEn ? 'High Pressure Compressors 30-40 Bar' : isZh ? '高压空压机 30-40 Bar' : 'Máy Nén Khí Cao Áp 30-40 Bar'}</a></li>
            <li><a href={getUrl('/sua-may-cong-nghiep')} data-astro-prefetch="hover">{isEn ? '24/7 Industrial Machine Repair' : isZh ? '24/7 工业设备维修' : 'Sửa Máy Công Nghiệp 24/7'}</a></li>
            <li><a href={getUrl('/bao-tri-may-cong-nghiep')} data-astro-prefetch="hover">{isEn ? 'Industrial Maintenance Services' : isZh ? '工业设备定期保养' : 'Bảo Trì Máy Công Nghiệp'}</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-col">
          <h3>{dict.footer.services}</h3>
          <ul className="footer-links">
            <li><a href={getUrl('/san-pham')} data-astro-prefetch="hover">{dict.footer.partsLink}</a></li>
            <li><a href={getUrl('/sua-chua-may-nen-khi')} data-astro-prefetch="hover">{dict.footer.repairLink}</a></li>
            <li><a href={getUrl('/tu-van-may-nen-khi')} data-astro-prefetch="hover">{dict.footer.consultingLink}</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-col">
          <h3>{dict.contact.info}</h3>
          <ul className="footer-contact-list">
            <li>
              <i className="fas fa-phone-alt" style={{ marginTop: '5px' }}></i>
              <div>
                <strong>{dict.common.hotline}:</strong><br />
                <a href="tel:0909513637" className="footer-contact-link">0909 513 637</a>
              </div>
            </li>
            <li>
              <i className="fas fa-envelope" style={{ marginTop: '5px' }}></i>
              <div>
                <strong>{dict.common.email}:</strong><br />
                <a href="mailto:khainguyen209@gmail.com" className="footer-contact-link">khainguyen209@gmail.com</a>
              </div>
            </li>
            <li>
              <i className="fas fa-map-marker-alt" style={{ marginTop: '5px' }}></i>
              <div>
                <strong>{dict.common.address}:</strong><br />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>762a tổ 25, khu phố 5, Phường Long Bình, Biên Hòa, Đồng Nai</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {currentYear} {dict.footer.allRightsReserved}</p>
          <div className="footer-bottom-links">
            <a href={getUrl('/chinh-sach-bao-mat')}>{dict.policies.privacy}</a>
            <a href={getUrl('/bao-hanh-va-sua-chua')}>{dict.policies.warranty}</a>
            <a href={getUrl('/chinh-sach-ban-buon')}>{dict.policies.wholesale}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
