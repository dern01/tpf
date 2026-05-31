import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Collections.css';

const allProducts = [
  { id: 1, name: 'Praliny Różane', price: 85, badge: null, category: 'Praliny', new: false },
  { id: 2, name: 'Złota Kolekcja', price: 140, badge: 'NOWOŚĆ', category: 'Nowe Kolekcje', new: true },
  { id: 3, name: 'Karmel i Sól', price: 65, badge: null, category: 'Karmelki', new: false },
  { id: 4, name: 'Klasyczne Trufle', price: 70, badge: null, category: 'Trufle', new: false },
  { id: 5, name: 'Biała z Maliną', price: 45, badge: null, category: 'Czekolady', new: false },
  { id: 6, name: 'Ciemna 85%', price: 38, badge: null, category: 'Czekolady', new: false },
  { id: 7, name: 'Orzechy Laskowe', price: 55, badge: null, category: 'Praliny', new: false },
  { id: 8, name: 'Degustacja', price: 180, badge: null, category: 'Zestawy Prezentowe', new: false },
  { id: 9, name: 'Matcha & Yuzu', price: 95, badge: 'NOWOŚĆ', category: 'Nowe Kolekcje', new: true },
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
  const [priceMax, setPriceMax] = useState(200);
  const [sortOrder, setSortOrder] = useState('default');
  const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const filteredProducts = useMemo(() => {
    let products = allProducts;

    if (activeCategory !== 'Wszystko') {
      products = products.filter((p) => p.category === activeCategory);
    }

    products = products.filter((p) => p.price <= priceMax);

    switch (sortOrder) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        products.sort((a, b) => b.new - a.new);
        break;
      default:
        break;
    }

    return products;
  }, [activeCategory, priceMax, sortOrder]);

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
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="default">Domyślnie</option>
            <option value="price-asc">Cena: rosnąco</option>
            <option value="price-desc">Cena: malejąco</option>
            <option value="newest">Najnowsze</option>
          </select>
        </div>

        <button className="btn-filter" onClick={() => {}}>FILTRUJ</button>
      </aside>

      <main className="shop-main">
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-image-placeholder">
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
              </div>
              <div className="product-card-info">
                <p className="product-card-name">{product.name}</p>
                <p className="product-card-price">{product.price} zł</p>
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
