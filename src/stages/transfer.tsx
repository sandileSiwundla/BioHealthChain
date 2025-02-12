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
  
      {/* Buttons for Buy, Sell, Go Back, Transfer Funds */}
      <button className="buyLowerButton" onClick={onBuyButtonClick}></button>
      <button className="sellLowerButton" onClick={onSellButtonClick}></button>
      <button className="back" onClick={handleBackButtonClick}></button>
      <button className="transferFunds" onClick={handleTransferFundsButtonClick}></button>

      {/* Display Copy component */}
      <Copy />
  
      {/* Progress Bar */}
      <div className="modal-content">

        </div>
      </div>
  );
};

export default Transfer;
