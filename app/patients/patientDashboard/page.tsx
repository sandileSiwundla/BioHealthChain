"use client";

import { useState } from "react";

// Interfaces for our data structures
interface MedicalFile {
  id: string;
  date: Date;
  type: "visit" | "lab" | "imaging" | "prescription";
  title: string;
  doctor: string;
  specialty?: string;
  diagnosis?: string;
  summary?: string;
  tags: string[];
}

interface VitalSigns {
  date: Date;
  height?: number;
  weight?: number;
  bmi?: number;
  bloodPressure?: string;
  heartRate?: number;
  temperature?: number;
  oxygenSaturation?: number;
}

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: Date;
  endDate?: Date;
  status: "active" | "completed" | "discontinued";
  instructions: string;
  prescriber: string;
  lastFilled?: Date;
  nextRefill?: Date;
}

interface Appointment {
  id: string;
  date: Date;
  doctor: string;
  specialty: string;
  location: string;
  reason: string;
  status: "scheduled" | "completed" | "cancelled";
}

interface PatientLog {
  id: string;
  date: Date;
  symptom: string;
  severity: number;
  notes: string;
  duration: string;
}

// Mock data
const mockMedicalFiles: MedicalFile[] = [
  {
    id: "1",
    date: new Date(2023, 9, 15),
    type: "visit",
    title: "Annual Physical Examination",
    doctor: "Dr. Sarah Johnson",
    specialty: "Internal Medicine",
    diagnosis: "Hypertension",
    summary: "Patient presented for annual physical. Blood pressure slightly elevated. Recommended dietary changes and follow-up in 3 months.",
    tags: ["preventive", "hypertension", "follow-up"]
  },
  {
    id: "2",
    date: new Date(2023, 8, 22),
    type: "lab",
    title: "Blood Test Results",
    doctor: "Dr. Michael Chen",
    specialty: "Pathology",
    summary: "Complete blood count and metabolic panel. All values within normal range except slightly elevated cholesterol.",
    tags: ["lab", "cholesterol", "blood test"]
  },
  {
    id: "3",
    date: new Date(2023, 7, 5),
    type: "imaging",
    title: "X-Ray - Right Knee",
    doctor: "Dr. Emily Rodriguez",
    specialty: "Radiology",
    diagnosis: "Mild osteoarthritis",
    summary: "X-ray of right knee shows mild degenerative changes consistent with early osteoarthritis.",
    tags: ["x-ray", "orthopedics", "osteoarthritis"]
  },
  {
    id: "4",
    date: new Date(2023, 6, 18),
    type: "prescription",
    title: "Medication Prescription",
    doctor: "Dr. Sarah Johnson",
    specialty: "Internal Medicine",
    summary: "Prescribed Lisinopril 10mg daily for blood pressure management.",
    tags: ["prescription", "hypertension", "medication"]
  }
];

const mockVitalSigns: VitalSigns[] = [
  { date: new Date(2023, 9, 15), height: 175, weight: 82, bmi: 26.8, bloodPressure: "138/85", heartRate: 72, temperature: 36.8, oxygenSaturation: 98 },
  { date: new Date(2023, 6, 10), height: 175, weight: 84, bmi: 27.4, bloodPressure: "142/88", heartRate: 75, temperature: 36.7, oxygenSaturation: 97 },
  { date: new Date(2023, 3, 5), height: 175, weight: 85, bmi: 27.8, bloodPressure: "140/86", heartRate: 76, temperature: 36.6, oxygenSaturation: 98 }
];

const mockMedications: Medication[] = [
  {
    id: "1",
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    startDate: new Date(2023, 6, 18),
    status: "active",
    instructions: "Take in the morning with food",
    prescriber: "Dr. Sarah Johnson",
    lastFilled: new Date(2023, 9, 10),
    nextRefill: new Date(2023, 10, 10)
  },
  {
    id: "2",
    name: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily",
    startDate: new Date(2023, 8, 22),
    status: "active",
    instructions: "Take at bedtime",
    prescriber: "Dr. Sarah Johnson",
    lastFilled: new Date(2023, 9, 15),
    nextRefill: new Date(2023, 10, 15)
  }
];

