"use client";

import { useState } from "react";

const Home = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "Patients Portal",
      description: "Access your personal medical records securely on BioHealthChain. Apply for access to your health data, view all documents, track your treatment history, and maintain full control over who can access your information.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "blue"
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
      color: "green"
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
      color: "purple"
    }
  ];

  return (
    <div className="bg-[#1d2951] min-h-screen relative overflow-hidden">
      {/* Blur overlay */}
      <div className={`fixed inset-0  bg-opacity-30 backdrop-blur-sm transition-opacity duration-500 z-20 ${
        selectedCard !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} />
      
      {/* Feature Cards Section */}
      <div className="relative z-30 px-8 pb-16 pt-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">
            Explore Our Healthcare Portals
          </h3>
          
          <div className="space-y-8">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className={`bg-[#2F4B7C] rounded-xl p-8 cursor-pointer transition-all duration-500 ease-in-out transform ${
                  selectedCard === feature.id ? '-translate-y-2 scale-105 z-30' : ''
                } ${
                  selectedCard !== null && selectedCard !== feature.id ? 'opacity-70' : ''
                } border-t-4 ${
                  feature.color === 'blue' ? 'border-blue-500' : 
                  feature.color === 'green' ? 'border-green-500' : 'border-purple-500'
                }`}
                onMouseEnter={() => setSelectedCard(feature.id)}
                onMouseLeave={() => setSelectedCard(null)}
              >
                <div className="flex min-h-[120px]">
                  {/* Left side - Title and icon */}
                  <div className={`w-1/2 pr-6 border-r border-gray-400 flex flex-col justify-center transition-all duration-500 ease-in-out ${
                    selectedCard === feature.id ? 'items-start' : 'items-center'
                  }`}>
                    <div className="flex flex-col items-center transition-all duration-500 ease-in-out">
                      <h4 className={`font-bold transition-all duration-500 ease-in-out ${
                        selectedCard === feature.id ? 'text-3xl text-left' : 'text-4xl text-center'
                      } text-white`}>
                        {feature.title}
                      </h4>
                      
                      <div className={`transition-all duration-500 ease-in-out flex justify-center mt-4 ${
                        selectedCard === feature.id ? 'opacity-100' : 'opacity-0 h-0 mt-0'
                      }`}>
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - Description */}
                  <div className={`w-1/2 pl-6 overflow-hidden transition-all duration-500 ease-in-out flex items-center ${
                    selectedCard === feature.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-white text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;