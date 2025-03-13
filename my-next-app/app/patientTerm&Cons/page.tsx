'use client'; // Ensure the component is treated as a client component in Next.js

import React from "react";
import Link from "next/link"; // Use Link from next/router in a Next.js app
import './patientTermsAndConditions.css';

const PatientSignUp: React.FC = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="terms-container">
          <h2 className="terms-heading">BioHealthChain Terms and Conditions</h2>
          <p className="terms-intro">
            By using the BioHealthChain platform, you are agreeing to the following terms and conditions. BioHealthChain is a decentralized blockchain-based healthcare platform designed to give patients full control over their medical data, ensuring it is secure, transparent, and interoperable.
          </p>

          <div className="terms-section">
            <h3>1. Consent to Use BioHealthChain</h3>
            <ul>
              <li>You are willingly providing your medical records for secure storage on the BioHealthChain platform.</li>
              <li>Your medical data will be stored using blockchain technology, ensuring transparency, security, and immutability.</li>
              <li>You consent to share your medical data with authorized medical professionals or institutions as part of your healthcare journey, where necessary.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h3>2. Responsible Record Taking</h3>
            <ul>
              <li>Your medical records will only be created and uploaded by qualified healthcare professionals, specifically doctors responsible for your health.</li>
              <li>The doctor will be fully accountable for the accuracy and completeness of your medical record.</li>
              <li>The record-taking process will occur only if you, as the patient, are physically present in the room at the time of registration.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h3>3. Patient Control and Privacy</h3>
            <ul>
              <li>You have full access to and control over your health records at all times.</li>
              <li>You are responsible for managing and authorizing who has access to your data, ensuring privacy and protecting your sensitive information.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h3>4. Platform Purpose</h3>
            <ul>
              <li>Empower patients by providing complete control over their health data.</li>
              <li>Enhance security by using blockchain technology to make medical records tamperproof and transparent.</li>
              <li>Drive innovation through seamless data sharing and interoperability across healthcare systems globally.</li>
              <li>Build trust by ensuring compliance with global healthcare regulations for maximum transparency and reliability.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h3>5. Acknowledgement and Agreement</h3>
            <ul>
              <li>You acknowledge and agree to the platform's terms.</li>
              <li>You confirm that you are capable of providing informed consent and agree to participate in the platform's services, knowing that your data will be handled securely by qualified professionals.</li>
            </ul>
          </div>

          <Link href="/patientSideDrLogin">
            <a>
              <button className="consent-button" id="consentButton">
                I Consent
              </button>
            </a>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default PatientSignUp;

// Styles for Terms and Conditions (CSS-in-JS)
<style jsx>{`
  .terms-container {
    background-color: #f9f9f9;
    padding: 20px;
    margin: 20px auto;
    width: 80%;
    max-width: 800px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .terms-heading {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .terms-intro {
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 1.5;
    color: #333;
  }

  .terms-section {
    margin-bottom: 20px;
  }

  .terms-section h3 {
    font-size: 20px;
    color: #0f100f;
    margin-bottom: 10px;
  }

  .terms-section ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  .terms-section ul li {
    font-size: 16px;
    margin-bottom: 8px;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    .terms-container {
      width: 90%;
      padding: 15px;
    }

    .terms-heading {
      font-size: 22px;
    }

    .terms-intro {
      font-size: 16px;
    }

    .terms-section h3 {
      font-size: 20px;
    }

    .terms-section ul li {
      font-size: 16px;
    }
  }

  /* Styling for the "I Consent" button */
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

  /* Main container styling */
  .app {
    text-align: center;
    padding: 50px;
    height: 100vh;  /* Full viewport height */
    background-image: url('./assets/background.png'); /* Add your background image here */
    background-size: cover;  /* Ensure it covers the whole background */
    background-position: center;  /* Center the image */
    background-repeat: no-repeat; /* Avoid repeating the image */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Modal overlay (background that darkens the page) */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;  /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;  /* Ensure it's on top of other content */
  }

  /* Modal content to stay within bounds of the screen */
  .modal-content {
    width: 1200px !important;
    height: calc(90%) !important;  /* Increase height by 10% */
    background: rgba(3, 159, 255, 0.25) !important;
    border: 1px solid #020c13 !important;
    border-radius: 20px !important;
    backdrop-filter: blur(12px);
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    overflow-y: auto;
  }
`}</style>
