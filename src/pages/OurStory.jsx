import React, { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import Img from '../assets/StemRaching/stem_racing_right2.jpeg';

const STORY_CONTENT = {
  fr: {
    title: "Notre Aventure",
    subtitle: "L'Ascension d'une Équipe d'Élite",
    introduction:
      "Tout a commencé par une idée. Très vite, c'est devenu une mission : élever une équipe française jusqu'au sommet mondial du challenge STEM Racing. Depuis notre création, nous avons évolué étape par étape, apprenant, corrigeant, accélérant… et redéfinissant nos ambitions. Voici notre progression :",
    timelineTitle: "Chronologie de l'Ascension",
    nextPage: "Découvrez nos Innovations",
    cta: "Nous sponsoriser ",
    achievementsTitle: "Réalisations Clés",
    showMore: "Voir plus",
    showLess: "Voir moins",
    ctaDescription: "Découvrez comment nous repoussons les limites de l'innovation dans la course STEM"
  },
  en: {
    title: "Our Story",
    subtitle: "The Rise of an Elite Team",
    introduction:
      "It all started with an idea. Very quickly, it became a mission: to elevate a French team to the world summit of the STEM Racing challenge. Since our creation, we have evolved step by step, learning, correcting, accelerating... and redefining our ambitions. Here is our progress:",
    timelineTitle: "Timeline of the Ascent",
    nextPage: "Discover Our Innovations",
    cta: "SPONSOR US",
    achievementsTitle: "Key Achievements",
    showMore: "Show More",
    showLess: "Show Less",
    ctaDescription: "Discover how we're pushing the boundaries of innovation in STEM racing"
  },
};

const TIMELINE_DATA = {
  fr: [
    {
      date: "Décembre 2023",
      title: "Naissance d'un rêve",
      description: "Première équipe formée avec un objectif : découvrir le challenge et participer à la compétition.",
      icon: "🎯",
      gradient: "from-purple-500 to-pink-500",
      status: "Terminé",
      achievements: [
        "Formation de l'équipe",
        "Découverte du challenge",
        "Planification initiale",
      ],
    },
    {
      date: "Mai 2024",
      title: "Première finale nationale (6ème place)",
      description: "Quelques mois seulement après nos débuts, nous concluons notre première finale à la 6ème place. Première preuve que nous pouvons exister parmi les meilleurs.",
      icon: "🏆",
      gradient: "from-yellow-500 to-orange-500",
      status: "Réalisé",
      achievements: [
        "6ème place nationale",
        "Première compétition",
        "Validation de l'équipe",
      ],
    },
    {
      date: "Juin – Décembre 2024",
      title: "Analyse et reconstruction",
      description: "Nous identifions nos faiblesses et repensons toute notre stratégie : ingénierie, aérodynamique, financement, communication.",
      icon: "🔄",
      gradient: "from-green-500 to-cyan-500",
      status: "Terminé",
      achievements: [
        "Refonte stratégique",
        "Analyse des faiblesses",
        "Amélioration des processus",
      ],
    },
    {
      date: "Mars 2025",
      title: "Deuxième finale nationale (6ème place)",
      description: "Régulier, mais un plafond est atteint. Ce classement devient un déclic : il ne suffit plus 'd'être présent'.",
      icon: "⚡",
      gradient: "from-blue-500 to-purple-600",
      status: "Réalisé",
      achievements: [
        "Performance constante",
        "Référence établie",
        "Nouveaux objectifs fixés",
      ],
    },
    {
      date: "Avril 2025",
      title: "Transformation : naissance d'Aeon Velocity",
      description: "Nouveau nom, nouvelle vision, nouvelle structure. L'ambition est désormais assumée : viser la victoire nationale en 2026.",
      icon: "🚀",
      gradient: "from-red-500 to-pink-600",
      status: "En Cours",
      achievements: [
        "Identité de marque",
        "Changements structurels",
        "Affinement de la vision",
      ],
    },
    {
      date: "2025 – 2026",
      title: "L'ère Aeon Velocity",
      description: "Nous adoptons un modèle d'équipe inspiré des structures professionnelles : travail aérodynamique avancé, optimisation continue, développement des compétences, identité de marque forte, stratégie de sponsoring structurée.",
      icon: "⭐",
      gradient: "from-indigo-500 to-blue-600",
      status: "Actuel",
      achievements: [
        "Structure professionnelle",
        "Ingénierie avancée",
        "Stratégie de sponsoring",
      ],
    },
    {
      date: "Mars 2026",
      title: "Objectif : gagner la finale nationale",
      description: "Cette saison est abordée comme une campagne : chaque décision doit nous rapprocher de la victoire.",
      icon: "🎯",
      gradient: "from-cyan-500 to-teal-500",
      status: "À Venir",
      achievements: [
        "Campagne victoire",
        "Décisions stratégiques",
        "Optimisation des performances",
      ],
    },
    {
      date: "Après 2026",
      title: "Après la France : le monde",
      description: "Le prochain objectif est déjà fixé : obtenir une place en finale mondiale et rejoindre le cercle des meilleures équipes mondiales.",
      icon: "🌍",
      gradient: "from-emerald-500 to-green-600",
      status: "Futur",
      achievements: [
        "Compétition mondiale",
        "Reconnaissance internationale",
        "Statut d'équipe d'élite",
      ],
    },
  ],
  en: [
    {
      date: "December 2023",
      title: "Birth of a dream",
      description: "First team formed with one goal: discover the challenge and enter the competition.",
      icon: "🎯",
      gradient: "from-purple-500 to-pink-500",
      status: "Completed",
      achievements: [
        "Team formation",
        "Challenge discovery",
        "Initial planning",
      ],
    },
    {
      date: "May 2024",
      title: "First national finals (6th place)",
      description: "Just a few months after our beginnings, we conclude our first final in 6th place. First proof that we can exist among the best.",
      icon: "🏆",
      gradient: "from-yellow-500 to-orange-500",
      status: "Achieved",
      achievements: [
        "6th place national",
        "First competition",
        "Team validation",
      ],
    },
    {
      date: "June – December 2024",
      title: "Analysis and reconstruction",
      description: "We identify our weaknesses and rethink our entire strategy: engineering, aerodynamics, funding, communication.",
      icon: "🔄",
      gradient: "from-green-500 to-cyan-500",
      status: "Completed",
      achievements: [
        "Strategy overhaul",
        "Weakness analysis",
        "Process improvement",
      ],
    },
    {
      date: "March 2025",
      title: "Second national final (6th place)",
      description: "Consistent, but a ceiling is reached. This ranking becomes a trigger: it's no longer enough 'to be there'.",
      icon: "⚡",
      gradient: "from-blue-500 to-purple-600",
      status: "Achieved",
      achievements: [
        "Consistent performance",
        "Benchmark established",
        "New goals set",
      ],
    },
    {
      date: "April 2025",
      title: "Transformation: birth of Aeon Velocity",
      description: "New name, new vision, new structure. The ambition is now assumed: aim for national victory in 2026.",
      icon: "🚀",
      gradient: "from-red-500 to-pink-600",
      status: "In Progress",
      achievements: [
        "Brand identity",
        "Structural changes",
        "Vision refinement",
      ],
    },
    {
      date: "2025 – 2026",
      title: "The Aeon Velocity era",
      description: "We adopt a team model inspired by professional structures: advanced aerodynamic work, continuous optimization, skills development, strong brand identity, structured sponsorship strategy.",
      icon: "⭐",
      gradient: "from-indigo-500 to-blue-600",
      status: "Current",
      achievements: [
        "Professional structure",
        "Advanced engineering",
        "Sponsorship strategy",
      ],
    },
    {
      date: "March 2026",
      title: "Objective: win the national finals",
      description: "This season is approached as a campaign: every decision must bring us closer to victory.",
      icon: "🎯",
      gradient: "from-cyan-500 to-teal-500",
      status: "Upcoming",
      achievements: [
        "Victory campaign",
        "Strategic decisions",
        "Performance optimization",
      ],
    },
    {
      date: "After 2026",
      title: "After France: the world",
      description: "The next objective is already set: obtain a place in the world finals and join the circle of the world's best teams.",
      icon: "🌍",
      gradient: "from-emerald-500 to-green-600",
      status: "Future",
      achievements: [
        "World competition",
        "Global recognition",
        "Elite team status",
      ],
    },
  ],
};

const StatusBadge = ({ status }) => {
  const statusConfig = useMemo(() => ({
    // French statuses
    Terminé: "bg-green-100 text-green-800 border border-green-200",
    Réalisé: "bg-blue-100 text-blue-800 border border-blue-200",
    "En Cours": "bg-yellow-100 text-yellow-800 border border-yellow-200",
    Actuel: "bg-purple-100 text-purple-800 border border-purple-200",
    "À Venir": "bg-orange-100 text-orange-800 border border-orange-200",
    Futur: "bg-gray-100 text-gray-800 border border-gray-200",
    // English statuses
    Completed: "bg-green-100 text-green-800 border border-green-200",
    Achieved: "bg-blue-100 text-blue-800 border border-blue-200",
    "In Progress": "bg-yellow-100 text-yellow-800 border border-yellow-200",
    Current: "bg-purple-100 text-purple-800 border border-purple-200",
    Upcoming: "bg-orange-100 text-orange-800 border border-orange-200",
    Future: "bg-gray-100 text-gray-800 border border-gray-200",
  }), []);

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusConfig[status] || statusConfig.Futur}`}
    >
      {status}
    </span>
  );
};

const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      animate={{
        scale: [1.1, 1, 1.1],
        rotate: [90, 0, 90],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, -90, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>
);

const HeroSection = ({ currentContent }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section 
      className="relative py-8 mt-16 md:mt-4 md:py-24 text-center min-h-[60vh] md:min-h-[80vh] flex items-center justify-center"
      aria-labelledby="hero-title"
    >
      {/* Background Image with Your Imported Image */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${Img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Preload your actual image */}
          <img 
            src={Img} 
            alt="" 
            className="hidden" 
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              console.warn('Failed to load background image');
              setImageLoaded(true);
            }}
          />
        </div>
        
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-cyan-900/30"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-6"
        style={{ willChange: 'transform' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 mb-6 md:mb-8"
        >
          <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-2 md:mr-3 animate-pulse shadow-lg shadow-cyan-400/50"></div>
          <p className="text-white uppercase tracking-widest font-bold text-xs md:text-sm">
            {currentContent.subtitle}
          </p>
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-8xl font-extrabold italic text-white tracking-wider uppercase mb-6 md:mb-8 leading-tight px-4"
        >
          {currentContent.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-2xl border border-white/20"
        >
          {currentContent.introduction}
        </motion.p>
      </motion.div>
    </section>
  );
};

// Individual Timeline Item Component
const TimelineItem = ({ 
  item, 
  index, 
  isActive, 
  onToggle, 
  currentContent
}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(index);
    }
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        role="button"
        tabIndex={0}
        className={`relative bg-white/80 backdrop-blur-md border rounded-3xl p-6 md:p-8 shadow-2xl cursor-pointer h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
          isActive 
            ? 'border-cyan-300 shadow-2xl scale-[1.02]' 
            : 'border-gray-200/50'
        }`}
        onClick={() => onToggle(index)}
        onKeyDown={handleKeyDown}
        aria-expanded={isActive}
        aria-label={`${item.title}, ${item.date}. Click to ${isActive ? 'collapse' : 'expand'} details`}
      >
        {/* Icon with Gradient Background */}
        <div
          className={`absolute -top-4 md:-top-6 left-6 md:left-8 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-2xl md:text-3xl text-white bg-gradient-to-r ${item.gradient} shadow-2xl ${
            isActive ? 'scale-110' : ''
          } transition-transform duration-300`}
        >
          {item.icon}
        </div>

        {/* Status Badge */}
        <div className="self-end mb-3 md:mb-4">
          <StatusBadge status={item.status} />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex-1">
            <p className="text-xs md:text-sm uppercase tracking-widest text-cyan-600 font-bold mb-2">
              {item.date}
            </p>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800 leading-tight">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-3 md:mb-4">
              {item.description}
            </p>

            {/* Expandable Achievements */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: 1, 
                    height: "auto"
                  }}
                  exit={{ 
                    opacity: 0, 
                    height: 0
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-200 pt-3 md:pt-4">
                    <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">
                      {currentContent.achievementsTitle}:
                    </h4>
                    <ul className="space-y-1 md:space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 + 0.2 }}
                          className="flex items-center text-xs md:text-sm text-gray-600"
                        >
                          <div
                            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${item.gradient} mr-2 md:mr-3 flex-shrink-0`}
                          />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Expand Indicator - Always at bottom */}
          <div className="mt-auto pt-3 md:pt-4 border-t border-gray-200/50">
            <div
              className={`flex items-center justify-center text-xs md:text-sm font-semibold transition-colors duration-300 ${
                isActive ? "text-cyan-600" : "text-gray-500"
              }`}
            >
              {isActive ? currentContent.showLess : currentContent.showMore}
              <motion.svg
                className={`w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 transition-transform duration-300 ${
                  isActive ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TimelineSection = ({ currentContent, timeline }) => {
  const [activeItems, setActiveItems] = useState({});

  const togglePhase = useCallback((index) => {
    setActiveItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  }, []);

  const isPhaseActive = useCallback((index) => {
    return !!activeItems[index];
  }, [activeItems]);

  return (
    <section className="relative py-16 md:py-24" aria-labelledby="timeline-title">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.h2
          id="timeline-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black text-center mb-12 md:mb-20 bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-700 bg-clip-text text-transparent"
        >
          {currentContent.timelineTitle}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isActive={isPhaseActive(index)}
              onToggle={togglePhase}
              currentContent={currentContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ currentContent }) => (
  <section className="relative py-16 md:py-24 text-center overflow-hidden" aria-labelledby="cta-title">
    {/* Animated Background */}
    <div className="absolute inset-0">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 bg-black/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </div>

    {/* Floating Elements */}
    <motion.div
      className="absolute top-4 md:top-10 left-4 md:left-10 text-4xl md:text-6xl opacity-20"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      🚀
    </motion.div>
    <motion.div
      className="absolute bottom-4 md:bottom-10 right-4 md:right-10 text-4xl md:text-6xl opacity-20"
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
    >
      ⭐
    </motion.div>

    <div className="relative z-10 text-white max-w-4xl mx-auto px-4 md:px-6">
      <motion.h2
        id="cta-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-4xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight"
      >
        {currentContent.nextPage}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-blue-100 leading-relaxed"
      >
        {currentContent.ctaDescription}
      </motion.p>

     <Link to='/sponsors'>
      <motion.button
        className="px-8 md:px-12 py-3 md:py-4 bg-white cursor-pointer text-blue-700 font-black text-base md:text-lg rounded-2xl shadow-2xl transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {currentContent.cta}
      </motion.button>
      </Link>
    </div>
  </section>
);

const StoryPage = () => {
  const { currentLanguage } = useLanguage();
  const currentContent = STORY_CONTENT[currentLanguage] || STORY_CONTENT.en;
  const currentTimeline = TIMELINE_DATA[currentLanguage] || TIMELINE_DATA.en;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-900 relative overflow-hidden">
      <BackgroundElements />
      
      <header>
        <HeroSection currentContent={currentContent} />
      </header>

      <main>
        <TimelineSection 
          currentContent={currentContent} 
          timeline={currentTimeline} 
        />
      </main>

      <footer>
        <CTASection currentContent={currentContent} />
      </footer>
    </article>
  );
};

export default StoryPage;