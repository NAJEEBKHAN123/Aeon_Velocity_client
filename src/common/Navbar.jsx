import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('accueil');
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active tab based on route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveTab('accueil');
    else if (path === '/story') setActiveTab('aventure');
    else if (path === '/blog') setActiveTab('blog');
    else if (path === '/sponsors') setActiveTab('sponsors');
    else if (path === '/contact') setActiveTab('contact');
  }, [location]);

  const navigation = {
    fr: [
      { name: 'Accueil', path: '/', id: 'accueil' },
      { name: 'Notre Aventure', path: '/story', id: 'aventure' },
      { name: 'Blog', path: '/blog', id: 'blog' },
      { name: 'Sponsors', path: '/sponsors', id: 'sponsors' },
      { name: 'Contact', path: '/contact', id: 'contact' },
    ],
    en: [
      { name: 'Home', path: '/', id: 'accueil' },
      { name: 'Our Story', path: '/story', id: 'aventure' },
      { name: 'Blog', path: '/blog', id: 'blog' },
      { name: 'Sponsors', path: '/sponsors', id: 'sponsors' },
      { name: 'Contact', path: '/contact', id: 'contact' },
    ]
  };

  const currentNav = navigation[currentLanguage];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#1A1F4b] backdrop-blur-xl shadow-2xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group"
            onClick={() => setActiveTab('accueil')}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
            </div>
            <div className="ml-3 flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                AEON VELOCITY
              </span>
              <span className="text-xs text-gray-400 font-medium tracking-wider">STEM RACING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1 border border-gray-700/50">
              {currentNav.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeTab === item.id
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {item.name}
                  {activeTab === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="ml-4 flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-xl p-1 border border-gray-700/50">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  currentLanguage === 'fr' 
                    ? 'text-white bg-blue-500 shadow-lg shadow-blue-500/25' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  currentLanguage === 'en' 
                    ? 'text-white bg-blue-500 shadow-lg shadow-blue-500/25' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Language Switcher */}
            <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-1 border border-gray-700/50">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  currentLanguage === 'fr' 
                    ? 'text-white bg-blue-500' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  currentLanguage === 'en' 
                    ? 'text-white bg-blue-500' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:text-white transition-all duration-300"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-4">
            <div className="space-y-2">
              {currentNav.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    activeTab === item.id
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;