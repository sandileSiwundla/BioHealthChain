"use client";
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        
        {/* Top Navigation */}
        <nav className="flex flex-wrap justify-center gap-10 text-base font-medium">
          <a href="#about" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#whitepaper" className="hover:text-blue-400 transition-colors">
            Whitepaper
          </a>
          <a href="#patients" className="hover:text-blue-400 transition-colors">
            Patients
          </a>
          <a href="#doctors" className="hover:text-blue-400 transition-colors">
            Doctor
          </a>
          <a href="#pharmacists" className="hover:text-blue-400 transition-colors">
            Pharmacist
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact Us
          </a>
        </nav>

        {/* Divider line for structure */}
        <div className="w-2/3 border-t border-gray-700"></div>

        {/* Social Icons */}
        <div className="flex space-x-10">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="w-7 h-7 hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-7 h-7 hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-7 h-7 hover:text-blue-400 transition-colors" />
          </a>
        </div>

        {/* Divider line for structure */}
        <div className="w-2/3 border-t border-gray-700"></div>

        {/* Extra Bottom Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#privacy" className="hover:text-blue-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-blue-400 transition-colors">
            Terms of Service
          </a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} BioHealthChain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
