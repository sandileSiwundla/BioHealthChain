"use client";

import { useState } from "react";

// Mock DatePicker component (you would replace with your actual implementation)
const DatePicker = ({ onChange }: { onChange: (date: Date) => void }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(newDate);
    onChange(newDate);
  };

  return (
    <input
      type="date"
      value={selectedDate.toISOString().split('T')[0]}
      onChange={handleDateChange}
      className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1d2951] text-black"
    />
  );
};

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
    picture: null as File | null,
    consent: "",
    helpRepresentative: "",
    hospital: "",
    residence: "",
    medicalAid: "",
    medicalAidInfo: "",
  });
  const [birthdate, setBirthdate] = useState<Date | undefined>(undefined);

  const calculateAge = (dob: Date | undefined) => {
    if (!dob) return "";
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with your API call
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1d2951] to-[#0f1a38] p-4">
      <div className="w-full max-w-2xl bg-gray-100 rounded-xl shadow-2xl overflow-hidden">
        {/* Header with theme color */}
        <div className="bg-[#1d2951] text-white p-6">
          <h1 className="text-2xl font-bold text-center">BioHealthChain – Patient Registration</h1>
          <p className="text-center text-blue-100 mt-2">Secure medical data management</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 grid gap-6">
          {/* Name + Surname */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-black">
                Name *
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1d2951] text-black placeholder-gray-600"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label htmlFor="surname" className="block text-sm font-medium mb-2 text-black">
                Surname *
              </label>
              <input
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1d2951] text-black placeholder-gray-600"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-black">Date of Birth *</label>
            <DatePicker onChange={setBirthdate} />
            {birthdate && (
              <p className="mt-2 text-black text-sm">
                Age: <span className="font-semibold text-black">{calculateAge(birthdate)}</span> years
              </p>
            )}
          </div>

          {/* Picture */}
          <div>
            <label htmlFor="picture" className="block text-sm font-medium mb-2 text-black">
              Profile Picture (Optional)
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG (MAX. 5MB)</p>
                </div>
                <input id="picture" name="picture" type="file" accept="image/*" onChange={handleChange} className="hidden" />
              </label>
            </div>
          </div>

          {/* Consent */}
          <div>
            <label htmlFor="consent" className="block text-sm font-medium mb-2 text-black">
              Consent to Access & Display Medical Data *
            </label>
            <textarea
              id="consent"
              name="consent"
              value={formData.consent}
              onChange={handleChange}
              placeholder="I hereby consent to BioHealthChain storing and processing my medical data for treatment purposes..."
              required
              className="w-full rounded-lg border border-gray-300 p-3 h-24 focus:outline-none focus:ring-2 focus:ring-[#1d2951] text-black"
            />
          </div>

          {/* Help Representative */}
          <div>
            <label htmlFor="helpRepresentative" className="block text-sm font-medium mb-2 text-black">
              Help Representative / Doctor *
            </label>
            <input
              id="helpRepresentative"
              name="helpRepresentative"
              value={formData.helpRepresentative}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1d2951] text-black"
              placeholder="Dr. Smith"
            />
          </div>

          {/* Hospital */}
          <div>
            <label htmlFor="hospital" className="block text-sm font-medium mb-2 text-black">
              Hospital *
            </label>
            <input
              id="hospital"
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1d2951] text-black"
              placeholder="General Hospital"
            />
          </div>

          {/* Residence */}
          <div>
            <label htmlFor="residence" className="block text-sm font-medium mb-2 text-black">
              Current Place of Residence *
            </label>
            <input
              id="residence"
              name="residence"
              value={formData.residence}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1d2951] text-black"
              placeholder="123 Main St, City, State"
            />
          </div>

          {/* Medical Aid */}
          <div>
            <label htmlFor="medicalAid" className="block text-sm font-medium mb-2 text-black">
              Medical Aid Name
            </label>
            <input
              id="medicalAid"
              name="medicalAid"
              value={formData.medicalAid}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1d2951] text-black"
              placeholder="HealthCare Inc."
            />
          </div>

          {/* Medical Aid Info */}
          <div>
            <label htmlFor="medicalAidInfo" className="block text-sm font-medium mb-2 text-black">
              Accompanying Information (Optional)
            </label>
            <textarea
              id="medicalAidInfo"
              name="medicalAidInfo"
              value={formData.medicalAidInfo}
              onChange={handleChange}
              placeholder="Policy number, group ID, or other relevant information..."
              className="w-full rounded-lg border border-gray-300 p-3 h-20 focus:outline-none focus:ring-2 focus:ring-[#1d2951] text-black"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#1d2951] text-white py-3 rounded-lg hover:bg-[#2a3a6a] transition font-semibold shadow-md"
          >
            Complete Registration
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
}