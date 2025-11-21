import React from "react";
import hero_img from "../../assets/StemRaching/leftImg.jpg";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";

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
      tagline: "Engineered to Win", // 👈 REPLACE BOTH TAGLINES WITH THIS
      teamName: "Aeon Velocity",
      button: "Join The Revolution",
    },
    fr: {
      mainTitle: "STEM RACING",
      tagline: "Conçu pour Gagner", // 👈 FRENCH VERSION
      teamName: "Aeon Velocity",
      button: "Rejoignez la Révolution",
    },
  };

  const currentContent = content[currentLanguage];

  return (
    <section className="relative min-h-[80vh] sm:min-h-screen overflow-hidden bg-black flex items-center justify-center py-8 sm:py-0">
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
      <div className="relative w-full max-w-7xl mx-auto px-4 xs:px-4 sm:px-6 lg:px-4">
        <div className="flex flex-col justify-center items-start min-h-[70vh] sm:min-h-screen py-4 sm:py-12 md:py-20">
          {/* Text Content - Left aligned on all screens */}
          <div className="text-start w-full max-w-3xl mx-auto md:mx-0 md:pl-8 lg:pl-12 xl:pl-16">
            {/* Main Title */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0}
              variants={textVariants}
              className="text-4xl xs:text-3xl mt-10 sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight 
             bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
             bg-clip-text text-transparent 
             leading-tight sm:leading-normal"
            >
              {currentContent.mainTitle}
            </motion.h1>

            {/* Taglines */}
            <motion.div className="mt-6 xs:mt-8 sm:mt-10 md:mt-5  md:border-l-4 md:border-cyan-400/40">
          
              <motion.p
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-white font-black uppercase text-xl xs:text-2xl sm:text-3xl md:text-4xl tracking-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] leading-tight mt-6 xs:mt-8"
              >
                {currentContent.tagline}
              </motion.p>
            </motion.div>

            {/* Team Name */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-0"
            >
              <div className="relative">
                <p
                  className="text-white font-bold uppercase text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-wider 
                  bg-gradient-to-r from-gray-100 via-white to-gray-300 
                  bg-clip-text text-transparent 
                  drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]
                  hover:drop-shadow-[0_4px_8px_rgba(255,255,255,0.5)]
                  transition-all duration-300"
                >
                  {currentContent.teamName}
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-8 xs:mt-10 sm:mt-12 "
            >
              <Link to="/sponsors">
                <button className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-500 text-white cursor-pointer font-bold py-3 xs:py-4 px-6 xs:px-8 sm:py-4 sm:px-10 md:py-4 md:px-12 rounded-full uppercase tracking-widest text-sm xs:text-base shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:animate-pulse w-full max-w-[280px] xs:max-w-xs sm:max-w-none sm:w-auto">
                  {currentContent.button}
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Hidden on smallest screens */}
      <div className="absolute bottom-4 xs:bottom-6 right-4 xs:right-6 w-10 xs:w-12 sm:w-16 md:w-20 h-10 xs:h-12 sm:h-16 md:h-20 border-2 border-cyan-400/30 rounded-full animate-ping hidden xs:block"></div>
      <div className="absolute top-12 xs:top-16 right-1/4 w-6 xs:w-8 sm:w-10 h-6 xs:h-8 sm:h-10 border border-purple-400/40 rounded-full animate-pulse hidden xs:block"></div>

      {/* Mobile Bottom Spacing */}
      <div className="h-4 xs:h-6 sm:h-8 md:h-12"></div>
    </section>
  );
};

export default Hero;
