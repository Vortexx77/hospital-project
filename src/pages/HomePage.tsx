import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import DoctorHighlights from '../components/home/DoctorHighlights';
import Testimonials from '../components/home/Testimonials';
import AppointmentCTA from '../components/home/AppointmentCTA';
import About from '../components/home/About';
import Contact from '../components/home/Contact';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services />
      <About />
      <DoctorHighlights />
      <Testimonials />
      <AppointmentCTA />
      <Contact />
    </div>
  );
};

export default HomePage;