import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Column 1: Company Info */}
        <div className="footer-section company-info">
          <div className="company-logo">
            <h3>Bantex Cables</h3>
            <div className="logo-underline"></div>
          </div>
          <p className="company-description">
            Leading manufacturer & supplier of high-quality electrical cables and wiring solutions 
            with over a decade of excellence in the industry.
          </p>
          <div className="company-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/"><span className="link-icon">→</span>Home</Link></li>
            <li><Link to="/about"><span className="link-icon">→</span>About Us</Link></li>
            <li><Link to="/services"><span className="link-icon">→</span>Services</Link></li>
            <li><Link to="/products"><span className="link-icon">→</span>Products</Link></li>
            <li><Link to="/certifications"><span className="link-icon">→</span>Certifications</Link></li>
            <li><Link to="/contact"><span className="link-icon">→</span>Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-section contact-info">
          <h4>Contact Information</h4>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-details">
              <span className="contact-label">Address</span>
              <span className="contact-value">Saket, Delhi, India - 110017</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-details">
              <span className="contact-label">Phone</span>
              <a href="tel:+918587900038" className="contact-value">+91 85879 00038</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div className="contact-details">
              <span className="contact-label">Email</span>
              <a href="mailto:sales@bantexcables.com" className="contact-value">sales@bantexcables.com</a>
            </div>
          </div>
        </div>

        {/* Column 4: Social Media & Newsletter */}
        <div className="footer-section social-section">
          <h4>Stay Connected</h4>
          <p className="social-description">Follow us for latest updates and industry insights</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link facebook">
              <span className="social-icon">📘</span>
              <span className="social-text">Facebook</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link linkedin">
              <span className="social-icon">💼</span>
              <span className="social-text">LinkedIn</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link instagram">
              <span className="social-icon">📷</span>
              <span className="social-text">Instagram</span>
            </a>
          </div>
          
          <div className="newsletter-signup">
            <h5>Newsletter</h5>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Bantex Cables. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
