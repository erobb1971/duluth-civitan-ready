
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const programs = [
  {
    title: "Scholarships",
    description: "Duluth Civitan provides scholarships to deserving students in Duluth, Georgia, helping them achieve their educational goals.",
    icon: "📚"
  },
  {
    title: "Special Olympics Support",
    description: "Duluth Civitan actively supports Special Olympics events providing volunteers and resources.",
    icon: "🏅"
  },
  {
    title: "Community Service Projects",
    description: "From food drives to community clean-ups, Duluth Civitan is actively involved in making Duluth, Georgia a better place.",
    icon: "🤝"
  },
  {
    title: "Fundraising Events",
    description: "Duluth Civitan organizes various fundraising events throughout the year to support our initiatives and community programs.",
    icon: "💰"
  }
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="relative -mt-32 py-16 z-30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 relative z-40"
            >
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
      </div>
    </section>
  );
};

export default ProgramsSection;
