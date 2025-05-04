import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import AppointmentForm from '../components/appointment/AppointmentForm';
import AppointmentInformation from '../components/appointment/AppointmentInformation';

const AppointmentPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Schedule an Appointment" 
        description="Book your visit with our medical specialists"
        imageUrl="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AppointmentForm />
          </div>
          <div className="lg:col-span-1">
            <AppointmentInformation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;