import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We're here to help with all your healthcare needs. Reach out to us with any questions or to schedule an appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactCard 
            icon={<MapPin className="h-8 w-8" />}
            title="Our Location"
            color="bg-blue-500"
            details={
              <>
                <p className="mb-1">123 Medical Plaza Dr.</p>
                <p>Columbus, OH 43215</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2 text-sm font-medium"
                >
                  Get Directions
                  <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>
              </>
            }
          />
          
          <ContactCard 
            icon={<Phone className="h-8 w-8" />}
            title="Phone Number"
            color="bg-green-500"
            details={
              <>
                <p className="mb-1">Main: (555) 123-4567</p>
                <p>Fax: (555) 987-6543</p>
                <a 
                  href="tel:+15551234567" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2 text-sm font-medium"
                >
                  Call Now
                </a>
              </>
            }
          />
          
          <ContactCard 
            icon={<Mail className="h-8 w-8" />}
            title="Email Address"
            color="bg-purple-500"
            details={
              <>
                <p className="mb-1">info@chansemedical.com</p>
                <p>appointments@chansemedical.com</p>
                <a 
                  href="mailto:info@chansemedical.com" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2 text-sm font-medium"
                >
                  Send Email
                </a>
              </>
            }
          />
          
          <ContactCard 
            icon={<Clock className="h-8 w-8" />}
            title="Office Hours"
            color="bg-amber-500"
            details={
              <>
                <p className="mb-1">Mon-Fri: 8:00 AM - 7:00 PM</p>
                <p className="mb-1">Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: Closed</p>
                <Link 
                  to="/appointment" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2 text-sm font-medium"
                >
                  Book Appointment
                </Link>
              </>
            }
          />
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193284.32321002185!2d-83.0453964869957!3d39.983255315246554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b990de71%3A0xe43266f8cfb1b533!2sColumbus%2C%20OH!5e0!3m2!1sen!2sus!4v1633532006844!5m2!1sen!2sus" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Clinic Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  details: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, color, details }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className={`${color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="text-gray-600">
        {details}
      </div>
    </div>
  );
};

export default Contact;