const mockAppointments: Appointment[] = [
  {
    id: "1",
    date: new Date(2023, 10, 20, 10, 30),
    doctor: "Dr. Sarah Johnson",
    specialty: "Internal Medicine",
    location: "Main Clinic - Room 302",
    reason: "Follow-up on hypertension management",
    status: "scheduled"
  },
  {
    id: "2",
    date: new Date(2023, 11, 15, 14, 0),
    doctor: "Dr. Emily Rodriguez",
    specialty: "Radiology",
    location: "Imaging Center - Room 105",
    reason: "Follow-up knee X-ray",
    status: "scheduled"
  }
];

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [medicalFiles, setMedicalFiles] = useState<MedicalFile[]>(mockMedicalFiles);
  const [sortBy, setSortBy] = useState<"date" | "type" | "doctor">("date");
  const [vitalSigns, setVitalSigns] = useState<VitalSigns[]>(mockVitalSigns);
  const [medications, setMedications] = useState<Medication[]>(mockMedications);
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [patientLogs, setPatientLogs] = useState<PatientLog[]>([]);
  const [newLog, setNewLog] = useState({ symptom: "", severity: 3, notes: "", duration: "" });

  // Sort medical files based on selected criteria
  const sortedFiles = [...medicalFiles].sort((a, b) => {
    if (sortBy === "date") return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortBy === "type") return a.type.localeCompare(b.type);
    if (sortBy === "doctor") return a.doctor.localeCompare(b.doctor);
    return 0;
  });

  // Get latest vital signs
  const latestVitals = vitalSigns.length > 0 ? vitalSigns[0] : null;

  // Handle adding a new patient log
  const handleAddLog = () => {
    if (newLog.symptom.trim() === "") return;
    
    const log: PatientLog = {
      id: Date.now().toString(),
      date: new Date(),
      symptom: newLog.symptom,
      severity: newLog.severity,
      notes: newLog.notes,
      duration: newLog.duration
    };
    
    setPatientLogs([log, ...patientLogs]);
    setNewLog({ symptom: "", severity: 3, notes: "", duration: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-[#1d2951] rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                JD
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black">John Doe</h1>
                <p className="text-black">Patient ID: PAT-12345</p>
                <p className="text-black">Date of Birth: March 15, 1985</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-black">Last login: Today, 10:30 AM</p>
              <button className="mt-2 bg-[#1d2951] text-white px-4 py-2 rounded-lg hover:bg-[#2a3a6a] transition">
                Log Out
              </button>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="flex border-b">
            <button
              className={`px-6 py-3 font-medium  ${activeTab === "overview" ? "text-[#1d2951] border-b-2 border-[#1d2951]" : "text-black"}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === "records" ? "text-[#1d2951] border-b-2 border-[#1d2951]" : "text-black"}`}
              onClick={() => setActiveTab("records")}
            >
              Medical Records
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === "medications" ? "text-[#1d2951] border-b-2 border-[#1d2951]" : "text-black"}`}
              onClick={() => setActiveTab("medications")}
            >
              Medications
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === "appointments" ? "text-[#1d2951] border-b-2 border-[#1d2951]" : "text-black"}`}
              onClick={() => setActiveTab("appointments")}
            >
              Appointments
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vital Signs Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4 text-black">Vital Signs</h2>
              {latestVitals ? (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-black">Height:</span>
                    <span className="font-medium text-black">{latestVitals.height} cm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Weight:</span>
                    <span className="font-medium text-black">{latestVitals.weight} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">BMI:</span>
                    <span className="font-medium text-black">{latestVitals.bmi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Blood Pressure:</span>
                    <span className="font-medium text-black">{latestVitals.bloodPressure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Heart Rate:</span>
                    <span className="font-medium text-black">{latestVitals.heartRate} bpm</span>
                  </div>
                  <div className="text-xs text-black mt-2">
                    Last updated: {latestVitals.date.toLocaleDateString()}
                  </div>
                </div>
              ) : (
                <p className="text-black">No vital signs recorded yet.</p>
              )}
            </div>

            {/* Recent Medications Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4 text-black">Current Medications</h2>
              {medications.filter(m => m.status === "active").length > 0 ? (
                <div className="space-y-3">
                  {medications.filter(m => m.status === "active").map(med => (
                    <div key={med.id} className="border-l-4 border-[#1d2951] pl-3 py-1">
                      <div className="font-medium text-black">{med.name} {med.dosage}</div>
                      <div className="text-sm text-black">{med.frequency}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-black">No active medications.</p>
              )}
            </div>

            {/* Upcoming Appointments Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4 text-black">Next Appointment</h2>
              {appointments.filter(a => a.status === "scheduled").length > 0 ? (
                <div>
                  {appointments
                    .filter(a => a.status === "scheduled")
                    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                    .slice(0, 1)
                    .map(appt => (
                      <div key={appt.id}>
                        <div className="font-medium text-lg text-black">{appt.doctor}</div>
                        <div className="text-black">{appt.specialty}</div>
                        <div className="mt-2 text-black">
                          <div className="text-black">Date & Time:</div>
                          <div className="font-medium">{appt.date.toLocaleDateString()} at {appt.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                        </div>
                        <div className="mt-2 text-black">
                          <div className="text-black">Reason:</div>
                          <div className="font-medium text-black">{appt.reason}</div>
                        </div>
                        <div className="mt-2">
                          <div className="text-black">Location:</div>
                          <div className="font-medium text-black">{appt.location}</div>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-black">No upcoming appointments.</p>
              )}
            </div>

            {/* Patient Log Card */}
            <div className="md:col-span-3 bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4 text-black">Symptom Log</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-black">Add New Entry</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Symptom</label>
                      <input
                        type="text"
                        value={newLog.symptom}
                        onChange={(e) => setNewLog({...newLog, symptom: e.target.value})}
                        placeholder="What are you experiencing?"
                        className="w-full p-2 border border-black rounded-md text-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Severity (1-5)</label>
                      <div className="flex items-center">
                        <input
                          type="range"
                          min="1"
                          max="5"
                          value={newLog.severity}
                          onChange={(e) => setNewLog({...newLog, severity: parseInt(e.target.value)})}
                          className="w-full"
                        />
                        <span className="ml-2 font-medium">{newLog.severity}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Duration</label>
                      <input
                        type="text"
                        value={newLog.duration}
                        onChange={(e) => setNewLog({...newLog, duration: e.target.value})}
                        placeholder="How long has this been going on?"
                        className="w-full p-2 border border-black rounded-md text-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Additional Notes</label>
                      <textarea
                        value={newLog.notes}
                        onChange={(e) => setNewLog({...newLog, notes: e.target.value})}
                        placeholder="Any additional details?"
                        className="w-full p-2 border border-black rounded-md text-black"
                        rows={3}
                      />
                    </div>
                    <button
                      onClick={handleAddLog}
                      className="bg-[#1d2951] text-white px-4 py-2 rounded-md hover:bg-[#2a3a6a] transition"
                    >
                      Add to Log
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-gray-500">Recent Entries</h3>
                  {patientLogs.length > 0 ? (
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                      {patientLogs.map(log => (
                        <div key={log.id} className="border-l-4 border-blue-200 pl-3 py-2">
                          <div className="flex justify-between">
                            <span className="font-medium">{log.symptom}</span>
                            <span className="text-sm text-black">{log.date.toLocaleDateString()}</span>
                          </div>
                          <div className="text-sm">
                            Severity: {log.severity}/5 • Duration: {log.duration}
                          </div>
                          {log.notes && (
                            <div className="text-sm text-black mt-1">{log.notes}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-black">No log entries yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Medical Records Tab */}
        {activeTab === "records" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-black">Medical Records</h2>
              <div className="flex items-center">
                <span className="mr-2 text-black">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "date" | "type" | "doctor")}
                  className="p-2 border border-black rounded-md text-black"
                >
                  <option value="date">Date (Newest First)</option>
                  <option value="type">Type</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
            </div>
            
            {sortedFiles.length > 0 ? (
              <div className="space-y-4">
                {sortedFiles.map(file => (
                  <div key={file.id} className="border rounded-lg p-4 hover:bg-gray-50 transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                            file.type === "visit" ? "bg-blue-500" :
                            file.type === "lab" ? "bg-green-500" :
                            file.type === "imaging" ? "bg-purple-500" : "bg-yellow-500"
                          }`}></span>
                          <h3 className="font-medium text-lg text-black">{file.title}</h3>
                        </div>
                        <div className="text-sm text-black mt-1">
                          {file.date.toLocaleDateString()} • {file.doctor} • {file.specialty}
                        </div>
                        {file.diagnosis && (
                          <div className="mt-2 text-gray-600">
                            <span className="font-medium">Diagnosis: </span>
                            <span className="text-black">{file.diagnosis}</span>
                          </div>
                        )}
                        {file.summary && (
                          <div className="mt-2 text-black">{file.summary}</div>
                        )}
                        <div className="mt-2 flex flex-wrap gap-1">
                          {file.tags.map(tag => (
                            <span key={tag} className="bg-gray-100 text-black text-xs px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="text-[#1d2951] hover:text-[#2a3a6a] font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-black">No medical records found.</p>
            )}
          </div>
        )}

        {/* Medications Tab */}
        {activeTab === "medications" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6 text-black">Medications</h2>
            
            {medications.length > 0 ? (
              <div className="space-y-4">
                {medications.map(med => (
                  <div key={med.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg text-black">{med.name} {med.dosage}</h3>
                        <div className="text-sm text-black mt-1">
                          {med.frequency} • Prescribed by {med.prescriber}
                        </div>
                        <div className="mt-2">
                          <span className="font-medium text-gray-600">Status: </span>
                          <span className={`${
                            med.status === "active" ? "text-green-600" :
                            med.status === "completed" ? "text-blue-600" : "text-red-600"
                          }`}>
                            {med.status.charAt(0).toUpperCase() + med.status.slice(1)}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="font-medium text-gray-600">Instructions: </span>
                          <span className="text-black">{med.instructions}</span>
                        </div>
                        {med.lastFilled && (
                          <div className="mt-2">
                            <span className="font-medium text-gray-600">Last Filled: </span>
                            <span className="text-black">{med.lastFilled.toLocaleDateString()}</span>
                          </div>
                        )}
                        {med.nextRefill && (
                          <div className="mt-2">
                            <span className="font-medium text-gray-600">Next Refill: </span>
                            <span className="text-black">{med.nextRefill.toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          med.status === "active" ? "bg-green-100 text-green-800" :
                          med.status === "completed" ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800"
                        }`}>
                          {med.status.toUpperCase()}
                        </span>
                        <button className="mt-4 text-[#1d2951] hover:text-[#2a3a6a] font-medium text-sm">
                          Request Refill
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-black">No medications found.</p>
            )}
          </div>
        )}

        {/* Appointments Tab */}
        {activeTab === "appointments" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6 text-black">Appointments</h2>
            
            {appointments.length > 0 ? (
              <div className="space-y-4">
                {appointments.map(appt => (
                  <div key={appt.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg text-black">{appt.doctor} - {appt.specialty}</h3>
                        <div className="text-sm text-black mt-1">
                          {appt.date.toLocaleDateString()} at {appt.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        <div className="mt-2">
                          <span className="font-medium text-gray-600">Reason: </span>
                          <span className="text-black">{appt.reason}</span>
                        </div>
                        <div className="mt-2">
                          <span className="font-medium text-gray-600">Location: </span>
                          <span className="text-black">{appt.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          appt.status === "scheduled" ? "bg-blue-100 text-blue-800" :
                          appt.status === "completed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}>
                          {appt.status.toUpperCase()}
                        </span>
                        {appt.status === "scheduled" && (
                          <button className="mt-4 text-red-600 hover:text-red-800 font-medium text-sm">
                            Cancel Appointment
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-black">No appointments found.</p>
            )}
            
            <div className="mt-8">
              <button className="bg-[#1d2951] text-bla px-4 py-2 rounded-md hover:bg-[#2a3a6a] transition">
                Schedule New Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;