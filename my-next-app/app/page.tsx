"use client";

import Navbar from '@/components/Navbar';
import Features from '@/components/features';
import Team from '@/components/teams';
import Pictures from '@/components/links';
import SaveButoon from '@/components/saveButton';
import FetchButton from '@/components/fetchData';
import React from "react";

const Home = () => {
  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex justify-center items-center pt-16">
        {/* Modal with width and height in cm */}
        <div 
          className="border border-gray-300 bg-transparent p-8 rounded-lg shadow-md"
          style={{ width: '31cm', height: '5cm' }} // Set width and height in cm
        >
          {/* Headline Section */}
          <div className="headline-container text-center">
            <h2 className="headline-title text-3xl font-semibold text-gray-800">
              Welcome to BioHealthChain
            </h2>
            <p className="headline-text text-lg text-gray-600 mt-4">
              Putting your health records in your hands like never before.
            </p>
          </div>
        </div>
      </div>
      <FetchButton/>
      <SaveButoon/>
      {/* Other components */}
      <Features />
      <Pictures />
      <Team />
    </div>
  );
};

export default Home;
