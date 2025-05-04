import React from 'react';
import { MapPin } from 'lucide-react';

const LocationMap: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-secondary-50 to-primary-50 backdrop-blur-sm rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
        <MapPin className="h-6 w-6 text-secondary-600 mr-2" />
        Our Location
      </h2>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193284.32321002185!2d-83.0453964869957!3d39.983255315246554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b990de71%3A0xe43266f8cfb1b533!2sColumbus%2C%20OH!5e0!3m2!1sen!2sus!4v1633532006844!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Clinic Location Map"
          className="rounded-lg"
        ></iframe>
      </div>
      <div className="mt-6 bg-white/80 rounded-lg p-4 shadow-sm">
        <p className="text-gray-700">
          Our clinic is conveniently located in the heart of Columbus, with easy access to major highways and public transportation. Free parking is available for all patients and visitors.
        </p>
      </div>
    </div>
  );
};

export default LocationMap;