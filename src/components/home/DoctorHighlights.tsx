import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { doctorsData } from '../../data/doctors';
import { Card } from '../ui/Card';

const DoctorHighlights: React.FC = () => {
  // Show only featured doctors on the homepage
  const featuredDoctors = doctorsData.filter(doctor => doctor.featured).slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Medical Team
            </h2>
            <div className="h-1 w-20 bg-blue-500 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Our experienced physicians are dedicated to providing the highest quality care for your family with compassion and expertise.
            </p>
          </div>
          <Link to="/doctors" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors mt-4 md:mt-0">
            View All Doctors
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface DoctorCardProps {
  doctor: {
    id: string;
    name: string;
    title: string;
    specialties: string[];
    imageUrl: string;
  };
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden mb-6">
        <img 
          src={doctor.imageUrl} 
          alt={doctor.name}
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <Link 
            to={`/doctors/${doctor.id}`}
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            View Profile
          </Link>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
      <p className="text-blue-600 mb-2">{doctor.title}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {doctor.specialties.slice(0, 2).map((specialty, index) => (
          <span 
            key={index}
            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
          >
            {specialty}
          </span>
        ))}
        {doctor.specialties.length > 2 && (
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
            +{doctor.specialties.length - 2} more
          </span>
        )}
      </div>
    </Card>
  );
};

export default DoctorHighlights;