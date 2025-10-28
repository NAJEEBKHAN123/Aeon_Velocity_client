import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const CtaSection = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    fr: {
      title: "Rejoignez l'Excellence",
      subtitle: "Partenaire Stratégique de l'Innovation Étudiante",
      content: "Notre objectif est clair : représenter la France aux finales mondiales et viser le titre suprême. Pour réussir, nous nous entourons de partenaires prêts à faire partie d'une ascension ambitieuse. Ensemble, transformons une vision en victoire mondiale.",
      button: "Devenir Partenaire Stratégique",
      subtext: "et propulsez l'innovation étudiante sur la scène internationale.",
      stats: {
        partners: "Partenaires Élite",
        impact: "Impact Mondial", 
        innovation: "Innovation Brevetée"
      }
    },
    en: {
      title: "Join Excellence",
      subtitle: "Strategic Partner of Student Innovation", 
      content: "Our goal is clear: represent France in the world finals and aim for the supreme title. To succeed, we surround ourselves with partners ready to be part of an ambitious ascent. Together, let's transform a vision into a world victory.",
      button: "Become Strategic Partner",
      subtext: "and propel student innovation onto the international stage.",
      stats: {
        partners: "Elite Partners",
        impact: "Global Impact",
        innovation: "Patented Innovation"
      }
    }
  };

  const currentContent = content[currentLanguage];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <motion.div 
        className="relative max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-cyan-300 text-sm font-semibold tracking-wider uppercase">
              {currentContent.subtitle}
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {currentContent.title}
            <span className="block text-transparent bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text">
              Aeon Velocity
            </span>
          </h2>
          
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>
        </motion.div>

        {/* Main Content Card */}
        <motion.div 
          className="relative mb-16"
          variants={itemVariants}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-12 lg:p-16">
            <motion.p 
              className="text-2xl lg:text-3xl text-gray-200 leading-relaxed text-center font-light mb-12"
              variants={itemVariants}
            >
              {currentContent.content}
            </motion.p>

            {/* Stats Bar */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              variants={containerVariants}
            >
              {[
                { number: "15+", label: currentContent.stats.partners },
                { number: "50K+", label: currentContent.stats.impact },
                { number: "12+", label: currentContent.stats.innovation }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                  <div className="w-8 h-0.5 bg-cyan-500/50 mx-auto mt-3 group-hover:bg-cyan-400 transition-colors"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link
                  to="/sponsors"
                  className="group relative inline-flex items-center px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
                >
                  {/* Button Background Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  
                  {/* Button Content */}
                  <span className="relative z-10 flex items-center">
                    {currentContent.button}
                    <svg 
                      className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
              
              <motion.p 
                className="text-cyan-200/80 font-medium mt-6 text-lg"
                variants={itemVariants}
              >
                {currentContent.subtext}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              ISO 9001 Certified
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              World Competition Ready
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Elite Engineering Team
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
    </section>
  );
};

export default CtaSection;