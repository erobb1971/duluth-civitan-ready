
import React from 'react';
import { Users, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-civitan-blue mb-6">
            About Duluth Civitan
          </h2>
          <p className="text-xl text-civitan-gray max-w-3xl mx-auto leading-relaxed">
            Chartered in 2003, Duluth Civitan Club is part of Civitan International, 
            a global organization dedicated to building good citizenship through service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gradient-to-br from-civitan-blue/5 to-civitan-gold/5 rounded-lg">
            <div className="bg-civitan-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-civitan-blue mb-4">Community Focus</h3>
            <p className="text-civitan-gray">
              We serve Duluth, Georgia and surrounding areas with a special focus on 
              supporting individuals with developmental disabilities and their families.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-civitan-gold/5 to-civitan-blue/5 rounded-lg">
            <div className="bg-civitan-gold text-civitan-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-civitan-blue mb-4">Service Projects</h3>
            <p className="text-civitan-gray">
              From scholarship programs to community events, we organize meaningful 
              projects that make a real difference in people's lives.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-civitan-blue/5 to-civitan-gold/5 rounded-lg">
            <div className="bg-civitan-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-civitan-blue mb-4">Professional Network</h3>
            <p className="text-civitan-gray">
              Connect with like-minded professionals who balance career success 
              with meaningful community impact and civic responsibility.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-civitan-blue to-civitan-blue/90 text-white rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're interested in volunteering, becoming a member, or learning more about our work, 
            we'd love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#volunteer-form" 
              className="bg-civitan-gold text-civitan-blue px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors duration-300 inline-block"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#volunteer-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Volunteer Information
            </a>
            <a 
              href="https://duluthcivitanclub.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-civitan-blue transition-colors duration-300 inline-block"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
