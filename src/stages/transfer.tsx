import React, { useState, useEffect } from 'react';
import './transfer.css';
import Copy from './copyBox';  

interface TransferProps {
  onBuyButtonClick: () => void;  // Function to switch to Buy page
  onSellButtonClick: () => void; // Function to switch to Sell page
  onGoBackButtonClick: () => void; // Function to go back to the previous step
}

const Transfer: React.FC<TransferProps> = ({ onBuyButtonClick, onSellButtonClick, onGoBackButtonClick }) => {
  const [currentStep, setCurrentStep] = useState(1); // Start at step 1

  // Function to handle step progression
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < 4) {  // Only go up to stage 4
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }, 1); // Progress every 1 second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentStep]);

  // Button click handlers
  const handleBuyButtonClick = () => {
    onBuyButtonClick(); // Call the function passed from the parent to switch to the Buy page
  };

  const handleSellButtonClick = () => {
    onSellButtonClick(); // Call the function passed from the parent to switch to the Sell page
  };

  const handleBackButtonClick = () => {
    onGoBackButtonClick(); // Trigger the "Go Back" functionality from the parent
  };

  const handleTransferFundsButtonClick = () => {
    alert('Transfer Funds clicked');
    // Optionally, handle transfer logic here
  };

  return (
    <div className="modal-overlay">


      {/* Display Copy component */}
  
      {/* Progress Bar */}
      <div className="modal-content">
      <div className="welcome-container">
        <h2>Welcome to BioHealthChain</h2>
        <p>
          Congratulations! Your registration is complete, and you are now part of a secure,
          decentralized healthcare network designed for seamless data access and privacy.
        </p>

        <Copy />

        <p>
          Please copy and save this code. It serves as your <strong>unique identifier</strong> across all
          participating hospitals and pharmacies.
        </p>

        <h3>How to Use Your Code</h3>
        <ul className="info-list">
          <li>
            <strong>Hospitals:</strong> Provide your unique code along with your full name when visiting any
            participating hospital. This grants authorized healthcare providers secure access to your medical
            history.
          </li>
          <li>
            <strong>Pharmacies:</strong> If you receive prescription medication, simply share your code with a
            participating pharmacy, and they will retrieve and process your prescription securely.
          </li>
        </ul>

        <h3>Optional Insurance Information</h3>
        <p>
          You have the option to securely add your <strong>insurance details</strong> to your profile. This can
          help facilitate emergency care and streamline medical billing when needed.
        </p>

        <p>
          Thank you for choosing <strong>BioHealthChain</strong> for your healthcare data security.
        </p>

        <button className="next-button" onClick={() => alert("Redirecting to file upload...")}>
          Next: Upload File Information
        </button>
      </div>


        </div>
      </div>
  );
};

export default Transfer;
