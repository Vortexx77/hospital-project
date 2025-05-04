import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-secondary-50/80" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-full -z-10 translate-x-4 translate-y-4"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-100 rounded-full -z-10 -translate-x-8 -translate-y-8"></div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/5214953/pexels-photo-5214953.jpeg" 
                  alt="Doctor consulting with patient" 
                  className="rounded-lg shadow-lg h-48 md:h-56 lg:h-64 w-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg" 
                  alt="Medical equipment" 
                  className="rounded-lg shadow-lg h-36 md:h-40 lg:h-48 w-full object-cover"
                />
              </div>
              <div className="space-y-4 mt-6">
                <img 
                  src="https://images.pexels.com/photos/7089399/pexels-photo-7089399.jpeg" 
                  alt="Doctor with child patient" 
                  className="rounded-lg shadow-lg h-36 md:h-40 lg:h-48 w-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg" 
                  alt="Medical staff consulting" 
                  className="rounded-lg shadow-lg h-48 md:h-56 lg:h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Our Clinic
            </h2>
            <div className="h-1 w-20 bg-blue-500 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6">
              Since 1995, Chanse Physician and Children's Clinic has been providing exceptional healthcare services to families in Columbus and surrounding areas. We combine medical expertise with a compassionate approach to care for patients of all ages.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Board-Certified Physicians</h3>
                  <p className="text-gray-600">Our doctors have specialized training and certifications in family medicine and pediatrics.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Comprehensive Care</h3>
                  <p className="text-gray-600">From preventive services to management of complex conditions, we provide a full spectrum of medical care.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Patient-Centered Approach</h3>
                  <p className="text-gray-600">We take the time to listen to your concerns and involve you in healthcare decisions.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-secondary-50/80 backdrop-blur-sm rounded-lg">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-bold text-2xl text-gray-900">12+</h4>
                <p className="text-sm text-gray-600">Physicians</p>
              </div>
              
              <div className="text-center p-4 bg-secondary-50/80 backdrop-blur-sm rounded-lg">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-bold text-2xl text-gray-900">28</h4>
                <p className="text-sm text-gray-600">Years of Service</p>
              </div>
              
              <div className="text-center p-4 bg-secondary-50/80 backdrop-blur-sm rounded-lg">
                <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-bold text-2xl text-gray-900">20k+</h4>
                <p className="text-sm text-gray-600">Happy Patients</p>
              </div>
            </div>
            
            <Link to="/about">
              <Button intent="primary" size="lg" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;