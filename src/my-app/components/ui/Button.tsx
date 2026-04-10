import React from 'react';
import Icon from './Icon';

interface ButtonProps {
  children?: React.ReactNode;
  icon?: string;
  color?: 'red' | 'blue' | 'gray';
  shape?: 'wide' | 'square';
  outline?: boolean;
  title?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  icon, 
  color = 'blue', 
  shape = 'wide', 
  outline = false, 
  title,
  onClick,
  className = ""
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const colorStyles = {
    blue: outline 
      ? "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10" 
      : "bg-brand-blue text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
    red: outline 
      ? "border-2 border-red-600 text-red-600 hover:bg-red-600/10" 
      : "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl",
    gray: outline 
      ? "border-2 border-gray-400 text-gray-500 hover:bg-gray-400/10" 
      : "bg-gray-800 text-white hover:bg-gray-900 shadow-lg hover:shadow-xl",
  };

  const shapeStyles = {
    wide: "px-6 py-3 min-w-[120px]",
    square: "p-3 aspect-square",
  };

  return (
    <button 
      title={title}
      onClick={onClick}
      className={`${baseStyles} ${colorStyles[color]} ${shapeStyles[shape]} ${className}`}
    >
      {icon && <Icon id={icon} className={`${children ? 'mr-2' : ''}`} size={20} />}
      {children}
    </button>
  );
}
