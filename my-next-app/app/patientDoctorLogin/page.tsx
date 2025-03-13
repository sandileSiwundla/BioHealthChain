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
        
        {/* Healthcare Provider Labels */}
        <div className="healthProvidersName text-center text-xl font-semibold mb-4">Healthcare Professional Name</div>
        <div className="hospitalName text-center text-xl font-semibold mb-4">Hospital Name</div>
        <div className="HCP-ID text-center text-xl font-semibold mb-4">Healthcare Provider ID (HCP-ID)</div>
        <div className="doctorPick text-center text-xl font-semibold mb-4">Pick Profession</div>

        {/* Text Input Fields */}
        <div className="healthProvidersName-box mb-4">
          <input type="text" placeholder="Enter name" className="p-2 rounded-md w-full" />
        </div>

        <div className="HCP-ID-box mb-4">
          <input type="text" placeholder="Enter Healthcare Provider ID" className="p-2 rounded-md w-full" />
        </div>

        {/* Dropdown and Map Components */}
        <div className="mb-4 w-full text-center">
          <DropDown />
        </div>

        <div className="mb-8 w-full text-center">
          <Map />
        </div>

        {/* Next Button */}
        <div id="nextButton" className="text-center mt-8">
          <Link href="/patientDataIntake">
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
