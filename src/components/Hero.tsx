
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Mail } from "lucide-react";

const Hero = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:admin@duluthcivitanclub.org";
  };

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
              <Button 
                className="mt-6 bg-civitan-gold text-civitan-blue hover:bg-white hover:text-civitan-blue"
                onClick={() => setShowModal(true)}
              >
                Learn More About Membership
              </Button>
            </div>

            <div className="bg-white/95 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-civitan-blue mb-6">Membership Application</h3>
              
              {/* New image centered above the form */}
              <div className="flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/2e31ada2-2131-47d1-ad50-613017a83c78.png" 
                  alt="We Are Civitan" 
                  className="max-w-full h-auto object-contain px-4 py-2 max-h-64"
                />
              </div>

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

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-civitan-blue mb-4">
              Make a Real Difference in Gwinnett County
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 text-civitan-gray">
            <p className="text-lg">
              Looking to get more involved in your community? The Duluth Civitan Club connects passionate people who want to serve, lead, and make a lasting impact—right here in Gwinnett County.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-4">Here's why you should consider joining:</h3>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Make a Difference Locally</strong> – Help improve the lives of individuals with disabilities through real, hands-on work.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Join a Global Mission</strong> – Be part of an international service movement with deep local roots.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Support the Community You Live In</strong> – Focus your energy where it counts most: Duluth and the greater Gwinnett area.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Meet Like-Minded People</strong> – Build real relationships with neighbors, mentors, and leaders.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Get Involved—Your Way</strong> – Join us for casual lunch meetings twice a month—no pressure, just purpose.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Serve with Impact</strong> – Volunteer at places like Driving Magic and events that change lives.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Promote Inclusion</strong> – Help champion equity and accessibility in our community.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Back Local Nonprofits</strong> – Collaborate with organizations doing important, on-the-ground work.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Grow as a Leader</strong> – Take part in community projects that sharpen your skills and confidence.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Give Back—and Feel Good Doing It</strong> – Be part of something meaningful and rewarding.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Want to make your time count?</h3>
              <p>
                Join the Duluth Civitan Club and see how a few hours a month can change lives—including your own.
              </p>
              <p className="mb-6">
                Let's talk. Reach out today.
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
