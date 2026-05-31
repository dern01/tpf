import React from 'react';
import './Contact.css';

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);


const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Kontakt</h1>
        <p>
          Chętnie odpowiemy na Twoje pytania, przygotujemy ofertę na zamówienie
          specjalne lub zaprosimy Cię na degustację w naszej manufakturze.
        </p>
      </section>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Nasza Pracownia</h2>

          <div className="info-block">
            <div className="info-icon">
              <LocationIcon />
            </div>
            <div className="info-text">
              <span className="info-label">ADRES</span>
              <p>ul. Słodka 14/2</p>
              <p>00-123 Warszawa</p>
              <p>Polska</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <PhoneIcon />
            </div>
            <div className="info-text">
              <span className="info-label">TELEFON</span>
              <a href="tel:+48500123456">+48 500 123 456</a>
              <p>pon. – pt. 9:00 – 18:00</p>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon">
              <EmailIcon />
            </div>
            <div className="info-text">
              <span className="info-label">E-MAIL</span>
              <a href="mailto:hello@artisanalconfections.pl">
                hello@artisanalconfections.pl
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Napisz do nas</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="cf-group">
              <label htmlFor="cf-name">Imię i nazwisko</label>
              <input id="cf-name" type="text" placeholder="Jan Kowalski" />
            </div>
            <div className="cf-group">
              <label htmlFor="cf-email">Adres e-mail</label>
              <input id="cf-email" type="email" placeholder="jan@example.com" />
            </div>
            <div className="cf-group">
              <label htmlFor="cf-message">Wiadomość</label>
              <textarea id="cf-message" placeholder="Jak możemy pomóc?" />
            </div>
            <div className="privacy-row">
              <input type="checkbox" id="cf-privacy" />
              <label htmlFor="cf-privacy">
                Akceptuję{' '}
                <a href="#privacy-policy">politykę prywatności</a> i wyrażam
                zgodę na przetwarzanie danych osobowych.
              </label>
            </div>
            <button type="submit" className="btn-send">
              Wyślij wiadomość →
            </button>
          </form>
        </div>

        <div className="contact-map-column">
          <div className="map-wrapper">
            <div className="map-iframe-container">
              <iframe
                title="Mapa lokalizacji Manufaktury Słodyczy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=20.97%2C52.20%2C21.06%2C52.27&layer=mapnik&marker=52.2318%2C21.0113"
                className="map-iframe"
              />
            </div>
            <div className="map-popup-card">
              <strong>Odwiedź nas</strong>
              <span>ul. Słodka 14, Warszawa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
