'use client';

import { useState } from 'react';

interface Medicine {
  name: string;
  dosage: string;
  period: string;
  notes?: string;
  status: 'not_claimed' | 'claimed' | 'out_of_stock';
  claimedTime?: string;
  pharmacyLocation?: string;
}

export default function Pharmacy() {
  const [patientId, setPatientId] = useState('');
  const [medicines, setMedicines] = useState<Medicine[] | null>(null);

  const exampleMedicines: Medicine[] = [
    { name: 'Paracetamol', dosage: '500mg', period: '5 days', notes: 'Take after meals', status: 'not_claimed' },
    { name: 'Amoxicillin', dosage: '250mg', period: '7 days', notes: 'Finish the full course', status: 'not_claimed' },
    { name: 'Ibuprofen', dosage: '200mg', period: '3 days', notes: 'Take with water', status: 'out_of_stock' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMedicines(exampleMedicines);
  };

  const handleClaim = (index: number) => {
    setMedicines((prev) =>
      prev?.map((med, idx) =>
        idx === index && med.status === 'not_claimed'
          ? { 
              ...med, 
              status: 'claimed', 
              claimedTime: new Date().toLocaleString(), 
              pharmacyLocation: 'Main Street Pharmacy' 
            }
          : med
      ) || null
    );
  };

  const getStatusColor = (status: Medicine['status']) => {
    switch (status) {
      case 'not_claimed': return 'bg-green-200 text-green-800';
      case 'claimed': return 'bg-red-200 text-red-800';
      case 'out_of_stock': return 'bg-yellow-200 text-yellow-800';
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1d2951] to-[#0f1a38] p-4">
      <div className="w-full max-w-lg bg-gray-100 rounded-xl shadow-2xl p-6">
        <h1 className="text-2xl font-bold text-center text-[#1d2951] mb-6">Pharmacy Portal</h1>

        <form onSubmit={handleSubmit} className="mb-6">
          <label className="block text-sm font-medium mb-2 text-black">Patient ID *</label>
          <input
            type="text"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            placeholder="Enter Patient ID"
            required
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#1d2951] placeholder-gray-500 text-black"
          />
          <button
            type="submit"
            className="mt-4 w-full bg-[#1d2951] text-white py-3 rounded-lg hover:bg-[#2a3a6a] transition font-semibold shadow-md"
          >
            Show Medicines
          </button>
        </form>

        {medicines && (
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#1d2951]">Prescribed Medicines:</h2>
            <ul className="space-y-4">
              {medicines.map((med, idx) => (
                <li 
                  key={idx} 
                  className="border p-4 rounded-lg bg-white shadow-sm flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p><strong>{med.name}</strong></p>
                      <p>Dosage: {med.dosage}</p>
                      <p>Period: {med.period}</p>
                      {med.notes && <p>Notes: {med.notes}</p>}
                    </div>
                    <div className={`px-3 py-1 rounded-full font-semibold ${getStatusColor(med.status)}`}>
                      {med.status === 'not_claimed' && 'Not Claimed'}
                      {med.status === 'claimed' && 'Claimed'}
                      {med.status === 'out_of_stock' && 'Out of Stock'}
                    </div>
                  </div>
                  {med.status === 'not_claimed' && (
                    <button
                      onClick={() => handleClaim(idx)}
                      className="mt-2 bg-[#1d2951] text-white py-2 rounded-lg hover:bg-[#2a3a6a] transition font-medium"
                    >
                      Mark as Claimed
                    </button>
                  )}
                  {med.status === 'claimed' && (
                    <p className="text-sm text-gray-600">
                      Claimed at: {med.claimedTime} | Pharmacy: {med.pharmacyLocation}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
