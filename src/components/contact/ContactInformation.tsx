import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const ContactInformation: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-secondary-50 to-primary-50 backdrop-blur-sm rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h2>
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="bg-secondary-100 p-3 rounded-full">
            <MapPin className="h-6 w-6 text-secondary-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
            <p className="text-gray-600 mt-1">123 Medical Center Drive<br />Columbus, OH 43215</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-secondary-600 hover:text-secondary-700 mt-2 text-sm font-medium"
            >
              Get Directions
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-primary-100 p-3 rounded-full">
            <Phone className="h-6 w-6 text-primary-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Phone Numbers</h3>
            <div className="space-y-2 mt-1">
              <p className="text-gray-600">Main: (555) 123-4567</p>
              <p className="text-gray-600">Emergency: (555) 987-6543</p>
              <p className="text-gray-600">Fax: (555) 456-7890</p>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-secondary-100 p-3 rounded-full">
            <Mail className="h-6 w-6 text-secondary-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Email Addresses</h3>
            <div className="space-y-2 mt-1">
              <p className="text-gray-600">General: info@chansemedical.com</p>
              <p className="text-gray-600">Appointments: appointments@chansemedical.com</p>
              <p className="text-gray-600">Billing: billing@chansemedical.com</p>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-primary-100 p-3 rounded-full">
            <Clock className="h-6 w-6 text-primary-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Office Hours</h3>
            <div className="space-y-2 mt-1">
              <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
              <p className="text-sm text-primary-600 mt-2">
                * Emergency services available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;