'use client'; // Ensure the component is treated as a client component in Next.js

import * as React from 'react';
import classNames from 'classnames'; // Import classnames library

const CurrencyDropdown = () => {
  const [selectedProfession, setSelectedProfession] = React.useState('');

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
    { profession: 'Dietitian' },
  ];

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProfession(event.target.value);
  };

  return (
    <div>
      <select
        id="profession-dropdown"
        name="profession"
        value={selectedProfession}
        onChange={handleSelect}
        className={classNames(
          'bg-[#1c6593] text-white text-sm p-2 rounded-md w-[300px] h-[35px] text-center transition-all duration-300',
          'focus:outline-none focus:w-[350px]',
          'absolute top-[5.5cm] left-[23cm] z-[2000]',
          'hover:bg-[#0277BD]' // Hover effect for options
        )}
      >
        {medicalProfessions.map((profession, index) => (
          <option
            key={index}
            value={profession.profession}
            className="bg-[#1c6593] text-white text-center"
          >
            {profession.profession}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;
