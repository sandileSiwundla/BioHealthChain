import React, { useState } from 'react';
import Buy from './buySate'; 
import Sell from './sellStage';  
import Transfer from './transfer';  
import Verify from './verify';  
import Wallet from './wallet';  
import VerifyOTP from './verifyOTP'; 
import Condition from './conditionsAcceptance';
import Map from './googleAPI'

const DynamicContentLoader = () => {
  const [currentPage, setCurrentPage] = useState(0); // Track the current page

  // Function to switch to Buy page
  const handleBuyButtonClick = () => {
    setCurrentPage(1); // Set to Buy page (you can adjust the page number)
  };

  const handleGoToMedicalButtonClick = () => {
    setCurrentPage(3); // Set to Buy page (you can adjust the page number)
  };
  // Function to switch to Sell page
  const handleSellButtonClick = () => {
    setCurrentPage(2); // Set to Sell page (you can adjust the page number)
  };
 
   // Function to switch to Sell page
   const handleNextButtonOnBuyClick = () => {
    setCurrentPage(4); // Set to Sell page (you can adjust the page number)
  };

  // Function to switch to Sell page
  const handleGoToVerifyEmailClick = () => {
    setCurrentPage(3); // Set to Sell page (you can adjust the page number)
  };

   // Function to switch to Sell page
   const handleGoBackToBuyClick = () => {
    setCurrentPage(0); // Set to Sell page (you can adjust the page number)
  };

  // Function to switch to Sell page
  const handleGoToVerifyOTPButtonClick = () => {
    setCurrentPage(5); // Set to Sell page (you can adjust the page number)
  };


  // Function to switch to Sell page
  const handleGoToOtherButtonClick = () => {
    setCurrentPage(2); // Set to Sell page (you can adjust the page number)
  }; // Function to switch to Sell page
  
  const handleToPatientIDButtonClick = () => {
    setCurrentPage(2); // Set to Sell page (you can adjust the page number)
  };
  // Function to handle "Go Back" Button click and move to the previous page
  const handleGoBackButtonClick = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0)); // Decrease page index, but don't go below 0
  };

  const contentArray = [
    <Condition onBuyButtonClick={handleBuyButtonClick}
    onGoBackButtonClick={handleGoBackButtonClick}
    onNextButtonClick={handleNextButtonOnBuyClick}/>,
    
    <Buy onBuyButtonClick={handleBuyButtonClick}
     onGoBackButtonClick={handleGoBackButtonClick}
     onNextToPatientIDButtonClick={handleToPatientIDButtonClick}
     />,
    <Sell onBuyButtonClick={handleBuyButtonClick} 
    onGoToMedicalButtonClick={handleGoToMedicalButtonClick} />,
    <Transfer 
      onBuyButtonClick={handleBuyButtonClick} 
      onSellButtonClick={handleSellButtonClick} 
      onGoBackButtonClick={handleGoBackButtonClick} 
    />,
    <Verify onBuyButtonClick={handleBuyButtonClick} 
    onGoBackButtonClick={handleGoBackButtonClick} 
    onGoToVerifyOTPClick={handleGoToVerifyOTPButtonClick}/>,
    <Wallet onBuyButtonClick={handleBuyButtonClick} 
    onGoBackButtonClick={handleGoBackButtonClick}
    onGoToVerifyEmailClick={handleGoToVerifyEmailClick} 
    onGoBackToBuyButtonClick={handleGoBackToBuyClick} />,
    <VerifyOTP onBuyButtonClick={handleBuyButtonClick} 
    onGoBackButtonClick={handleGoBackButtonClick}
    onGoToOtherButtonClick={handleGoToOtherButtonClick}
     />,
  ];

  return (
    <div>
      {/* Render the current page based on currentPage state */}
      {contentArray[currentPage]}
    </div>
  );
};

export default DynamicContentLoader;
