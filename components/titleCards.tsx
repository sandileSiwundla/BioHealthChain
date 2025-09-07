import React from "react";


interface FeatureCardProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4 cursor-pointer hover:shadow-xl transition-shadow"
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {description && <p className="text-gray-600 dark:text-gray-300">{description}</p>}
    </div>
  );
};

export default FeatureCard;
