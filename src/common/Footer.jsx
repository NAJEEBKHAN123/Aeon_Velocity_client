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
      excellence: "Excellence en Ingénierie",
      innovation: "Innovation & Performance",
      rights: "Tous droits réservés.",
      madeWith: "Conçu & Développé par",
      links: {
        home: "Accueil",
        story: "Notre Aventure", 
        blog: "Blog",
        sponsors: "Sponsors",
        contact: "Contact"
      },
      contactInfo: {
        email: "contact@aeon-velocity.com",
        phone: "+33 783 182 860",
        location: "Toulon, France"
      }
    },
    en: {
      mission: "Propelling student innovation to the world stage",
      quickLinks: "Quick Links", 
      contact: "Contact",
      partnership: "Partnership",
      excellence: "Engineering Excellence",
      innovation: "Innovation & Performance",
      rights: "All rights reserved.",
      madeWith: "Designed and Developed by",
      links: {
        home: "Home",
        story: "Our Story",
        blog: "Blog", 
        sponsors: "Sponsors",
        contact: "Contact"
      },
      contactInfo: {
        email: "contact@aeon-velocity.com",
        phone: "+33 783 182 860", 
        location: "Toulon, France"
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
            <ul className="space-y-0 md:space-y-4">
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
              <span>© 2025 Aeon Velocity. {currentContent.rights}</span>
            </div>
            
          

            {/* Made With Love */}
            <div className="text-gray-400 text-sm flex items-center group">
              <span>{currentContent.madeWith}</span>
              <div className="w-1 h-1 bg-cyan-400 rounded-full mx-3 group-hover:scale-150 transition-transform"></div>
              <div className="text-cyan-400 transform group-hover:scale-110 transition-transform">
               <a href="https://personal-portfolio-six-delta-17.vercel.app/">Najeeb Ullah</a>
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