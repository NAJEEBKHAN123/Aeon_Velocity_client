import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import hero_img from '../../assets/Hero.jpg';

const Hero = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    fr: {
      title: "Nous ne visons pas la compétition",
      subtitle: "Nous sommes conçus pour dominer",
      team: "Aeon Velocity",
      adventure: "Notre Aventure",
      sponsor: "Devenez Sponsor"
    },
    en: {
      title: "We don't aim to compete",
      subtitle: "We are built to dominate", 
      team: "Aeon Velocity",
      adventure: "Our Story",
      sponsor: "Become a Sponsor"
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <section className="relative h-screen bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={hero_img} 
          alt="Aeon Velocity STEM Racing Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Border Accents */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

      <div className="relative h-full flex items-center justify-center p-8">
        <div className="text-center max-w-2xl">
          <div className="mb-12">
            <div className="inline-block border border-cyan-400/30 px-6 py-2 rounded-full mb-8">
              <span className="text-cyan-400 text-sm font-mono tracking-widest">
                STEM RACING TEAM
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
              {currentContent.title}
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6 tracking-tight">
              {currentContent.subtitle}
            </h2>
            
            <div className="text-gray-300 text-lg mb-12">
              {currentContent.team}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/story"
              className="px-8 py-3 bg-white text-gray-900 font-medium rounded-sm hover:bg-gray-100 transition-colors min-w-[160px]"
            >
              {currentContent.adventure}
            </Link>
            <Link
              to="/sponsors" 
              className="px-8 py-3 border border-white text-white font-medium rounded-sm hover:bg-white hover:text-gray-900 transition-colors min-w-[160px]"
            >
              {currentContent.sponsor}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-white text-sm animate-pulse">
          ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;