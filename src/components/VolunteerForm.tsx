
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const volunteerFormSchema = z.object({
  firstName: z.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name can only contain letters, spaces, hyphens, and apostrophes"),
  lastName: z.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[\+]?[\d\s\-\(\)\.]+$/, "Please enter a valid phone number")
    .transform((val) => val.replace(/\D/g, ''))
    .refine((val) => val.length >= 10, "Phone number must have at least 10 digits"),
  interests: z.string()
    .min(10, "Please tell us a bit more about your interests (at least 10 characters)")
    .max(500, "Interests must be less than 500 characters")
    .optional(),
});

type VolunteerFormData = z.infer<typeof volunteerFormSchema>;

const VolunteerForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      interests: '',
    },
    mode: 'onBlur', // Validate on blur for better UX
  });

  const onSubmit = async (data: VolunteerFormData) => {
    setIsSubmitting(true);
    
    try {
      // Store the volunteer application in Supabase
      const { error } = await supabase
        .from('volunteer_applications')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          interests: data.interests || null,
        });

      if (error) {
        console.error('Error storing volunteer application:', error);
        throw error;
      }

      // Also send email for immediate notification
      const subject = encodeURIComponent("New Volunteer Application");
      const body = encodeURIComponent(
        `New volunteer inquiry:\n\nName: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone}\nInterests: ${data.interests || 'Not specified'}`
      );
      
      window.open(`mailto:info@duluthcivitanclub.org?subject=${subject}&body=${body}`, '_blank');

      // Show success message and reset form
      setIsSubmitted(true);
      form.reset();
      
      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for your interest in volunteering with Duluth Civitan. We've saved your information and will be in touch soon!",
        duration: 6000,
      });

      // Reset submitted state after a delay
      setTimeout(() => setIsSubmitted(false), 3000);

    } catch (error) {
      console.error('Error submitting volunteer application:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your application. Please try again or contact us directly.",
        variant: "destructive",
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/98 p-8 rounded-lg shadow-xl text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/2e31ada2-2131-47d1-ad50-613017a83c78.png" 
            alt="We Are Civitan" 
            className="max-w-full h-auto object-contain max-h-40"
          />
        </div>
        <div className="space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-civitan-blue">Thank You!</h3>
          <p className="text-civitan-gray">Your volunteer application has been submitted successfully. We'll be in touch soon!</p>
        </div>
      </div>
    );
  }

  return (
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
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-civitan-blue font-medium">First Name *</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder="Enter your first name"
                      className="bg-white border-gray-300 focus:border-civitan-blue focus:ring-civitan-blue"
                      aria-describedby="firstName-error"
                    />
                  </FormControl>
                  <FormMessage id="firstName-error" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-civitan-blue font-medium">Last Name *</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder="Enter your last name"
                      className="bg-white border-gray-300 focus:border-civitan-blue focus:ring-civitan-blue"
                      aria-describedby="lastName-error"
                    />
                  </FormControl>
                  <FormMessage id="lastName-error" />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-civitan-blue font-medium">Email Address *</FormLabel>
                <FormControl>
                  <Input 
                    {...field}
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-white border-gray-300 focus:border-civitan-blue focus:ring-civitan-blue"
                    aria-describedby="email-error"
                  />
                </FormControl>
                <FormMessage id="email-error" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-civitan-blue font-medium">Phone Number *</FormLabel>
                <FormControl>
                  <Input 
                    {...field}
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-white border-gray-300 focus:border-civitan-blue focus:ring-civitan-blue"
                    aria-describedby="phone-error"
                    onChange={(e) => {
                      const formatted = formatPhoneNumber(e.target.value);
                      field.onChange(formatted);
                    }}
                  />
                </FormControl>
                <FormMessage id="phone-error" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="interests"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-civitan-blue font-medium">Volunteer Interests</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="What volunteer opportunities interest you most? (e.g., community events, fundraising, helping people with developmental disabilities, etc.)"
                    className="bg-white border-gray-300 focus:border-civitan-blue focus:ring-civitan-blue min-h-[100px]"
                    rows={4}
                    aria-describedby="interests-error"
                  />
                </FormControl>
                <FormMessage id="interests-error" />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue py-6 h-auto text-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting Application...
              </>
            ) : (
              "Request Volunteer Information"
            )}
          </Button>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            * Required fields. By submitting, you agree to receive communications from us. You can unsubscribe anytime.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default VolunteerForm;
