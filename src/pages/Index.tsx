
import React from 'react';
import Hero from '../components/Hero';
import HistorySection from '../components/HistorySection';
import ProgramsSection from '../components/ProgramsSection';
import AboutSection from '../components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Landing page hero section */}
      <Hero />
      
      {/* Main content sections */}
      <ProgramsSection />
      <AboutSection />
      <HistorySection />
      
      {/* Footer link to main site */}
      <div className="bg-civitan-blue text-white text-center py-4">
        <p>This is a landing page. Visit our <a href="https://duluthcivitanclub.org" className="text-civitan-gold hover:underline">full website</a> for more information.</p>
      </div>
    </div>
  );
};

export default Index;
