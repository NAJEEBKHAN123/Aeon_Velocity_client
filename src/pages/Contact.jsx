import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const { currentLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    fr: {
      title: "Contact",
      subtitle: "Lançons Ensemble Votre Projet",
      description: "Prêt à propulser l'innovation étudiante vers de nouveaux sommets ? Discutons de votre partenariat et créons ensemble une success story internationale.",
      form: {
        name: "Nom Complet",
        email: "Adresse Email",
        company: "Entreprise",
        subject: "Sujet",
        message: "Votre Message",
        submit: "Envoyer le Message",
        sending: "Envoi en cours..."
      },
      info: {
        title: "Informations de Contact",
        email: "contact@aeon-velocity.com",
        phone: "+33 7 83 18 28 60",
        location: "France",
        availability: "Disponible 7j/7",
        response: "Réponse sous 24h"
      },
      social: {
        title: "Suivez Notre Aventure",
        linkedin: "LinkedIn Professionnel",
        twitter: "Twitter Officiel",
        instagram: "Instagram Équipe"
      },
      success: {
        title: "Message Envoyé !",
        message: "Nous vous remercions pour votre message. Notre équipe vous répondra dans les plus brefs délais."
      }
    },
    en: {
      title: "Contact",
      subtitle: "Let's Launch Your Project Together",
      description: "Ready to propel student innovation to new heights? Let's discuss your partnership and create an international success story together.",
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
        sending: "Sending..."
      },
      info: {
        title: "Contact Information",
        email: "contact@aeon-velocity.com",
        phone: "+33 7 83 18 28 60",
        location: "France",
        availability: "Available 7 days/week",
        response: "Response within 24h"
      },
      social: {
        title: "Follow Our Journey",
        linkedin: "Professional LinkedIn",
        twitter: "Official Twitter",
        instagram: "Team Instagram"
      },
      success: {
        title: "Message Sent!",
        message: "Thank you for your message. Our team will get back to you as soon as possible."
      }
    }
  };

  const currentContent = content[currentLanguage];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-cyan-900/10">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.8)_80%)]"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-cyan-400/10"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

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

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-8">
                  {currentLanguage === 'fr' ? 'Envoyez-nous un Message' : 'Send Us a Message'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-cyan-300 text-sm font-semibold mb-2">
                        {currentContent.form.name} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-cyan-400/50"
                        placeholder={currentLanguage === 'fr' ? 'Votre nom complet' : 'Your full name'}
                      />
                    </div>
                    
                    <div className="group">
                      <label className="block text-cyan-300 text-sm font-semibold mb-2">
                        {currentContent.form.email} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-cyan-400/50"
                        placeholder={currentLanguage === 'fr' ? 'votre@email.com' : 'your@email.com'}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-cyan-300 text-sm font-semibold mb-2">
                        {currentContent.form.company}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-cyan-400/50"
                        placeholder={currentLanguage === 'fr' ? 'Nom de l\'entreprise' : 'Company name'}
                      />
                    </div>
                    
                    <div className="group">
                      <label className="block text-cyan-300 text-sm font-semibold mb-2">
                        {currentContent.form.subject} *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-cyan-400/50"
                      >
                        <option value="">{currentLanguage === 'fr' ? 'Sélectionnez un sujet' : 'Select a subject'}</option>
                        <option value="partnership">{currentLanguage === 'fr' ? 'Partenariat' : 'Partnership'}</option>
                        <option value="sponsorship">{currentLanguage === 'fr' ? 'Sponsoring' : 'Sponsorship'}</option>
                        <option value="technical">{currentLanguage === 'fr' ? 'Support Technique' : 'Technical Support'}</option>
                        <option value="media">{currentLanguage === 'fr' ? 'Relations Presse' : 'Media Relations'}</option>
                        <option value="other">{currentLanguage === 'fr' ? 'Autre' : 'Other'}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-cyan-300 text-sm font-semibold mb-2">
                      {currentContent.form.message} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none group-hover:border-cyan-400/50"
                      placeholder={currentLanguage === 'fr' ? 'Décrivez votre projet ou demande...' : 'Describe your project or request...'}
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        {currentContent.form.sending}
                      </>
                    ) : (
                      currentContent.form.submit
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Info Card */}
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {currentContent.info.title}
                </h3>
                
                <div className="space-y-6">
                  <motion.a
                    href={`mailto:${currentContent.info.email}`}
                    whileHover={{ x: 5 }}
                    className="flex items-center group text-gray-300 hover:text-cyan-400 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-cyan-500/30 transition-colors">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-lg">{currentContent.info.email}</div>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href={`tel:${currentContent.info.phone}`}
                    whileHover={{ x: 5 }}
                    className="flex items-center group text-gray-300 hover:text-cyan-400 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">{currentLanguage === 'fr' ? 'Téléphone' : 'Phone'}</div>
                      <div className="text-lg">{currentContent.info.phone}</div>
                    </div>
                  </motion.a>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center group text-gray-300"
                  >
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">{currentLanguage === 'fr' ? 'Localisation' : 'Location'}</div>
                      <div className="text-lg">{currentContent.info.location}</div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-700/30">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="text-cyan-400">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm text-gray-300">{currentContent.info.availability}</div>
                    </div>
                    <div className="text-blue-400">
                      <div className="text-2xl font-bold">24h</div>
                      <div className="text-sm text-gray-300">{currentContent.info.response}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {currentContent.social.title}
                </h3>
                
                <div className="space-y-4">
                  {[
                    { platform: 'linkedin', label: currentContent.social.linkedin, icon: '💼' },
                    { platform: 'twitter', label: currentContent.social.twitter, icon: '🐦' },
                    { platform: 'instagram', label: currentContent.social.instagram, icon: '📸' }
                  ].map((social, index) => (
                    <motion.a
                      key={social.platform}
                      href="#"
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-center p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-cyan-400/40 transition-all duration-300 group"
                    >
                      <div className="text-2xl mr-4 group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                          {social.label}
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/CTA Section */}
      <section className="py-20 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {currentLanguage === 'fr' 
                ? "Prêt à Accélérer avec Nous ?" 
                : "Ready to Accelerate with Us?"
              }
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {currentLanguage === 'fr'
                ? "Rejoignez notre réseau de partenaires et participez à une aventure technologique exceptionnelle."
                : "Join our partner network and participate in an exceptional technological adventure."
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                {currentLanguage === 'fr' ? 'Devenir Partenaire' : 'Become a Partner'}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                {currentLanguage === 'fr' ? 'Télécharger la Brochure' : 'Download Brochure'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;