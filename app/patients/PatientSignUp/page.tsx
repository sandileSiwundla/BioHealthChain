"use client";

import { useState, useRef } from "react";


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
  const [picturePreview, setPicturePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    if (name === "picture" && files && files[0]) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
      
      // Create a preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPicturePreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRemovePicture = () => {
    setFormData((prev) => ({ ...prev, picture: null }));
    setPicturePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleHospitalSelect = (location: string) => {
    setFormData((prev) => ({ ...prev, hospital: location }));
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
            
            {picturePreview ? (
              <div className="mt-2 flex flex-col items-center">
                <div className="relative">
                  <img 
                    src={picturePreview} 
                    alt="Preview" 
                    className="h-32 w-32 rounded-full object-cover border-2 border-[#1d2951]"
                  />
                  <button
                    type="button"
                    onClick={handleRemovePicture}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-600">{formData.picture?.name}</p>
              </div>
            ) : (
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG (MAX. 5MB)</p>
                  </div>
                  <input 
                    id="picture" 
                    name="picture" 
                    type="file" 
                    accept="image/*" 
                    onChange={handleChange} 
                    className="hidden" 
                    ref={fileInputRef}
                  />
                </label>
              </div>
            )}
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

{/* Hospital Locator */}
<div>
  <label htmlFor="hospital" className="block text-sm font-medium mb-2 text-black">
    Hospital *
  </label>
  <input
    id="hospital"
    name="hospital"
    type="text"
    value={formData.hospital}
    onChange={(e) =>
      setFormData((prev) => ({ ...prev, hospital: e.target.value }))
    }
    placeholder="Enter hospital name"
    required
    className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1d2951] focus:border-[#1d2951] text-black placeholder-gray-500 shadow-sm transition"
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