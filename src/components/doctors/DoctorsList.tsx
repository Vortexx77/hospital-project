import React from 'react';
import { motion } from 'framer-motion';
import { doctorsData } from '../../data/doctors';
import { Phone, Mail, Award, Star } from 'lucide-react';

const DoctorsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {doctorsData.map((doctor, index) => (
        <motion.div
          key={doctor.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-secondary-50/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative">
            <img 
              src={doctor.imageUrl} 
              alt={doctor.name} 
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4">
              {doctor.featured && (
                <div className="bg-secondary-500/90 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Featured
                </div>
              )}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
            <p className="text-secondary-600 font-medium mb-4">{doctor.title}</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {doctor.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Education</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {doctor.education.map((edu, idx) => (
                    <li key={idx} className="flex items-start">
                      <Award className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-secondary-500" />
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between">
                <a 
                  href={`tel:+1234567890`}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">Call</span>
                </a>
                <a 
                  href={`mailto:${doctor.name.toLowerCase().replace(' ', '.')}@chansemedical.com`}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">Email</span>
                </a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary-500 text-white px-4 py-2 rounded-md text-sm hover:bg-secondary-600 transition-colors"
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DoctorsList;