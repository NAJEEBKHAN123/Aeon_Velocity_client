import React from 'react';
import Hero from '../components/Home/Hero';
import AboutSection from '../components/Home/AboutSection';
import StemSection from '../components/Home/StemSection';
import CtaSection from '../components/Home/CtaSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <AboutSection />
      <StemSection />
      <CtaSection />
    </div>
  );
};

export default Home;