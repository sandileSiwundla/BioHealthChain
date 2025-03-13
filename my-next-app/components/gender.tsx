import React, { useState } from 'react';

const CurrencyDropdown = () => {
  const [selectedProfession, setSelectedProfession] = useState('');

  const genders = [
    { gender: 'Male' },
    { gender: 'Female' },
    { gender: 'Non-binary' },
    { gender: 'Other' },
    { gender: 'Prefer not to say' },
  ];

  const handleSelect = (event) => {
    setSelectedProfession(event.target.value);
  };

  return (
    <div className="w-full">
      <select
        id="profession-dropdown"
        name="profession"
        value={selectedProfession}
        onChange={handleSelect}
        className=" w-50px p-3 bg-teal-700 text-black rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-all duration-300"
      >
        <option value="" disabled>Select Gender</option> 
        {genders.map((profession, index) => (
          <option key={index} value={profession.gender} className="bg-teal-700 text-black">
            {profession.gender}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;