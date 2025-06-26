// src/components/CallToAction.jsx
import React from 'react';
import '../styles/CallToAction.css';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <h2>Ready to partner with us?</h2>
      <p>Contact us today for custom cable solutions tailored to your needs.</p>
      <a href="/contact" className="cta-button">Get a Quote</a>
    </section>
  );
};

export default CallToAction;
