
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const programs = [
  {
    title: "Scholarships",
    description: "We provide scholarships to deserving students in the community, helping them achieve their educational goals.",
    icon: "📚"
  },
  {
    title: "Special Olympics Support",
    description: "We actively support Special Olympics events providing volunteers and resources.",
    icon: "🏅"
  },
  {
    title: "Community Service Projects",
    description: "From food drives to community clean-ups, we're actively involved in making Duluth a better place.",
    icon: "🤝"
  },
  {
    title: "Fundraising Events",
    description: "We organize various fundraising events throughout the year to support our initiatives and community programs.",
    icon: "💰"
  }
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
          <div className="w-20 h-1 bg-civitan-gold mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">We're dedicated to making a positive impact in our community through various programs and initiatives.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="text-4xl mb-4">{program.icon}</div>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">{program.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-block">Get Involved</a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
