
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-civitan-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Duluth Civitan Club</h3>
            <p className="mb-2">Serving the Duluth community since [Year]</p>
            <p className="mb-2">Duluth, GA</p>
            <p>Email: contact@duluthcivitan.org</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white hover:text-civitan-gold">About Us</a></li>
              <li><a href="#programs" className="text-white hover:text-civitan-gold">Our Programs</a></li>
              <li><a href="#events" className="text-white hover:text-civitan-gold">Events</a></li>
              <li><a href="#join" className="text-white hover:text-civitan-gold">Join Us</a></li>
              <li><a href="#donate" className="text-white hover:text-civitan-gold">Donate</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-civitan-gold">Facebook</a>
              <a href="#" className="text-white hover:text-civitan-gold">Twitter</a>
              <a href="#" className="text-white hover:text-civitan-gold">Instagram</a>
            </div>
            <div className="mt-4">
              <p>Join our newsletter:</p>
              <div className="mt-2 flex">
                <input
                  type="email"
                  className="px-3 py-2 text-black rounded-l-md w-full"
                  placeholder="Your email"
                />
                <button className="bg-civitan-gold text-civitan-blue px-4 py-2 rounded-r-md hover:bg-opacity-90">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-civitan-gold mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} Duluth Civitan Club. All rights reserved.</p>
          <p className="mt-2 text-sm">Civitan International is a global organization dedicated to serving individual and community needs with an emphasis on helping people with developmental disabilities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
