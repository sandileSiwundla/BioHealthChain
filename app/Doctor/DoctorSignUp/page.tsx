"use client";

import * as React from 'react';
import classNames from 'classnames';

interface ProfessionDropdownProps {
  onSelectProfession: (profession: string) => void;
}

const ProfessionDropdown: React.FC<ProfessionDropdownProps> = ({ onSelectProfession }) => {
  const [selectedProfession, setSelectedProfession] = React.useState('');

  const medicalProfessions = [
    'Doctor (General Physician)',
    'Registered Nurse',
    'Licensed Practical Nurse',
    'Physician Assistant',
    'Nurse Practitioner',
    'Occupational Therapist',
    'Physical Therapist',
    'Respiratory Therapist',
    'Radiologist',
    'Surgeon',
    'Anesthesiologist',
    'Pediatrician',
    'Psychiatrist',
    'Dermatologist',
    'Cardiologist',
    'Gynecologist',
    'Neurologist',
    'Endocrinologist',
    'Orthopedic Surgeon',
    'Urologist',
    'Ophthalmologist',
    'Oncologist',
    'Pathologist',
    'Emergency Medicine Physician',
    'Family Medicine Physician',
    'Internal Medicine Physician',
    'Geriatrician',
    'Hematologist',
    'Plastic Surgeon',
    'Chiropractor',
    'Audiologist',
    'Speech Therapist',
    'Pharmacist',
    'Medical Laboratory Technician',
    'Radiologic Technologist',
    'Dietitian',
  ];

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedProfession(selected);
    onSelectProfession(selected);
  };

  return (
    <select
      id="profession-dropdown"
      name="profession"
      value={selectedProfession}
      onChange={handleSelect}
      className={classNames(
        'bg-[#1d2951] text-white text-sm p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1d2951]'
      )}
    >
      <option value="" disabled>Select a profession</option>
      {medicalProfessions.map((profession, index) => (
        <option key={index} value={profession}>
          {profession}
        </option>
      ))}
    </select>
  );
};

// Mock Map component (replace with your actual implementation)
const Map: React.FC<{ onLocationSelect: (location: string) => void }> = ({ onLocationSelect }) => {
  const [location, setLocation] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocation(value);
    onLocationSelect(value);
  };

  return (
    <input
      type="text"
      placeholder="Enter hospital name"
      value={location}
      onChange={handleChange}
      className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1d2951] text-black"
    />
  );
};

const DoctorSignUp: React.FC = () => {
  const [name, setName] = React.useState('');
  const [hcpId, setHcpId] = React.useState('');
  const [profession, setProfession] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, hcpId, profession, location });
    // Add your form submission logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1d2951] to-[#0f1a38] p-4">
      <div className="w-full max-w-3xl bg-gray-100 rounded-xl shadow-2xl overflow-hidden">
        {/* Header with theme color */}
        <div className="bg-[#1d2951] text-white p-6">
          <h1 className="text-2xl font-bold text-center">BioHealthChain – Healthcare Professional Registration</h1>
          <p className="text-center text-blue-100 mt-2">Secure medical professional portal</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <div className="w-full flex flex-wrap justify-between space-y-4 md:space-y-0">
            <div className="w-full md:w-1/2 md:pr-2 mb-4">
              <div className="text-lg font-semibold mb-2 text-black">Healthcare Professional Name</div>
              <input 
                type="text" 
                placeholder="Enter name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1d2951] text-black"
                required
              />
            </div>

            <div className="w-full md:w-1/2 md:pl-2 mb-4">
              <div className="text-lg font-semibold mb-2 text-black">HPCSA Registration Number</div>
              <input 
                type="text" 
                placeholder="Enter HPCSA" 
                value={hcpId}
                onChange={(e) => setHcpId(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1d2951] text-black"
                required
              />
            </div>
          </div>

          <div className="w-full mb-6">
            <div className="text-lg font-semibold mb-2 text-black">Pick Profession</div>
            <ProfessionDropdown onSelectProfession={setProfession} />
          </div>

          <div className="w-full mb-6">
            <div className="text-lg font-semibold mb-2 text-black">Hospital Name</div>
            <Map onLocationSelect={setLocation} />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#1d2951] text-white py-3 rounded-lg hover:bg-[#2a3a6a] transition font-semibold shadow-md mt-4"
          >
            Complete Professional Registration
          </button>
        </form>

        {/* Footer */}
        <div className="bg-gray-100 p-4 text-center text-xs text-black">
          <p>Your information is protected by HIPAA compliance standards</p>
          <p className="mt-1">© {new Date().getFullYear()} BioHealthChain. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignUp;