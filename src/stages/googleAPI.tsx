import React, { useState } from 'react';
import axios from 'axios';
import './googleAPI.css';  // Import the CSS file for styling

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
    <div className="hospital-locator">
      <input
        type="text"
        placeholder="Search..."
        value={hospitalName}
        onChange={handleChange}
        id="hospital-map"  // ID to target for styling
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelect(suggestion)}
              className="suggestion-item"
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
