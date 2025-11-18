import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const SPONSOR_CONTENT = {
  fr: {
    title: "Nos Sponsors",
    subtitle: "Partenaires de Notre Succès",
    introduction: "Notre ascension vers l'excellence est rendue possible grâce au soutien de nos partenaires visionnaires. Ensemble, nous repoussons les limites de l'innovation et de la performance.",
    currentSponsors: "Sponsors Actuels",
    previousSponsors: "Anciens Sponsors",
    becomeSponsor: "Devenir Sponsor",
    contactUs: "Nous Contacter",
    benefits: "Avantages du Sponsoring",
    tiers: {
      title: "Niveaux de Partenariat",
      platinum: {
        name: "Platine",
        description: "Partenaire Principal",
        benefits: [
          "Logo principal sur la voiture",
          "Visibilité médias maximale",
          "Événements exclusifs",
          "Mentions sur tous les supports",
          "Espace branding dédié",
          "Accès aux données techniques"
        ]
      },
      gold: {
        name: "Or",
        description: "Partenaire Stratégique",
        benefits: [
          "Logo visible sur la voiture",
          "Visibilité sur les réseaux sociaux",
          "Invitations aux événements",
          "Contenu dédié",
          "Support technique prioritaire",
          "Présence sur le stand"
        ]
      },
      silver: {
        name: "Argent",
        description: "Partenaire Officiel",
        benefits: [
          "Logo sur le stand",
          "Mentions régulières",
          "Support technique",
          "Kit de communication",
          "Photos professionnelles",
          "Interviews d'équipe"
        ]
      },
      bronze: {
        name: "Bronze",
        description: "Partenaire Soutien",
        benefits: [
          "Logo sur le site web",
          "Mentions occasionnelles",
          "Support communautaire",
          "Newsletter exclusive",
          "Accès aux résultats",
          "Rencontres avec l'équipe"
        ]
      }
    },
    ctaTitle: "Rejoignez Notre Aventure",
    ctaDescription: "Devenez partie intégrante de notre succès et bénéficiez d'une visibilité exceptionnelle dans le monde du STEM Racing.",
    ctaButton: "DEVENIR SPONSOR"
  },
  en: {
    title: "Our Sponsors",
    subtitle: "Partners in Our Success",
    introduction: "Our journey to excellence is made possible through the support of our visionary partners. Together, we push the boundaries of innovation and performance.",
    currentSponsors: "Current Sponsors",
    previousSponsors: "Previous Sponsors",
    becomeSponsor: "Become a Sponsor",
    contactUs: "Contact Us",
    benefits: "Sponsorship Benefits",
    tiers: {
      title: "Partnership Tiers",
      platinum: {
        name: "Platinum",
        description: "Title Partner",
        benefits: [
          "Primary logo on the car",
          "Maximum media visibility",
          "Exclusive events",
          "Mentions on all materials",
          "Dedicated branding space",
          "Access to technical data"
        ]
      },
      gold: {
        name: "Gold",
        description: "Strategic Partner",
        benefits: [
          "Prominent logo on the car",
          "Social media visibility",
          "Event invitations",
          "Dedicated content",
          "Priority technical support",
          "Presence on the pit stand"
        ]
      },
      silver: {
        name: "Silver",
        description: "Official Partner",
        benefits: [
          "Logo on the pit stand",
          "Regular mentions",
          "Technical support",
          "Communication kit",
          "Professional photos",
          "Team interviews"
        ]
      },
      bronze: {
        name: "Bronze",
        description: "Supporting Partner",
        benefits: [
          "Logo on website",
          "Occasional mentions",
          "Community support",
          "Exclusive newsletter",
          "Access to results",
          "Team meetups"
        ]
      }
    },
    ctaTitle: "Join Our Journey",
    ctaDescription: "Become an integral part of our success and gain exceptional visibility in the world of STEM Racing.",
    ctaButton: "BECOME A SPONSOR"
  }
};

