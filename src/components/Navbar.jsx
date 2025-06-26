import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Bantex Cables
        </Link>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="nav-item" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/services" className="nav-item" onClick={() => setMobileMenuOpen(false)}>
            Services
          </Link>
          <Link to="/contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18"
                stroke="#0b3d91"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#0b3d91"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12H21"
                stroke="#0b3d91"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="#0b3d91"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="#0b3d91"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
