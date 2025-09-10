"use client";

import { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "Patients Portal",
      description: "Access your personal medical records securely on BioHealthChain. Apply for access to your health data, view all documents, track your treatment history, and maintain full control over who can access your information.",
      icon: (
        <svg xmlns="/patients" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "blue",
      gradient: "from-blue-500 to-blue-700",
      buttonText: "Access Records",
      Link: "/patients"
    },
    {
      id: 2,
      title: "Doctors Portal",
      description: "Register as a verified healthcare provider and gain access to patients' medical data in a secure, permissioned environment. Review health records, monitor ongoing treatments, update patient information.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: "green",
      gradient: "from-green-500 to-green-700",
      buttonText: "Provider Login",
      Link: "/Doctor"

    },
    {
      id: 3,
      title: "Pharmacists Portal",
      description: "Sign up as a certified pharmacist and manage patient prescriptions efficiently. Track prescription requests, provide medications, and ensure timely fulfillment while updating the patient's medical record.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "purple",
      gradient: "from-purple-500 to-purple-700",
      buttonText: "Manage Prescriptions",
      Link: "/Pharmacy"

    }
  ];

  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Blur overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-500 z-20 ${
        selectedCard !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} />
      
      {/* Main content */}
      <div className="relative z-30 px-4 py-12 sm:px-8 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              BioHealth<span className="text-blue-400">Chain</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Secure, decentralized healthcare data management for patients and providers
            </p>
          </div>
          
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Explore Our Healthcare Portals
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className={`relative bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-in-out transform ${
                  selectedCard === feature.id ? 
                  '-translate-y-4 scale-105 z-30 shadow-2xl' : 
                  'hover:-translate-y-2 opacity-90 hover:opacity-100 shadow-lg'
                } border-t-8 ${
                  feature.color === 'blue' ? 'border-blue-400' : 
                  feature.color === 'green' ? 'border-green-400' : 'border-purple-400'
                } h-full flex flex-col`}
                onMouseEnter={() => setSelectedCard(feature.id)}
                onMouseLeave={() => setSelectedCard(null)}
              >
                {/* Icon container */}
                <div className={`mb-6 p-3 rounded-xl bg-white/10 w-fit transition-all duration-500 ${
                  selectedCard === feature.id ? 'rotate-12' : ''
                }`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h4 className={`font-bold mb-4 transition-all duration-500 ${
                  selectedCard === feature.id ? 'text-2xl' : 'text-xl'
                } text-white`}>
                  {feature.title}
                </h4>
                
                {/* Description */}
                <div className={`overflow-hidden transition-all duration-500 flex-grow ${
                  selectedCard === feature.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  {/* CTA Button */}
                  <Link href={feature.Link}>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCard === feature.id ? 
                    'bg-white text-blue-800 hover:bg-blue-50' : 
                    'bg-white/20 text-white hover:bg-white/30'
                  }`}>
                    {feature.buttonText}
                  </button>
                  </Link>
                </div>
                
                {/* Expand hint */}
                <div className={`mt-4 text-center transition-all duration-500 ${
                  selectedCard === feature.id ? 'opacity-0 h-0' : 'opacity-70 h-auto'
                }`}>
                  <span className="text-white text-xs">Hover to explore</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-blue-200">
              Secure • Private • HIPAA Compliant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;