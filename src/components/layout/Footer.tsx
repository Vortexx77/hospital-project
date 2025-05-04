import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Information */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-secondary-400">Chanse</span>
              <span className="text-lg font-medium ml-2">Medical Clinic</span>
            </div>
            <p className="text-blue-100 mb-4">
              Providing quality healthcare for the entire family since 1995.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Our Services</FooterLink>
              <FooterLink to="/doctors">Our Doctors</FooterLink>
              <FooterLink to="/appointment">Book Appointment</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/services#pediatrics">Pediatrics</FooterLink>
              <FooterLink to="/services#family-medicine">Family Medicine</FooterLink>
              <FooterLink to="/services#preventive-care">Preventive Care</FooterLink>
              <FooterLink to="/services#vaccinations">Vaccinations</FooterLink>
              <FooterLink to="/services#lab-services">Laboratory Services</FooterLink>
              <FooterLink to="/services#telemedicine">Telemedicine</FooterLink>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-secondary-400 flex-shrink-0 mt-1" />
                <span className="text-blue-100">123 Medical Plaza Dr.<br />Columbus, OH 43215</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-secondary-400" />
                <span className="text-blue-100">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-secondary-400" />
                <span className="text-blue-100">info@chansemedical.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 text-secondary-400 flex-shrink-0 mt-1" />
                <div className="text-blue-100">
                  <div>Mon-Fri: 8:00 AM - 7:00 PM</div>
                  <div>Saturday: 9:00 AM - 5:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-600 mt-10 pt-6 text-center">
          <p className="text-sm text-blue-200">
            &copy; {new Date().getFullYear()} Chanse Physician and Children's Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-blue-100 hover:text-secondary-400 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a 
      href={href} 
      className="bg-blue-800 hover:bg-secondary-600 p-2 rounded-full transition-colors"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default Footer;