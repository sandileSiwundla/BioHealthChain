import React, { useState } from 'react';
import './DropDownList.css';  // Import the external CSS file

const CurrencyDropdown = () => {
  const [selectedProfession, setSelectedProfession] = useState('');

  const medicalProfessions = [
    { profession: 'Doctor (General Physician)' },
    { profession: 'Registered Nurse' },
    { profession: 'Licensed Practical Nurse' },
    { profession: 'Physician Assistant' },
    { profession: 'Nurse Practitioner' },
    { profession: 'Occupational Therapist' },
    { profession: 'Physical Therapist' },
    { profession: 'Respiratory Therapist' },
    { profession: 'Radiologist' },
    { profession: 'Surgeon' },
    { profession: 'Anesthesiologist' },
    { profession: 'Pediatrician' },
    { profession: 'Psychiatrist' },
    { profession: 'Dermatologist' },
    { profession: 'Cardiologist' },
    { profession: 'Gynecologist' },
    { profession: 'Neurologist' },
    { profession: 'Endocrinologist' },
    { profession: 'Orthopedic Surgeon' },
    { profession: 'Urologist' },
    { profession: 'Ophthalmologist' },
    { profession: 'Oncologist' },
    { profession: 'Pathologist' },
    { profession: 'Emergency Medicine Physician' },
    { profession: 'Family Medicine Physician' },
    { profession: 'Internal Medicine Physician' },
    { profession: 'Geriatrician' },
    { profession: 'Hematologist' },
    { profession: 'Plastic Surgeon' },
    { profession: 'Chiropractor' },
    { profession: 'Audiologist' },
    { profession: 'Speech Therapist' },
    { profession: 'Pharmacist' },
    { profession: 'Medical Laboratory Technician' },
    { profession: 'Radiologic Technologist' },
    { profession: 'Dietitian' }
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
        {medicalProfessions.map((profession, index) => (
          <option key={index} value={profession.profession}>
            {profession.profession}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;
