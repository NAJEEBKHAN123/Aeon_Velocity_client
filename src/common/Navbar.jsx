import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("accueil");
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active tab based on route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveTab("accueil");
    else if (path === "/story") setActiveTab("aventure");
    else if (path === "/blog") setActiveTab("blog");
    else if (path === "/sponsors") setActiveTab("sponsors");
    else if (path === "/contact") setActiveTab("contact");
  }, [location]);

  const navigation = {
    fr: [
      { name: "Accueil", path: "/", id: "accueil" },
      { name: "Notre Aventure", path: "/story", id: "aventure" },
      { name: "Blog", path: "/blog", id: "blog" },
      { name: "Sponsors", path: "/sponsors", id: "sponsors" },
      { name: "Contact", path: "/contact", id: "contact" },
    ],
    en: [
      { name: "Home", path: "/", id: "accueil" },
      { name: "Our Story", path: "/story", id: "aventure" },
      { name: "Blog", path: "/blog", id: "blog" },
      { name: "Sponsors", path: "/sponsors", id: "sponsors" },
      { name: "Contact", path: "/contact", id: "contact" },
    ],
  };

  const currentNav = navigation[currentLanguage];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1A1F4b] backdrop-blur-xl shadow-2xl border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:pr-4 xl:px-12 xl:pr-16" >
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo - Optimized for all screens */}
          <Link
            to="/"
            className="flex items-center group flex-shrink-0"
            onClick={() => setActiveTab("accueil")}
          >
            <img
              src={logo}
              alt="Aeon Velocity - STEM Racing Team"
              className="
                h-16 w-auto 
                xs:h-10
                sm:h-12 
                md:h-14 
                lg:h-16 
                xl:h-22
                object-contain 
                transition-all 
                duration-300
                group-hover:scale-105
                drop-shadowlg
                min-w-[80px]
              "
              style={{
                maxWidth: 'none',
                filter: 'brightness(1.1) contrast(1.1)'
              }}
            />
            
          
          </Link>

          {/* Desktop Navigation - Shows on large screens */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
            <div className="flex items-center space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1 border border-gray-700/50">
              {currentNav.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-4 xl:px-6 py-2 xl:py-3 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === item.id
                      ? "text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  {item.name}
                  {activeTab === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Language Switcher */}
          <div className="hidden lg:flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-xl p-1  border border-gray-700/50 ml-4">
            <button
              onClick={() => onLanguageChange("fr")}
              className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                currentLanguage === "fr"
                  ? "text-white bg-blue-500 shadow-lg shadow-blue-500/25"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/50"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => onLanguageChange("en")}
              className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                currentLanguage === "en"
                  ? "text-white bg-blue-500 shadow-lg shadow-blue-500/25"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/50"
              }`}
            >
              EN
            </button>
          </div>

          {/* Tablet Navigation - Shows on medium screens */}
          <div className="hidden md:flex lg:hidden md:px-5 items-center space-x-3">
            <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-1 border border-gray-700/50">
              <button
                onClick={() => onLanguageChange("fr")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  currentLanguage === "fr"
                    ? "text-white bg-blue-500"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  currentLanguage === "en"
                    ? "text-white bg-blue-500"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
            
            {/* Simplified menu for tablet */}
            <div className="flex items-center space-x-2">
              <Link
                to="/sponsors"
                className="px-3 py-2 bg-blue-500 text-white text-xs font-medium rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap"
              >
                {currentLanguage === "fr" ? "Sponsors" : "Sponsors"}
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:text-white transition-all duration-300"
              >
                {isOpen ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button - Shows on small screens */}
          <div className="flex md:hidden items-center px-4 sm:px-5 md:px-6 lg:px-5  space-x-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-1 border border-gray-700/50">
              <button
                onClick={() => onLanguageChange("fr")}
                className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                  currentLanguage === "fr"
                    ? "text-white bg-blue-500"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                  currentLanguage === "en"
                    ? "text-white bg-blue-500"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" rounded-lg  text-gray-300 hover:text-white transition-all duration-300"
              aria-label="Menu"
            >
              {isOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Menu */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } md:lg:hidden`}
        >
          <div className="bg-gray-800/90 backdrop-blur-xl rounded-xl border border-gray-700/50 p-4 mt-2">
            <div className="space-y-2">
              {currentNav.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 text-center ${
                    activeTab === item.id
                      ? "text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Additional CTA for mobile */}
              <div className="pt-4 border-t border-gray-700/50">
                <Link
                  to="/sponsors"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  {currentLanguage === "fr" ? "Devenir Sponsor" : "Become a Sponsor"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;