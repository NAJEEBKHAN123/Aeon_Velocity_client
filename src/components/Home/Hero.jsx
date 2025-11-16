import React from "react";
import hero_img from "../../assets/StemRaching/leftImg.jpg";
import { motion } from "framer-motion";
import { useLanguage } from '../../contexts/LanguageContext';

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
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero_img}
          alt="Hero Background"
          className="w-full h-full object-cover object-center scale-105 brightness-110 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40"></div>
      </div>

      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-lg shadow-cyan-400/30"></div>

      {/* Left Text */}
      <div className="absolute left-16 top-1/2 transform -translate-y-1/2 space-y-6">
        {/* Main Title */}
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
          className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight 
bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
bg-clip-text text-transparent 
drop-shadow-[0_0_25px_rgba(0,255,255,0.8)] 
hover:drop-shadow-[0_0_40px_rgba(255,0,255,1)] 
transition-shadow duration-300"
        >
          {currentContent.mainTitle}
        </motion.h1>

        {/* Taglines */}
        <motion.div className="space-y-3 pl-2 border-l-4 border-cyan-400/40">
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-gray-200 font-semibold uppercase text-xl md:text-2xl tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          >
            {currentContent.tagline1}
          </motion.p>
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-white font-black uppercase text-2xl md:text-4xl tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          >
            {currentContent.tagline2}
          </motion.p>
        </motion.div>

        {/* Team Name */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-purple-400 font-extrabold uppercase text-3xl md:text-4xl tracking-widest drop-shadow-[0_0_25px_rgba(128,0,255,0.8)] animate-pulse"
        >
          {currentContent.teamName}
        </motion.p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mt-2 rounded-full shadow-lg shadow-cyan-400/40"></div>

        {/* CTA Button */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="pt-6"
        >
          <button className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-500 text-white font-bold py-3 px-10 rounded-full uppercase tracking-widest text-sm shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:animate-pulse">
            {currentContent.button}
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-cyan-400/30 rounded-full animate-ping"></div>
      <div className="absolute top-20 right-1/4 w-10 h-10 border border-purple-400/40 rounded-full animate-pulse"></div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
