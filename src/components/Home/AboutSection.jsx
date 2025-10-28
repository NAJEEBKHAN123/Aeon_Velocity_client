import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    fr: {
      title: "Qui sommes-nous ?",
      content: "Aeon Velocity est une équipe d'étudiants guidée par une ambition simple et assumée : viser le titre mondial du challenge STEM Racing. Nous fonctionnons comme une véritable structure professionnelle, avec une approche orientée performance internationale.",
      rank: "Place Nationale",
      target: "Objectif Mondial", 
      representation: "Représentation"
    },
    en: {
      title: "Who Are We?",
      content: "Aeon Velocity is a student team driven by a simple ambition: to win the world title of the STEM Racing challenge. We operate as a professional structure with an international performance-oriented approach.",
      rank: "National Rank",
      target: "World Target",
      representation: "Representation"
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            {currentContent.title}
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
            <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
        
        {/* Content Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 shadow-2xl">
          {/* Main Text */}
          <p className="text-2xl text-gray-100 leading-relaxed text-center mb-12 font-light">
            {currentContent.content}
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* National Rank */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl font-bold text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                  6<sup className="text-cyan-300">th</sup>
                </div>
                <div className="text-gray-300 font-medium">
                  {currentContent.rank}
                </div>
              </div>
            </div>

            {/* World Target */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                  2026
                </div>
                <div className="text-gray-300 font-medium">
                  {currentContent.target}
                </div>
              </div>
            </div>

            {/* Representation */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl font-bold text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                  🇫🇷
                </div>
                <div className="text-gray-300 font-medium">
                  {currentContent.representation}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 text-cyan-300">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Aeon Velocity STEM Racing</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;