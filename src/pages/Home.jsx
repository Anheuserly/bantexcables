import React from 'react';
import Navbar from '../components/Navbar'; // Assuming Navbar is separate from Header
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductCategories from '../components/ProductCategories';
import ManufacturingProcess from '../components/ManufacturingProcess';
import QualityAssurance from '../components/QualityAssurance';
import Certifications from '../components/Certifications';
import IndustriesServed from '../components/IndustriesServed';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
     
    </main>
  );
};

export default Home;
