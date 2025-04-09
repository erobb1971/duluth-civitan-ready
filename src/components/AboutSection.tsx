
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-civitan-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Duluth Civitan</h2>
          <div className="w-20 h-1 bg-civitan-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="mb-6">Duluth Civitan is dedicated to serving individual and community needs with an emphasis on helping people with developmental disabilities and providing scholarships to deserving students.</p>
            <p className="mb-6">As a proud member of Civitan International, we build good citizenship by providing a volunteer organization of clubs dedicated to serving individual and community needs with an emphasis on helping people with developmental disabilities.</p>
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Service to others</li>
              <li>Knowledge that leads to understanding</li>
              <li>Fellowship among members</li>
              <li>Community engagement</li>
              <li>Integrity in all we do</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Civitan members" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
            <p className="mb-4">Becoming a member of Duluth Civitan means joining a network of people who are making a real difference in our community.</p>
            <p>Whether you're looking to volunteer your time, develop leadership skills, or simply connect with like-minded individuals, Civitan offers opportunities for growth and service.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
