'use client'; 
import React, { useState } from 'react';
import DropDown from "@/components/dropdownList";
import Map from '@/components/googleAPI';
import Link from 'next/link';

const Buy: React.FC = () => {
  const [name, setName] = useState('');
  const [hcpId, setHcpId] = useState('');
  const [profession, setProfession] = useState('');
  const [location, setLocation] = useState('');

  const handleNext = async () => {
    const formData = {
      healthcareProfessionalName: name,
      healthcareProviderId: hcpId,
      profession: profession,
      location: location,
    };

    try {
      const response = await fetch('http://localhost:5000/api/generateJson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('File created:', result.message);
    } catch (error) {
      console.error('Error creating JSON file:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-teal-600 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-teal-700 bg-opacity-60 p-12 rounded-3xl max-w-5xl w-full h-full max-h-[80vh] overflow-y-auto text-white shadow-2xl flex flex-col justify-center items-center space-y-8">
        
        {/* Labels and Input Fields */}
        <div className="w-full flex flex-wrap justify-between space-x-4">
          <div className="w-full sm:w-1/3 text-center mb-4">
            <div className="text-xl font-semibold mb-2">Healthcare Professional Name</div>
            <input 
              type="text" 
              placeholder="Enter name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 rounded-md w-[300px] h-[45px] bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500" 
            />
          </div>

          <div className="w-full sm:w-1/3 text-center mb-4">
            <div className="text-xl font-semibold mb-2">Healthcare Provider ID (HCP-ID)</div>
            <input 
              type="text" 
              placeholder="Enter Healthcare Provider ID" 
              value={hcpId}
              onChange={(e) => setHcpId(e.target.value)}
              className="p-3 rounded-md w-[300px] h-[45px] bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500" 
            />
          </div>
        </div>

        {/* Profession Dropdown */}
        <div className="w-full text-center mb-4">
          <div className="text-xl font-semibold mb-2">Pick Profession</div>
          <DropDown onSelectProfession={(selectedProfession) => setProfession(selectedProfession)} />
        </div>

        {/* Map with Absolute Positioning */}
        <div className="w-full text-center mb-4">
          <div className="text-xl font-semibold mb-2">Hospital Name</div>
          <Map onLocationSelect={(selectedLocation) => setLocation(selectedLocation)} />
        </div>

        {/* Next Button */}
        <div id="nextButton" className="text-center mt-8">
          <Link href="/patientSIgnUp">
            <button 
              className="bg-teal-800 hover:bg-teal-600 text-white py-3 px-8 rounded-md cursor-pointer transition duration-300"
              onClick={handleNext}
            >
              NEXT
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Buy;
