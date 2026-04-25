import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <h1 className="hero-bg-text">SŁODYCZE<br/>Z<br/>PASJĄ</h1>
      </div>
      <div className="hero-content">
        <h2>SŁODYCZE Z PASJĄ</h2>
        <p>
          Ręcznie tworzone praliny, które pobudzają zmysły. Odkryj<br/>
          bogactwo smaków zamknięte w belgijskiej czekoladzie.
        </p>
        <button className="btn-primary">Odkryj nasze praliny</button>
      </div>
    </section>
  );
};

export default Hero;
