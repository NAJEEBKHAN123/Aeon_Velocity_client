import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle, Building2, Phone, MapPin, Clock, Sparkles, ArrowRight } from 'lucide-react';

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
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-300 text-sm font-semibold tracking-wider uppercase">
              Let's Connect
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-cyan-400"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-24 h-[2px] bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400"></div>
          </div>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your project and create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">Send a Message</h2>
                      <p className="text-gray-400 text-sm">Fill out the form below</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                          focusedField === 'name' ? 'text-cyan-400' : 'text-gray-300'
                        }`}>
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                            focusedField === 'name' ? 'text-cyan-400' : 'text-gray-500'
                          }`} />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="John Doe"
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-slate-800 focus:ring-4 focus:ring-cyan-400/10 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <label className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                          focusedField === 'email' ? 'text-cyan-400' : 'text-gray-300'
                        }`}>
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                            focusedField === 'email' ? 'text-cyan-400' : 'text-gray-500'
                          }`} />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="john@example.com"
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-slate-800 focus:ring-4 focus:ring-cyan-400/10 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company & Subject Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                          focusedField === 'company' ? 'text-cyan-400' : 'text-gray-300'
                        }`}>
                          Company
                        </label>
                        <div className="relative">
                          <Building2 className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                            focusedField === 'company' ? 'text-cyan-400' : 'text-gray-500'
                          }`} />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('company')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Company name"
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-slate-800 focus:ring-4 focus:ring-cyan-400/10 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <label className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                          focusedField === 'subject' ? 'text-cyan-400' : 'text-gray-300'
                        }`}>
                          Subject *
                        </label>
                        <div className="relative">
                          <MessageSquare className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                            focusedField === 'subject' ? 'text-cyan-400' : 'text-gray-500'
                          }`} />
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('subject')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:bg-slate-800 focus:ring-4 focus:ring-cyan-400/10 transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="">Select a subject</option>
                            <option value="partnership">Partnership</option>
                            <option value="sponsorship">Sponsorship</option>
                            <option value="technical">Technical Support</option>
                            <option value="media">Media Relations</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <label className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                        focusedField === 'message' ? 'text-cyan-400' : 'text-gray-300'
                      }`}>
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows="6"
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full px-4 py-3.5 bg-slate-800/50 border-2 border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-slate-800 focus:ring-4 focus:ring-cyan-400/10 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Success Message */}
                  {isSubmitted && (
                    <div className="mt-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/50 rounded-xl p-4 flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-green-400 font-semibold mb-1">Message Sent Successfully!</p>
                        <p className="text-green-300/80 text-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Info Sidebar - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information Card */}
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  Contact Info
                </h3>
                
                <div className="space-y-4">
                  <a href="mailto:contact@example.com" className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 hover:border-cyan-400/30 border border-transparent transition-all duration-300 group">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-colors">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs font-medium mb-1">Email</div>
                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">contact@example.com</div>
                    </div>
                  </a>

                  <a href="tel:+1234567890" className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 hover:border-cyan-400/30 border border-transparent transition-all duration-300 group">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs font-medium mb-1">Phone</div>
                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">+1 (234) 567-8900</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs font-medium mb-1">Location</div>
                      <div className="text-white font-medium">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-cyan-400" />
                  </div>
                  Response Time
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-4 border border-cyan-500/20">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">24/7</div>
                    <div className="text-sm text-gray-300">Available</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-blue-500/20">
                    <div className="text-3xl font-bold text-blue-400 mb-1">&lt;24h</div>
                    <div className="text-sm text-gray-300">Response</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {['linkedin', 'twitter', 'instagram', 'facebook'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400/50 border border-transparent transition-all duration-300 group"
                    >
                      <div className="w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-400 rounded group-hover:scale-110 transition-transform"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5">
              Schedule a Call
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;