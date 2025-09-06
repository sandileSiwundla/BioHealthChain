'use client'; // Marking this component as a Client Component

import * as React from "react";

interface ButtonProps {
  label?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode; // Accept children prop
  variant?: 'link' | 'primary' | 'secondary'; // Add variant prop
  size?: 'sm' | 'md' | 'lg'; // Add size prop
}

const Button = ({ label, onClick, className, children, variant = 'primary', size = 'md' }: ButtonProps) => {
  // Determine the button classes based on variant and size
  const buttonClasses = `
    ${variant === 'link' ? 'text-red-500 ' : 'bg-blue-red text-black py-2 px-4 rounded-md'}
    ${size === 'sm' ? 'text-sm py-1 px-3' : size === 'lg' ? 'text-lg py-3 px-6' : 'text-base'}
    transition-all hover:bg-blue-300 focus:outline-none
    ${className}
  `;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
    >
      {label || children} {/* Fallback to children if label is not provided */}
    </button>
  );
};

export default Button;
