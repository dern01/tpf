import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <h2>Manufaktura Słodyczy</h2>
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Sklep
          </NavLink>
        </li>
        <li>
          <NavLink to="/collections" className={({ isActive }) => (isActive ? 'active' : '')}>
            Kolekcje
          </NavLink>
        </li>
        <li>
          <NavLink to="/workshops" className={({ isActive }) => (isActive ? 'active' : '')}>
            Warsztaty
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            O Nas
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Kontakt
          </NavLink>
        </li>
      </ul>
      <div className="navbar-actions">
        <button className="btn-secondary" onClick={handleContactClick}>
          Zapytaj o produkt
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
