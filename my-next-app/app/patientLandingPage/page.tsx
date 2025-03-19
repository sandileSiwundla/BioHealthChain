'use client'; 

import React from "react";
import Link from "next/link";

const Patient: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-teal-700 bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-teal-800 rounded-2xl shadow-lg max-w-3xl w-full pt-5 pb-5 text-white overflow-hidden">
        <div className="text-center max-h-[85vh] overflow-y-auto">
          <h1 className="text-4xl font-bold mb-4">
            Take Control of Your Health Data
          </h1>
          <p className="mt-4 text-lg mb-6">
            BioHealthChain provides a secure, decentralized platform that gives 
            you full control over your medical records. Easily access, manage, 
            and share your health data while ensuring complete privacy and security.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-100">
                Instant Access to Medical Records
              </h2>
              <p className="mt-2 text-gray-300">
                View your complete medical history anytime, anywhere, without delays 
                or paperwork.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-100">
                Full Data Control
              </h2>
              <p className="mt-2 text-gray-300">
                You decide who can access your medical records and for how long. 
                Grant or revoke access with ease.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-100">
                Advanced Security & Privacy
              </h2>
              <p className="mt-2 text-gray-300">
                Your data is encrypted and protected by blockchain technology, 
                ensuring privacy and compliance with global regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-100">
                Seamless Healthcare Integration
              </h2>
              <p className="mt-2 text-gray-300">
                Share your records securely with doctors, specialists, and hospitals 
                to receive faster, more efficient care.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-100">
                Transparency and Accuracy
              </h2>
              <p className="mt-2 text-gray-300">
                Every record update is securely logged, ensuring accuracy, 
                trust, and full visibility into your medical history.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/patientTerm&Cons">
              <button className="bg-teal-900 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
