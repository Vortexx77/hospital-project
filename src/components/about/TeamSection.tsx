import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Medical Director",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
      description: "Board-certified physician with over 15 years of experience in family medicine.",
      specialties: ["Family Medicine", "Pediatrics"]
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Pediatric Specialist",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
      description: "Specialized in pediatric care with a focus on developmental health.",
      specialties: ["Pediatrics", "Child Development"]
    },
    {
      name: "Dr. Emily Thompson",
      role: "Family Physician",
      image: "https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg",
      description: "Dedicated to providing comprehensive care for patients of all ages.",
      specialties: ["Family Medicine", "Preventive Care"]
    }
  ];

  return (
    <section className="py-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Meet Our Team
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-secondary-50/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary-500 text-white px-4 py-2 rounded-md text-sm flex items-center"
                >
                  View Profile
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-secondary-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between pt-4 border-t border-gray-200">
                <a 
                  href={`tel:+1234567890`}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">Call</span>
                </a>
                <a 
                  href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@example.com`}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;