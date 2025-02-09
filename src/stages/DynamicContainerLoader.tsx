import React, { useState } from 'react';
import Buy from './buySate'; 
import Sell from './sellStage';  
import Transfer from './transfer';  
import Verify from './verify';  
import Wallet from './wallet';  
import VerifyOTP from './verifyOTP'; 

const DynamicContentLoader = () => {
    const [currentPage, setCurrentPage] = useState(0); // Track the current page
  
    // Function to handle "Next" Button click and move to the next page
    const handleNextButtonClick = () => {
      if (currentPage < contentArray.length - 1) {
        setCurrentPage((prevPage) => prevPage + 1); // Move to the next page
      }
    };
  
    // Function to handle "Go Back" Button click and move to the previous page
    const handleGoBackButtonClick = () => {
      setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0)); // Decrease page index, but don't go below 0
    };
  
    const contentArray = [
      <Buy onBuyButtonClick={handleNextButtonClick} onGoBackButtonClick={handleGoBackButtonClick} />,
      <Sell onBuyButtonClick={handleNextButtonClick} onGoBackButtonClick={handleGoBackButtonClick} />,
      <Transfer onBuyButtonClick={handleNextButtonClick} onGoBackButtonClick={handleGoBackButtonClick} />,
      <Verify onBuyButtonClick={handleNextButtonClick} onGoBackButtonClick={handleGoBackButtonClick} />,
      <Wallet oonBuyButtonClick={handleNextButtonClick} onGoBackButtonClick={handleGoBackButtonClick} />,
      <VerifyOTP oonBuyButtonClick={handleNextButtonClick} onGoBackButtonClick={handleGoBackButtonClick} />,
    ];
  
    return (
      <div>
        {/* Render the current page based on currentPage state */}
        {contentArray[currentPage]}
      </div>
    );
  };
  
  export default DynamicContentLoader;