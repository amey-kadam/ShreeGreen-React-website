import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="pattern-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
            <span className="company-name">Shreerang Green</span>
            <br></br>
            <span className="title-subtitle">Building Tomorrow's Foundation</span>
          </h1>
          
          <p className="hero-description">
            Pioneering sustainable construction with premium ACC blocks. 
            Engineering excellence, environmental responsibility.
          </p>
          
          <div className="hero-cta-container">
            <button className="cta-button primary">
              Explore Products
            </button>
            <button className="cta-button secondary">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500K+</span>
            <span className="stat-label">Blocks Delivered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Quality Assured</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;