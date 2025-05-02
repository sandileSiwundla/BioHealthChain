'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Copy from '@/components/copy';

const Transfer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1); // Start at step 1

  // Function to handle step progression
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < 4) {  // Only go up to stage 4
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }, 1000); // Progress every 1 second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="fixed inset-0 bg-teal-700 bg-opacity-50 flex justify-center items-center z-50 p-4">
      {/* Modal Container */}
      <div className="bg-teal-800 rounded-2xl shadow-lg max-w-3xl w-full p-8 text-white overflow-y-auto max-h-[90vh] relative">
        {/* Welcome Section */}
        <div className="welcome-container text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to BioHealthChain</h2>
          <p className="text-lg mb-6">
            Congratulations! Your registration is complete, and you are now part of a secure,
            decentralized healthcare network designed for seamless data access and privacy.
          </p>

          {/* Copy Component - Position it inside the modal */}
          <div className="mb-6 relative">
            <Copy />
          </div>

          <p className="text-lg mb-6">
            Please copy and save this code. It serves as your <strong>unique identifier</strong> across all
            participating hospitals and pharmacies.
          </p>

          {/* How to Use Your Code Section */}
          <h3 className="text-2xl font-semibold mb-4">How to Use Your Code</h3>
          <ul className="info-list text-left mb-6">
            <li className="mb-3">
              <strong>Hospitals:</strong> Provide your unique code along with your full name when visiting any
              participating hospital. This grants authorized healthcare providers secure access to your medical
              history.
            </li>
            <li className="mb-3">
              <strong>Pharmacies:</strong> If you receive prescription medication, simply share your code with a
              participating pharmacy, and they will retrieve and process your prescription securely.
            </li>
          </ul>

          {/* Optional Insurance Information Section */}
          <h3 className="text-2xl font-semibold mb-4">Optional Insurance Information</h3>
          <p className="text-lg mb-6">
            You have the option to securely add your <strong>insurance details</strong> to your profile. This can
            help facilitate emergency care and streamline medical billing when needed.
          </p>

          <p className="text-lg mb-6">
            Thank you for choosing <strong>BioHealthChain</strong> for your healthcare data security.
          </p>

          {/* Next Button */}
          <button
            className="bg-teal-800 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            onClick={() => alert("Redirecting to file upload...")}
          >
            Next: Upload File Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
