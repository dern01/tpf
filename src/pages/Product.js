import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

const products = [
  { id: 1, name: 'Praliny Różane', price: '85 zł', badge: null, collection: 'Edycje Limitowane', description: 'Delikatne praliny z nadzieniem o smaku różanym, otoczone białą czekoladą.' },
  { id: 2, name: 'Złota Kolekcja', price: '140 zł', badge: 'NOWOŚĆ', collection: 'Kolekcje Premium', description: 'Ekskluzywny zestaw pralin w złotych opakowaniach, idealny na prezent.' },
  { id: 3, name: 'Karmel i Sól', price: '65 zł', badge: null, collection: 'Klasyki', description: 'Połączenie słodkiego karmelu i szczypty soli morskiej w mlecznej czekoladzie.' },
  { id: 4, name: 'Klasyczne Trufle', price: '70 zł', badge: null, collection: 'Klasyki', description: 'Aksamitne trufle z ciemnej czekolady, obtoczone w kakao.' },
  { id: 5, name: 'Biała z Maliną', price: '45 zł', badge: null, collection: 'Czekolady', description: 'Tabliczka białej czekolady z liofilizowanymi malinami.' },
  { id: 6, name: 'Ciemna 85%', price: '38 zł', badge: null, collection: 'Czekolady', description: 'Intensywna w smaku tabliczka ciemnej czekolady o zawartości 85% kakao.' },
  { id: 7, name: 'Orzechy Laskowe', price: '55 zł', badge: null, collection: 'Praliny', description: 'Praliny z całymi orzechami laskowymi w mlecznej czekoladzie.' },
  { id: 8, name: 'Degustacja', price: '180 zł', badge: null, collection: 'Zestawy Prezentowe', description: 'Zestaw degustacyjny zawierający różne rodzaje naszych pralin i czekolad.' },
  { id: 9, name: 'Matcha & Yuzu', price: '95 zł', badge: null, collection: 'Edycje Limitowane', description: 'Egzotyczne połączenie japońskiej herbaty matcha i cytrusowego yuzu.' },
];

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

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));
  const [activeTab, setActiveTab] = useState('Opis i Skład');

  if (!product) {
    return <div>Produkt nie znaleziony</div>;
  }

  return (
    <div className="collections-page">
      <nav className="breadcrumb">
        <span>Kolekcje</span>
        <span className="breadcrumb-sep">›</span>
        <span>{product.collection}</span>
        <span className="breadcrumb-sep">›</span>
        <span className="bc-current">{product.name}</span>
      </nav>

      <div className="product-detail">
        <div className="pd-image-section">
          <div className="pd-main-image" />
          {product.badge && <span className="pd-badge">{product.badge}</span>}
        </div>

        <div className="pd-info">
          <p className="pd-collection-label">{product.collection}</p>
          <h1>{product.name}</h1>
          <p className="pd-price">{product.price} / zestaw 12 szt.</p>
          <p className="pd-description">{product.description}</p>

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

export default Product;
