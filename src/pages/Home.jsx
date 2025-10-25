import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    fr: {
      hero: {
        title: "We don't aim to compete. We are built to dominate.",
        subtitle: "Aeon Velocity"
      },
      about: {
        title: "Qui sommes-nous ?",
        content: "Aeon Velocity est une équipe d'étudiants guidée par une ambition simple et assumée : viser le titre mondial du challenge STEM Racing. Nous fonctionnons comme une véritable structure professionnelle, avec une approche orientée performance internationale. À chaque étape, nous cherchons à penser plus vite, concevoir plus intelligemment et fabriquer plus précisément. Ce projet n'est pas un travail scolaire, c'est une quête d'excellence. Une mission tournée vers le podium mondial."
      },
      stem: {
        title: "C'est quoi STEM Racing ?",
        description: "STEM Racing (anciennement F1 in Schools) est le plus grand challenge STEM au monde. Plus de 26 000 équipes dans plus de 50 pays s'affrontent pour concevoir, produire et faire courir une mini F1 propulsée par une cartouche de CO₂, selon un règlement international extrêmement exigeant.",
        criteria: [
          "L'aérodynamique et la performance de la voiture",
          "L'innovation et l'optimisation technique",
          "La présentation devant un jury",
          "L'identité de marque et la stratégie marketing",
          "La qualité du dossier technique"
        ],
        note: "Seules les meilleures équipes nationales accèdent aux finales mondiales. C'est là que nous voulons être. Et c'est là que nous voulons gagner."
      },
      cta: {
        title: "Rejoignez l'aventure",
        content: "Notre objectif est clair : représenter la France aux finales mondiales et viser le titre suprême. Pour réussir, nous nous entourons de partenaires prêts à faire partie d'une ascension ambitieuse. Ensemble, transformons une vision en victoire mondiale.",
        button: "Devenez sponsor d'Aeon Velocity",
        subtext: "et propulsez l'innovation étudiante sur la scène internationale."
      }
    },
    en: {
      hero: {
        title: "We don't aim to compete. We are built to dominate.",
        subtitle: "Aeon Velocity"
      },
      about: {
        title: "Who Are We?",
        content: "Aeon Velocity is a student team driven by a simple and assumed ambition: to aim for the world title of the STEM Racing challenge. We operate like a true professional structure, with an international performance-oriented approach. At every step, we seek to think faster, design smarter, and manufacture more precisely. This project is not schoolwork; it's a quest for excellence. A mission focused on the world podium."
      },
      stem: {
        title: "What is STEM Racing?",
        description: "STEM Racing (formerly F1 in Schools) is the largest STEM challenge in the world. Over 26,000 teams in more than 50 countries compete to design, produce, and race a mini F1 car propelled by a CO₂ cartridge, according to an extremely demanding international regulation.",
        criteria: [
          "Aerodynamics and car performance",
          "Innovation and technical optimization",
          "Presentation before a jury",
          "Brand identity and marketing strategy",
          "Quality of the technical portfolio"
        ],
        note: "Only the best national teams qualify for the world finals. That's where we want to be. And that's where we want to win."
      },
      cta: {
        title: "Join the Adventure",
        content: "Our goal is clear: represent France in the world finals and aim for the supreme title. To succeed, we surround ourselves with partners ready to be part of an ambitious ascent. Together, let's transform a vision into a world victory.",
        button: "Become a Sponsor of Aeon Velocity",
        subtext: "and propel student innovation onto the international stage."
      }
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping mr-2"></div>
              <span className="text-sm text-cyan-300 font-medium">STEM RACING TEAM</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              {currentContent.hero.title.split('. ')[0]}.
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {currentContent.hero.title.split('. ')[1]}
            </span>
          </h1>
          
          <div className="mb-12">
            <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {currentContent.hero.subtitle}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/story"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
            >
              {currentLanguage === 'fr' ? 'Découvrir Notre Aventure' : 'Discover Our Story'}
            </Link>
            <Link
              to="/sponsors"
              className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-300 font-semibold rounded-2xl hover:bg-cyan-400/10 hover:border-cyan-400 transform hover:scale-105 transition-all duration-300"
            >
              {currentLanguage === 'fr' ? 'Devenir Sponsor' : 'Become a Sponsor'}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              {currentContent.about.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              {currentContent.about.content}
            </p>
          </div>
        </div>
      </section>

      {/* STEM Racing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              {currentContent.stem.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {currentContent.stem.description}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-300">
                  {currentLanguage === 'fr' ? 'Critères de jugement :' : 'Judging Criteria:'}
                </h3>
                <div className="space-y-3">
                  {currentContent.stem.criteria.map((criterion, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-cyan-500/30 transition-colors">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-300 group-hover:text-cyan-100 transition-colors">
                        {criterion}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-lg font-semibold text-cyan-300 italic">
                {currentContent.stem.note}
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-8 border border-cyan-500/20 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-6xl font-bold text-cyan-400 mb-2">26,000+</div>
                  <div className="text-xl text-cyan-300 mb-6">{currentLanguage === 'fr' ? 'Équipes' : 'Teams'}</div>
                  
                  <div className="text-5xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-xl text-blue-300">{currentLanguage === 'fr' ? 'Pays' : 'Countries'}</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400/20 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl p-12 border border-cyan-500/30 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              {currentContent.cta.title}
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {currentContent.cta.content}
            </p>
            
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300 mb-4"
            >
              {currentContent.cta.button}
            </Link>
            
            <p className="text-cyan-300 font-medium">
              {currentContent.cta.subtext}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;