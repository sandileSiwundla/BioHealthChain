'use client'; // Ensure the component is treated as a client component in Next.js

import React, { useState, useEffect } from 'react';
import DropDown from "@/components/dropdownList";
import Map from '@/components/googleAPI';
import Link from 'next/link'; // Use Link from Next.js for routing

const Buy: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Function to handle step progression
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < 1) {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }, 1); // Progress every 1 second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="fixed inset-0 bg-teal-600 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-teal-700 bg-opacity-60 p-12 rounded-3xl max-w-5xl w-full h-full max-h-[80vh] overflow-y-auto text-white shadow-2xl flex flex-col justify-center items-center">
        
        {/* Labels and Input Fields */}
        <div className="flex flex-wrap justify-center w-full space-y-4">
          <div className="w-full sm:w-1/3 text-center mb-4">
            <div className="text-xl font-semibold mb-2">Healthcare Professional Name</div>
            <input 
              type="text" 
              placeholder="Enter name" 
              className="p-3 rounded-md w-[300px] h-[45px] bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500" 
            />
          </div>

          <div className="w-full sm:w-1/3 text-center mb-4">
            <div className="text-xl font-semibold mb-2">Hospital Name</div>
            <input 
              type="text" 
              placeholder="Enter hospital name" 
              className="p-3 rounded-md w-[300px] h-[45px] bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500" 
            />
          </div>

          <div className="w-full sm:w-1/3 text-center mb-4">
            <div className="text-xl font-semibold mb-2">Healthcare Provider ID (HCP-ID)</div>
            <input 
              type="text" 
              placeholder="Enter Healthcare Provider ID" 
              className="p-3 rounded-md w-[300px] h-[45px] bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500" 
            />
          </div>
        </div>

        {/* Profession Dropdown */}
        <div className="w-full text-center mb-4">
          <div className="text-xl font-semibold mb-2">Pick Profession</div>
          <DropDown />
        </div>

        {/* Map with Absolute Positioning */}
        <div className="w-full text-center mb-8">
          <div className="text-xl font-semibold mb-2">Location</div>
          <Map />
        </div>

        {/* Next Button */}
        <div id="nextButton" className="text-center mt-8">
          <Link href="/patientSIgnUp">
            <button className="bg-teal-800 hover:bg-teal-600 text-white py-3 px-8 rounded-md cursor-pointer transition duration-300">
              NEXT
            </button>
          </Link>
          
        </div>

      </div>
    </div>
  );
};

export default Buy;