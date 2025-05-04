import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import DoctorsList from '../components/doctors/DoctorsList';
import DoctorFilters from '../components/doctors/DoctorFilters';

const DoctorsPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Our Medical Team" 
        description="Meet our experienced physicians and specialists"
        imageUrl="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <DoctorFilters />
        <DoctorsList />
      </div>
    </div>
  );
};

export default DoctorsPage;