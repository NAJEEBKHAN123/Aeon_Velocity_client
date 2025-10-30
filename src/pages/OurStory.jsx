import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StoryPage = () => {
  const { currentLanguage } = useLanguage();
  const [activePhase, setActivePhase] = useState(0);
  
  const content = {
    fr: {
      title: "Notre Aventure",
      subtitle: "L'Ascension d'une Équipe d'Élite",
      introduction: "Tout a commencé par une idée. Très vite, c'est devenu une mission : élever une équipe française jusqu'au sommet mondial du challenge STEM Racing. Depuis notre création, nous avons évolué étape par étape, apprenant, corrigeant, accélérant… et redéfinissant nos ambitions.",
      timelineTitle: "Chronologie de l'Ascension",
      phases: [
        {
          date: "Décembre 2023",
          title: "Naissance d'un rêve",
          description: "Première équipe formée avec un objectif : découvrir le challenge et entrer dans la compétition.",
          status: "foundation",
          icon: "🎯"
        },
        {
          date: "Mai 2024", 
          title: "Premières finales nationales (6ᵉ place)",
          description: "Quelques mois seulement après nos débuts, nous concluons notre première finale à la 6ᵉ place. Première preuve que nous pouvons exister parmi les meilleurs.",
          status: "first_achievement",
          icon: "🏆"
        },
        {
          date: "Juin – Décembre 2024",
          title: "Analyse et reconstruction",
          description: "Nous identifions nos faiblesses et repensons toute notre stratégie : ingénierie, aérodynamique, financement, communication.",
          status: "transformation",
          icon: "🔄"
        },
        {
          date: "Mars 2025",
          title: "Deuxième finale nationale (6ᵉ place)",
          description: "Constante, mais un plafond est atteint. Ce classement devient un déclencheur : il ne suffit plus 'd'être là'.",
          status: "turning_point",
          icon: "⚡"
        },
        {
          date: "Avril 2025",
          title: "Transformation : naissance d'Aeon Velocity",
          description: "Nouveau nom, nouvelle vision, nouvelle structure. L'ambition est désormais assumée : viser la victoire nationale 2026.",
          status: "rebirth",
          icon: "🚀"
        },
        {
          date: "2025 – 2026",
          title: "L'ère Aeon Velocity",
          description: "Nous adoptons un modèle d'équipe inspiré des structures professionnelles : travail aérodynamique avancé, optimisation continue, développement des compétences, identité de marque forte, stratégie sponsoring structurée.",
          status: "professionalization",
          icon: "⭐"
        },
        {
          date: "Mars 2026",
          title: "Objectif : remporter les finales nationales",
          description: "Cette saison est abordée comme une campagne : chaque décision doit rapprocher de la victoire.",
          status: "target",
          icon: "🎯"
        },
        {
          date: "Après 2026",
          title: "Après la France : le monde",
          description: "L'objectif suivant est déjà tracé : obtenir une place aux mondiales et intégrer le cercle des meilleures équipes mondiales.",
          status: "world",
          icon: "🌍"
        }
      ],
      methodology: {
        title: "Notre Méthodologie d'Excellence",
        items: [
          "Travail aérodynamique avancé",
          "Optimisation continue", 
          "Développement des compétences",
          "Identité de marque forte",
          "Stratégie sponsoring structurée"
        ]
      },
      nextPage: "Découvrez nos Innovations",
      cta: "Explorer le Blog"
    },
    en: {
      title: "Our Story",
      subtitle: "The Rise of an Elite Team",
      introduction: "It all started with an idea. Very quickly, it became a mission: to elevate a French team to the world summit of the STEM Racing challenge. Since our creation, we have evolved step by step, learning, correcting, accelerating... and redefining our ambitions.",
      timelineTitle: "Timeline of the Ascent",
      phases: [
        {
          date: "December 2023",
          title: "Birth of a dream", 
          description: "First team formed with one goal: discover the challenge and enter the competition.",
          status: "foundation",
          icon: "🎯"
        },
        {
          date: "May 2024",
          title: "First national finals (6th place)",
          description: "Just a few months after our beginnings, we conclude our first final in 6th place. First proof that we can exist among the best.",
          status: "first_achievement",
          icon: "🏆"
        },
        {
          date: "June – December 2024",
          title: "Analysis and reconstruction", 
          description: "We identify our weaknesses and rethink our entire strategy: engineering, aerodynamics, funding, communication.",
          status: "transformation",
          icon: "🔄"
        },
        {
          date: "March 2025",
          title: "Second national final (6th place)",
          description: "Consistent, but a ceiling is reached. This ranking becomes a trigger: it's no longer enough 'to be there'.",
          status: "turning_point", 
          icon: "⚡"
        },
        {
          date: "April 2025",
          title: "Transformation: birth of Aeon Velocity",
          description: "New name, new vision, new structure. The ambition is now assumed: aim for national victory in 2026.",
          status: "rebirth",
          icon: "🚀"
        },
        {
          date: "2025 – 2026", 
          title: "The Aeon Velocity era",
          description: "We adopt a team model inspired by professional structures: advanced aerodynamic work, continuous optimization, skills development, strong brand identity, structured sponsorship strategy.",
          status: "professionalization",
          icon: "⭐"
        },
        {
          date: "March 2026",
          title: "Objective: win the national finals", 
          description: "This season is approached as a campaign: every decision must bring us closer to victory.",
          status: "target",
          icon: "🎯"
        },
        {
          date: "After 2026",
          title: "After France: the world",
          description: "The next objective is already set: obtain a place in the world finals and join the circle of the world's best teams.",
          status: "world",
          icon: "🌍"
        }
      ],
      methodology: {
        title: "Our Excellence Methodology", 
        items: [
          "Advanced aerodynamic work",
          "Continuous optimization",
          "Skills development",
          "Strong brand identity", 
          "Structured sponsorship strategy"
        ]
      },
      nextPage: "Discover Our Innovations",
      cta: "Explore Blog"
    }
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/10">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.8)_80%)]"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-cyan-300 text-sm font-semibold tracking-wider uppercase">
                {currentContent.subtitle}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {currentContent.title}
            </h1>
            
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
            </div>
            
            <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
              {currentContent.introduction}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {currentContent.timelineTitle}
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {currentContent.phases.map((phase, index) => (
                <TimelineItem 
                  key={index}
                  phase={phase}
                  index={index}
                  isActive={activePhase === index}
                  onHover={() => setActivePhase(index)}
                  language={currentLanguage}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {currentContent.methodology.title}
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentContent.methodology.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-700/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="text-cyan-400 text-2xl mb-3 group-hover:scale-110 transition-transform">
                  {['⚡', '🎯', '🚀', '⭐', '🔧'][index]}
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">{item}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Page CTA */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto px-6"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            {currentContent.nextPage}
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25"
          >
            {currentContent.cta}
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ phase, index, isActive, onHover, language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative flex items-center ${
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      }`}
      onMouseEnter={onHover}
    >
      {/* Content */}
      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 ${
            isActive 
              ? 'border-cyan-400 shadow-lg shadow-cyan-500/25' 
              : 'border-gray-600/30 hover:border-cyan-500/40'
          }`}
        >
          <div className="flex items-center mb-3">
            <div className="text-2xl mr-3">{phase.icon}</div>
            <span className="text-cyan-400 font-bold text-lg">{phase.date}</span>
          </div>
          <h4 className="text-white font-bold text-xl mb-3">{phase.title}</h4>
          <p className="text-gray-300 leading-relaxed">{phase.description}</p>
        </motion.div>
      </div>

      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={isActive ? { scale: 1.2 } : { scale: 1 }}
          className={`w-6 h-6 rounded-full border-4 transition-colors duration-300 ${
            isActive 
              ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' 
              : 'bg-gray-800 border-cyan-500'
          }`}
        />
      </div>

      {/* Spacer */}
      <div className="w-1/2"></div>
    </motion.div>
  );
};

export default StoryPage;