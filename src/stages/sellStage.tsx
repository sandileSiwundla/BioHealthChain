import React, { useState, useEffect } from 'react';
import './sell.css'; // Ensure the CSS path is correct
interface SellProps {
  onBuyButtonClick: () => void;
  onGoBackButtonClick: () => void; 
}


const Sell: React.FC<SellProps>= ({ onBuyButtonClick, onGoBackButtonClick }) => {
  const [currentStep, setCurrentStep] = useState(1); // Start at step 1

  // Function to handle step progression
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < 1) {  // Only go up to stage 2
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


  return (
    <div className="modal-overlay">
      <div className="sell"></div>

      <button className="buyLowerButton" onClick={handleBuyButtonClick}></button>
      <button className="sellLowerButton" onClick={handleSellButtonClick}></button>
      <button className="goback" onClick={onGoBackButtonClick}></button>

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

export default Sell;
