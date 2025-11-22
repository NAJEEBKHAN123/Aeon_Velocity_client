import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube, FaLinkedin , FaArrowRight } from "react-icons/fa";

const SocialMediaSection = () => {
  const { currentLanguage } = useLanguage();
  
  const backgroundImage = "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

  const content = {
    en: {
      title: "FOLLOW OUR",
      socials: "SOCIALS",
      handle: "@AeonVelocity",
      button: "Follow Now",
      followText: "Join our digital revolution"
    },
    fr: {
      title: "SUIVEZ NOS",
      socials: "RÉSEAUX",
      handle: "@AeonVelocity",
      button: "Suivre Maintenant",
      followText: "Rejoignez notre révolution digitale"
    }
  };

  const currentContent = content[currentLanguage];

const socialLinks = [
  { 
    icon: <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />, 
    url: "https://instagram.com/aeonvelocity",
    name: "Instagram",
    color: "hover:text-pink-500"
  },
  { 
    icon: <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />, 
    url: "https://www.tiktok.com/@aeon.velocity?_r=1&_t=ZN-91beU2n75C2",
    name: "TikTok",
    color: "hover:text-black"
  },
  { 
    icon: <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />, 
    url: "https://www.facebook.com/share/17e9NP8LB3/?mibextid=wwXIfr",
    name: "Facebook",
    color: "hover:text-blue-600"
  },
  { 
    icon: <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />, 
    url: "https://youtube.com/@aeonvelocity?si=FEK4kfJI_nPb58IO",
    name: "YouTube",
    color: "hover:text-red-600"
  },
  { 
    icon: <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />, 
    url: "https://www.linkedin.com/company/aeonvelocity/",
    name: "LinkedIn",
    color: "hover:text-blue-700"
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "backOut" }
    },
    hover: {
      scale: 1.15,
      y: -8,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img src={backgroundImage} alt="Social Media Background" className="w-full h-full object-cover object-center scale-105" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-purple-900/40 to-pink-800/30"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-purple-500/10"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full max-w-6xl xl:py-8 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 md:space-y-8 lg:space-y-3"
        >
          <motion.div variants={itemVariants} className="space-y-2 md:space-y-2">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-gray-100">
              {currentContent.title}
            </h2>
            <h3 className="text-4xl xs:text-5xl sm:text-6xl  font-black uppercase tracking-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              {currentContent.socials}
            </h3>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
              {currentContent.followText}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-wide text-cyan-100 drop-shadow-lg">
              {currentContent.handle}
            </p>
            
            <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-6 md:gap-8 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                  custom={index}
                  viewport={{ once: true }}
                  className={`text-white p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-6 md:pt-8">
            <motion.a
              href={socialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full uppercase tracking-widest text-lg md:text-xl shadow-2xl shadow-cyan-500/30 border border-cyan-400/30 overflow-hidden inline-flex items-center gap-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              {currentContent.button}
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-lg shadow-cyan-400/30"></div>
      
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-500 rounded-full opacity-50 animate-float delay-1000"></div>
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-pink-500 rounded-full opacity-40 animate-float delay-500"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SocialMediaSection;