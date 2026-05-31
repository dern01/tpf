import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Collections.css';
import { allProducts, categories } from '../data';

const PRODUCTS_PER_PAGE = 9;

const Collections = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromQuery = queryParams.get('category');
  const pageFromQuery = parseInt(queryParams.get('page') || '1', 10);

  const [activeCategory, setActiveCategory] = useState(categoryFromQuery || 'Wszystko');
  const [priceMax, setPriceMax] = useState(200);
  const [sortOrder, setSortOrder] = useState('default');
  const [activePage, setActivePage] = useState(pageFromQuery);

  useEffect(() => {
    setActiveCategory(categoryFromQuery || 'Wszystko');
    setActivePage(pageFromQuery);
  }, [categoryFromQuery, pageFromQuery]);

  const updateURL = (category, page) => {
    const params = new URLSearchParams();
    if (category && category !== 'Wszystko') {
      params.set('category', category);
    }
    if (page > 1) {
      params.set('page', page);
    }
    navigate({ search: params.toString() });
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActivePage(1);
    updateURL(category, 1);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    updateURL(activeCategory, page);
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

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((activePage - 1) * PRODUCTS_PER_PAGE, activePage * PRODUCTS_PER_PAGE);

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
          {paginatedProducts.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
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
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              className={`pagination-btn${activePage === p ? ' active' : ''}`}
              onClick={() => handlePageChange(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Collections;
