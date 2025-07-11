import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        {/* Main page content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes here as needed */}
        </Routes>

        <Footer />

        {/* Vercel Analytics */}
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
