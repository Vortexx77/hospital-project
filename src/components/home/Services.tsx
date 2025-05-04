import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Baby, Activity, Syringe, FlaskRound as Flask, Video } from 'lucide-react';
import { Card } from '../ui/Card';

const servicesData = [
  {
    id: 'pediatrics',
    title: 'Pediatrics',
    description: 'Specialized care for infants, children, and adolescents, including well-child visits, developmental assessments, and treatment for childhood illnesses.',
    icon: <Baby className="h-8 w-8 text-blue-500" />,
    color: 'bg-blue-50',
  },
  {
    id: 'family-medicine',
    title: 'Family Medicine',
    description: 'Comprehensive healthcare for patients of all ages, from newborns to seniors, focused on preventive care and managing chronic conditions.',
    icon: <Stethoscope className="h-8 w-8 text-green-500" />,
    color: 'bg-green-50',
  },
  {
    id: 'preventive-care',
    title: 'Preventive Care',
    description: 'Regular check-ups, health screenings, and lifestyle guidance to help prevent illnesses and maintain optimal health for the entire family.',
    icon: <Activity className="h-8 w-8 text-purple-500" />,
    color: 'bg-purple-50',
  },
  {
    id: 'vaccinations',
    title: 'Vaccinations',
    description: 'Complete vaccination services for children and adults, following the recommended immunization schedules to protect against preventable diseases.',
    icon: <Syringe className="h-8 w-8 text-red-500" />,
    color: 'bg-red-50',
  },
  {
    id: 'lab-services',
    title: 'Laboratory Services',
    description: 'On-site laboratory testing for quick and accurate diagnosis, including blood tests, urinalysis, strep tests, and more.',
    icon: <Flask className="h-8 w-8 text-amber-500" />,
    color: 'bg-amber-50',
  },
  {
    id: 'telemedicine',
    title: 'Telemedicine',
    description: 'Virtual consultations for follow-ups, minor illnesses, and medication management, providing convenient care from the comfort of your home.',
    icon: <Video className="h-8 w-8 text-cyan-500" />,
    color: 'bg-cyan-50',
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-secondary-50/60" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We offer a wide range of healthcare services for the entire family, with a special focus on pediatric and preventive care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg">
      <div className={`${service.color} p-4 rounded-full inline-block mb-5`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <Link 
        to={`/services#${service.id}`} 
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Card>
  );
};

export default Services;