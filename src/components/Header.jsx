import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="top-header">
      <div className="header-container">
        <div className="contact-info">
          <span> Saket, Delhi</span>
          <span> <a href="mailto:sales@bantexcables.com">sales@bantexcables.com</a></span>
          <span> <a href="tel:+9185879 00038">+91 85879 00038</a></span>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search products..." />
          <button>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
