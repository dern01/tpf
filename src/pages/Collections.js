import React, { useState } from 'react';
import './Collections.css';

const TABS = ['Opis i Skład', 'Alergeny', 'Przechowywanie'];

const TAB_CONTENT = {
  'Opis i Skład':
    'Skład: Czekolada deserowa (miazga kakaowa, cukier, tłuszcz kakaowy, emulgator: lecytyna sojowa, naturalny aromat waniliowy), śmietanka 36%, maliny (15%), masło, cukier inwertowany, syrop glukozowy, puder malinowy. Wszystkie nasze produkty tworzymy bez użycia sztucznych barwników i konserwantów.',
  Alergeny:
    'Produkt zawiera: mleko, soję. Może zawierać śladowe ilości orzechów, glutenu i jaj. Wyprodukowano w zakładzie, w którym przetwarza się orzechy laskowe i migdały.',
  Przechowywanie:
    'Przechowywać w temperaturze 12–16°C, z dala od źródeł ciepła i bezpośredniego światła słonecznego. Po otwarciu spożyć w ciągu 7 dni. Nie przechowywać w lodówce — kondensacja wilgoci może negatywnie wpłynąć na jakość czekolady.',
};

const suggestedProducts = [
  { id: 1, name: 'Zielona Pistacja', price: '120 PLN' },
  { id: 2, name: 'Płynny Karmel', price: '135 PLN' },
  { id: 3, name: 'Box Klasyczny', price: '250 PLN' },
  { id: 4, name: 'Ciemna Sól', price: '95 PLN' },
];

const Collections = () => {
  const [activeTab, setActiveTab] = useState('Opis i Skład');

  return (
    <div className="collections-page">
      <nav className="breadcrumb">
        <span>Kolekcje</span>
        <span className="breadcrumb-sep">›</span>
        <span>Edycje Limitowane</span>
        <span className="breadcrumb-sep">›</span>
        <span className="bc-current">Aksamitna Malina</span>
      </nav>

      <div className="product-detail">
        <div className="pd-image-section">
          <div className="pd-main-image" />
          <span className="pd-badge">NOWOŚĆ</span>
        </div>

        <div className="pd-info">
          <p className="pd-collection-label">Kolekcja Wiosenna</p>
          <h1>Aksamitna Malina</h1>
          <p className="pd-price">145 PLN / zestaw 12 szt.</p>
          <p className="pd-description">
            Subtelne połączenie intensywnej, gorzkiej czekolady 70% z sercem z
            aksamitnego ganache ze świeżych malin. Każda pralina tworzona jest
            ręcznie, z szacunkiem dla tradycyjnego rzemiosła cukierniczego.
          </p>

          <div className="pd-tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`pd-tab-btn${activeTab === tab ? ' active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <p className="pd-tab-content">{TAB_CONTENT[activeTab]}</p>

          <button className="btn-pd-inquire">Zapytaj o produkt</button>
          <span className="pd-shipping">WYSYŁKA W CIĄGU 48H</span>
        </div>
      </div>

      <section className="suggested-section">
        <h2>Sugerowane Produkty</h2>
        <div className="suggested-grid">
          {suggestedProducts.map((p) => (
            <div className="suggested-card" key={p.id}>
              <div className="suggested-img" />
              <p className="suggested-name">{p.name}</p>
              <p className="suggested-price">{p.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections;
