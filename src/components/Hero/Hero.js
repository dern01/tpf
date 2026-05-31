import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import heroBackground from '../../assets/img/hero-background.png';

const Hero = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/collections');
  };

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="hero-background-overlay">
        <h1 className="hero-bg-text">SŁODYCZE<br/>Z<br/>PASJĄ</h1>
      </div>
      <div className="hero-content">
        <h2>SŁODYCZE Z PASJĄ</h2>
        <p>
          Ręcznie tworzone praliny, które pobudzają zmysły. Odkryj<br/>
          bogactwo smaków zamknięte w belgijskiej czekoladzie.
        </p>
        <button className="btn-primary" onClick={handleDiscoverClick}>
          Odkryj nasze praliny
        </button>
      </div>
    </section>
  );
};

export default Hero;
