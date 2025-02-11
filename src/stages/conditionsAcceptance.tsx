import React, { useState, useEffect } from 'react';
import './conditionAcceptance.css';


interface BuyProps {
  onBuyButtonClick: () => void;
  onGoBackButtonClick: () => void; 
  onNextButtonClick: () => void;
}

const Buy: React.FC<BuyProps> = ({ onBuyButtonClick, onGoBackButtonClick, onNextButtonClick }) => {
  const [currentStep, setCurrentStep] = useState(1);
  
  // Function to handle step progression
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < 1) {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }, 1); // Progress every 1 second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentStep]);
  

  // Function to handle Buy Button click
  const handlesOnConsentButtonClick = () => {
    // Here, you can trigger the state update from the parent component
    onBuyButtonClick(); // Calling the passed function from DynamicContentLoader
  };

  // Function to handle Sell Button click (for dynamic content navigation)
  const handleSellButtonClick = () => {
    alert('Sell button clicked!');
    // You can also update the parent state here to trigger the next component if needed.
  };

  // Function to handle Sell Button click (for dynamic content navigation)
  const handlesBuyChainButtonClick = () => {
    onNextButtonClick();
    // You can also update the parent state here to trigger the next component if needed.
  };

  // Function to handle Sell Button click (for dynamic content navigation)
  const handlesOnBuyLogoButtonClick = () => {
    alert('Already on Buy page');
    // You can also update the parent state here to trigger the next component if needed.
  };

  


  return (
    <div className="modal-overlay">
    
  <div className="modal-content">
  <div className="terms-container">
    <h2 className="terms-heading">BioHealthChain Terms and Conditions</h2>
    <p className="terms-intro">
      Welcome to BioHealthChain! By using the BioHealthChain platform, you are agreeing to the following terms and conditions. BioHealthChain is a decentralized blockchain-based healthcare platform designed to give patients full control over their medical data, ensuring it is secure, transparent, and interoperable.
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
  
    <button 
        className="consent-button" 
        id="consentButton" onClick={handlesOnConsentButtonClick}>I Consent</button>  

  </div>
     </div>
  </div>
  
  );
};

export default Buy;
