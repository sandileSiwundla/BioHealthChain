import React, { useState, useEffect } from 'react';
import './healthcareLoginPatientSide.css';
import DropDown from './dropDownList';  
import Map from './googleAPI';  
import { Link } from "react-router-dom";


interface BuyProps {
  onBuyButtonClick: () => void;
  onGoBackButtonClick: () => void; 
  onNextToPatientIDButtonClick: () => void;
}

const Buy: React.FC<BuyProps> = ({ onBuyButtonClick, onGoBackButtonClick, onNextToPatientIDButtonClick }) => {
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
  const handleBuyButtonClick = () => {
    // Here, you can trigger the state update from the parent component
    onBuyButtonClick(); // Calling the passed function from DynamicContentLoader
  };

  // Function to handle Sell Button click (for dynamic content navigation)
  const handleSellButtonClick = () => {
    alert('Sell button clicked!');
    // You can also update the parent state here to trigger the next component if needed.
  };

  // Function to handle Sell Button click (for dynamic content navigation)
  const handlesNextButtonClick = () => {
    onNextToPatientIDButtonClick();
    // You can also update the parent state here to trigger the next component if needed.
  };

  // Function to handle Sell Button click (for dynamic content navigation)
  const handlesOnBuyLogoButtonClick = () => {
    alert('Already on Buy page');
    // You can also update the parent state here to trigger the next component if needed.
  };

  


  return (
    <div className="modal-overlay">

      {/* Existing Currency and Chain labels */}

      
      {/* New labels */}
      <div className="healthProvidersName">Healthcare Professional Name</div>
      <div className="hospitalName">Hospital Name</div>


      <div className="HCP-ID">Healthcare Provider ID (HCP-ID)</div>
      <div className="doctorPick">Pick Profession</div>



      {/* Text Input Fields for "You Buy" and "You Receive" */}
      <div className="healthProvidersName-box">
        <input type="text" placeholder="Enter name" />
      </div>

      <div className="HCP-ID-box">
        <input type="text" placeholder="Enter Healthcare Provider ID" />
      </div>
      <div>
    <div>
        <DropDown  />
    </div>

    <div>
        <Map />
    </div>
</div>

      

      <div className="modal-content">

      <div id="nextButton">
    <Link to="/patientDataIntake">
        <button className="next-button" id="nextButton">
        NEXT
        </button>
      </Link>
</div>

       
          
      </div>
    </div>
  );
};

export default Buy;
