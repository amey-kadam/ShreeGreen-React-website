import React, { useState, useEffect } from 'react';
import './Features.css';

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');

  const slides = [
    {
      title: "Slide 1",
      description: "This is the first slide. It showcases a key feature of our product.",
    },
    {
      title: "Slide 2",
      description: "This is the second slide. It highlights another important feature.",
    },
    {
      title: "Slide 3",
      description: "This is the third slide. It demonstrates a unique aspect of our service.",
    },
    {
      title: "Slide 4",
      description: "This is the fourth slide. It explains a benefit of using our product.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next');
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const getSlideClass = (index) => {
    if (index === currentSlide) {
      return 'sliding-card active';
    }
    
    // All other slides should be positioned to the right and hidden
    return 'sliding-card inactive';
  };

  return (
    <div className="features-container py-20">
      <div className="features-background">
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>

        {/* Sliding Card Section */}
        <div className="sliding-card-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={getSlideClass(index)}
              style={{
                transitionProperty: 'opacity, transform',
                transitionDuration: '0.5s',
                transitionTimingFunction: 'ease-in-out'
              }}
            >
              <div className="sliding-card-content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Card with Text on the Right */}
        <div className="feature-section">
          <div className="feature-card">
            <h3>Left Card Title</h3>
            <p>
              This is a card placed on the left side. It contains important information about a feature.
            </p>
          </div>
          <div className="feature-text">
            <h3>Text on the Right</h3>
            <p>
              This is the text placed on the right side of the card. It provides additional details or context about the feature.
            </p>
          </div>
        </div>

        {/* Right Card with Text on the Left */}
        <div className="feature-section-reverse">
          <div className="feature-text">
            <h3>Text on the Left</h3>
            <p>
              This is the text placed on the left side of the card. It explains the benefits or functionality of the feature.
            </p>
          </div>
          <div className="feature-card">
            <h3>Right Card Title</h3>
            <p>
              This is a card placed on the right side. It contains important information about another feature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;