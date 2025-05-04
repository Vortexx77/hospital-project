import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Baby, Users } from 'lucide-react';

const categories = [
  {
    title: 'Primary Care',
    description: 'Comprehensive healthcare for all ages',
    icon: <Stethoscope className="h-10 w-10 text-blue-600" />,
    stats: '10,000+ Patients'
  },
  {
    title: 'Pediatrics',
    description: 'Specialized care for children',
    icon: <Baby className="h-10 w-10 text-pink-600" />,
    stats: '5,000+ Young Patients'
  },
  {
    title: 'Family Medicine',
    description: 'Healthcare for the whole family',
    icon: <Users className="h-10 w-10 text-purple-600" />,
    stats: '2,000+ Families'
  }
];

const ServiceCategories: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {categories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-secondary-50/80 backdrop-blur-sm rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white/80 rounded-full p-4 inline-block mb-4"
          >
            {category.icon}
          </motion.div>
          <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
          <p className="text-gray-600 mb-4">{category.description}</p>
          <div className="text-sm font-medium text-blue-600">{category.stats}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCategories;