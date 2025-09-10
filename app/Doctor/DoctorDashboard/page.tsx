"use client";

import { useState } from "react";

// Interfaces for our data structures
interface MedicalFile {
  id: string;
  date: Date;
  type: "visit"  | "imaging" | "prescription" | "note";
  title: string;
  doctor: string;
  specialty?: string;
  diagnosis?: string;
  summary?: string;
  tags: string[];
  editable?: boolean;
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

interface TemplateField {
  id: string;
  label: string;
  type: "text" | "number" | "boolean" | "select" | "date";
  value: any;
  options?: string[];
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
    tags: ["preventive", "hypertension", "follow-up"],
    editable: true
  },
  {
    id: "2",
    date: new Date(2023, 8, 22),
    type: "lab",
    title: "Blood Test Results",
    doctor: "Dr. Michael Chen",
    specialty: "Pathology",
    summary: "Complete blood count and metabolic panel. All values within normal range except slightly elevated cholesterol.",
    tags: ["lab", "cholesterol", "blood test"],
    editable: true
  }
];

const mockVitalSigns: VitalSigns[] = [
  { date: new Date(2023, 9, 15), height: 175, weight: 82, bmi: 26.8, bloodPressure: "138/85", heartRate: 72, temperature: 36.8, oxygenSaturation: 98 }
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
  }
];

// Predefined templates
const TEMPLATES = {
  generalCheckup: [
    { id: "bloodPressure", label: "Blood Pressure", type: "text", value: "" },
    { id: "heartRate", label: "Heart Rate", type: "number", value: "" },
    { id: "temperature", label: "Temperature", type: "number", value: "" },
    { id: "oxygenSaturation", label: "Oxygen Saturation", type: "number", value: "" },
    { id: "symptoms", label: "Symptoms", type: "text", value: "" },
    { id: "assessment", label: "Assessment", type: "text", value: "" },
    { id: "plan", label: "Treatment Plan", type: "text", value: "" }
  ],
  bloodTest: [
    { id: "bloodDrawn", label: "Blood Drawn", type: "boolean", value: false },
    { id: "testType", label: "Test Type", type: "select", value: "", options: ["Complete Blood Count", "Metabolic Panel", "Lipid Panel", "Thyroid Panel"] },
    { id: "results", label: "Results", type: "text", value: "" },
    { id: "followUp", label: "Follow Up Needed", type: "boolean", value: false }
  ],
  imaging: [
    { id: "imagingType", label: "Imaging Type", type: "select", value: "", options: ["X-Ray", "MRI", "CT Scan", "Ultrasound"] },
    { id: "bodyPart", label: "Body Part", type: "text", value: "" },
    { id: "findings", label: "Findings", type: "text", value: "" },
    { id: "impression", label: "Radiologist Impression", type: "text", value: "" }
  ]
};