const SPONSORS_DATA = {
  current: [
    {
      id: 1,
      name: "TechInnovate",
      logo: "🔬",
      tier: "platinum",
      description: "Leading technology innovation partner",
      since: 2024,
      website: "https://techinnovate.com"
    },
    {
      id: 2,
      name: "AeroDynamics Pro",
      logo: "✈️",
      tier: "gold",
      description: "Aerodynamic solutions specialist",
      since: 2024,
      website: "https://aerodynamicspro.com"
    },
    {
      id: 3,
      name: "Precision Engineering",
      logo: "⚙️",
      tier: "silver",
      description: "Precision manufacturing experts",
      since: 2024,
      website: "https://precision-eng.com"
    },
    {
      id: 4,
      name: "Quantum Materials",
      logo: "🔮",
      tier: "silver",
      description: "Advanced materials supplier",
      since: 2024,
      website: "https://quantummaterials.com"
    },
    {
      id: 5,
      name: "Local Motors",
      logo: "🏍️",
      tier: "bronze",
      description: "Local automotive support",
      since: 2024,
      website: "https://localmotors.com"
    },
    {
      id: 6,
      name: "Energy Solutions",
      logo: "⚡",
      tier: "bronze",
      description: "Power and energy systems",
      since: 2024,
      website: "https://energysolutions.com"
    }
  ],
  previous: [
    {
      id: 7,
      name: "StartUp Tech",
      logo: "🚀",
      tier: "bronze",
      description: "Initial technology supporter",
      since: 2023,
      until: 2024
    },
    {
      id: 8,
      name: "Campus Partners",
      logo: "🎓",
      tier: "bronze",
      description: "University partnership program",
      since: 2023,
      until: 2024
    }
  ]
};

const SponsorCard = ({ sponsor, isCurrent = true }) => {
  const [isHovered, setIsHovered] = useState(false);



  const tierGradients = {
    platinum: "bg-gradient-to-r from-purple-500 to-pink-500",
    gold: "bg-gradient-to-r from-yellow-500 to-orange-500",
    silver: "bg-gradient-to-r from-gray-400 to-gray-600",
    bronze: "bg-gradient-to-r from-amber-700 to-amber-900"
  };

  return (
    <motion.div
      className="relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-200/50 hover:shadow-3xl transition-all duration-300 cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50 opacity-60"></div>
      
      {/* Tier Badge */}
      <div className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-white text-xs font-bold ${tierGradients[sponsor.tier]} shadow-lg z-10`}>
        {sponsor.tier.toUpperCase()}
      </div>

      {/* Sponsor Logo */}
      <div className="text-6xl text-center mb-4 h-20 flex items-center justify-center relative z-10">
        {sponsor.logo}
      </div>

      {/* Sponsor Name */}
      <h3 className="text-xl font-bold text-center text-gray-800 mb-2 relative z-10">
        {sponsor.name}
      </h3>

      {/* Sponsor Description */}
      <p className="text-gray-600 text-center text-sm mb-4 relative z-10">
        {sponsor.description}
      </p>

      {/* Sponsor Details */}
      <div className="text-xs text-gray-500 text-center space-y-1 relative z-10">
        <p>Since {sponsor.since}</p>
        {!isCurrent && sponsor.until && (
          <p>Until {sponsor.until}</p>
        )}
      </div>

      {/* Hover Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-green-600/90 rounded-2xl flex items-center justify-center z-20"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="px-4 py-2 bg-white text-gray-800 rounded-lg font-semibold text-sm hover:scale-105 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                if (sponsor.website) window.open(sponsor.website, '_blank');
              }}
            >
              Learn More
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PartnershipTier = ({ tier, content, isHighlighted = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const tierStyles = {
    platinum: {
      gradient: "from-purple-500 to-pink-500",
      bg: "bg-gradient-to-br from-purple-50 to-pink-50",
      border: "border-purple-200",
      shadow: "shadow-purple-200/50"
    },
    gold: {
      gradient: "from-yellow-500 to-orange-500",
      bg: "bg-gradient-to-br from-yellow-50 to-orange-50",
      border: "border-yellow-200",
      shadow: "shadow-yellow-200/50"
    },
    silver: {
      gradient: "from-gray-400 to-gray-600",
      bg: "bg-gradient-to-br from-gray-50 to-gray-100",
      border: "border-gray-200",
      shadow: "shadow-gray-200/50"
    },
    bronze: {
      gradient: "from-amber-700 to-amber-900",
      bg: "bg-gradient-to-br from-amber-50 to-amber-100",
      border: "border-amber-200",
      shadow: "shadow-amber-200/50"
    }
  };

  const style = tierStyles[tier];

  return (
    <motion.div
      className={`${style.bg} border-2 ${style.border} rounded-2xl p-6 shadow-lg ${style.shadow} ${
        isHighlighted ? 'scale-105 shadow-2xl ring-2 ring-purple-300' : ''
      } transition-all duration-300 relative overflow-hidden`}
      whileHover={{ scale: 1.05 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558603668-6572836d70c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] opacity-5 bg-cover bg-center"></div>
      
      {/* Tier Header */}
      <div className="text-center mb-6 relative z-10">
        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${style.gradient} text-white font-bold text-sm mb-3 shadow-lg`}>
          {content.name}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{content.name} Partner</h3>
        <p className="text-gray-600">{content.description}</p>
      </div>

      {/* Benefits List */}
      <div className="space-y-3 relative z-10">
        {content.benefits.slice(0, isExpanded ? content.benefits.length : 3).map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center text-gray-700"
          >
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${style.gradient} mr-3 flex-shrink-0`} />
            <span className="text-sm">{benefit}</span>
          </motion.div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {content.benefits.length > 3 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-full mt-4 py-2 rounded-lg font-semibold transition-all duration-300 relative z-10 ${
            isExpanded 
              ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
              : `bg-gradient-to-r ${style.gradient} text-white hover:shadow-lg`
          }`}
        >
          {isExpanded ? 'Show Less' : 'Show More Benefits'}
        </button>
      )}
    </motion.div>
  );
};

