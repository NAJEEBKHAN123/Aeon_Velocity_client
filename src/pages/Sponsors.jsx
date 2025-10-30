import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SponsorsPage = () => {
  const { currentLanguage } = useLanguage();
  const [activeTier, setActiveTier] = useState('all');

  const content = {
    fr: {
      title: "Partenaires",
      subtitle: "Accélérateurs de Notre Excellence",
      description: "Chaque entreprise présente ici a choisi d'accompagner une équipe en pleine ascension vers un objectif national, puis mondial. Grâce à ces partenaires, nous pouvons repousser les limites de la performance étudiante et atteindre un niveau digne des plus grandes équipes STEM mondiales.",
      tiers: {
        all: "Tous les Partenaires",
        title: "Nos Partenaires Stratégiques",
        platinum: "Partenaire Platine",
        gold: "Partenaire Or", 
        silver: "Partenaire Argent",
        technical: "Partenaire Technique"
      },
      benefits: {
        title: "Avantages du Partenariat",
        visibility: "Visibilité Internationale",
        innovation: "Accès à l'Innovation",
        talent: "Recrutement de Talents",
        csr: "Impact RSE",
        networking: "Réseau d'Élite"
      },
      cta: {
        main: "Devenir Partenaire",
        secondary: "Télécharger le Dossier",
        contact: "Contactez-Nous"
      },
      stats: {
        partners: "Partenaires Actifs",
        reach: "Portée Mondiale",
        innovation: "Projets Innovants"
      }
    },
    en: {
      title: "Sponsors",
      subtitle: "Accelerators of Our Excellence", 
      description: "Each company featured here has chosen to support a team on the rise towards a national, then world objective. Thanks to these partners, we can push the limits of student performance and reach a level worthy of the world's greatest STEM teams.",
      tiers: {
        all: "All Partners",
        title: "Our Strategic Partners",
        platinum: "Platinum Partner",
        gold: "Gold Partner",
        silver: "Silver Partner", 
        technical: "Technical Partner"
      },
      benefits: {
        title: "Partnership Benefits",
        visibility: "International Visibility",
        innovation: "Access to Innovation", 
        talent: "Talent Recruitment",
        csr: "CSR Impact",
        networking: "Elite Networking"
      },
      cta: {
        main: "Become a Partner",
        secondary: "Download Brochure", 
        contact: "Contact Us"
      },
      stats: {
        partners: "Active Partners",
        reach: "Global Reach",
        innovation: "Innovation Projects"
      }
    }
  };

  const currentContent = content[currentLanguage];

  // Sample sponsors data
  const sponsors = [
    {
      id: 1,
      name: "TechInnovate",
      tier: "platinum",
      logo: "🚀",
      description: {
        fr: "Leader en solutions technologiques avancées",
        en: "Leader in advanced technological solutions"
      },
      since: "2024",
      contribution: {
        fr: "Soutien stratégique et expertise technique",
        en: "Strategic support and technical expertise"
      }
    },
    {
      id: 2,
      name: "AeroDynamics Pro",
      tier: "platinum", 
      logo: "✈️",
      description: {
        fr: "Spécialiste en aérodynamique de pointe",
        en: "Specialist in cutting-edge aerodynamics"
      },
      since: "2024",
      contribution: {
        fr: "Expertise aérodynamique et ressources matérielles",
        en: "Aerodynamic expertise and material resources"
      }
    },
    {
      id: 3,
      name: "FutureMaterials",
      tier: "gold",
      logo: "🔬",
      description: {
        fr: "Innovateur en matériaux composites",
        en: "Innovator in composite materials"
      },
      since: "2024",
      contribution: {
        fr: "Fourniture de matériaux haute performance",
        en: "Supply of high-performance materials"
      }
    },
    {
      id: 4,
      name: "PrecisionTools",
      tier: "gold",
      logo: "⚙️",
      description: {
        fr: "Fabricant d'outils de précision",
        en: "Precision tools manufacturer"
      },
      since: "2024", 
      contribution: {
        fr: "Équipement de fabrication et support technique",
        en: "Manufacturing equipment and technical support"
      }
    },
    {
      id: 5,
      name: "EduTech Solutions",
      tier: "silver",
      logo: "🎓",
      description: {
        fr: "Plateforme éducative technologique",
        en: "Technological educational platform"
      },
      since: "2024",
      contribution: {
        fr: "Support éducatif et ressources d'apprentissage",
        en: "Educational support and learning resources"
      }
    },
    {
      id: 6, 
      name: "DataFlow Analytics",
      tier: "silver",
      logo: "📊",
      description: {
        fr: "Expert en analyse de données performantes",
        en: "Expert in performance data analysis"
      },
      since: "2024",
      contribution: {
        fr: "Analyse de données et optimisation des performances",
        en: "Data analysis and performance optimization"
      }
    },
    {
      id: 7,
      name: "CAD Masters",
      tier: "technical",
      logo: "💻", 
      description: {
        fr: "Solutions de conception assistée par ordinateur",
        en: "Computer-aided design solutions"
      },
      since: "2024",
      contribution: {
        fr: "Licences logicielles et formation",
        en: "Software licenses and training"
      }
    }
  ];

  const partnershipTiers = [
    {
      id: "platinum",
      name: currentContent.tiers.platinum,
      investment: "50k€+",
      color: "cyan",
      benefits: [
        currentLanguage === 'fr' ? "Logo principal sur la voiture" : "Primary logo on the car",
        currentLanguage === 'fr' ? "Présence dans tous les médias" : "Presence in all media",
        currentLanguage === 'fr' ? "Accès exclusif à l'équipe" : "Exclusive team access",
        currentLanguage === 'fr' ? "Place au conseil stratégique" : "Strategic board seat"
      ]
    },
    {
      id: "gold", 
      name: currentContent.tiers.gold,
      investment: "25k€+",
      color: "blue",
      benefits: [
        currentLanguage === 'fr' ? "Logo visible sur la voiture" : "Visible logo on the car",
        currentLanguage === 'fr' ? "Couverture médiatique dédiée" : "Dedicated media coverage",
        currentLanguage === 'fr' ? "Visibilité sur nos réseaux" : "Visibility on our networks",
        currentLanguage === 'fr' ? "Invitations aux événements" : "Event invitations"
      ]
    },
    {
      id: "silver",
      name: currentContent.tiers.silver,
      investment: "10k€+", 
      color: "cyan",
      benefits: [
        currentLanguage === 'fr' ? "Logo sur le stand d'exposition" : "Logo on exhibition stand",
        currentLanguage === 'fr' ? "Mention dans les communications" : "Mention in communications",
        currentLanguage === 'fr' ? "Accès aux innovations" : "Access to innovations",
        currentLanguage === 'fr' ? "Support technique" : "Technical support"
      ]
    },
    {
      id: "technical",
      name: currentContent.tiers.technical,
      investment: "Valeur équivalente",
      color: "blue",
      benefits: [
        currentLanguage === 'fr' ? "Échange de compétences" : "Skills exchange",
        currentLanguage === 'fr' ? "Visibilité technique" : "Technical visibility", 
        currentLanguage === 'fr' ? "Accès aux talents" : "Access to talents",
        currentLanguage === 'fr' ? "Projets collaboratifs" : "Collaborative projects"
      ]
    }
  ];

  const filteredSponsors = activeTier === 'all' 
    ? sponsors 
    : sponsors.filter(sponsor => sponsor.tier === activeTier);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-cyan-900/10">
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
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
              {currentContent.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                7+
              </div>
              <div className="text-gray-300 font-semibold">
                {currentContent.stats.partners}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-gray-300 font-semibold">
                {currentContent.stats.reach}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                12+
              </div>
              <div className="text-gray-300 font-semibold">
                {currentContent.stats.innovation}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {currentContent.tiers.title}
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Tier Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTier('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTier === 'all'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
              }`}
            >
              {currentContent.tiers.all}
            </motion.button>
            {partnershipTiers.map((tier) => (
              <motion.button
                key={tier.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTier(tier.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTier === tier.id
                    ? `bg-${tier.color}-500 text-white shadow-lg shadow-${tier.color}-500/25`
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
                }`}
              >
                {tier.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Sponsors Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredSponsors.map((sponsor, index) => (
              <SponsorCard 
                key={sponsor.id}
                sponsor={sponsor}
                index={index}
                currentLanguage={currentLanguage}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {currentLanguage === 'fr' ? "Nos Offres de Partenariat" : "Our Partnership Offers"}
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTiers.map((tier, index) => (
              <PartnershipTierCard 
                key={tier.id}
                tier={tier}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {currentLanguage === 'fr' 
                ? "Rejoignez Notre Success Story" 
                : "Join Our Success Story"
              }
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {currentLanguage === 'fr'
                ? "Devenez partie intégrante de notre ascension vers le titre mondial et bénéficiez d'une visibilité exceptionnelle."
                : "Become an integral part of our ascent to the world title and benefit from exceptional visibility."
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                {currentContent.cta.main}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                {currentContent.cta.secondary}
              </motion.button>
            </div>
            
            <div className="mt-8 text-cyan-300 font-semibold">
              {currentContent.cta.contact}: contact@aeon-velocity.com
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Sponsor Card Component
const SponsorCard = ({ sponsor, index, currentLanguage }) => {
  const tierColors = {
    platinum: 'cyan',
    gold: 'blue',
    silver: 'cyan',
    technical: 'blue'
  };

  const color = tierColors[sponsor.tier];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group cursor-pointer"
    >
      <div className={`bg-gray-800/40 backdrop-blur-sm rounded-2xl border-2 border-${color}-500/20 hover:border-${color}-400/40 transition-all duration-300 overflow-hidden h-full`}>
        {/* Header */}
        <div className={`p-6 bg-gradient-to-br from-${color}-500/10 to-${color}-600/10 border-b border-gray-700/30`}>
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl">{sponsor.logo}</div>
            <span className={`text-${color}-400 text-sm font-semibold px-3 py-1 bg-${color}-500/20 rounded-full`}>
              {sponsor.since}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {sponsor.name}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300 leading-relaxed mb-4">
            {sponsor.description[currentLanguage]}
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-400">
              <div className={`w-2 h-2 bg-${color}-400 rounded-full mr-2`}></div>
              {sponsor.contribution[currentLanguage]}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Partnership Tier Card Component
const PartnershipTierCard = ({ tier, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`bg-gradient-to-br from-${tier.color}-500/10 to-${tier.color}-600/10 backdrop-blur-sm rounded-2xl border-2 border-${tier.color}-500/20 p-6 text-center group cursor-pointer`}
    >
      <div className={`text-${tier.color}-400 text-3xl mb-4 group-hover:scale-110 transition-transform`}>
        {tier.id === 'platinum' ? '👑' : tier.id === 'gold' ? '🥇' : tier.id === 'silver' ? '🥈' : '🔧'}
      </div>
      
      <h3 className={`text-${tier.color}-400 font-bold text-xl mb-2`}>
        {tier.name}
      </h3>
      
      <div className="text-white text-2xl font-bold mb-4">
        {tier.investment}
      </div>
      
      <ul className="space-y-2 text-sm text-gray-300">
        {tier.benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-center">
            <div className={`w-1.5 h-1.5 bg-${tier.color}-400 rounded-full mr-2`}></div>
            {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SponsorsPage;