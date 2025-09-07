import React, { useState } from "react";
import FeatureCard from "./titleCards";

const features = [
  { id: 1, title: "Analytics", description: "View your stats in real-time" },
  { id: 2, title: "Reports", description: "Generate detailed reports" },
  { id: 3, title: "Settings", description: "Customize your preferences" },
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