const SponsorsPage = () => {
  const { currentLanguage } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const currentContent = SPONSOR_CONTENT[currentLanguage] || SPONSOR_CONTENT.en;


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-900 relative overflow-hidden">
      {/* Main Background Image */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-20' : 'opacity-0'
          }`}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2825&q=80")',
          }}
        >
          {/* Preload image */}
          <img 
            src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2825&q=80" 
            alt="" 
            className="hidden" 
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-green-900/10"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
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
          className="absolute bottom-40 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
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
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 text-center min-h-[50vh] flex items-center justify-center">
        {/* Additional Hero Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 mb-6"
          >
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3 animate-pulse shadow-lg shadow-green-400/50"></div>
            <p className="text-gray-700 uppercase tracking-widest font-bold text-sm">
              {currentContent.subtitle}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold italic tracking-wider uppercase mb-6 md:mb-8 leading-tight px-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            {currentContent.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/30"
          >
            {currentContent.introduction}
          </motion.p>
        </div>
      </section>

      {/* Sponsors Grid Section */}


      {/* Partnership Tiers Section */}
      <section className="relative py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-0 md:px-0">
          {/* Section Background */}
          <div className="absolute inset-0 -inset-y-24 bg-gradient-to-b from-white/40 via-blue-50/60 to-indigo-50/70 backdrop-blur-sm rounded-3xl"></div>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black text-center mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent relative z-10"
          >
            {currentContent.tiers.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto relative z-10"
          >
            {currentContent.benefits}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-5 md:px-5 lg:px-6 xl:px-16 relative z-10">
            <PartnershipTier tier="platinum" content={currentContent.tiers.platinum} isHighlighted={true} />
            <PartnershipTier tier="gold" content={currentContent.tiers.gold} />
            <PartnershipTier tier="silver" content={currentContent.tiers.silver} />
            <PartnershipTier tier="bronze" content={currentContent.tiers.bronze} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 text-center">
        {/* CTA Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2825&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-blue-600/90 to-purple-600/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/20"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              {currentContent.ctaTitle}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              {currentContent.ctaDescription}
            </p>
            <motion.button
              className="px-12 py-4 bg-white text-green-700 font-black text-lg rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 hover:shadow-3xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentContent.ctaButton}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SponsorsPage;