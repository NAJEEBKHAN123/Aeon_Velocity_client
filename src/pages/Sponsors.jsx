import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import sponsorLogo from "../assets/sponsor_logo.png";
import { Link } from "react-router-dom";
import Img from '../assets/Our_sponsor_img.jpeg'


const SPONSOR_CONTENT = {
  fr: {
    title: "Nos Sponsors",
    subtitle: "Partenaires de Notre Succès",
    introduction:
      "Notre ascension vers l'excellence est rendue possible grâce au soutien de nos partenaires visionnaires. Ensemble, nous repoussons les limites de l'innovation et de la performance.",
    currentSponsors: "Sponsors Actuels",
    previousSponsors: "Anciens Sponsors",
    becomeSponsor: "Devenir Sponsor",
    contactUs: "Nous Contacter",
    benefits: "Avantages du Sponsoring",
    tiers: {
      title: "Niveaux de Partenariat",
      championship: {
        name: "Championnat",
        price: "> 4500€",
        description: "Partenaire Principal",
        benefits: [
          "Logo principal sur la voiture",
          "Visibilité médias maximale",
          "Événements exclusifs",
          "Mentions sur tous les supports",
          "Espace branding dédié",
          "Accès aux données techniques",
        ],
      },
      grandPrix: {
        name: "Grand Prix",
        price: "< 4500€",
        description: "Partenaire Stratégique",
        benefits: [
          "Logo visible sur la voiture",
          "Visibilité sur les réseaux sociaux",
          "Invitations aux événements",
          "Contenu dédié",
          "Support technique prioritaire",
          "Présence sur le stand",
        ],
      },
      sprint: {
        name: "Sprint",
        price: "< 1000€",
        description: "Partenaire Officiel",
        benefits: [
          "Logo sur le stand",
          "Mentions régulières",
          "Support technique",
          "Kit de communication",
          "Photos professionnelles",
          "Interviews d'équipe",
        ],
      },
      start: {
        name: "Start",
        price: "< 500€",
        description: "Partenaire Soutien",
        benefits: [
          "Logo sur le site web",
          "Mentions occasionnelles",
          "Support communautaire",
          "Newsletter exclusive",
          "Accès aux résultats",
          "Rencontres avec l'équipe",
        ],
      },
    },
    ctaTitle: "Rejoignez Notre Aventure",
    ctaDescription:
      "Devenez partie intégrante de notre succès et bénéficiez d'une visibilité exceptionnelle dans le monde du STEM Racing.",
    ctaButton: "DEVENIR SPONSOR",
  },
  en: {
    title: "Our Sponsors",
    subtitle: "Partners in Our Success",
    introduction:
      "Our journey to excellence is made possible through the support of our visionary partners. Together, we push the boundaries of innovation and performance.",
    currentSponsors: "Current Sponsors",
    previousSponsors: "Previous Sponsors",
    becomeSponsor: "Become a Sponsor",
    contactUs: "Contact Us",
    benefits: "Sponsorship Benefits",
    tiers: {
      title: "Partnership Tiers",
      championship: {
        name: "Championship",
        price: "> 4500€",
        description: "Title Partner",
        benefits: [
          "Primary logo on the car",
          "Maximum media visibility",
          "Exclusive events",
          "Mentions on all materials",
          "Dedicated branding space",
          "Access to technical data",
        ],
      },
      grandPrix: {
        name: "Grand Prix",
        price: "< 4500€",
        description: "Strategic Partner",
        benefits: [
          "Prominent logo on the car",
          "Social media visibility",
          "Event invitations",
          "Dedicated content",
          "Priority technical support",
          "Presence on the pit stand",
        ],
      },
      sprint: {
        name: "Sprint",
        price: "< 1000€",
        description: "Official Partner",
        benefits: [
          "Logo on the pit stand",
          "Regular mentions",
          "Technical support",
          "Communication kit",
          "Professional photos",
          "Team interviews",
        ],
      },
      start: {
        name: "Start",
        price: "< 500€",
        description: "Supporting Partner",
        benefits: [
          "Logo on website",
          "Occasional mentions",
          "Community support",
          "Exclusive newsletter",
          "Access to results",
          "Team meetups",
        ],
      },
    },
    ctaTitle: "Join Our Journey",
    ctaDescription:
      "Become an integral part of our success and gain exceptional visibility in the world of STEM Racing.",
    ctaButton: "BECOME A SPONSOR",
  },
};

const SPONSORS_DATA = {
  current: [
    {
      id: 1,
      name: "NoLavision",
      logo: "/sponsor.png",
      tier: "start",
      description: "Home connect - Visionary technology partner",
      since: 2024,
    
    },
  ],
  previous: [],
};

