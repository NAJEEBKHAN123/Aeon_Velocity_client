import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext"; // Assuming the path is correct

// --- Content Dictionary for Bilingual Support ---
const NOT_FOUND_CONTENT = {
  en: {
    title: "Page Not Found",
    message: "Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
    button: "Go to Homepage",
  },
  fr: {
    title: "Page Non Trouvée",
    message: "Oups! La page que vous recherchez a peut-être été supprimée, a changé de nom ou est temporairement indisponible.",
    button: "Aller à la page d'accueil",
  },
};
// ----------------------------------------------


const NotFound = () => {
  const { currentLanguage } = useLanguage();
  const content = NOT_FOUND_CONTENT[currentLanguage] || NOT_FOUND_CONTENT.en;

  // Scrolls to the top when the component loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-8">
      
      {/* Animated 404 Text */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-9xl font-extrabold text-blue-600 mb-4 tracking-widest"
      >
        404
      </motion.div>

      {/* Main Message (Bilingual) */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold mb-6 text-center"
      >
        {content.title}
      </motion.h1>

      {/* Explanation (Bilingual) */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-lg text-gray-600 mb-10 text-center max-w-md"
      >
        {content.message}
      </motion.p>
      
      {/* Call to Action Button (Bilingual) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
      >
        <Link 
          to="/" 
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          {content.button}
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;