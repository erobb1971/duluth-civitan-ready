
import React from 'react';
import { Mail, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-civitan-blue text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-6">
          <a 
            href="mailto:admin@duluthcivitan.org"
            className="text-white hover:text-civitan-gold transition-colors"
            aria-label="Email us"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://www.facebook.com/DuluthCivitan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-civitan-gold transition-colors"
            aria-label="Visit our Facebook page"
          >
            <Facebook size={24} />
          </a>
        </div>
        <div className="text-center mt-4">
          <p>© {new Date().getFullYear()} Duluth Civitan Club</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
