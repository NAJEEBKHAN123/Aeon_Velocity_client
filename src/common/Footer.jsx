import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/Logo.png';

const Footer = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const content = {
    fr: {
      mission: "Propulser l'innovation étudiante vers la scène mondiale",
      quickLinks: "Liens Rapides",
      contact: "Contact",
      partnership: "Partenariat",
      follow: "Suivez Notre Aventure",
      rights: "Tous droits réservés.",
      madeWith: "Conçu pour l'excellence",
      links: {
        home: "Accueil",
        story: "Notre Aventure", 
        blog: "Blog",
        sponsors: "Sponsors",
        contact: "Contact"
      },
      contactInfo: {
        email: "contact@aeon-velocity.com",
        phone: "+33 7 83 18 28 60",
        location: "France"
      }
    },
    en: {
      mission: "Propelling student innovation to the world stage",
      quickLinks: "Quick Links", 
      contact: "Contact",
      partnership: "Partnership",
      follow: "Follow Our Journey",
      rights: "All rights reserved.",
      madeWith: "Built for excellence",
      links: {
        home: "Home",
        story: "Our Story",
        blog: "Blog", 
        sponsors: "Sponsors",
        contact: "Contact"
      },
      contactInfo: {
        email: "contact@aeon-velocity.com",
        phone: "+33 7 83 18 28 60", 
        location: "France"
      }
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <footer className="relative bg-gray-900 border-t border-cyan-500/30 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:80px_80px] animate-grid"></div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-400/20"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          
          {/* Brand Column - Enhanced */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Link to="/" className="flex items-center group">
                <div className="relative">
                  <img src={logo} alt="Aeon Velocity" className="h-20 transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                </div>
                <div className="flex flex-col ml-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-shimmer">
                    AEON VELOCITY
                  </span>
                  <span className="text-xs text-cyan-400 font-medium tracking-widest mt-1">STEM RACING</span>
                </div>
              </Link>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-8 max-w-xs text-lg">
              {currentContent.mission}
            </p>
            
            {/* Enhanced Language Switcher */}
            <div className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-1 w-fit">
              <button
                onClick={() => changeLanguage('fr')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  currentLanguage === 'fr' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                🇫🇷 FR
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  currentLanguage === 'en' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>
          </div>

          {/* Quick Links - Enhanced */}
          <div>
            <h3 className="text-cyan-400 font-bold mb-8 text-lg tracking-wider uppercase flex items-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
              {currentContent.quickLinks}
            </h3>
            <ul className="space-y-4">
              {Object.entries(currentContent.links).map(([key, value]) => (
                <li key={key}>
                  <Link 
                    to={key === 'home' ? '/' : `/${key}`}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center group py-2"
                  >
                    <div className="w-0 h-0.5 bg-cyan-400 rounded-full mr-0 group-hover:w-3 group-hover:mr-3 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {value}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Enhanced */}
          <div>
            <h3 className="text-cyan-400 font-bold mb-8 text-lg tracking-wider uppercase flex items-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
              {currentContent.contact}
            </h3>
            <div className="space-y-5">
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                <div className="p-2 bg-gray-800/50 rounded-lg mr-4 group-hover:bg-cyan-500/20 transition-colors">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href={`mailto:${currentContent.contactInfo.email}`} className="hover:underline">
                  {currentContent.contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                <div className="p-2 bg-gray-800/50 rounded-lg mr-4 group-hover:bg-cyan-500/20 transition-colors">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href={`tel:${currentContent.contactInfo.phone}`} className="hover:underline">
                  {currentContent.contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300 group">
                <div className="p-2 bg-gray-800/50 rounded-lg mr-4">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                {currentContent.contactInfo.location}
              </div>
            </div>
          </div>

          {/* Partnership CTA - Enhanced */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-sm"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-cyan-400 font-bold mb-4 text-lg tracking-wider uppercase">
                {currentContent.partnership}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                {currentLanguage === 'fr' 
                  ? "Rejoignez-nous dans notre quête pour le titre mondial. Devenez partenaire d'une équipe d'élite."
                  : "Join us in our quest for the world title. Become a partner of an elite team."
                }
              </p>
              <Link
                to="/sponsors"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 group"
              >
                {currentLanguage === 'fr' ? 'Devenir Partenaire' : 'Become a Partner'}
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm flex items-center">
              <span>© 2024 Aeon Velocity. {currentContent.rights}</span>
            </div>
            
            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-8">
              <span className="text-gray-400 text-sm">{currentContent.follow}</span>
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                  { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3 group"
                  >
                    <div className="p-3 bg-gray-800/50 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon}/>
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Made With Love */}
            <div className="text-gray-400 text-sm flex items-center group">
              <span>{currentContent.madeWith}</span>
              <div className="w-1 h-1 bg-cyan-400 rounded-full mx-3 group-hover:scale-150 transition-transform"></div>
              <div className="text-cyan-400 transform group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_100%] animate-gradient-x"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes grid {
          0% { transform: translateY(0); }
          100% { transform: translateY(80px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-grid {
          animation: grid 20s linear infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;