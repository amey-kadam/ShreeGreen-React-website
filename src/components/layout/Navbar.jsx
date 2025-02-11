import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Services', href: '/services' },
    { title: 'Projects', href: '/projects' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' }
  ];

  return (
    <nav>
      <div className="max-w-7xl">
        <div className="flex">
          {/* Brand Name on the left */}
          <span className="brand-name">Shreerang Green</span>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-nav">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;