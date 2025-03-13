'use client'; // Ensure the component is treated as a client component in Next.js

import React, { useState } from 'react';
import axios from 'axios';
import classNames from 'classnames'; // Import classnames library

const HospitalLocator = () => {
  const [hospitalName, setHospitalName] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [location, setLocation] = useState({ lat: null, lon: null });

  // Function to handle input change
  const handleChange = async (event) => {
    const value = event.target.value;
    setHospitalName(value);

    if (value.length > 2) {
      // Make request to Nominatim API after the user types more than 2 characters
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search`,
          {
            params: {
              q: value,
              format: 'json',
              addressdetails: 1,
              limit: 5, // Limit the number of results
            },
          }
        );
        setSuggestions(response.data); // Set suggestions to the API response
      } catch (error) {
        console.error('Error fetching data from Nominatim API:', error);
      }
    } else {
      setSuggestions([]); // Clear suggestions if input is short
    }
  };

  // Function to handle suggestion click and save location
  const handleSelect = (suggestion) => {
    setHospitalName(suggestion.display_name);
    setLocation({
      lat: suggestion.lat,
      lon: suggestion.lon,
    });
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={hospitalName}
        onChange={handleChange}
        className={classNames(
          'bg-[#1c6593] text-white text-sm p-2 rounded-md w-[300px] h-[35px] text-center transition-all duration-300',
          'focus:outline-none focus:w-[350px]',
          'absolute top-[10cm] left-[23cm] z-[2000]'
        )}
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white w-[300px] mt-1 border border-gray-300 rounded-md z-20">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelect(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HospitalLocator;
