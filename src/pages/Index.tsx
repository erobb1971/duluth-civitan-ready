
import React from 'react';
import Hero from '../components/Hero';
import HistorySection from '../components/HistorySection';
import ProgramsSection from '../components/ProgramsSection';
import AboutSection from '../components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <ProgramsSection />
      <AboutSection />
      <HistorySection />
    </div>
  );
};

export default Index;
