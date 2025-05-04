import React from 'react';

type ButtonIntent = 'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: ButtonIntent;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  intent = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const intentStyles: Record<ButtonIntent, string> = {
    primary: 'bg-primary hover:bg-primary-600 text-white focus:ring-primary-500',
    secondary: 'bg-secondary hover:bg-secondary-600 text-white focus:ring-secondary-500',
    outline: 'bg-transparent hover:bg-gray-100 text-gray-700 border border-gray-300 focus:ring-primary-500',
    'outline-light': 'bg-transparent hover:bg-white/20 text-white border border-white focus:ring-white',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-primary-500',
  };
  
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  return (
    <button
      className={`${baseStyles} ${intentStyles[intent]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};