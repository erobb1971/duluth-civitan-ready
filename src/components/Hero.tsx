
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Mail, Users, Calendar, Shield, Link } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [membershipFormData, setMembershipFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    occupation: '',
    employer: '',
    workPhone: '',
    emergencyContact: '',
    emergencyPhone: '',
    interests: '',
    volunteerExperience: '',
    availability: '',
    references: ''
  });
  const [volunteerFormData, setVolunteerFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interests: ''
  });
  const [isMembershipSubmitting, setIsMembershipSubmitting] = useState(false);
  const [isVolunteerSubmitting, setIsVolunteerSubmitting] = useState(false);
  const { toast } = useToast();

  const handleMembershipChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMembershipFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVolunteerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setVolunteerFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMembershipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMembershipSubmitting(true);
    
    const subject = encodeURIComponent("Membership Application");
    const body = encodeURIComponent(
      `New membership application:\n\nPersonal Information:\nName: ${membershipFormData.firstName} ${membershipFormData.lastName}\nEmail: ${membershipFormData.email}\nPhone: ${membershipFormData.phone}\nAddress: ${membershipFormData.address}\nCity: ${membershipFormData.city}\nState: ${membershipFormData.state}\nZip: ${membershipFormData.zipCode}\n\nProfessional Information:\nOccupation: ${membershipFormData.occupation}\nEmployer: ${membershipFormData.employer}\nWork Phone: ${membershipFormData.workPhone}\n\nEmergency Contact:\nName: ${membershipFormData.emergencyContact}\nPhone: ${membershipFormData.emergencyPhone}\n\nInterests & Experience:\nInterests: ${membershipFormData.interests}\nVolunteer Experience: ${membershipFormData.volunteerExperience}\nAvailability: ${membershipFormData.availability}\nReferences: ${membershipFormData.references}`
    );
    
    window.location.href = `mailto:info@duluthcivitanclub.org?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setMembershipFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        occupation: '',
        employer: '',
        workPhone: '',
        emergencyContact: '',
        emergencyPhone: '',
        interests: '',
        volunteerExperience: '',
        availability: '',
        references: ''
      });
      setIsMembershipSubmitting(false);
      setShowMembershipModal(false);
      toast({
        title: "Membership Application Sent",
        description: "Thank you for your interest in joining Duluth Civitan. We'll be in touch soon!",
      });
    }, 1000);
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVolunteerSubmitting(true);
    
    const subject = encodeURIComponent("I am interested in becoming a Volunteer");
    const body = encodeURIComponent(
      `New volunteer inquiry:\n\nName: ${volunteerFormData.firstName} ${volunteerFormData.lastName}\nEmail: ${volunteerFormData.email}\nPhone: ${volunteerFormData.phone}\nInterests: ${volunteerFormData.interests}`
    );
    
    window.location.href = `mailto:info@duluthcivitanclub.org?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setVolunteerFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interests: ''
      });
      setIsVolunteerSubmitting(false);
      toast({
        title: "Volunteer Information Request Sent",
        description: "Thank you for your interest in volunteering with Duluth Civitan. We'll be in touch soon!",
      });
    }, 1000);
  };

  return (
    <div className="relative">
      {/* Hero image with overlay */}
      <div className="relative">
        <div className="bg-[url('/lovable-uploads/c661b80b-0f36-491c-8501-278dc0b2f7c8.png')] bg-cover bg-center h-[800px] md:h-[900px]"></div>
        <div className="absolute inset-0 bg-[#ffffff40]"></div>
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
                  onClick={() => setShowMembershipModal(true)}
                >
                  Membership Application
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
            
              <h3 className="text-2xl font-bold text-civitan-blue mb-2 text-center">Volunteer with Duluth Civitan</h3>
              <p className="text-center text-gray-600 mb-6">Get information about volunteer opportunities with Duluth Civitan in Duluth, Georgia</p>
              
              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    type="text"
                    name="firstName"
                    value={volunteerFormData.firstName}
                    onChange={handleVolunteerChange}
                    placeholder="First Name"
                    className="bg-white"
                    required
                  />
                  <Input 
                    type="text"
                    name="lastName"
                    value={volunteerFormData.lastName}
                    onChange={handleVolunteerChange}
                    placeholder="Last Name"
                    className="bg-white"
                    required
                  />
                </div>
                <Input 
                  type="email"
                  name="email"
                  value={volunteerFormData.email}
                  onChange={handleVolunteerChange}
                  placeholder="Email Address"
                  className="bg-white"
                  required
                />
                <Input 
                  type="tel"
                  name="phone"
                  value={volunteerFormData.phone}
                  onChange={handleVolunteerChange}
                  placeholder="Phone Number"
                  className="bg-white"
                  required
                />
                <Textarea
                  name="interests"
                  value={volunteerFormData.interests}
                  onChange={handleVolunteerChange}
                  placeholder="What volunteer opportunities interest you most?"
                  className="bg-white"
                  rows={3}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue py-6 h-auto text-lg font-semibold"
                  disabled={isVolunteerSubmitting}
                >
                  {isVolunteerSubmitting ? "Sending..." : "Request Volunteer Information"}
                </Button>
                <p className="text-xs text-center text-gray-500 mt-2">
                  By submitting, you agree to receive communications from us. You can unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Application Modal */}
      <Dialog open={showMembershipModal} onOpenChange={setShowMembershipModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-civitan-blue mb-4">
              Duluth Civitan Membership Application
            </DialogTitle>
            <DialogDescription className="text-lg text-civitan-gray">
              Join a community of professionals making a difference in Duluth, Georgia. Please fill out this application to begin your journey with Duluth Civitan.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleMembershipSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-civitan-blue border-b border-civitan-gold pb-2">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="firstName"
                  value={membershipFormData.firstName}
                  onChange={handleMembershipChange}
                  placeholder="First Name *"
                  required
                />
                <Input
                  type="text"
                  name="lastName"
                  value={membershipFormData.lastName}
                  onChange={handleMembershipChange}
                  placeholder="Last Name *"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  name="email"
                  value={membershipFormData.email}
                  onChange={handleMembershipChange}
                  placeholder="Email Address *"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  value={membershipFormData.phone}
                  onChange={handleMembershipChange}
                  placeholder="Phone Number *"
                  required
                />
              </div>
              <Input
                type="text"
                name="address"
                value={membershipFormData.address}
                onChange={handleMembershipChange}
                placeholder="Street Address *"
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  type="text"
                  name="city"
                  value={membershipFormData.city}
                  onChange={handleMembershipChange}
                  placeholder="City *"
                  required
                />
                <Input
                  type="text"
                  name="state"
                  value={membershipFormData.state}
                  onChange={handleMembershipChange}
                  placeholder="State *"
                  required
                />
                <Input
                  type="text"
                  name="zipCode"
                  value={membershipFormData.zipCode}
                  onChange={handleMembershipChange}
                  placeholder="Zip Code *"
                  required
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-civitan-blue border-b border-civitan-gold pb-2">Professional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="occupation"
                  value={membershipFormData.occupation}
                  onChange={handleMembershipChange}
                  placeholder="Occupation/Title"
                />
                <Input
                  type="text"
                  name="employer"
                  value={membershipFormData.employer}
                  onChange={handleMembershipChange}
                  placeholder="Employer/Company"
                />
              </div>
              <Input
                type="tel"
                name="workPhone"
                value={membershipFormData.workPhone}
                onChange={handleMembershipChange}
                placeholder="Work Phone Number"
              />
            </div>

            {/* Emergency Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-civitan-blue border-b border-civitan-gold pb-2">Emergency Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="emergencyContact"
                  value={membershipFormData.emergencyContact}
                  onChange={handleMembershipChange}
                  placeholder="Emergency Contact Name"
                />
                <Input
                  type="tel"
                  name="emergencyPhone"
                  value={membershipFormData.emergencyPhone}
                  onChange={handleMembershipChange}
                  placeholder="Emergency Contact Phone"
                />
              </div>
            </div>

            {/* Interests & Experience */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-civitan-blue border-b border-civitan-gold pb-2">Interests & Experience</h3>
              <Textarea
                name="interests"
                value={membershipFormData.interests}
                onChange={handleMembershipChange}
                placeholder="What interests you most about Duluth Civitan? What causes are you passionate about?"
                rows={3}
              />
              <Textarea
                name="volunteerExperience"
                value={membershipFormData.volunteerExperience}
                onChange={handleMembershipChange}
                placeholder="Previous volunteer experience (organizations, roles, etc.)"
                rows={3}
              />
              <Textarea
                name="availability"
                value={membershipFormData.availability}
                onChange={handleMembershipChange}
                placeholder="What is your availability for meetings and volunteer activities?"
                rows={2}
              />
              <Textarea
                name="references"
                value={membershipFormData.references}
                onChange={handleMembershipChange}
                placeholder="Professional or personal references (names and contact information)"
                rows={3}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                type="submit" 
                className="flex-1 bg-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue py-6 h-auto text-lg font-semibold"
                disabled={isMembershipSubmitting}
              >
                {isMembershipSubmitting ? "Submitting Application..." : "Submit Membership Application"}
              </Button>
              <Button 
                type="button" 
                variant="outline"
                className="flex-1 py-6 h-auto text-lg"
                onClick={() => setShowMembershipModal(false)}
              >
                Cancel
              </Button>
            </div>
            <p className="text-xs text-center text-gray-500 mt-4">
              * Required fields. By submitting this application, you agree to receive communications from Duluth Civitan regarding your membership application and future club activities.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
