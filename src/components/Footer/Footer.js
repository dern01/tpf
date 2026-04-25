import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Manufaktura Słodyczy</h3>
          <p>© 2024 Manufaktura Słodyczy. Tworzone z pasji.</p>
        </div>
        <div className="footer-contact">
          <h4>Kontakt</h4>
          <p>+12 345 678 900</p>
          <p>ul. Warszawska 1<br/>30-300 Kraków</p>
        </div>
        <div className="footer-social">
          <h4>Śledź nas</h4>
          <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
