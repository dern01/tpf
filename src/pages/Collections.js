import React, { useState } from 'react';
import './Collections.css';

const products = [
  { id: 1, name: 'Praliny Różane', price: '85 zł', badge: null },
  { id: 2, name: 'Złota Kolekcja', price: '140 zł', badge: 'NOWOŚĆ' },
  { id: 3, name: 'Karmel i Sól', price: '65 zł', badge: null },
  { id: 4, name: 'Klasyczne Trufle', price: '70 zł', badge: null },
  { id: 5, name: 'Biała z Maliną', price: '45 zł', badge: null },
  { id: 6, name: 'Ciemna 85%', price: '38 zł', badge: null },
  { id: 7, name: 'Orzechy Laskowe', price: '55 zł', badge: null },
  { id: 8, name: 'Degustacja', price: '180 zł', badge: null },
  { id: 9, name: 'Matcha & Yuzu', price: '95 zł', badge: null },
];

const categories = [
  'Wszystko',
  'Nowe Kolekcje',
  'Praliny',
  'Trufle',
  'Czekolady',
  'Karmelki',
  'Zestawy Prezentowe',
];

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState('Wszystko');
  const [priceMax, setPriceMax] = useState(150);
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="shop-page">
      <aside className="shop-sidebar">
        <div className="sidebar-section sidebar-categories">
          <h4>Kategorie</h4>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={activeCategory === cat ? 'active' : ''}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <h4>Cena</h4>
          <input
            type="range"
            className="price-range"
            min={35}
            max={200}
            value={priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
          />
          <p className="price-display">35 zł – {priceMax} zł</p>
        </div>

        <div className="sidebar-section sidebar-sort">
          <h4>Sortuj</h4>
          <select defaultValue="default">
            <option value="default">Domyślnie</option>
            <option value="price-asc">Cena: rosnąco</option>
            <option value="price-desc">Cena: malejąco</option>
            <option value="newest">Najnowsze</option>
          </select>
        </div>

        <button className="btn-filter">FILTRUJ</button>
      </aside>

      <main className="shop-main">
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-placeholder">
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
              </div>
              <div className="product-card-info">
                <p className="product-card-name">{product.name}</p>
                <p className="product-card-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              className={`pagination-btn${activePage === p ? ' active' : ''}`}
              onClick={() => setActivePage(p)}
            >
              {p}
            </button>
          ))}
          <span className="pagination-ellipsis">...</span>
          <button className="pagination-btn" onClick={() => setActivePage(8)}>
            8
          </button>
        </div>
      </main>
    </div>
  );
};

export default Collections;
