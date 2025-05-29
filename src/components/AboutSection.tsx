
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
            <h3 className="text-4xl md:text-5xl font-bold text-civitan-blue mb-4">The Civitan Creed</h3>
            <div className="w-24 h-1 bg-civitan-gold mx-auto mb-6"></div>
            <p className="text-xl text-civitan-gray max-w-3xl mx-auto leading-relaxed">
              These timeless words guide our purpose and inspire our service to the community, 
              embodying the spirit of what it means to be a Civitan.
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50 rounded-3xl opacity-60"></div>
            <div className="absolute top-8 right-8 w-32 h-32 bg-civitan-gold/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-civitan-blue/10 rounded-full blur-xl"></div>
            
            {/* Content container */}
            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 lg:p-16">
              <div className="space-y-8">
                
                {/* Main creed statements */}
                <div className="space-y-6">
                  <div className="group">
                    <div className="bg-gradient-to-r from-civitan-blue/5 to-civitan-gold/5 p-6 rounded-2xl border-l-4 border-civitan-blue hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <p className="text-lg md:text-xl text-civitan-gray leading-relaxed">
                        <span className="text-civitan-blue font-bold text-xl md:text-2xl mr-2">I AM CIVITAN:</span>
                        as old as life, as young as the rainbow, as endless as time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="bg-gradient-to-r from-civitan-gold/5 to-civitan-blue/5 p-6 rounded-2xl border-l-4 border-civitan-gold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <p className="text-lg md:text-xl text-civitan-gray leading-relaxed">
                        <span className="text-civitan-blue font-bold text-xl md:text-2xl mr-2">MY HANDS</span>
                        do the work of the world and reach out in service to others.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="bg-gradient-to-r from-civitan-blue/5 to-civitan-gold/5 p-6 rounded-2xl border-l-4 border-civitan-blue hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <p className="text-lg md:text-xl text-civitan-gray leading-relaxed">
                        <span className="text-civitan-blue font-bold text-xl md:text-2xl mr-2">MY EARS</span>
                        hear the cry of children and the call throughout the world for peace, guidance, progress, and unity.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="bg-gradient-to-r from-civitan-gold/5 to-civitan-blue/5 p-6 rounded-2xl border-l-4 border-civitan-gold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <p className="text-lg md:text-xl text-civitan-gray leading-relaxed">
                        <span className="text-civitan-blue font-bold text-xl md:text-2xl mr-2">MY EYES</span>
                        search for others to join in the fellowship and service of Duluth Civitan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="bg-gradient-to-r from-civitan-blue/5 to-civitan-gold/5 p-6 rounded-2xl border-l-4 border-civitan-blue hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <p className="text-lg md:text-xl text-civitan-gray leading-relaxed">
                        <span className="text-civitan-blue font-bold text-xl md:text-2xl mr-2">MY MOUTH</span>
                        utters the call to daily duty and speaks prayers in every tongue.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="bg-gradient-to-r from-civitan-gold/5 to-civitan-blue/5 p-6 rounded-2xl border-l-4 border-civitan-gold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <p className="text-lg md:text-xl text-civitan-gray leading-relaxed">
                        <span className="text-civitan-blue font-bold text-xl md:text-2xl mr-2">MY MIND</span>
                        teaches me respect for law and the flag of my country.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="bg-gradient-to-r from-civitan-blue/5 to-civitan-gold/5 p-6 rounded-2xl border-l-4 border-civitan-blue hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <p className="text-lg md:text-xl text-civitan-gray leading-relaxed">
                        <span className="text-civitan-blue font-bold text-xl md:text-2xl mr-2">MY HEART</span>
                        beats for every friend, bleeds for every injury to humanity, and throbs with joy at every triumph of truth.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="bg-gradient-to-r from-civitan-gold/5 to-civitan-blue/5 p-6 rounded-2xl border-l-4 border-civitan-gold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <p className="text-lg md:text-xl text-civitan-gray leading-relaxed">
                        <span className="text-civitan-blue font-bold text-xl md:text-2xl mr-2">MY SOUL</span>
                        knows no fear but its own unworthiness.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="bg-gradient-to-r from-civitan-blue/5 to-civitan-gold/5 p-6 rounded-2xl border-l-4 border-civitan-blue hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <p className="text-lg md:text-xl text-civitan-gray leading-relaxed">
                        <span className="text-civitan-blue font-bold text-xl md:text-2xl mr-2">MY HOPE</span>
                        is for a better world through Duluth Civitan.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Closing statements with corrected grammar */}
                <div className="mt-12 pt-8 border-t border-civitan-gold/20">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="group text-center">
                      <div className="bg-gradient-to-br from-civitan-blue to-blue-700 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <h4 className="text-civitan-gold font-bold text-xl md:text-2xl mb-3">MY MOTTO</h4>
                        <p className="text-lg leading-relaxed">Builders of good citizenship.</p>
                      </div>
                    </div>
                    
                    <div className="group text-center">
                      <div className="bg-gradient-to-br from-civitan-gold to-amber-500 text-civitan-blue p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <h4 className="font-bold text-xl md:text-2xl mb-3">MY BELIEF</h4>
                        <p className="text-lg leading-relaxed">Do unto others as you would have them do unto you.</p>
                      </div>
                    </div>
                    
                    <div className="group text-center">
                      <div className="bg-gradient-to-br from-civitan-blue to-blue-700 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <h4 className="text-civitan-gold font-bold text-xl md:text-2xl mb-3">MY PLEDGE</h4>
                        <p className="text-lg leading-relaxed">To practice the Golden Rule and to build upon it a better and nobler citizenship.</p>
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
