'use client'; // Ensure the component is treated as a client component in Next.js

import * as React from 'react';
import axios from 'axios';
import classNames from 'classnames'; // Import classnames library

const HospitalLocator = () => {
  const [hospitalName, setHospitalName] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);
  const [location, setLocation] = React.useState<{ lat: number | null; lon: number | null }>({ lat: null, lon: null });
  const dropdownRef = React.useRef<HTMLUListElement | null>(null); // Ref for the dropdown

  // Function to handle input change
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setHospitalName(value);

    if (value.length > 2) {
      // Make request to Nominatim API after the user types more than 2 characters
      try {
        const response = await axios.get(
          'https://nominatim.openstreetmap.org/search',
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
  const handleSelect = (suggestion: any) => {
    setHospitalName(suggestion.display_name);
    setLocation({
      lat: parseFloat(suggestion.lat),
      lon: parseFloat(suggestion.lon),
    });
    setSuggestions([]); // Clear suggestions after selection
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSuggestions([]); // Close the dropdown
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Positioning input search box */}
      <input
        type="text"
        placeholder="Search for hospitals..."
        value={hospitalName}
        onChange={handleChange}
        className={classNames(
          'bg-[#1c6593] text-white text-sm p-2 rounded-md w-[300px] h-[35px] transition-all duration-300',
          'focus:outline-none focus:w-[350px]',
          'absolute top-10 left-10' // Position the input box with offset from top-left
        )}
      />
      
      {/* Suggestions list */}
      {suggestions.length > 0 && (
        <ul
          ref={dropdownRef} // Attach ref to the dropdown
          className="absolute bg-white w-[300px] mt-1 border border-gray-300 rounded-md z-20 top-[60px] left-10"
        >
          {suggestions.map((suggestion: any) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelect(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-100 text-gray-800"
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
      
      {/* Map */}
      <div className="absolute top-[120px] left-10 w-[500px] h-[300px] bg-teal-800 rounded-md">
        {location.lat && location.lon ? (
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.lon - 0.01}%2C${location.lat - 0.01}%2C${location.lon + 0.01}%2C${location.lat + 0.01}&layer=mapnik&marker=${location.lat}%2C${location.lon}`}
            allowFullScreen
          />
        ) : (
          <div className="flex justify-center items-center h-full text-gray-500">
            No location selected
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalLocator;
