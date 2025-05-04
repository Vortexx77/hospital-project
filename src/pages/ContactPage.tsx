import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInformation from '../components/contact/ContactInformation';
import LocationMap from '../components/contact/LocationMap';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Contact Us" 
        description="We're here to help. Reach out to our friendly team for any questions or concerns."
        imageUrl="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ContactForm />
          <ContactInformation />
        </div>
        
        <LocationMap />
      </div>
    </div>
  );
};

export default ContactPage;