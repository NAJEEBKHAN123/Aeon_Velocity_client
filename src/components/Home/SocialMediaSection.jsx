import React from "react";
import { motion } from "framer-motion";

// Social media icons (you can replace these with your actual icons)
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const SocialMediaSection = () => {
  // Replace with your actual background image
  const backgroundImage = "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

  const socialLinks = [
    { 
      icon: <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />, 
      url: "https://instagram.com/lunar.australia",
      name: "Instagram"
    },
    { 
      icon: <FaTiktok className="w-6 h-6 md:w-8 md:h-8" />, 
      url: "https://tiktok.com/@lunar.australia",
      name: "TikTok"
    },
    { 
      icon: <FaFacebook className="w-6 h-6 md:w-8 md:h-8" />, 
      url: "https://facebook.com/lunar.australia",
      name: "Facebook"
    },
    { 
      icon: <FaYoutube className="w-6 h-6 md:w-8 md:h-8" />, 
      url: "https://youtube.com/@lunar.australia",
      name: "YouTube"
    },
    { 
      icon: <FaTwitter className="w-6 h-6 md:w-8 md:h-8" />, 
      url: "https://twitter.com/lunar_australia",
      name: "Twitter"
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Social Media Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-pink-800/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 md:space-y-12"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest">
              FOLLOW OUR
            </h2>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              SOCIALS:
            </h3>
          </motion.div>

          {/* Instagram Handle */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wider text-gray-200">
              @lunar.australia
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center items-center space-x-6 md:space-x-8 lg:space-x-12 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white hover:text-cyan-400 transition-colors duration-300 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 hover:border-cyan-400/50"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="pt-8">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 px-12 rounded-full uppercase tracking-widest text-lg md:text-xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300 border border-cyan-400/30"
            >
              Follow Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-cyan-400/30 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute bottom-20 left-8 w-12 h-12 border border-purple-400/40 rounded-full animate-ping hidden lg:block"></div>
    </section>
  );
};

export default SocialMediaSection;