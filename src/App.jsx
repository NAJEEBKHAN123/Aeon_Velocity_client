import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext.jsx';
import Navbar from './common/Navbar';

// Import your pages
import Home from './pages/Home.jsx';
import Footer from './common/Footer.jsx';
import OurStory from './pages/OurStory';
import Blog from './pages/Blog';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import ScrollToTop from './common/ScrollToTop.jsx';

const AppContent = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/20">
      <Navbar 
        currentLanguage={currentLanguage} 
        onLanguageChange={changeLanguage} 
      />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;