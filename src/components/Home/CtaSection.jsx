import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const CtaSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    fr: {
      title: "Rejoignez l'aventure",
      content: "Notre objectif est clair : représenter la France aux finales mondiales et viser le titre suprême. Pour réussir, nous nous entourons de partenaires prêts à faire partie d'une ascension ambitieuse. Ensemble, transformons une vision en victoire mondiale.",
      button: "Devenez sponsor d'Aeon Velocity",
      subtext: "et propulsez l'innovation étudiante sur la scène internationale."
    },
    en: {
      title: "Join the Adventure",
      content: "Our goal is clear: represent France in the world finals and aim for the supreme title. To succeed, we surround ourselves with partners ready to be part of an ambitious ascent. Together, let's transform a vision into a world victory.",
      button: "Become a Sponsor of Aeon Velocity", 
      subtext: "and propel student innovation onto the international stage."
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <section className="py-20 bg-cyan-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          {currentContent.title}
        </h2>
        
        <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
          {currentContent.content}
        </p>
        
        <Link
          to="/sponsors"
          className="inline-block px-12 py-4 bg-white text-cyan-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors mb-4"
        >
          {currentContent.button}
        </Link>
        
        <p className="text-cyan-200 font-medium">
          {currentContent.subtext}
        </p>
      </div>
    </section>
  );
};

export default CtaSection;