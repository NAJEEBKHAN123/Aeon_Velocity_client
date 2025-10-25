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
    <section className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {currentContent.title}
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="bg-gray-700/50 rounded-xl p-8">
          <p className="text-xl text-gray-300 leading-relaxed text-center">
            {currentContent.content}
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-gray-600/30 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400 mb-2">6th</div>
              <div className="text-gray-300">{currentContent.rank}</div>
            </div>
            <div className="p-6 bg-gray-600/30 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400 mb-2">2026</div>
              <div className="text-gray-300">{currentContent.target}</div>
            </div>
            <div className="p-6 bg-gray-600/30 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400 mb-2">France</div>
              <div className="text-gray-300">{currentContent.representation}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;