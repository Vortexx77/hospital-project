import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-secondary-50/80 backdrop-blur-sm rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
};