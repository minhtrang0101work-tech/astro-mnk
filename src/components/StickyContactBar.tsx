import React from 'react';

export default function StickyContactBar() {
  return (
    <div className="sticky-contact-bar">
      <a href="tel:0909513637" className="sticky-btn sticky-phone" aria-label="Gọi điện thoại">
        <i className="fas fa-phone-alt"></i>
        <span className="sticky-tooltip">Gọi điện: 0909 513 637</span>
      </a>
      <a href="https://zalo.me/0909513637" target="_blank" rel="noopener noreferrer" className="sticky-btn sticky-zalo" aria-label="Chat Zalo">
        <i className="fas fa-comments"></i>
        <span className="sticky-tooltip">Chat Zalo: 0909 513 637</span>
      </a>
      <a href="mailto:khainguyen209@gmail.com" className="sticky-btn sticky-email" aria-label="Gửi email">
        <i className="fas fa-envelope"></i>
        <span className="sticky-tooltip">Gửi Email: khainguyen209@gmail.com</span>
      </a>
    </div>
  );
}
