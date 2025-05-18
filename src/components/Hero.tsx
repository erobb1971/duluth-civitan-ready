
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Mail, Users, Calendar, Shield } from "lucide-react";

const Hero = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:admin@duluthcivitanclub.org";
  };

  return (
    <div className="relative bg-gradient-to-r from-civitan-blue to-civitan-blue/80">
      <div className="bg-[url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center bg-blend-overlay bg-black/30 h-[800px] md:h-[900px]"></div>
      <div className="container mx-auto px-4 absolute inset-0 z-20 flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Make a <span className="text-civitan-gold">Real Difference</span> in Your Community
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed max-w-xl">
                Join a network of like-minded professionals who balance career success with meaningful community impact.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-civitan-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Expand Your Professional Network</h3>
                    <p className="text-white/80">Connect with local leaders and professionals in your field</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-civitan-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Flexible Commitment</h3>
                    <p className="text-white/80">Designed for busy professionals with family responsibilities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-civitan-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Build Your Leadership Skills</h3>
                    <p className="text-white/80">Enhance your resume while making a meaningful difference</p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="mt-10 bg-civitan-gold text-civitan-blue hover:bg-white hover:text-civitan-blue text-lg px-8 py-6 h-auto"
                onClick={() => setShowModal(true)}
              >
                Learn More About Membership
              </Button>
            </div>
            
            <div className="bg-white/98 p-8 rounded-lg shadow-xl">
              <div className="flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/2e31ada2-2131-47d1-ad50-613017a83c78.png" 
                  alt="We Are Civitan" 
                  className="max-w-full h-auto object-contain max-h-40"
                />
              </div>
            
              <h3 className="text-2xl font-bold text-civitan-blue mb-2 text-center">Join Our Community</h3>
              <p className="text-center text-gray-600 mb-6">Get information about upcoming events and membership opportunities</p>
              
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
                  placeholder="What interests you most about our community?"
                  className="bg-white"
                  rows={3}
                />
                <Button type="submit" className="w-full bg-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue py-6 h-auto text-lg font-semibold">
                  Request Information
                </Button>
                <p className="text-xs text-center text-gray-500 mt-2">
                  By submitting, you agree to receive communications from us. You can unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-civitan-blue mb-4">
              Join Our Community of Professionals Making an Impact
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 text-civitan-gray">
            <p className="text-lg">
              The Duluth Civitan Club connects career-focused professionals who want to leverage their skills for community impact while building valuable connections.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-4">Benefits designed for professionals like you:</h3>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Balance Career & Community</strong> – Flexible volunteer opportunities that respect your busy schedule</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Expand Your Network</strong> – Connect with local business leaders, entrepreneurs, and professionals</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Enhance Your Resume</strong> – Build leadership experience through board positions and project management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Twice-Monthly Lunches</strong> – Conveniently scheduled meetings that fit into your workday</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Family-Friendly Events</strong> – Opportunities that welcome your spouse and children</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Professional Development</strong> – Learn new skills while giving back to the community</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Make Connections That Matter</strong> – Build relationships that extend beyond networking events</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Ready to take the next step?</h3>
              <p>
                We understand your time is valuable. Let's discuss how Civitan can align with your professional goals and community interests.
              </p>
              <Button 
                onClick={handleEmailClick}
                className="bg-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
