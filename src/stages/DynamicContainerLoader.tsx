import React, { useState } from 'react';
import Buy from './buySate'; 
import Sell from './sellStage';  
import Transfer from './transfer';  
import Verify from './verify';  
import Wallet from './wallet';  
import VerifyOTP from './verifyOTP'; 

const DynamicContentLoader = () => {
  const [currentPage, setCurrentPage] = useState(0); // Track current page

  // Function to handle Buy Button click and navigate to the next page
  const handleBuyButtonClick = () => {
    setCurrentPage(1); // Transition to next page, for example Sell
  };

  const contentArray = [
    <Buy onBuyButtonClick={handleBuyButtonClick} />, // Pass the function here
    <Sell />,
    <Transfer />,
    <Verify />,
    <Wallet />,
    <VerifyOTP />,
  ];

  return (
    <div>
      {/* Render the current page based on currentPage state */}
      {contentArray[currentPage]}
    </div>
  );
};

export default DynamicContentLoader;