// Available field types for custom creation
const FIELD_TYPES = [
  { id: "text", label: "Text Field" },
  { id: "number", label: "Number Field" },
  { id: "boolean", label: "Toggle/Checkbox" },
  { id: "select", label: "Dropdown Selection" },
  { id: "date", label: "Date Selector" }
];

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [medicalFiles, setMedicalFiles] = useState<MedicalFile[]>(mockMedicalFiles);
  const [vitalSigns, setVitalSigns] = useState<VitalSigns[]>(mockVitalSigns);
  const [medications, setMedications] = useState<Medication[]>(mockMedications);
  const [editingFile, setEditingFile] = useState<MedicalFile | null>(null);
  const [editingVitals, setEditingVitals] = useState(false);
  const [currentVitals, setCurrentVitals] = useState<VitalSigns>(mockVitalSigns[0]);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [templateFields, setTemplateFields] = useState<TemplateField[]>([]);
  const [showFieldCreator, setShowFieldCreator] = useState(false);
  const [newField, setNewField] = useState({ label: "", type: "text", options: "" });

  // Get latest vital signs
  const latestVitals = vitalSigns.length > 0 ? vitalSigns[0] : null;

  // Handle template selection
  const handleTemplateSelect = (templateKey: string) => {
    setSelectedTemplate(templateKey);
    // @ts-ignore
    setTemplateFields(JSON.parse(JSON.stringify(TEMPLATES[templateKey])));
  };

  // Handle template field change
  const handleTemplateFieldChange = (id: string, value: any) => {
    setTemplateFields(prev => prev.map(field => 
      field.id === id ? { ...field, value } : field
    ));
  };

  // Add a custom field to the template
  const addCustomField = () => {
    if (!newField.label.trim()) return;

    const field: TemplateField = {
      id: `custom_${Date.now()}`,
      label: newField.label,
      type: newField.type as any,
      value: newField.type === "boolean" ? false : ""
    };

    if (newField.type === "select" && newField.options) {
      field.options = newField.options.split(',').map(opt => opt.trim());
    }

    setTemplateFields([...templateFields, field]);
    setNewField({ label: "", type: "text", options: "" });
    setShowFieldCreator(false);
  };

  // Save template as a new medical file
  const saveTemplateAsFile = () => {
    if (!selectedTemplate) return;

    const summary = templateFields.map(field => {
      if (field.type === "boolean") {
        return `${field.label}: ${field.value ? "Yes" : "No"}`;
      }
      return `${field.label}: ${field.value}`;
    }).join('\n');

    const newFile: MedicalFile = {
      id: `file_${Date.now()}`,
      date: new Date(),
      type: "note",
      title: `${selectedTemplate} Report`,
      doctor: "Dr. Sarah Johnson",
      summary,
      tags: [selectedTemplate, "template"],
      editable: true
    };

    setMedicalFiles([newFile, ...medicalFiles]);
    setSelectedTemplate(null);
    setTemplateFields([]);
  };

  // Toggle editing for a medical file
  const toggleEditFile = (file: MedicalFile) => {
    setEditingFile(editingFile?.id === file.id ? null : file);
  };

  // Update a medical file
  const updateFile = (id: string, updates: Partial<MedicalFile>) => {
    setMedicalFiles(prev => prev.map(file => 
      file.id === id ? { ...file, ...updates } : file
    ));
  };

  // Update vital signs
  const updateVitals = () => {
    setVitalSigns([currentVitals, ...vitalSigns.slice(1)]);
    setEditingVitals(false);
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
                <h1 className="text-2xl font-bold text-black">John Doe - Patient File</h1>
                <p className="text-black">Patient ID: PAT-12345</p>
                <p className="text-black">Date of Birth: March 15, 1985</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-black">Doctor: Dr. Sarah Johnson</p>
              <p className="text-black">Last accessed: Today, 10:30 AM</p>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="flex border-b">
            <button
              className={`px-6 py-3 font-medium ${activeTab === "overview" ? "text-[#1d2951] border-b-2 border-[#1d2951]" : "text-black"}`}
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
              className={`px-6 py-3 font-medium ${activeTab === "templates" ? "text-[#1d2951] border-b-2 border-[#1d2951]" : "text-black"}`}
              onClick={() => setActiveTab("templates")}
            >
              Templates
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vital Signs Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-black">Vital Signs</h2>
                <button 
                  onClick={() => setEditingVitals(!editingVitals)}
                  className="text-[#1d2951] hover:text-[#2a3a6a] font-medium"
                >
                  {editingVitals ? "Cancel" : "Edit"}
                </button>
              </div>
              
              {editingVitals ? (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-black">Height (cm):</span>
                    <input
                      type="number"
                      value={currentVitals.height || ""}
                      onChange={(e) => setCurrentVitals({...currentVitals, height: Number(e.target.value)})}
                      className="w-20 p-1 border border-gray-300 rounded text-black"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black">Weight (kg):</span>
                    <input
                      type="number"
                      value={currentVitals.weight || ""}
                      onChange={(e) => setCurrentVitals({...currentVitals, weight: Number(e.target.value)})}
                      className="w-20 p-1 border border-gray-300 rounded text-black"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black">Blood Pressure:</span>
                    <input
                      type="text"
                      value={currentVitals.bloodPressure || ""}
                      onChange={(e) => setCurrentVitals({...currentVitals, bloodPressure: e.target.value})}
                      className="w-20 p-1 border border-gray-300 rounded text-black"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black">Heart Rate:</span>
                    <input
                      type="number"
                      value={currentVitals.heartRate || ""}
                      onChange={(e) => setCurrentVitals({...currentVitals, heartRate: Number(e.target.value)})}
                      className="w-20 p-1 border border-gray-300 rounded text-black"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black">Temperature:</span>
                    <input
                      type="number"
                      value={currentVitals.temperature || ""}
                      onChange={(e) => setCurrentVitals({...currentVitals, temperature: Number(e.target.value)})}
                      className="w-20 p-1 border border-gray-300 rounded text-black"
                    />
                  </div>
                  <button
                    onClick={updateVitals}
                    className="mt-3 bg-[#1d2951] text-white px-4 py-1 rounded-md hover:bg-[#2a3a6a] transition"
                  >
                    Save Changes
                  </button>
                </div>
              ) : latestVitals ? (
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

            {/* Current Medications Card */}
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

            {/* Recent Appointments Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4 text-black">Recent Visits</h2>
              <div className="space-y-2">
                {medicalFiles.slice(0, 3).map(file => (
                  <div key={file.id} className="text-sm">
                    <div className="font-medium text-black">{file.title}</div>
                    <div className="text-black">{file.date.toLocaleDateString()} • {file.doctor}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Medical Records Tab */}
        {activeTab === "records" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-black">Medical Records</h2>
            </div>
            
            {medicalFiles.length > 0 ? (
              <div className="space-y-4">
                {medicalFiles.map(file => (
                  <div key={file.id} className="border rounded-lg p-4 hover:bg-gray-50 transition">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                            file.type === "visit" ? "bg-blue-500" :
                            file.type === "lab" ? "bg-green-500" :
                            file.type === "imaging" ? "bg-purple-500" : "bg-yellow-500"
                          }`}></span>
                          {editingFile?.id === file.id ? (
                            <input
                              type="text"
                              value={editingFile.title}
                              onChange={(e) => setEditingFile({...editingFile, title: e.target.value})}
                              className="font-medium text-lg text-black border border-gray-300 rounded p-1"
                            />
                          ) : (
                            <h3 className="font-medium text-lg text-black">{file.title}</h3>
                          )}
                        </div>
                        <div className="text-sm text-black mt-1">
                          {file.date.toLocaleDateString()} • {file.doctor} • {file.specialty}
                        </div>
                        {file.diagnosis && (
                          <div className="mt-2">
                            <span className="font-medium text-black">Diagnosis: </span>
                            {editingFile?.id === file.id ? (
                              <input
                                type="text"
                                value={editingFile.diagnosis || ""}
                                onChange={(e) => setEditingFile({...editingFile, diagnosis: e.target.value})}
                                className="text-black border border-gray-300 rounded p-1"
                              />
                            ) : (
                              <span className="text-black">{file.diagnosis}</span>
                            )}
                          </div>
                        )}
                        {file.summary && (
                          <div className="mt-2">
                            <span className="font-medium text-black">Notes: </span>
                            {editingFile?.id === file.id ? (
                              <textarea
                                value={editingFile.summary || ""}
                                onChange={(e) => setEditingFile({...editingFile, summary: e.target.value})}
                                className="w-full text-black border border-gray-300 rounded p-1"
                                rows={3}
                              />
                            ) : (
                              <span className="text-black">{file.summary}</span>
                            )}
                          </div>
                        )}
                        <div className="mt-2 flex flex-wrap gap-1">
                          {file.tags.map(tag => (
                            <span key={tag} className="bg-gray-100 text-black text-xs px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        {file.editable && (
                          <>
                            {editingFile?.id === file.id ? (
                              <>
                                <button
                                  onClick={() => {
                                    if (editingFile) {
                                      updateFile(editingFile.id, editingFile);
                                      setEditingFile(null);
                                    }
                                  }}
                                  className="text-green-600 hover:text-green-800 font-medium text-sm mb-2"
                                >
                                  Save
                                </button>
                                <button
                                  onClick={() => setEditingFile(null)}
                                  className="text-red-600 hover:text-red-800 font-medium text-sm"
                                >
                                  Cancel
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => toggleEditFile(file)}
                                className="text-[#1d2951] hover:text-[#2a3a6a] font-medium text-sm"
                              >
                                Edit
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-black">No medical records found.</p>
            )}
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === "templates" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6 text-black">Clinical Templates</h2>
            
            {!selectedTemplate ? (
              <div>
                <h3 className="text-lg font-medium mb-4 text-black">Select a Template</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <button
                    onClick={() => handleTemplateSelect("generalCheckup")}
                    className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center"
                  >
                    <div className="font-medium text-black">General Checkup</div>
                    <div className="text-sm text-black mt-1">Basic physical examination template</div>
                  </button>
                  <button
                    onClick={() => handleTemplateSelect("bloodTest")}
                    className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center"
                  >
                    <div className="font-medium text-black">Blood Test</div>
                    <div className="text-sm text-black mt-1">Lab work and results</div>
                  </button>
                  <button
                    onClick={() => handleTemplateSelect("imaging")}
                    className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center"
                  >
                    <div className="font-medium text-black">Imaging</div>
                    <div className="text-sm text-black mt-1">X-Ray, MRI, CT scan results</div>
                  </button>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <h3 className="text-lg font-medium mb-4 text-black">Create Custom Template</h3>
                  <button
                    onClick={() => {
                      setSelectedTemplate("custom");
                      setTemplateFields([]);
                    }}
                    className="bg-[#1d2951] text-white px-4 py-2 rounded-md hover:bg-[#2a3a6a] transition"
                  >
                    Start Blank Template
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-black">
                    {selectedTemplate === "custom" ? "Custom Template" : selectedTemplate} 
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowFieldCreator(true)}
                      className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition text-sm"
                    >
                      Add Field
                    </button>
                    <button
                      onClick={() => setSelectedTemplate(null)}
                      className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400 transition text-sm"
                    >
                      Back to Templates
                    </button>
                  </div>
                </div>
                
                {/* Field Creator Modal */}
                {showFieldCreator && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                      <h4 className="text-lg font-medium mb-4 text-black">Add New Field</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-black mb-1">Field Label</label>
                          <input
                            type="text"
                            value={newField.label}
                            onChange={(e) => setNewField({...newField, label: e.target.value})}
                            className="w-full p-2 border border-gray-300 rounded-md text-black"
                            placeholder="e.g., Blood Sugar Level"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-black mb-1">Field Type</label>
                          <select
                            value={newField.type}
                            onChange={(e) => setNewField({...newField, type: e.target.value})}
                            className="w-full p-2 border border-gray-300 rounded-md text-black"
                          >
                            {FIELD_TYPES.map(type => (
                              <option key={type.id} value={type.id}>{type.label}</option>
                            ))}
                          </select>
                        </div>
                        {newField.type === "select" && (
                          <div>
                            <label className="block text-sm font-medium text-black mb-1">Options (comma separated)</label>
                            <input
                              type="text"
                              value={newField.options}
                              onChange={(e) => setNewField({...newField, options: e.target.value})}
                              className="w-full p-2 border border-gray-300 rounded-md text-black"
                              placeholder="e.g., Normal, Elevated, High"
                            />
                          </div>
                        )}
                        <div className="flex gap-2 mt-4">
                          <button
                            onClick={addCustomField}
                            className="bg-[#1d2951] text-white px-4 py-2 rounded-md hover:bg-[#2a3a6a] transition"
                          >
                            Add Field
                          </button>
                          <button
                            onClick={() => setShowFieldCreator(false)}
                            className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Template Form */}
                <div className="space-y-4">
                  {templateFields.map(field => (
                    <div key={field.id} className="border-b pb-4">
                      <label className="block text-sm font-medium text-black mb-2">{field.label}</label>
                      {field.type === "text" && (
                        <input
                          type="text"
                          value={field.value}
                          onChange={(e) => handleTemplateFieldChange(field.id, e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-black"
                        />
                      )}
                      {field.type === "number" && (
                        <input
                          type="number"
                          value={field.value}
                          onChange={(e) => handleTemplateFieldChange(field.id, Number(e.target.value))}
                          className="w-full p-2 border border-gray-300 rounded-md text-black"
                        />
                      )}
                      {field.type === "boolean" && (
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={(e) => handleTemplateFieldChange(field.id, e.target.checked)}
                            className="h-4 w-4 text-[#1d2951] focus:ring-[#1d2951] border-gray-300 rounded"
                          />
                          <span className="ml-2 text-black">{field.value ? "Yes" : "No"}</span>
                        </div>
                      )}
                      {field.type === "select" && field.options && (
                        <select
                          value={field.value}
                          onChange={(e) => handleTemplateFieldChange(field.id, e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-black"
                        >
                          <option value="">Select an option</option>
                          {field.options.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      )}
                      {field.type === "date" && (
                        <input
                          type="date"
                          value={field.value}
                          onChange={(e) => handleTemplateFieldChange(field.id, e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md text-black"
                        />
                      )}
                    </div>
                  ))}
                  
                  {templateFields.length > 0 && (
                    <button
                      onClick={saveTemplateAsFile}
                      className="bg-[#1d2951] text-white px-4 py-2 rounded-md hover:bg-[#2a3a6a] transition mt-4"
                    >
                      Save as Medical Record
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;