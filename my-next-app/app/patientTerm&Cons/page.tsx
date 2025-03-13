'use client'; // Ensure the component is treated as a client component in Next.js

import React from "react";
import Link from "next/link"; // Use Link from next/router in a Next.js app

const PatientSignUp: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-teal-600 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-teal-700 bg-opacity-60 p-12 rounded-3xl max-w-5xl w-full h-full max-h-[80vh] overflow-y-auto text-white shadow-2xl flex flex-col justify-center items-center">
        <div className="terms-container w-full text-center">
          <h2 className="text-4xl font-extrabold mb-8">BioHealthChain Terms and Conditions</h2>
          <p className="text-xl mb-8">
            By using the BioHealthChain platform, you are agreeing to the following terms and conditions. BioHealthChain is a decentralized blockchain-based healthcare platform designed to give patients full control over their medical data, ensuring it is secure, transparent, and interoperable.
          </p>

          <div className="terms-section mb-8">
            <h3 className="text-2xl font-semibold">1. Consent to Use BioHealthChain</h3>
            <ul className="list-disc pl-6">
              <li>You are willingly providing your medical records for secure storage on the BioHealthChain platform.</li>
              <li>Your medical data will be stored using blockchain technology, ensuring transparency, security, and immutability.</li>
              <li>You consent to share your medical data with authorized medical professionals or institutions as part of your healthcare journey, where necessary.</li>
            </ul>
          </div>

          <div className="terms-section mb-8">
            <h3 className="text-2xl font-semibold">2. Responsible Record Taking</h3>
            <ul className="list-disc pl-6">
              <li>Your medical records will only be created and uploaded by qualified healthcare professionals, specifically doctors responsible for your health.</li>
              <li>The doctor will be fully accountable for the accuracy and completeness of your medical record.</li>
              <li>The record-taking process will occur only if you, as the patient, are physically present in the room at the time of registration.</li>
            </ul>
          </div>

          <div className="terms-section mb-8">
            <h3 className="text-2xl font-semibold">3. Patient Control and Privacy</h3>
            <ul className="list-disc pl-6">
              <li>You have full access to and control over your health records at all times.</li>
              <li>You are responsible for managing and authorizing who has access to your data, ensuring privacy and protecting your sensitive information.</li>
            </ul>
          </div>

          <div className="terms-section mb-8">
            <h3 className="text-2xl font-semibold">4. Platform Purpose</h3>
            <ul className="list-disc pl-6">
              <li>Empower patients by providing complete control over their health data.</li>
              <li>Enhance security by using blockchain technology to make medical records tamperproof and transparent.</li>
              <li>Drive innovation through seamless data sharing and interoperability across healthcare systems globally.</li>
              <li>Build trust by ensuring compliance with global healthcare regulations for maximum transparency and reliability.</li>
            </ul>
          </div>

          <div className="terms-section mb-8">
            <h3 className="text-2xl font-semibold">5. Acknowledgement and Agreement</h3>
            <ul className="list-disc pl-6">
              <li>You acknowledge and agree to the platform's terms.</li>
              <li>You confirm that you are capable of providing informed consent and agree to participate in the platform's services, knowing that your data will be handled securely by qualified professionals.</li>
            </ul>
          </div>

          <Link href="/patientDoctorLogin">
            <button className="bg-teal-800 hover:bg-teal-600 text-white py-3 px-8 rounded-md cursor-pointer transition duration-300 mt-8">
              I Consent
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PatientSignUp;
