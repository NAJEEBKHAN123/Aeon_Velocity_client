import React from "react";
import hero_img from "../../assets/StemRaching/leftImg.jpg";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, type: "spring", stiffness: 80, damping: 15 },
  }),
};

const Hero = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      mainTitle: "STEM RACING",
      tagline1: "We don't aim to compete",
      tagline2: "We are built to dominate",
      teamName: "Aeon Velocity",
      button: "Join The Revolution",
    },
    fr: {
      mainTitle: "STEM RACING",
      tagline1: "Nous ne visons pas la compétition",
      tagline2: "Nous sommes conçus pour dominer",
      teamName: "Aeon Velocity",
      button: "Rejoignez la Révolution",
    },
  };

  const currentContent = content[currentLanguage];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero_img}
          alt="Hero Background"
          className="w-full h-full object-cover object-center md:scale-105 brightness-110 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60 md:from-black/20 md:via-transparent md:to-black/40"></div>
      </div>

      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-lg shadow-cyan-400/30 z-20"></div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center min-h-screen py-8 sm:py-12 md:py-16">
          
          {/* Text Content - Centered on mobile, left aligned on larger screens */}
          <div className="text-center md:text-left w-full max-w-3xl mx-auto md:mx-0 md:pl-8 lg:pl-12 xl:pl-16">
            
            {/* Main Title */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0}
              variants={textVariants}
              className="text-3xl xs:text-3xl lg:text-5xl font-extrabold uppercase tracking-tight 
                bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
                bg-clip-text text-transparent 
                drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]
                md:drop-shadow-[0_0_25px_rgba(0,255,255,0.8)] 
                hover:drop-shadow-[0_0_30px_rgba(255,0,255,0.9)]
                md:hover:drop-shadow-[0_0_40px_rgba(255,0,255,1)] 
                transition-shadow duration-300 leading-tight sm:leading-normal"
            >
              {currentContent.mainTitle}
            </motion.h1>

            {/* Taglines */}
            <motion.div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6 md:mt-8 md:pl-2 md:border-l-4 md:border-cyan-400/40">
              <motion.p
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-gray-200 font-semibold uppercase text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] md:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              >
                {currentContent.tagline1}
              </motion.p>
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-white font-black uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] md:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] leading-tight"
              >
                {currentContent.tagline2}
              </motion.p>
            </motion.div>

            {/* Team Name */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-4 sm:mt-6 md:mt-8"
            >
              <p className="text-purple-400 font-extrabold uppercase text-2xl sm:text-3xl md:text-4xl tracking-widest drop-shadow-[0_0_20px_rgba(128,0,255,0.8)] md:drop-shadow-[0_0_25px_rgba(128,0,255,0.8)] animate-pulse">
                {currentContent.teamName}
              </p>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mt-1 sm:mt-2 rounded-full shadow-lg shadow-cyan-400/40 mx-auto md:mx-0"></div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-6 sm:mt-8 md:mt-10"
            >
              <button className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-500 text-white font-bold py-3 px-6 sm:py-3 sm:px-8 md:py-3 md:px-10 rounded-full uppercase tracking-widest text-xs sm:text-sm shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:animate-pulse w-full max-w-xs sm:max-w-none sm:w-auto">
                {currentContent.button}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Hidden on smallest screens */}
      <div className="absolute bottom-6 right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 border-cyan-400/30 rounded-full animate-ping hidden sm:block"></div>
      <div className="absolute top-16 right-1/4 w-8 h-8 sm:w-10 sm:h-10 border border-purple-400/40 rounded-full animate-pulse hidden sm:block"></div>

      {/* Mobile Bottom Spacing */}
      <div className="h-8 sm:h-12 md:h-16"></div>
    </section>
  );
};

export default Hero;