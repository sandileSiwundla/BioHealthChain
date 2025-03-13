'use client';

import React, { useState } from 'react';
import { Copy } from 'lucide-react'; // Importing the Copy icon from Lucide React

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
    <div className="relative bg-[#f9f9f9] p-2.5 font-mono rounded-md overflow-x-auto whitespace-pre-wrap text-center mb-2 bg-teal-700">
      <pre>{`P4D2V8R1X`}</pre>
      <button
        className={`absolute bottom-2.5 right-2.5 w-[2.5rem] h-[2.5rem] flex justify-center items-center bg-teal-600 text-black rounded-full shadow-md border-none z-[3] ${isPulsing ? 'animate-pulse' : ''}`}
        onClick={handleCopy}>
        <Copy size={24} /> 
      </button>
    </div>
  );
};

export default CopyBox;
