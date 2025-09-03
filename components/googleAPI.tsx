'use client';

import * as React from 'react';
import axios from 'axios';
import classNames from 'classnames';

interface HospitalLocatorProps {
  onLocationSelect: (location: string) => void;
}

const HospitalLocator: React.FC<HospitalLocatorProps> = ({ onLocationSelect }) => {
  const [hospitalName, setHospitalName] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);
  const [location, setLocation] = React.useState<{ lat: number | null; lon: number | null }>({ lat: null, lon: null });
  const dropdownRef = React.useRef<HTMLUListElement | null>(null);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setHospitalName(value);

    if (value.length > 2) {
      try {
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
          params: {
            q: value,
            format: 'json',
            addressdetails: 1,
            limit: 5,
          },
        });
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching data from Nominatim API:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (suggestion: any) => {
    setHospitalName(suggestion.display_name);
    setLocation({
      lat: parseFloat(suggestion.lat),
      lon: parseFloat(suggestion.lon),
    });
    setSuggestions([]);
    onLocationSelect(suggestion.display_name); // ✅ Send to parent
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for hospitals..."
        value={hospitalName}
        onChange={handleChange}
        className={classNames(
          'bg-[#1c6593] text-white text-sm p-2 rounded-md w-[300px] h-[35px] transition-all duration-300',
          'focus:outline-none focus:w-[350px]',
          'absolute top-10 left-10'
        )}
      />

      {suggestions.length > 0 && (
        <ul
          ref={dropdownRef}
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
