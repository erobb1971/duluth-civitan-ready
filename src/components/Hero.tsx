
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Hero = () => {
  return (
    <div className="relative bg-civitan-blue">
      <div className="absolute inset-0 bg-gradient-to-r from-civitan-blue/90 to-civitan-blue/70 z-10"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center h-[800px] md:h-[1000px]"></div>
      <div className="container mx-auto px-4 absolute inset-0 z-20 flex items-start pt-20">
        <div className="w-full">
          <div className="max-w-2xl text-white mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Join Duluth Civitan</h1>
            <p className="text-lg md:text-xl mb-6">Become part of a dedicated group of individuals committed to making a difference in our community.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-civitan-blue/80 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Why Join Civitan?</h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-start">
                  <span className="mr-2 text-civitan-gold">✓</span>
                  <span>Make a meaningful impact in your community</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-civitan-gold">✓</span>
                  <span>Develop leadership skills and personal growth</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-civitan-gold">✓</span>
                  <span>Network with community leaders and like-minded individuals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-civitan-gold">✓</span>
                  <span>Attend social events and build lasting friendships</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-civitan-gold">✓</span>
                  <span>Access to international conventions and leadership training</span>
                </li>
              </ul>
              <Button className="mt-6 bg-civitan-gold text-civitan-blue hover:bg-white hover:text-civitan-blue">
                Learn More About Membership
              </Button>
            </div>

            <div className="bg-white/95 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-civitan-blue mb-6">Membership Application</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    type="text"
                    placeholder="First Name"
                    className="bg-white"
                  />
                  <Input 
                    type="text"
                    placeholder="Last Name"
                    className="bg-white"
                  />
                </div>
                <Input 
                  type="email"
                  placeholder="Email Address"
                  className="bg-white"
                />
                <Input 
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-white"
                />
                <Textarea
                  placeholder="Why are you interested in joining?"
                  className="bg-white"
                  rows={4}
                />
                <Button type="submit" className="w-full bg-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
