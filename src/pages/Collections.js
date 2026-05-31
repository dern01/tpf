import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Collections.css';
import { allProducts, categories } from '../data';

const Collections = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromQuery = queryParams.get('category');

  const [activeCategory, setActiveCategory] = useState(categoryFromQuery || 'Wszystko');
  const [priceMax, setPriceMax] = useState(200);
  const [sortOrder, setSortOrder] = useState('default');
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (categoryFromQuery) {
      setActiveCategory(categoryFromQuery);
    } else {
      setActiveCategory('Wszystko');
    }
  }, [categoryFromQuery]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    navigate(`/collections?category=${encodeURIComponent(category)}`);
  };

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
                onClick={() => handleCategoryClick(cat)}
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
