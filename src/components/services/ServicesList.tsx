import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Baby, Activity, Syringe, 
  FlaskRound, Video, Brain, Heart, Microscope 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Primary Care',
    description: 'Comprehensive healthcare services for patients of all ages, including routine check-ups and preventive care.',
    icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
    color: 'from-blue-500/20 to-blue-600/10'
  },
  {
    id: 2,
    title: 'Pediatric Care',
    description: 'Specialized medical care for infants, children, and adolescents, focusing on growth, development, and childhood conditions.',
    icon: <Baby className="h-8 w-8 text-pink-600" />,
    color: 'from-pink-500/20 to-pink-600/10'
  },
  {
    id: 3,
    title: 'Family Medicine',
    description: 'Complete healthcare services for the entire family, from newborns to seniors, with a focus on long-term health management.',
    icon: <Heart className="h-8 w-8 text-red-600" />,
    color: 'from-red-500/20 to-red-600/10'
  },
  {
    id: 4,
    title: 'Preventive Medicine',
    description: 'Proactive healthcare approaches including vaccinations, health screenings, and lifestyle counseling to prevent illness.',
    icon: <Activity className="h-8 w-8 text-green-600" />,
    color: 'from-green-500/20 to-green-600/10'
  },
  {
    id: 5,
    title: 'Diagnostic Services',
    description: 'Advanced diagnostic testing and laboratory services for accurate diagnosis and treatment planning.',
    icon: <Microscope className="h-8 w-8 text-purple-600" />,
    color: 'from-purple-500/20 to-purple-600/10'
  },
  {
    id: 6,
    title: 'Behavioral Health',
    description: 'Mental health services and counseling for children and adults, supporting emotional and psychological well-being.',
    icon: <Brain className="h-8 w-8 text-amber-600" />,
    color: 'from-amber-500/20 to-amber-600/10'
  },
  {
    id: 7,
    title: 'Immunizations',
    description: 'Comprehensive vaccination services for all ages, following recommended immunization schedules.',
    icon: <Syringe className="h-8 w-8 text-cyan-600" />,
    color: 'from-cyan-500/20 to-cyan-600/10'
  },
  {
    id: 8,
    title: 'Laboratory Services',
    description: 'On-site laboratory testing for quick and accurate diagnosis, including blood work and other medical tests.',
    icon: <FlaskRound className="h-8 w-8 text-indigo-600" />,
    color: 'from-indigo-500/20 to-indigo-600/10'
  },
  {
    id: 9,
    title: 'Telemedicine',
    description: 'Virtual consultations and follow-ups for convenient healthcare access from the comfort of your home.',
    icon: <Video className="h-8 w-8 text-teal-600" />,
    color: 'from-teal-500/20 to-teal-600/10'
  }
];

const ServicesList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`bg-gradient-to-br ${service.color} backdrop-blur-sm rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300`}
        >
          <div className="flex items-center mb-4">
            <div className="bg-white/80 rounded-full p-3 mr-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
          </div>
          <p className="text-gray-700">{service.description}</p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
          >
            Learn More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesList;