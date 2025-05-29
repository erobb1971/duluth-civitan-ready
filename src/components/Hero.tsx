import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Mail, Users, Calendar, Shield, Link } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@duluthcivitanclub.org?subject=Membership%20Inquiry";
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real implementation, this would send data to a server
    // For now, we'll simulate sending an email by creating a mailto link
    const subject = encodeURIComponent("Membership");
    const body = encodeURIComponent(
      `New membership inquiry:\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterests: ${formData.interests}`
    );
    
    // Open email client with pre-filled information
    window.location.href = `mailto:info@duluthcivitanclub.org?subject=${subject}&body=${body}`;
    
    // Reset form and show success message
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interests: ''
      });
      setIsSubmitting(false);
      toast({
        title: "Information Request Sent",
        description: "Thank you for your interest. We'll be in touch soon!",
      });
    }, 1000);
  };

  return (
    <div className="relative">
      {/* Hero image with overlay */}
      <div className="relative">
        <div className="bg-[url('/lovable-uploads/c661b80b-0f36-491c-8501-278dc0b2f7c8.png')] bg-cover bg-center h-[800px] md:h-[900px]"></div>
        <div className="absolute inset-0 bg-[#ffffff40]"></div> {/* 25% opacity white overlay */}
      </div>

      {/* Content over the hero image */}
      <div className="container mx-auto px-4 absolute inset-0 z-20 flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-civitan-blue">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Make a <span className="text-civitan-gold">Real Difference</span> in Duluth, Georgia
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed max-w-xl">
                Join Duluth Civitan - a network of like-minded professionals who balance career success with meaningful community impact in Duluth, Georgia.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-civitan-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Expand Your Professional Network</h3>
                    <p className="text-civitan-blue/90">Connect with local leaders and professionals in Duluth, Georgia</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-civitan-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Flexible Commitment</h3>
                    <p className="text-civitan-blue/90">Designed for busy professionals with family responsibilities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-civitan-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Build Your Leadership Skills</h3>
                    <p className="text-civitan-blue/90">Enhance your resume while making a meaningful difference</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Button 
                  className="bg-civitan-gold text-civitan-blue hover:bg-white hover:text-civitan-blue text-lg px-8 py-6 h-auto"
                  onClick={() => setShowModal(true)}
                >
                  Learn More About Membership
                </Button>
                
                <Button 
                  className="bg-white text-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue text-lg px-8 py-6 h-auto"
                  onClick={() => window.open('https://duluthcivitanclub.org', '_blank')}
                >
                  <Link className="h-5 w-5 mr-2" />
                  Visit Our Website
                </Button>
              </div>
            </div>
            
            <div className="bg-white/98 p-8 rounded-lg shadow-xl">
              <div className="flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/2e31ada2-2131-47d1-ad50-613017a83c78.png" 
                  alt="We Are Civitan" 
                  className="max-w-full h-auto object-contain max-h-40"
                />
              </div>
            
              <h3 className="text-2xl font-bold text-civitan-blue mb-2 text-center">Join Duluth Civitan</h3>
              <p className="text-center text-gray-600 mb-6">Get information about upcoming events and membership opportunities with Duluth Civitan in Duluth, Georgia</p>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="bg-white"
                    required
                  />
                  <Input 
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="bg-white"
                    required
                  />
                </div>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="bg-white"
                  required
                />
                <Input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="bg-white"
                  required
                />
                <Textarea
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  placeholder="What interests you most about our community?"
                  className="bg-white"
                  rows={3}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue py-6 h-auto text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Request Information"}
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
              Join Duluth Civitan - Professionals Making an Impact in Duluth, Georgia
            </DialogTitle>
            <DialogDescription className="text-lg text-civitan-gray">
              Duluth Civitan connects career-focused professionals who want to leverage their skills for community impact while building valuable connections in Duluth, Georgia.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 text-civitan-gray">
            <div>
              <h3 className="text-xl font-semibold mb-4">Benefits designed for professionals like you:</h3>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Balance Career & Community</strong> – Flexible volunteer opportunities that respect your busy schedule</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-civitan-gold">•</span>
                  <span><strong>Expand Your Network</strong> – Connect with local business leaders, entrepreneurs, and professionals in Duluth, Georgia</span>
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
                We understand your time is valuable. Let's discuss how Duluth Civitan can align with your professional goals and community interests.
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
