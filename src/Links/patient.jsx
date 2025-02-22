import React, { useState } from "react";
import patient from '/src/assets/links/patient.jpg';

function doctorImage() {


  return (
    <div className="relative group flex justify-center items-center">
      {/* Image with Hover Effect */}
      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        <div className="relative">
          <img
            src={patient}
            alt="records"
            className="w-[calc(100vw-1cm)] h-[35vw] object-cover transform transition duration-300 group-hover:scale-105  rounded-[20px] " // Updated classes for image size
          />
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
      </a>

      
    </div>
  );
}

export default doctorImage;
