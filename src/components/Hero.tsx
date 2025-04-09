
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="relative bg-civitan-blue">
      <div className="absolute inset-0 bg-gradient-to-r from-civitan-blue/90 to-civitan-blue/70 z-10"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center h-[500px] md:h-[600px]"></div>
      <div className="container mx-auto px-4 absolute inset-0 z-20 flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Duluth Civitan Club</h1>
          <p className="text-lg md:text-xl mb-6">Builders of Good Citizenship serving the Duluth community through leadership, knowledge, and service.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-civitan-gold text-civitan-blue hover:bg-white hover:text-civitan-blue">
              Learn More
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-civitan-blue">
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
