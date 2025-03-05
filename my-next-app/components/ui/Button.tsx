'use client'; // Marking this component as a Client Component

import React from 'react';

interface ButtonProps {
  label?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode; // Accept children prop
}

const Button = ({ label, onClick, className, children }: ButtonProps) => {
  return (
    <button
      className={`bg-blue-500 text-white py-2 px-4 rounded-md transition-all hover:bg-blue-700 focus:outline-none ${className}`}
      onClick={onClick}
    >
      {label || children} {/* Fallback to children if label is not provided */}
    </button>
  );
};

export default Button;
