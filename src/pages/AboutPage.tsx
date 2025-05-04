import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { MissionValues, OurHistory, TeamSection } from '../components/about';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="About Our Clinic" 
        description="Learn about our mission, values, and the team behind Chanse Physician and Children's Clinic"
        imageUrl="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg"
      />
      
      <div className="container mx-auto px-4 py-12">
        <MissionValues />
        <OurHistory />
        <TeamSection />
      </div>
    </div>
  );
};

export default AboutPage;