"use client";
import React, { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Shield, FileText, HelpCircle } from "lucide-react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Simulate API call
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 pt-16 pb-8 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="mr-2 text-blue-400" size={28} />
              BioHealth<span className="text-blue-400">Chain</span>
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Securing healthcare data through blockchain technology. Empowering patients, doctors, and pharmacists with decentralized medical records.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-500 transition-colors group">
                <Github className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-500 transition-colors group">
                <Linkedin className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-500 transition-colors group">
                <Twitter className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-blue-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About" },
                { href: "#whitepaper", label: "Whitepaper", icon: <FileText size={14} className="inline mr-1" /> },
                { href: "#patients", label: "Patients" },
                { href: "#doctors", label: "Doctors" },
                { href: "#pharmacists", label: "Pharmacists" },
                { href: "#contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="flex items-center text-gray-400 hover:text-blue-400 transition-colors group">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:animate-pulse"></span>
                    {link.icon}{link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-blue-400">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#privacy", label: "Privacy Policy" },
                { href: "#terms", label: "Terms of Service" },
                { href: "#faq", label: "FAQ", icon: <HelpCircle size={14} className="inline mr-1" /> },
                { href: "#docs", label: "Documentation" },
                { href: "#blog", label: "Blog" },
                { href: "#support", label: "Support" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="flex items-center text-gray-400 hover:text-blue-400 transition-colors group">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:animate-pulse"></span>
                    {link.icon}{link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-blue-400">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            {subscribed ? (
              <div className="bg-green-900/30 text-green-400 p-3 rounded-lg text-sm flex items-center">
                <Heart className="mr-2" size={16} /> Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 flex items-center">
            © {new Date().getFullYear()} BioHealthChain. All rights reserved.
            <span className="hidden md:inline-block mx-2">•</span>
            <span className="flex items-center mt-2 md:mt-0">
              Made with <Heart className="mx-1 text-red-500" size={14} /> for better healthcare
            </span>
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-sm text-gray-500 hover:text-blue-400 transition-colors group"
          >
            Back to top
            <ArrowUp className="ml-2 group-hover:animate-bounce" size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;