import React, { useState } from "react";
import FeatureCard from "./titleCards";


const features = [
  {
    id: 1,
    title: "Patients Portal",
    description:
      "Access your personal medical records securely on BioHealthChain. Apply for access to your health data, view all documents, track your treatment history, and maintain full control over who can access your information. Empower yourself with complete transparency and security in managing your healthcare.",
  },
  {
    id: 2,
    title: "Doctors Portal",
    description:
      "Register as a verified healthcare provider and gain access to patients’ medical data in a secure, permissioned environment. Review health records, monitor ongoing treatments, update patient information, and collaborate with other providers to ensure accurate and timely care. Streamline your workflow while maintaining data privacy and compliance.",
  },
  {
    id: 3,
    title: "Pharmacists Portal",
    description:
      "Sign up as a certified pharmacist and manage patient prescriptions efficiently. Track prescription requests, provide medications, and ensure timely fulfillment while updating the patient’s medical record on the blockchain. Enhance patient safety, reduce errors, and maintain a transparent, auditable record of all medication transactions.",
  },
];


const FeatureGrid: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
          onClick={() => setSelected(feature.id)}
        />
      ))}
      {selected && <p className="mt-4 text-blue-500">Selected feature ID: {selected}</p>}
    </div>
  );
};

export default FeatureGrid;
