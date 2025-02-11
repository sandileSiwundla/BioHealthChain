import React, { useState } from 'react';
import './DropDownList.css';  // Import the external CSS file

const CurrencyDropdown = () => {
  const [selectedProfession, setSelectedProfession] = useState('');

  const genders = [
    { gender: 'Male' },
    { gender: 'Female' },
    { gender: 'Non-binary' },
    { gender: 'Transgender Male' },
    { gender: 'Transgender Female' },
    { gender: 'Genderqueer' },
    { gender: 'Agender' },
    { gender: 'Two-Spirit' },
    { gender: 'Bigender' },
    { gender: 'Genderfluid' },
    { gender: 'Demiboy' },
    { gender: 'Demigirl' },
    { gender: 'Androgynous' },
    { gender: 'Other' },
    { gender: 'Prefer not to say' }
];

  const handleSelect = (event) => {
    setSelectedProfession(event.target.value);
  };

  return (
    <div>
      <select
        id="profession-dropdown"
        name="profession"
        value={selectedProfession}
        onChange={handleSelect}
      >
        {genders.map((profession, index) => (
          <option key={index} value={profession.gender}>
            {profession.gender}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;
