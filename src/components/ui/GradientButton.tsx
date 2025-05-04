import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  gradient?: 'primary' | 'secondary';
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  className = '',
  gradient = 'primary',
  ...props
}) => {
  const gradientStyles = {
    primary: 'from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900',
    secondary: 'from-green-600 to-green-800 hover:from-green-700 hover:to-green-900',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative px-6 py-3 rounded-lg font-medium text-white
        bg-gradient-to-r ${gradientStyles[gradient]}
        transition-all duration-200 shadow-md
        hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};