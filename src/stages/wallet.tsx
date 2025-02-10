import React, { useState, useEffect } from 'react';
import './wallet.css';

interface WalletPros {
  onBuyButtonClick: () => void;
  onGoBackButtonClick: () => void; 
  onGoToVerifyOTPClick: () => void;
  onGoBackToBuyButtonClick: () => void;
}

const Wallet: React.FC<WalletPros> = ({ onBuyButtonClick, onGoBackButtonClick, 
  onGoToVerifyOTPClick, onGoBackToBuyButtonClick }) => {
  const [currentStep, setCurrentStep] = useState(1);


  // Function to handle step progression
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < 2) {
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
    onGoBackToBuyButtonClick();
  };

  const handleNextClick = () => {
    onGoToVerifyOTPClick();
  };

  return (
    <div className="modal-overlay">
  
      <button className="buyLowerButton" onClick={handleBuyButtonClick}></button>
      <button className="sellLowerButton" onClick={handleSellButtonClick}></button>
      <button className="back" onClick={handleBackButtonClick}></button>
      <button className="next" onClick={handleNextClick}></button>
  
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
      </div>
    </div>
  );
};

export default Wallet;
