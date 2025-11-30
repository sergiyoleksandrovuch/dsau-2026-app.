import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "rounded-lg font-semibold transition-all duration-200 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };

  const variants = {
    primary: "bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg shadow-yellow-500/30",
    secondary: "bg-gray-800 text-white hover:bg-gray-900",
    outline: "border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};