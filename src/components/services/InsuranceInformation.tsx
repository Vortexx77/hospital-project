import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, CheckCircle } from 'lucide-react';

const InsuranceInformation: React.FC = () => {
  const insuranceLogos = [
    { name: 'Blue Cross', color: 'bg-blue-100 text-blue-600' },
    { name: 'Aetna', color: 'bg-red-100 text-red-600' },
    { name: 'Cigna', color: 'bg-green-100 text-green-600' },
    { name: 'UnitedHealth', color: 'bg-yellow-100 text-yellow-600' }
  ];

  return (
    <div className="bg-secondary-50/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mt-12">
      <div className="flex items-center mb-6">
        <Shield className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-semibold">Insurance Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <CreditCard className="h-5 w-5 mr-2 text-gray-600" />
            Accepted Insurance Plans
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {insuranceLogos.map((insurance, index) => (
              <motion.div
                key={insurance.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${insurance.color} p-4 rounded-lg text-center font-medium shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                {insurance.name}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Coverage Benefits</h3>
          <ul className="space-y-3">
            {[
              'Preventive care services',
              'Annual check-ups',
              'Immunizations',
              'Laboratory services'
            ].map((benefit, index) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center text-gray-700"
              >
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                {benefit}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-blue-50/50 rounded-lg p-6">
        <p className="text-gray-700">
          Please contact our office to verify your specific coverage and benefits. We're here to help you understand your insurance plan and maximize your healthcare benefits.
        </p>
      </div>
    </div>
  );
};

export default InsuranceInformation;