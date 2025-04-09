
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full z-50 sticky top-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-civitan-blue">Duluth Civitan</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="font-medium">About</a>
            <a href="#programs" className="font-medium">Programs</a>
            <a href="#events" className="font-medium">Events</a>
            <a href="#join" className="font-medium">Join Us</a>
            <Button className="bg-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue">Donate</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-civitan-blue hover:text-civitan-gold focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-2">
            <a href="#about" className="block px-3 py-2 text-base font-medium">About</a>
            <a href="#programs" className="block px-3 py-2 text-base font-medium">Programs</a>
            <a href="#events" className="block px-3 py-2 text-base font-medium">Events</a>
            <a href="#join" className="block px-3 py-2 text-base font-medium">Join Us</a>
            <Button className="w-full mt-2 bg-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue">Donate</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
