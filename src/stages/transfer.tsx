import React, { useState, useEffect } from 'react';
import './transfer.css';
import Copy from './copyBox';  


const Transfer = () => {
  const [currentStep, setCurrentStep] = useState(1); // Start at step 1

  // Function to handle step progression
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < 4) {  // Only go up to stage 2
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }, 1000); // Progress every 1 second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentStep]);

  // Button click handlers
  const handleBuyButtonClick = () => {
    alert('Buy button clicked!');
  };

  const handleSellButtonClick = () => {
    alert('Sell button clicked!');
  };

  const handleBackButtonClick = () => {
    alert('goes back');
  };

  const handleTransferFundsButtonClick = () => {
    alert('goes back');
  };

  return (
    <div className="modal-overlay">
  
      <button className="buyLowerButton" onClick={handleBuyButtonClick}></button>
      <button className="sellLowerButton" onClick={handleSellButtonClick}></button>
      <button className="back" onClick={handleBackButtonClick}></button>
      <button className="transferFunds" onClick={handleTransferFundsButtonClick}></button>
      <Copy/>
  
      {/* Progress Bar */}
      <div className="modal-content">
        <div className="progress-bar">
          <div className={`step ${currentStep >= 1 ? 'completed' : ''} ${currentStep === 1 ? 'current' : ''}`}>
            <div className="circle">1</div>
            <div className="label">Amount</div>
          </div>
          <div className={`step ${currentStep >= 2 ? 'completed' : ''} ${currentStep === 2 ? 'current' : ''}`}>
            <div className="circle">2</div>
            <div className="label">Wallet</div>
          </div>
          <div className={`step ${currentStep >= 3 ? 'completed' : ''} ${currentStep === 3 ? 'current' : ''}`}>
            <div className="circle">3</div>
            <div className="label">Verify</div>
          </div>
          <div className={`step ${currentStep >= 4 ? 'completed' : ''} ${currentStep === 4 ? 'current' : ''}`}>
            <div className="circle">4</div>
            <div className="label">Order</div>
          </div>
        </div>
  
        {/* Additional Details Section */}
        <div className="details-container">
          <div className="detail-item review-details">
            <strong>Review details</strong>
          </div>
          <div className="detail-item proceed-transaction">
          Confirm details and proceed with the transaction
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
