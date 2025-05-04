import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, Award } from 'lucide-react';

const OurHistory: React.FC = () => {
  const milestones = [
    {
      icon: <Clock className="h-8 w-8 text-secondary-600" />,
      title: "Founding Years",
      year: "1995",
      description: "Established with a vision to provide comprehensive healthcare services to our community. What started as a small practice has grown into a trusted medical institution."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-secondary-600" />,
      title: "Growth and Evolution",
      year: "2000-2020",
      description: "Over the years, we've expanded our services, adopted cutting-edge medical technologies, and built a team of exceptional healthcare professionals dedicated to patient care."
    },
    {
      icon: <Award className="h-8 w-8 text-secondary-600" />,
      title: "Today",
      year: "Present",
      description: "Today, we continue to serve our community with the same dedication and commitment to excellence that has defined us from the beginning, while embracing modern medical advances and practices."
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our History
        </motion.h2>
        <div className="bg-secondary-50/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start space-x-6"
              >
                <div className="bg-white/80 rounded-full p-4 flex-shrink-0">
                  {milestone.icon}
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {milestone.title}
                    </h3>
                    <span className="ml-4 px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                      {milestone.year}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;