const SponsorCard = ({ sponsor, isCurrent = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const tierGradients = {
    championship: "bg-gradient-to-r from-purple-500 to-pink-500",
    grandPrix: "bg-gradient-to-r from-yellow-500 to-orange-500",
    sprint: "bg-gradient-to-r from-gray-400 to-gray-600",
    start: "bg-gradient-to-r from-amber-700 to-amber-900",
  };

  const tierDisplayNames = {
    championship: "CHAMPIONSHIP",
    grandPrix: "GRAND PRIX",
    sprint: "SPRINT",
    start: "START",
  };

  return (
    <motion.div
      className="relative border-1 border-gray-400 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Tier Badge */}
      <div
        className={`absolute top-0 left-3 px-3 py-1 rounded-full text-white text-xs font-bold ${
          tierGradients[sponsor.tier]
        } shadow-lg z-10`}
      >
        {tierDisplayNames[sponsor.tier]}
      </div>

      {/* Sponsor Logo */}
      <div className="text-6xl text-center my-8 h-32 flex items-center justify-center relative z-10">
        {sponsor.logo.includes("/") ? (
          <img
            src={sponsorLogo}
            alt={`${sponsor.name} logo`}
            className="h-full max-w-full object-cover"
            onError={() => setLogoError(true)}
          />
        ) : (
          <span className="text-4xl text-gray-400">{sponsor.logo}</span>
        )}
      </div>

     
    </motion.div>
  );
};

const PartnershipTier = ({ tier, content, isHighlighted = false }) => {
  const tierStyles = {
    championship: {
      gradient: "from-purple-500 to-pink-500",
      bg: "bg-gradient-to-br from-purple-50 to-pink-50",
      border: "border-purple-200",
      shadow: "shadow-purple-200/50",
    },
    grandPrix: {
      gradient: "from-yellow-500 to-orange-500",
      bg: "bg-gradient-to-br from-yellow-50 to-orange-50",
      border: "border-yellow-200",
      shadow: "shadow-yellow-200/50",
    },
    sprint: {
      gradient: "from-gray-400 to-gray-600",
      bg: "bg-gradient-to-br from-gray-50 to-gray-100",
      border: "border-gray-200",
      shadow: "shadow-gray-200/50",
    },
    start: {
      gradient: "from-amber-700 to-amber-900",
      bg: "bg-gradient-to-br from-amber-50 to-amber-100",
      border: "border-amber-200",
      shadow: "shadow-amber-200/50",
    },
  };

  const style = tierStyles[tier];

  return (
    <motion.div
      className={`${style.bg} border-2 ${style.border} rounded-2xl p-6 shadow-lg ${style.shadow}
      ${isHighlighted ? "ring-2 ring-purple-300 z-10" : ""}
      transition-all duration-300 relative overflow-hidden flex flex-col min-h-[350px]`}
      whileHover={{ scale: 1.04 }}
      layout
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558603668-6572836d70c?auto=format&fit=crop&w=1000&q=80')] opacity-5 bg-cover bg-center"></div>

      {/* Header */}
      <div className="text-center mb-6 relative z-10">
        <div
          className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${style.gradient} text-white font-bold text-sm mb-3 shadow-lg ${
            isHighlighted ? "scale-110" : ""
          }`}
        >
          {content.name}
        </div>
        
        {/* Price Display - Simplified without INVESTMENT label */}
        <div className="mb-3">
          <div className="text-2xl font-bold text-gray-800">
            {content.price}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {content.name} Partner
        </h3>
        <p className="text-gray-600 text-sm">{content.description}</p>
      </div>

      {/* Benefits - Show all benefits without expand/collapse */}
      <div className="space-y-2 relative z-10 mb-4 flex-grow">
        {content.benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center text-gray-700"
          >
            <div
              className={`w-2 h-2 rounded-full bg-gradient-to-r ${style.gradient} mr-3 flex-shrink-0`}
            />
            <span className="text-sm">{benefit}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const SponsorsPage = () => {
  const { currentLanguage } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const currentContent = SPONSOR_CONTENT[currentLanguage] || SPONSOR_CONTENT.en;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const sponsorsData = useMemo(() => SPONSORS_DATA, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-900 relative overflow-hidden">
      {/* Main Background Image */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2825&q=80")',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2825&q=80"
            alt=""
            className="hidden"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

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

  <section className="relative py-20 md:py-28 text-center min-h-[70vh] flex items-center justify-center overflow-hidden">
  {/* Background with properly sized image */}
  <div className="absolute inset-0">
    {/* Main background image with proper sizing */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: 'cover', // Ensures image covers container without distortion
        backgroundPosition: 'center',
        transform: 'scale(1.1)', // Slight zoom to prevent white edges
        // For very large images, you might want:
        // backgroundSize: 'contain' // Shows full image without cropping
      }}
    />
    
    {/* Enhanced gradient overlays for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-white/30"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/10"></div>
    
    {/* Optional: Add this if image is still too dominant */}
    <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
  </div>

  {/* Content container */}
  <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 mb-8"
    >
      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3 animate-pulse"></div>
      <p className="text-gray-800 uppercase tracking-widest font-bold text-sm">
        {currentContent.subtitle}
      </p>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="text-4xl md:text-6xl font-black italic uppercase mb-8 leading-tight"
    >
      <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
        {currentContent.title}
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/40"
    >
      {currentContent.introduction}
    </motion.p>
  </div>
</section>

      {/* Partnership Tiers Section */}
      <section className="relative py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-0 md:px-0">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 md:px-4 lg:px-4 xl:px-16 relative z-10 min-h-[200px]">
            <PartnershipTier
              tier="championship"
              content={currentContent.tiers.championship}
              isHighlighted={true}
            />
            <PartnershipTier tier="grandPrix" content={currentContent.tiers.grandPrix} />
            <PartnershipTier
              tier="sprint"
              content={currentContent.tiers.sprint}
            />
            <PartnershipTier
              tier="start"
              content={currentContent.tiers.start}
            />
          </div>
        </div>
      </section>
      
      {/* Sponsors Grid Section */}
      <section className="relative py-20 min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl mx-auto max-w-7xl shadow-inner my-10"></div> 

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent"
          >
            {currentContent.currentSponsors}
          </motion.h2>

          <div className="flex flex-col items-center justify-center space-y-8">
            {sponsorsData.current.map((sponsor) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center w-full max-w-md"
              >
                <div> 
                  <SponsorCard sponsor={sponsor} isCurrent={true} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 text-center">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2825&q=80")',
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
          <Link to='/contact'>
            <motion.button
              className="px-12 py-4 bg-white cursor-pointer text-green-700 font-black text-lg rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 hover:shadow-3xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentContent.ctaButton}
            </motion.button>
          </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SponsorsPage;