import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ServicesList from '../components/services/ServicesList';
import ServiceCategories from '../components/services/ServiceCategories';
import InsuranceInformation from '../components/services/InsuranceInformation';

const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Our Services" 
        description="Comprehensive healthcare services for the entire family"
        imageUrl="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <ServiceCategories />
        <ServicesList />
        <InsuranceInformation />
      </div>
    </div>
  );
};

export default ServicesPage;