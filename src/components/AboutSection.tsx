
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
        
        {/* Enhanced Civitan Creeds Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-civitan-blue mb-4">Civitan Creeds</h3>
            <div className="w-24 h-1 bg-civitan-gold mx-auto mb-6"></div>
            <p className="text-xl text-civitan-gray max-w-2xl mx-auto">
              The timeless words that guide our purpose and inspire our service to the community
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-civitan-blue via-blue-800 to-blue-900"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-civitan-gold opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full translate-y-24 -translate-x-24"></div>
            
            {/* Content */}
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-4xl mx-auto">
                <div className="grid gap-6 text-white">
                  <div className="group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105">
                    <p className="text-lg md:text-xl leading-relaxed">
                      <span className="text-civitan-gold font-bold text-xl md:text-2xl">I AM CIVITAN:</span> 
                      <span className="ml-2">as old as life, as young as the rainbow, as endless as time.</span>
                    </p>
                  </div>
                  
                  <div className="group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105">
                    <p className="text-lg md:text-xl leading-relaxed">
                      <span className="text-civitan-gold font-bold text-xl md:text-2xl">MY HANDS</span> 
                      <span className="ml-2">do the work of the world and reach out in service to others.</span>
                    </p>
                  </div>
                  
                  <div className="group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105">
                    <p className="text-lg md:text-xl leading-relaxed">
                      <span className="text-civitan-gold font-bold text-xl md:text-2xl">MY EARS</span> 
                      <span className="ml-2">hear the cry of children and the call throughout the world for peace, guidance, progress, and unity.</span>
                    </p>
                  </div>
                  
                  <div className="group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105">
                    <p className="text-lg md:text-xl leading-relaxed">
                      <span className="text-civitan-gold font-bold text-xl md:text-2xl">MY EYES</span> 
                      <span className="ml-2">search for others to join in the fellowship and service of Duluth Civitan.</span>
                    </p>
                  </div>
                  
                  <div className="group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105">
                    <p className="text-lg md:text-xl leading-relaxed">
                      <span className="text-civitan-gold font-bold text-xl md:text-2xl">MY MOUTH</span> 
                      <span className="ml-2">utters the call to daily duty and speaks prayers in every tongue.</span>
                    </p>
                  </div>
                  
                  <div className="group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105">
                    <p className="text-lg md:text-xl leading-relaxed">
                      <span className="text-civitan-gold font-bold text-xl md:text-2xl">MY MIND</span> 
                      <span className="ml-2">teaches me respect for law and the flag of my country.</span>
                    </p>
                  </div>
                  
                  <div className="group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105">
                    <p className="text-lg md:text-xl leading-relaxed">
                      <span className="text-civitan-gold font-bold text-xl md:text-2xl">MY HEART</span> 
                      <span className="ml-2">beats for every friend, bleeds for every injury to humanity, and throbs with joy at every triumph of truth.</span>
                    </p>
                  </div>
                  
                  <div className="group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105">
                    <p className="text-lg md:text-xl leading-relaxed">
                      <span className="text-civitan-gold font-bold text-xl md:text-2xl">MY SOUL</span> 
                      <span className="ml-2">knows no fear but its own unworthiness.</span>
                    </p>
                  </div>
                  
                  <div className="group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105">
                    <p className="text-lg md:text-xl leading-relaxed">
                      <span className="text-civitan-gold font-bold text-xl md:text-2xl">MY HOPE</span> 
                      <span className="ml-2">is for a better world through Duluth Civitan.</span>
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-civitan-gold/30">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105 text-center">
                        <p className="text-lg md:text-xl leading-relaxed">
                          <span className="text-civitan-gold font-bold text-xl md:text-2xl block mb-2">MY MOTTO:</span> 
                          <span>builders of good citizenship.</span>
                        </p>
                      </div>
                      
                      <div className="group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105 text-center">
                        <p className="text-lg md:text-xl leading-relaxed">
                          <span className="text-civitan-gold font-bold text-xl md:text-2xl block mb-2">MY BELIEF:</span> 
                          <span>do unto others as you would have them do unto you.</span>
                        </p>
                      </div>
                      
                      <div className="group hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105 text-center">
                        <p className="text-lg md:text-xl leading-relaxed">
                          <span className="text-civitan-gold font-bold text-xl md:text-2xl block mb-2">MY PLEDGE:</span> 
                          <span>to practice the Golden Rule and to build upon it a better and nobler citizenship.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
