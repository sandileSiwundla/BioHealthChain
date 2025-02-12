import React, { useState } from 'react';
import './copy.css'; // Import the CSS file for styling

const CopyBox = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const [isPulsing, setIsPulsing] = useState(false);  // Define isPulsing state

  const handleCopy = () => {
    // Trigger pulse animation
    setIsPulsing(true);

    // Simulate a copy action (for demonstration purposes)
    setTimeout(() => {
      // Reset the pulsing effect after the animation
      setIsPulsing(false);
    }, 300);  // Match this duration to the animation duration (0.3s)

    // Place your copy logic here (e.g., copying text to clipboard)
    alert("Text copied!");
  };

  return (
    <div className="copy-box-container">
      <div className="box-layer"></div> {/* Layered background box */}
      <div className="copy-box">
        <div className="box-content" id="copy-text">
          <pre>
            {`P4D2V8R1X`}
          </pre>
        </div>
        <button 
            className={`copy-button ${isPulsing ? 'pulsing' : ''}`} 
            onClick={handleCopy}>
            {/* Copy icon or text */}
          </button>
      </div>
    </div>
  );
};

export default CopyBox;
