"use client";

import Navbar from '@/components/Navbar';
import Features from '@/components/features';
import Team from '@/components/teams';
import Pictures from '@/components/links';
import SaveButoon from '@/components/saveButton';
import React, {  useState } from "react";
import axios from 'axios';

const Home = () => {
  // State variables to manage IPFS data, loading, and error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ipfsHash = 'QmRDbihs4fCWvRaf7DXGYte9C9RdqXm2eDyviV6cxJptk7';

  const fetchDataFromIPFS = async () => {
    setLoading(true);
    setError(null);
  
    try {
      const ipfsNodeGateway = "http://127.0.0.1:8080/ipfs/"; // Update if using a remote node
      const response = await axios.get(`${ipfsNodeGateway}${ipfsHash}`);
      
      setData(response.data);
    } catch (err) {
      setError('Error fetching data from your IPFS node');
    } finally {
      setLoading(false);
    }
  };
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

      {/* Button to fetch IPFS data */}
      <div className="text-center pt-10">
        <button 
          onClick={fetchDataFromIPFS}
          className="bg-blue-500 text-black px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Fetch Data from IPFS
        </button>
      </div>

      {/* Loading State */}
      {loading && <div className="text-center mt-4">Loading data...</div>}

      {/* Error State */}
      {error && <div className="text-center text-black mt-4 text-red-500">{error}</div>}

      {/* Display Fetched Data */}
      {data && (
        <div className="text-center mt-8 text-black">
          <h3 className="text-xl font-semibold">IPFS Data:</h3>
          <pre className="bg-gray-200 p-4 rounded-md">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      <SaveButoon/>
      {/* Other components */}
      <Features />
      <Pictures />
      <Team />
    </div>
  );
};

export default Home;
