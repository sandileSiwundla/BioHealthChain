'use client'; 


import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Gender from '@/components/gender';
import Map from '@/components/googleAPI';
import Image from './imageUploa';  

interface SellProps {
  onBuyButtonClick: () => void;
  onGoToMedicalButtonClick: () => void; 
}

const Sell: React.FC<SellProps> = ({ onBuyButtonClick, onGoToMedicalButtonClick }) => {
  const [currentStep, setCurrentStep] = useState(1); // Start at step 1

  // Function to handle step progression
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < 1) {  // Only go up to stage 2
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }, 1); // Progress every 1 second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="fixed inset-0 bg-teal-600 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-teal-700 bg-opacity-60 p-12 rounded-3xl max-w-5xl w-full h-full max-h-[80vh] overflow-y-auto text-white shadow-2xl flex flex-col justify-center items-center">
        {/* Patient Name Input */}
        <div className="w-full mb-6">
          <label className="text-xl font-semibold mb-2 block">Name & Surname</label>
          <input
            type="text"
            placeholder="Enter Name & Surname"
            className="w-full p-3 rounded-md bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Patient Address Input */}
        <div className="w-full mb-6">
          <label className="text-xl font-semibold mb-2 block">Patient Physical Address</label>
          <input
            type="text"
            placeholder="Enter Physical Address"
            className="w-full p-3 rounded-md bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Gender Selection */}
        <div className="w-full mb-6">
          <label className="text-xl font-semibold mb-2 block">Gender</label>
          <Gender />
        </div>

        {/* Patient ID Input */}
        <div className="w-full mb-6">
          <label className="text-xl font-semibold mb-2 block">Patient South African ID</label>
          <input
            type="text"
            placeholder="Enter Patient ID"
            className="w-full p-3 rounded-md bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Map Component */}
        <div className="w-full mb-6">
          <label className="text-xl font-semibold mb-2 block">Patient Location</label>
          <Map />
        </div>

        {/* Image Upload */}
        <div className="w-full mb-6">
          <label className="text-xl font-semibold mb-2 block">Upload Patient Image</label>
          <Image />
        </div>

        {/* Progress Bar (Placeholder) */}
        <div className="w-full mb-6">
          <div className="h-2 bg-teal-800 rounded-full">
            <div
              className="h-full bg-teal-500 rounded-full"
              style={{ width: `${(currentStep / 1) * 100}%` }} // Adjust based on steps
            ></div>
          </div>
        </div>

        {/* Next Button */}
        <div className="w-full text-center">
          <Link to="/uniqueCode">
            <button className="bg-teal-800 hover:bg-teal-600 text-white py-3 px-8 rounded-md cursor-pointer transition duration-300">
              LOAD PATIENT DATA
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sell;