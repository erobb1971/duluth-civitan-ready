
import React from 'react';
import Hero from '../components/Hero';
import HistorySection from '../components/HistorySection';
import ProgramsSection from '../components/ProgramsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <HistorySection />
      <ProgramsSection />
    </div>
  );
};

export default Index;
