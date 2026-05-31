import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Product.css';
import { allProducts } from '../data';

const TABS = ['Opis i Skład', 'Alergeny', 'Przechowywanie'];

const TAB_CONTENT = {
  'Opis i Skład':
    'Skład: Czekolada deserowa (miazga kakaowa, cukier, tłuszcz kakaowy, emulgator: lecytyna sojowa, naturalny aromat waniliowy), śmietanka 36%, maliny (15%), masło, cukier inwertowany, syrop glukozowy, puder malinowy. Wszystkie nasze produkty tworzymy bez użycia sztucznych barwników i konserwantów.',
  Alergeny:
    'Produkt zawiera: mleko, soję. Może zawierać śladowe ilości orzechów, glutenu i jaj. Wyprodukowano w zakładzie, w którym przetwarza się orzechy laskowe i migdały.',
  Przechowywanie:
    'Przechowywać w temperaturze 12–16°C, z dala od źródeł ciepła i bezpośredniego światła słonecznego. Po otwarciu spożyć w ciągu 7 dni. Nie przechowywać w lodówce — kondensacja wilgoci może negatywnie wpłynąć na jakość czekolady.',
};

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((p) => p.id === parseInt(id, 10));
  const [activeTab, setActiveTab] = useState('Opis i Skład');

  const suggestedProducts = useMemo(() => {
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    return shuffled.filter((p) => p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return <div>Produkt nie znaleziony</div>;
  }

  const handleBreadcrumbClick = (category) => {
    navigate(`/collections?category=${encodeURIComponent(category)}`);
  };

  const handleSuggestedProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="collections-page">
      <nav className="breadcrumb">
        <span onClick={() => handleBreadcrumbClick('Wszystko')}>Kolekcje</span>
        <span className="breadcrumb-sep">›</span>
        <span onClick={() => handleBreadcrumbClick(product.collection)}>{product.collection}</span>
        <span className="breadcrumb-sep">›</span>
        <span className="bc-current">{product.name}</span>
      </nav>

      <div className="product-detail">
        <div className="pd-image-section">
          <img src={product.image} alt={product.name} className="pd-main-image" />
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
            <div className="suggested-card" key={p.id} onClick={() => handleSuggestedProductClick(p.id)}>
              <img src={p.image} alt={p.name} className="suggested-img" />
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
