'use client'; // Mark this as a client component

import React from "react";
import Link from "next/link";

const Patient: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Take Control of Your Health Data
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          BioHealthChain provides a secure, decentralized platform that gives 
          you full control over your medical records. Easily access, manage, 
          and share your health data while ensuring complete privacy and security.
        </p>
      </div>

      <div className="mt-12 max-w-3xl space-y-8 text-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Instant Access to Medical Records
          </h2>
          <p className="mt-2 text-gray-700">
            View your complete medical history anytime, anywhere, without delays 
            or paperwork.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Full Data Control
          </h2>
          <p className="mt-2 text-gray-700">
            You decide who can access your medical records and for how long. 
            Grant or revoke access with ease.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Advanced Security & Privacy
          </h2>
          <p className="mt-2 text-gray-700">
            Your data is encrypted and protected by blockchain technology, 
            ensuring privacy and compliance with global regulations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Seamless Healthcare Integration
          </h2>
          <p className="mt-2 text-gray-700">
            Share your records securely with doctors, specialists, and hospitals 
            to receive faster, more efficient care.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Transparency and Accuracy
          </h2>
          <p className="mt-2 text-gray-700">
            Every record update is securely logged, ensuring accuracy, 
            trust, and full visibility into your medical history.
          </p>
        </div>
      </div>

      <div>
        <Link href="/patientSignUp">
            <button className="consent-button" id="consentButton">
              Get Started
            </button>
        </Link>
      </div>

      {/* Scoped styling using styled-jsx */}
      <style jsx>{`
        .consent-button {
          display: block;
          margin: 30px auto 0;
          padding: 15px 30px;
          font-size: 16px;
          font-weight: bold;
          color: #2d7f2c;
          background-color: transparent;
          border: 2px solid #2d7f2c;
          border-radius: 25px;
          transition: background-color 0.3s, color 0.3s;
          cursor: pointer;
          outline: none;
        }

        .consent-button:hover {
          background-color: rgba(45, 127, 44, 0.1);
        }

        .consent-button:active {
          background-color: #2d7f2c;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Patient;
