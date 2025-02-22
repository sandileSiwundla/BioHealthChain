import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './patientDataIntake.css';
import Gender from './gender';  
import Map from './googleAPI';
import Image from './imageUploa';  


interface SellProps {
  onBuyButtonClick: () => void;
  onGoToMedicalButtonClick: () => void; 
}


const Sell: React.FC<SellProps>= ({ onBuyButtonClick, onGoToMedicalButtonClick }) => {
  const [currentStep, setCurrentStep] = useState(1); // Start at step 1

  // Function to handle step progression
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < 1) {  // Only go up to stage 2
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }, 1); // Progress every 1 second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentStep]);

  // Button click handlers
  const handleBuyButtonClick = () => {
    alert('Buy button clicked!');
  };

  const handleNextButtonClick = () => {
    onGoToMedicalButtonClick();
  };


  return (
    <div className="modal-overlay">
      <div className="sell"></div>

      <div className="patientName-box">
        <input type="text" placeholder="Enter Name & Surname" />
      </div>

      <div className="patientName">Name & Surname</div>
      

      <div className="patientAddress">Patience Physical Address</div>
      <div className="gender">Gender</div>
      <Gender/>

      <div className="patientID">Patients South African ID</div>
      <div className="patientID-box">
        <input type="text" placeholder="Enter Patient ID" />
      </div>
      
      <Map />


      {/* Progress Bar */}
      <div className="modal-content">
      <div id="nextButton">
      <Link to="/uniqueCode">
        <button className="next-button" id="nextButton">
        LOAD PATIENT DATA
        </button>
      </Link>
</div>



      <div className="flex justify-center items-center h-screen bg-[#1c6593]">
      <Image />
    </div>

      </div>
    </div>
  );
};

export default Sell;
