import React from 'react';
import './Contact.css';

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
            <span className="info-label">ADRES</span>
            <p>ul. Słodka 14/2</p>
            <p>00-123 Warszawa</p>
            <p>Polska</p>
          </div>

          <div className="info-block">
            <span className="info-label">TELEFON</span>
            <a href="tel:+48500123456">+48 500 123 456</a>
            <p>pon – pt 9:00 – 18:00</p>
          </div>

          <div className="info-block">
            <span className="info-label">E-MAIL</span>
            <a href="mailto:hello@artisanalconfections.pl">
              hello@artisanalconfections.pl
            </a>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Napisz do nas</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="cf-group">
              <label htmlFor="cf-name">Imię i nazwisko</label>
              <input
                id="cf-name"
                type="text"
                placeholder="Jan Kowalski"
              />
            </div>
            <div className="cf-group">
              <label htmlFor="cf-email">Adres e-mail</label>
              <input
                id="cf-email"
                type="email"
                placeholder="jan@example.com"
              />
            </div>
            <div className="cf-group">
              <label htmlFor="cf-message">Wiadomość</label>
              <textarea
                id="cf-message"
                placeholder="Jak możemy pomóc?"
              />
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
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>

      <section className="contact-map-section">
        <div className="contact-map-inner">
          <h2>Odwiedź nas</h2>
          <div className="map-placeholder">
            [ Mapa — ul. Słodka 14, Warszawa ]
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
