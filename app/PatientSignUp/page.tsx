"use client";

import { useState } from "react";
import { DatePicker } from "@/components/DataPicker";

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
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="w-full max-w-2xl bg-blue-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-slate-800">
          BioHealthChain – Patient Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="grid gap-6">
          {/* Name + Surname */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="surname" className="block text-sm font-medium mb-1">
                Surname
              </label>
              <input
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Age */}
           <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Date of Birth</label>
        <DatePicker onChange={setBirthdate} />
        {birthdate && (
          <p className="mt-2 text-gray-600 text-sm">
            Age: <span className="font-semibold">{calculateAge(birthdate)}</span> years
          </p>
        )}
      </div>

          {/* Picture */}
          <div>
            <label htmlFor="picture" className="block text-sm font-medium mb-1">
              Profile Picture (Optional)
            </label>
            <input
              id="picture"
              name="picture"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Consent */}
          <div>
            <label htmlFor="consent" className="block text-sm font-medium mb-1">
              Consent to Access & Display Medical Data
            </label>
            <textarea
              id="consent"
              name="consent"
              value={formData.consent}
              onChange={handleChange}
              placeholder="Write your consent statement here..."
              required
              className="w-full rounded-lg border border-gray-300 p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Help Representative */}
          <div>
            <label htmlFor="helpRepresentative" className="block text-sm font-medium mb-1">
              Help Representative / Doctor
            </label>
            <input
              id="helpRepresentative"
              name="helpRepresentative"
              value={formData.helpRepresentative}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Hospital */}
          <div>
            <label htmlFor="hospital" className="block text-sm font-medium mb-1">
              Hospital
            </label>
            <input
              id="hospital"
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Residence */}
          <div>
            <label htmlFor="residence" className="block text-sm font-medium mb-1">
              Current Place of Residence
            </label>
            <input
              id="residence"
              name="residence"
              value={formData.residence}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Medical Aid */}
          <div>
            <label htmlFor="medicalAid" className="block text-sm font-medium mb-1">
              Medical Aid Name
            </label>
            <input
              id="medicalAid"
              name="medicalAid"
              value={formData.medicalAid}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Medical Aid Info */}
          <div>
            <label htmlFor="medicalAidInfo" className="block text-sm font-medium mb-1">
              Accompanying Information (Optional)
            </label>
            <textarea
              id="medicalAidInfo"
              name="medicalAidInfo"
              value={formData.medicalAidInfo}
              onChange={handleChange}
              placeholder="Extra medical aid details if applicable..."
              className="w-full rounded-lg border border-gray-300 p-2 h-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
