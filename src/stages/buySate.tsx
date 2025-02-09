import React, { useState, useEffect } from 'react';
import './buy.css';
import DropDown from './dropDownList';  
import Chain from './ChainDropDown';  

interface BuyProps {
  onBuyButtonClick: () => void;
  onGoBackButtonClick: () => void; 
}

const Buy: React.FC<BuyProps> = ({ onBuyButtonClick, onGoBackButtonClick }) => {
  const [currentStep, setCurrentStep] = useState(1);
  
  // Function to handle step progression
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < 1) {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }, 1000); // Progress every 1 second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentStep]);

  // Function to handle Buy Button click
  const handleBuyButtonClick = () => {
    // Here, you can trigger the state update from the parent component
    onBuyButtonClick(); // Calling the passed function from DynamicContentLoader
  };

  // Function to handle Sell Button click (for dynamic content navigation)
  const handleSellButtonClick = () => {
    alert('Sell button clicked!');
    // You can also update the parent state here to trigger the next component if needed.
  };

  


  return (
    <div className="modal-overlay">
      <div className="buy"></div>

      {/* Existing Currency and Chain labels */}
      <div className="currency-label">Currency</div>
      <div className="Chain-label">Chain</div>

      {/* New labels */}
      <div className="you-buy">You Buy</div>
      <div className="You-Receive">You Receive</div>
      <div className="Total-Fee">Total Fee</div>
      <div className="top-content-box">Enter amount here</div>

      {/* Text Input Fields for "You Buy" and "You Receive" */}
      <div className="you-buy-box">
        <input type="text" placeholder="Enter amount" />
      </div>
      <div className="you-receive-box">
        <input type="text" placeholder="Amount you will receive" />
      </div>

      {/* Existing Dropdown */}
      <DropDown />
      {/* <Chain /> */}

      {/* Existing Buttons */}
      <button className="sellLowerButton" onClick={handleSellButtonClick}></button>
      <button className="buyLowerButton" onClick={handleBuyButtonClick}></button>
      <button className="goback" onClick={onGoBackButtonClick}></button>

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

export default Buy;
