import React, { useEffect, useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle, Phone, MapPin, Building2, Home, Book, Users, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../contexts/LanguageContext";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };
  
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError('');
  
  try {
    // Auto-select API URL based on environment
    const API_URL = import.meta.env.VITE_NODE_ENV === 'production' 
      ? import.meta.env.VITE_API_URL_PROD 
      : import.meta.env.VITE_API_URL_DEV;

    console.log('🌐 API Configuration:');
    console.log('- Environment:', import.meta.env.VITE_NODE_ENV);
    console.log('- API URL:', API_URL);
    console.log('- Full endpoint:', `${API_URL}/api/contact/submit`);
    console.log('- Form data:', formData);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      throw new Error('Please fill in all required fields');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address');
    }

    const response = await fetch(`${API_URL}/api/contact/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('📡 Response status:', response.status);
    console.log('📡 Response ok:', response.ok);

    let result;
    try {
      result = await response.json();
      console.log('📦 Response data:', result);
    } catch (parseError) {
      console.error('❌ JSON parse error:', parseError);
      throw new Error('Invalid response from server');
    }

    if (!response.ok) {
      // Handle validation errors from backend
      if (result.details && result.details.length > 0) {
        const errorMessage = result.details[0].msg || 'Validation failed';
        throw new Error(errorMessage);
      }
      // Handle other backend errors
      if (result.message) {
        throw new Error(result.message);
      }
      // Handle HTTP errors
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    // Success - Message sent successfully
    console.log('✅ Message sent successfully:', result);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      subject: '', 
      message: '' 
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
    
  } catch (error) {
    console.error('❌ Error sending message:', error);
    setIsSubmitting(false);
    
    // User-friendly error messages
    let errorMessage = 'Failed to send message. Please try again.';
    
    if (error.message.includes('Failed to fetch')) {
      errorMessage = 'Cannot connect to server. Please check your internet connection.';
    } else if (error.message.includes('NetworkError')) {
      errorMessage = 'Network error. Please check your connection.';
    } else if (error.message.includes('Validation failed')) {
      errorMessage = 'Please check your form information.';
    } else if (error.message.includes('valid email')) {
      errorMessage = 'Please enter a valid email address.';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    setError(errorMessage);
    
    // Clear error after 6 seconds
    setTimeout(() => setError(''), 6000);
  }
};

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  // Language content
  const content = {
    fr: {
      title: "Contactez-Nous",
      subtitle: "Une question ? Un projet ? N'hésitez pas à nous contacter, nous serions ravis d'échanger avec vous.",
      formTitle: "Envoyer un Message",
      formSubtitle: "Nous répondons dans les 24 heures",
      fields: {
        name: "Nom *",
        email: "Email *",
        company: "Entreprise",
        companyOptional: "(Optionnel)",
        subject: "Sujet *",
        message: "Message *"
      },
      placeholders: {
        name: "Votre nom",
        email: "contact@aeon-velocity.com",
        company: "Votre entreprise",
        message: "Parlez-nous de votre projet..."
      },
      subjectOptions: [
        { value: '', label: 'Sélectionnez un sujet' },
        { value: 'partnership', label: 'Partenariat' },
        { value: 'sponsorship', label: 'Sponsoring' },
        { value: 'technical', label: 'Support Technique' },
        { value: 'media', label: 'Relations Médias' },
        { value: 'career', label: 'Opportunité de Carrière' },
        { value: 'other', label: 'Autre' }
      ],
      submit: {
        sending: "Envoi en cours...",
        send: "Envoyer le Message"
      },
      success: {
        title: "Message envoyé avec succès !",
        message: "Nous vous recontacterons bientôt."
      },
      error: {
        title: "Erreur",
        validation: "Veuillez vérifier les informations du formulaire",
        general: "Une erreur est survenue. Veuillez réessayer."
      },
      contactInfo: {
        title: "Informations de Contact",
        email: "Email",
        phone: "Téléphone",
        location: "Localisation"
      },
      quickResponse: {
        title: "Réponse Rapide",
        averageTime: "Temps de réponse moyen :",
        availability: "Disponibilité :",
        support: "Support :",
        values: {
          time: "Moins de 24h",
          availability: "Lun - Ven",
          support: "Urgence 24/7"
        }
      },
      cta: {
        title: "Prêt à Commencer ?",
        subtitle: "Envoyez-nous vos idées et nous vous répondrons avec une proposition détaillée.",
        primary: "Découvrir Notre Aventure",
        secondary: "Devenir Sponsor"
      }
    },
    en: {
      title: "Get in Touch",
      subtitle: "Have a question or a project? Don't hesitate to contact us, we'd be happy to chat with you.",
      formTitle: "Send a Message",
      formSubtitle: "We respond within 24 hours",
      fields: {
        name: "Name *",
        email: "Email *",
        company: "Company",
        companyOptional: "(Optional)",
        subject: "Subject *",
        message: "Message *"
      },
      placeholders: {
        name: "Your name",
        email: "contact@aeon-velocity.com",
        company: "Your company",
        message: "Tell us about your project..."
      },
      subjectOptions: [
        { value: '', label: 'Select a subject' },
        { value: 'partnership', label: 'Partnership' },
        { value: 'sponsorship', label: 'Sponsorship' },
        { value: 'technical', label: 'Technical Support' },
        { value: 'media', label: 'Media Relations' },
        { value: 'career', label: 'Career Opportunity' },
        { value: 'other', label: 'Other' }
      ],
      submit: {
        sending: "Sending...",
        send: "Send Message"
      },
      success: {
        title: "Message sent successfully!",
        message: "We'll get back to you soon."
      },
      error: {
        title: "Error",
        validation: "Please check the form information",
        general: "An error occurred. Please try again."
      },
      contactInfo: {
        title: "Contact Information",
        email: "Email",
        phone: "Phone",
        location: "Location"
      },
      quickResponse: {
        title: "Fast Response",
        averageTime: "Average response time:",
        availability: "Availability:",
        support: "Support:",
        values: {
          time: "Under 24 hours",
          availability: "Mon - Fri",
          support: "24/7 Emergency"
        }
      },
      cta: {
        title: "Ready to Get Started?",
        subtitle: "Send us your ideas and we'll get back to you with a detailed proposal.",
        primary: "Discover Our Story",
        secondary: "Become a Sponsor"
      }
    }
  };

  // Safe language selection with fallback
  const getLanguageContent = () => {
    const lang = content[currentLanguage];
    if (!lang) {
      console.warn(`Language '${currentLanguage}' not found, defaulting to English`);
      return content.en;
    }
    return lang;
  };

  const lang = getLanguageContent();

  const contactInfo = [
    {
      icon: Mail,
      label: lang.contactInfo.email,
      value: 'contact@aeon-velocity.com',
      href: 'mailto:contact@aeon-velocity.com'
    },
    {
      icon: Phone,
      label: lang.contactInfo.phone,
      value: '+33 783 182 860',
      href: 'tel:+33783182860'
    },
    {
      icon: MapPin,
      label: lang.contactInfo.location,
      value: currentLanguage === 'fr' ? 'Toulon, France' : 'Toulon, France'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-20 mt-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {lang.title}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {lang.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{lang.formTitle}</h2>
                <p className="text-slate-500">{lang.formSubtitle}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {lang.fields.name}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength="2"
                      maxLength="50"
                      placeholder={lang.placeholders.name}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {lang.fields.email}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={lang.placeholders.email}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Company & Subject Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {lang.fields.company} <span className="text-slate-400 text-xs">{lang.fields.companyOptional}</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      maxLength="100"
                      placeholder={lang.placeholders.company}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {lang.fields.subject}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white cursor-pointer"
                    >
                      {lang.subjectOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {lang.fields.message}
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength="10"
                    maxLength="1000"
                    rows="5"
                    placeholder={lang.placeholders.message}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-5 h-5 text-red-500 flex-shrink-0">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-red-800 font-medium">{lang.error.title}</p>
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-medium">{lang.success.title}</p>
                    <p className="text-green-600 text-sm">{lang.success.message}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {lang.submit.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {lang.submit.send}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">{lang.contactInfo.title}</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 p-4 rounded-lg transition-colors ${
                      item.href ? 'hover:bg-slate-50 cursor-pointer' : ''
                    }`}
                    onClick={item.href ? () => window.open(item.href, '_blank') : undefined}
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1">{item.label}</div>
                      <div className="text-slate-900 font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-blue-50 rounded-2xl border border-blue-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{lang.quickResponse.title}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">{lang.quickResponse.averageTime}</span>
                  <span className="font-semibold text-blue-600">{lang.quickResponse.values.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">{lang.quickResponse.availability}</span>
                  <span className="font-semibold text-blue-600">{lang.quickResponse.values.availability}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">{lang.quickResponse.support}</span>
                  <span className="font-semibold text-blue-600">{lang.quickResponse.values.support}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">{lang.cta.title}</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            {lang.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/story')}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              {lang.cta.primary}
            </button>
            <button 
              onClick={() => navigate('/sponsors')}
              className="border border-slate-600 text-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              {lang.cta.secondary}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;