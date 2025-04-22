import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    console.log('Login button clicked');
  };

  return (
    <nav className="bg-white shadow-md w-full z-50 sticky top-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              onClick={() => setShowAboutModal(true)}
              className="font-medium hover:text-civitan-gold"
            >
              Learn More About Civitan
            </Button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#history" className="font-medium">History</a>
            <a href="#programs" className="font-medium">Programs</a>
            <Button className="bg-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue">Donate</Button>
            <Button 
              onClick={handleLoginClick}
              className="bg-civitan-blue text-white hover:bg-civitan-gold hover:text-civitan-blue"
            >
              <LogIn size={16} className="mr-2" /> Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              onClick={handleLoginClick}
              variant="ghost"
              size="icon"
              className="text-civitan-blue hover:text-civitan-gold"
            >
              <LogIn size={24} />
            </Button>
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
            <Button 
              variant="ghost"
              onClick={() => setShowAboutModal(true)}
              className="w-full text-left font-medium"
            >
              Learn More About Civitan
            </Button>
            <a href="#history" className="block px-3 py-2 text-base font-medium">History</a>
            <a href="#programs" className="block px-3 py-2 text-base font-medium">Programs</a>
            <Button className="w-full mt-2 bg-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue">Donate</Button>
            <Button 
              onClick={handleLoginClick}
              className="w-full mt-2 bg-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue"
            >
              <LogIn size={16} className="mr-2" /> Login
            </Button>
          </div>
        </div>
      )}

      {/* About Modal */}
      <Dialog open={showAboutModal} onOpenChange={setShowAboutModal}>
        <DialogContent className="sm:max-w-[600px] p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-civitan-blue mb-6">About the Duluth Civitan Club</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Founded in 2003 as a proud chapter of Civitan International (est. 1917), the Duluth Civitan Club unites neighbors who know that serving others sparks real community change. From barn‑blitz days at Driving Magic's therapeutic equine farm to co‑hosting Gwinnett's Race for Autism & Fall Festival, our members dedicate time and energy to empower individuals with intellectual and developmental disabilities—and to uplift Duluth at every turn.
                </p>
                <p>
                  Meet us over lunch on the 2nd and 4th Mondays each month, grab a "buddy" mentor, and discover how a few hours of volunteering can become a lifetime of impact. We're also eager to welcome new members from across Gwinnett County—join us and help expand our reach to make life better for even more neighbors.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
