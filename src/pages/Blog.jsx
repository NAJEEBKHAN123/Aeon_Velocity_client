import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const { currentLanguage } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [imageLoaded, setImageLoaded] = useState(false);

  const content = {
    fr: {
      title: "Blog",
      subtitle: "Les Coulisses d'Aeon Velocity",
      description: "Bienvenue dans les coulisses d'Aeon Velocity. Ici, chaque publication raconte un moment clé de notre progression vers les finales nationales 2026, et vers la scène mondiale du STEM Racing. Tests, innovations, stratégie, esprit d'équipe, décisions fortes… suivez l'évolution de l'équipe en temps réel.",
      categories: {
        all: "Tous les Articles",
        innovation: "Innovation",
        strategy: "Stratégie",
        team: "Esprit d'Équipe",
        technical: "Technique"
      },
      readMore: "Lire la Suite",
      viewAll: "Voir Tous les Articles",
      latestPosts: "Dernières Publications",
      nextPage: "Devenez Partenaire de Notre Succès",
      cta: "Découvrir les Sponsors"
    },
    en: {
      title: "Blog",
      subtitle: "Behind the Scenes at Aeon Velocity",
      description: "Welcome behind the scenes at Aeon Velocity. Here, each post tells a key moment in our progression towards the 2026 national finals, and towards the world stage of STEM Racing. Tests, innovations, strategy, team spirit, strong decisions… follow the team's evolution in real time.",
      categories: {
        all: "All Posts",
        innovation: "Innovation",
        strategy: "Strategy",
        team: "Team Spirit",
        technical: "Technical"
      },
      readMore: "Read More",
      viewAll: "View All Posts",
      latestPosts: "Latest Posts",
      nextPage: "Become a Partner in Our Success",
      cta: "Discover Sponsors"
    }
  };

  const currentContent = content[currentLanguage];

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: {
        fr: "Révolution Aérodynamique : Notre Nouvelle Approche",
        en: "Aerodynamic Revolution: Our New Approach"
      },
      excerpt: {
        fr: "Découvrez comment nous avons repensé complètement notre conception aérodynamique pour gagner des précieux centièmes de seconde...",
        en: "Discover how we completely rethought our aerodynamic design to gain valuable hundredths of a second..."
      },
      category: "innovation",
      date: "2024-12-15",
      readTime: "4 min",
      image: "🚀",
      color: "cyan"
    },
    {
      id: 2,
      title: {
        fr: "La Stratégie pour Dominer 2026",
        en: "The Strategy to Dominate 2026"
      },
      excerpt: {
        fr: "Notre feuille de route détaillée pour la saison 2026 : chaque décision compte dans notre quête de la victoire nationale...",
        en: "Our detailed roadmap for the 2026 season: every decision counts in our quest for national victory..."
      },
      category: "strategy",
      date: "2024-12-10",
      readTime: "6 min",
      image: "🎯",
      color: "blue"
    },
    {
      id: 3,
      title: {
        fr: "Journée Typique de l'Équipe Technique",
        en: "Typical Day of the Technical Team"
      },
      excerpt: {
        fr: "Immersion dans une journée de travail intense avec notre équipe d'ingénierie. Tests, optimisations, et innovations au programme...",
        en: "Immersion in an intense workday with our engineering team. Tests, optimizations, and innovations on the agenda..."
      },
      category: "team",
      date: "2024-12-05",
      readTime: "5 min",
      image: "⚙️",
      color: "cyan"
    },
    {
      id: 4,
      title: {
        fr: "Optimisation des Matériaux : Le Choix du Carbone",
        en: "Material Optimization: The Carbon Choice"
      },
      excerpt: {
        fr: "Pourquoi nous avons choisi le carbone et comment nous poussons ses limites pour des performances maximales...",
        en: "Why we chose carbon and how we're pushing its limits for maximum performance..."
      },
      category: "technical",
      date: "2024-11-28",
      readTime: "7 min",
      image: "🔬",
      color: "blue"
    },
    {
      id: 5,
      title: {
        fr: "Notre Système de Tests Automatisés",
        en: "Our Automated Testing System"
      },
      excerpt: {
        fr: "Développement d'un système révolutionnaire de tests qui nous permet d'itérer 3x plus vite que la concurrence...",
        en: "Development of a revolutionary testing system that allows us to iterate 3x faster than the competition..."
      },
      category: "innovation",
      date: "2024-11-20",
      readTime: "8 min",
      image: "🤖",
      color: "cyan"
    },
    {
      id: 6,
      title: {
        fr: "L'Esprit d'Équipe qui Fait la Différence",
        en: "The Team Spirit That Makes the Difference"
      },
      excerpt: {
        fr: "Comment nous cultivons une culture d'excellence et de collaboration qui nous distingue sur la piste...",
        en: "How we cultivate a culture of excellence and collaboration that distinguishes us on the track..."
      },
      category: "team",
      date: "2024-11-15",
      readTime: "4 min",
      image: "👥",
      color: "blue"
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const categories = [
    { id: 'all', label: currentContent.categories.all },
    { id: 'innovation', label: currentContent.categories.innovation },
    { id: 'strategy', label: currentContent.categories.strategy },
    { id: 'team', label: currentContent.categories.team },
    { id: 'technical', label: currentContent.categories.technical }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Clean Hero Section */}
      <section className="relative py-24 overflow-hidden min-h-[70vh] flex items-center justify-center">
        {/* Clean Background Image */}
        <div className="absolute inset-0">
          <div 
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              imageLoaded ? 'opacity-15' : 'opacity-0'
            }`}
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1699412947675-0f83e129ad4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpc2N1c3N0aW9uJTIwcGhvdG8lMjBvZiUyMGYxJTIwc3RlbSUyMHJhY2luZ3xlbnwwfHwwfHx8MA%3D%3D")',
            }}
          >
            {/* Preload image */}
            <img 
              src="https://images.unsplash.com/photo-1699412947675-0f83e129ad4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpc2N1c3N0aW9uJTIwcGhvdG8lMjBvZiUyMGYxJTIwc3RlbSUyMHJhY2luZ3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="" 
              className="hidden" 
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          
          {/* Light Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/40 to-indigo-100/30"></div>
          
          {/* Subtle Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 right-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
              className="absolute bottom-40 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-2xl mb-8 shadow-lg"
            >
              <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-700 text-lg font-semibold tracking-wider uppercase">
                {currentContent.subtitle}
              </span>
            </motion.div>
            
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
                         className="text-4xl md:text-6xl font-extrabold italic tracking-wider uppercase mb-6 md:mb-8 leading-tight px-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"

            >
              {currentContent.title}
            </motion.h1>
            
            {/* Decorative Line */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "200px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center items-center space-x-4 mb-8 mx-auto"
            >
              <div className="w-20 h-1 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <motion.div 
                className="w-4 h-4 bg-cyan-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            </motion.div>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-2xl md:text-3xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-lg"
            >
              {currentContent.description}
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-cyan-600 text-sm font-semibold tracking-widest uppercase flex flex-col items-center"
              >
                <span>{currentLanguage === 'fr' ? 'Explorer les Articles' : 'Explore Posts'}</span>
                <svg className="w-6 h-6 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/80 text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/50'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {currentContent.latestPosts}
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Posts Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 px-5 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <BlogPostCard 
                key={post.id}
                post={post}
                index={index}
                currentLanguage={currentLanguage}
                readMoreText={currentContent.readMore}
              />
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              {currentContent.viewAll}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Next Page CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            {currentContent.nextPage}
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            {currentLanguage === 'fr' 
              ? "Rejoignez-nous dans notre quête pour le titre mondial et bénéficiez d'une visibilité exceptionnelle."
              : "Join us in our quest for the world title and benefit from exceptional visibility."
            }
          </p>
          <Link to="/sponsors">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              {currentContent.cta}
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

// Blog Post Card Component
const BlogPostCard = ({ post, index, currentLanguage, readMoreText }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group cursor-pointer"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl">
        {/* Header with Icon */}
        <div className={`p-6 bg-gradient-to-br from-${post.color}-100 to-${post.color}-200 border-b border-gray-200/50`}>
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl">{post.image}</div>
            <span className={`text-${post.color}-700 text-sm font-semibold px-3 py-1 bg-${post.color}-200/50 rounded-full`}>
              {post.readTime}
            </span>
          </div>
          <span className={`text-${post.color}-600 text-xs font-medium uppercase tracking-wide`}>
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors">
            {post.title[currentLanguage]}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
            {post.excerpt[currentLanguage]}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span>{new Date(post.date).toLocaleDateString(currentLanguage === 'fr' ? 'fr-FR' : 'en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-0">
          <motion.button
            whileHover={{ x: 5 }}
            className={`text-${post.color}-600 font-semibold flex items-center group-hover:text-${post.color}-700 transition-colors`}
          >
            {readMoreText}
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPage;