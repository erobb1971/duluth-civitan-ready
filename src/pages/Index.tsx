
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import EventsSection from '../components/EventsSection';
import JoinSection from '../components/JoinSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <EventsSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
