import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>High-Quality Electrical Cables for Every Industry</h1>
        <p>
          Reliable, durable, and certified cables manufactured to meet your
          toughest demands. Supplying power and communication solutions worldwide.
        </p>
        <a href="/contact" className="hero-cta">
          Request a Quote
        </a>
      </div>
      <div className="hero-image">
        {/* You can replace this with an actual image or SVG */}
        <img
          src="/images/hero-cables.jpg"
          alt="Electrical cables manufacturing"
        />
      </div>
    </section>
  );
};

export default HeroSection;
