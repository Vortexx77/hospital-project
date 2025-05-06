import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users } from 'lucide-react';

const MissionValues: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-12 h-12 text-secondary-600" />,
      title: "Our Mission",
      description: "To provide exceptional healthcare services with compassion and expertise, ensuring the well-being of every patient who walks through our doors."
    },
    {
      icon: <Heart className="w-12 h-12 text-secondary-600" />,
      title: "Core Values",
      description: "Excellence, integrity, and patient-centered care form the foundation of our practice, guiding every decision we make."
    },
    {
      icon: <Users className="w-12 h-12 text-secondary-600" />,
      title: "Our Promise",
      description: "We are committed to delivering comprehensive healthcare solutions while maintaining the highest standards of medical practice."
    }
  ];

  return (
    <section className="py-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Our Mission & Values
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 mt-5">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-secondary-50/80 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div 
              className="flex justify-center mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white/80 rounded-full p-4">
                {value.icon}
              </div>
            </motion.div>
            <h3 className="text-xl font-semibold mb-4 text-center">{value.title}</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionValues;