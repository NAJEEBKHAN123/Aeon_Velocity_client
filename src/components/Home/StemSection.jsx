import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const StemSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    fr: {
      title: "C'est quoi STEM Racing ?",
      description: "STEM Racing (anciennement F1 in Schools) est le plus grand challenge STEM au monde. Plus de 26 000 équipes dans plus de 50 pays s'affrontent pour concevoir, produire et faire courir une mini F1 propulsée par une cartouche de CO₂, selon un règlement international extrêmement exigeant.",
      criteria: [
        "L'aérodynamique et la performance de la voiture",
        "L'innovation et l'optimisation technique",
        "La présentation devant un jury",
        "L'identité de marque et la stratégie marketing",
        "La qualité du dossier technique"
      ],
      teams: "Équipes",
      countries: "Pays",
      note: "Seules les meilleures équipes nationales accèdent aux finales mondiales. C'est là que nous voulons être. Et c'est là que nous voulons gagner."
    },
    en: {
      title: "What is STEM Racing?",
      description: "STEM Racing (formerly F1 in Schools) is the largest STEM challenge in the world. Over 26,000 teams in more than 50 countries compete to design, produce, and race a mini F1 car propelled by a CO₂ cartridge, according to an extremely demanding international regulation.",
      criteria: [
        "Aerodynamics and car performance",
        "Innovation and technical optimization",
        "Presentation before a jury",
        "Brand identity and marketing strategy",
        "Quality of the technical portfolio"
      ],
      teams: "Teams",
      countries: "Countries",
      note: "Only the best national teams qualify for the world finals. That's where we want to be. And that's where we want to win."
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {currentContent.title}
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {currentContent.description}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-300">
                {currentLanguage === 'fr' ? 'Critères de jugement :' : 'Judging Criteria:'}
              </h3>
              <div className="space-y-3">
                {currentContent.criteria.map((criterion, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">
                      {criterion}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-lg font-semibold text-cyan-300 italic mt-8">
              {currentContent.note}
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">26,000+</div>
              <div className="text-xl text-gray-300 mb-8">{currentContent.teams}</div>
              
              <div className="text-5xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-xl text-gray-300">{currentContent.countries}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StemSection;