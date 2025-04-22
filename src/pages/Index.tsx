
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HistorySection from '../components/HistorySection';
import ProgramsSection from '../components/ProgramsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <HistorySection />
      <ProgramsSection />
      <Footer />
    </div>
  );
};

export default Index;
