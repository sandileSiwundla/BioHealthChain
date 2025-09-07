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
      className="w-full bg-gray-800 text-white rounded-lg p-8 mb-6 cursor-pointer relative overflow-hidden group"
    >
      <div className="flex items-center justify-center transition-all duration-700 group-hover:justify-between">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center transition-all duration-700 group-hover:text-2xl group-hover:text-left flex-shrink-0">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="opacity-0 w-1/2 ml-8 text-lg leading-snug transition-opacity duration-700 group-hover:opacity-100">
            {description.split(" ").slice(0, 50).join(" ")}{/* roughly 4 lines */}
          </p>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
