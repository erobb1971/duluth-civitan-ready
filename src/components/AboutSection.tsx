
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-civitan-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Duluth Civitan in Duluth, Georgia</h2>
          <div className="w-20 h-1 bg-civitan-gold mx-auto"></div>
        </div>
        
        {/* Mission Statement - Made Prominent */}
        <div className="bg-civitan-blue text-white p-8 rounded-lg shadow-lg mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-civitan-gold">Our Mission</h3>
          <p className="text-xl md:text-2xl leading-relaxed">
            Duluth Civitan's mission is to build good citizenship by dedicated to serving individual and community needs, with an emphasis on helping people with developmental disabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Values</h3>
            <p className="mb-6 text-lg">These are the values that make the heart of Duluth Civitan:</p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-civitan-gold pl-4">
                <h4 className="text-xl font-semibold text-civitan-blue">Service</h4>
                <p>Selflessly serving individuals in our communities</p>
              </div>
              
              <div className="border-l-4 border-civitan-gold pl-4">
                <h4 className="text-xl font-semibold text-civitan-blue">Inclusion</h4>
                <p>Giving everyone a seat at the table</p>
              </div>
              
              <div className="border-l-4 border-civitan-gold pl-4">
                <h4 className="text-xl font-semibold text-civitan-blue">Respect</h4>
                <p>Treating all people with the respect and dignity they deserve</p>
              </div>
              
              <div className="border-l-4 border-civitan-gold pl-4">
                <h4 className="text-xl font-semibold text-civitan-blue">Fellowship</h4>
                <p>Providing a place of belonging and kinship to neighbors and strangers alike</p>
              </div>
              
              <div className="border-l-4 border-civitan-gold pl-4">
                <h4 className="text-xl font-semibold text-civitan-blue">Courage</h4>
                <p>Having the confidence and conviction to stand up for what we believe in</p>
              </div>
              
              <div className="border-l-4 border-civitan-gold pl-4">
                <h4 className="text-xl font-semibold text-civitan-blue">Leadership</h4>
                <p>Embracing our knowledge to step up and lead within our communities</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <img 
                src="/lovable-uploads/4ac40b1c-f49e-4eaf-b92c-748ef8614850.png" 
                alt="Duluth Civitan members" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
            <p className="mb-4">Becoming a member of Duluth Civitan in Duluth, Georgia means joining a network of people who are making a real difference in our community.</p>
            <p>Whether you're looking to volunteer your time, develop leadership skills, or simply connect with like-minded individuals, Duluth Civitan offers opportunities for growth and service.</p>
          </div>
        </div>
        
        {/* Civitan Creeds Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Civitan Creeds</h3>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="prose prose-lg max-w-none text-civitan-blue">
              <p className="text-lg leading-relaxed mb-4">
                <strong>I AM CIVITAN:</strong> as old as life, as young as the rainbow, as endless as time.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>MY HANDS</strong> do the work of the world and reach out in service to others.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>MY EARS</strong> hear the cry of children and the call throughout the world for peace, guidance, progress, and unity.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>MY EYES</strong> search for others to join in the fellowship and service of Duluth Civitan.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>MY MOUTH</strong> utters the call to daily duty and speaks prayers in every tongue.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>MY MIND</strong> teaches me respect for law and the flag of my country.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>MY HEART</strong> beats for every friend, bleeds for every injury to humanity, and throbs with joy at every triumph of truth.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>MY SOUL</strong> knows no fear but its own unworthiness.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>MY HOPE</strong> is for a better world through Duluth Civitan.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>MY MOTTO:</strong> builders of good citizenship.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>MY BELIEF:</strong> do unto others as you would have them do unto you.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>MY PLEDGE:</strong> to practice the Golden Rule and to build upon it a better and nobler citizenship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
