import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, Clock, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

const AppointmentCTA: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Schedule Your Appointment Today
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                We make it easy to get the care you need. Book online or call us to schedule your visit with our experienced medical team.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-500 p-2 rounded-full mr-4">
                    <CalendarCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Easy Online Scheduling</h3>
                    <p className="text-blue-100">Book appointments at your convenience</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 p-2 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Flexible Hours</h3>
                    <p className="text-blue-100">Extended evening and weekend appointments available</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 p-2 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone Support</h3>
                    <p className="text-blue-100">Call (555) 123-4567 for assistance</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/appointment">
                  <Button intent="secondary" size="lg">
                    Book Online
                  </Button>
                </Link>
                <a href="tel:+15551234567">
                  <Button intent="outline-light" size="lg">
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="hidden md:block relative h-full">
              <img 
                src="https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg" 
                alt="Doctor with patient"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;