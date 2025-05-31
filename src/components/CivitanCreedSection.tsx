
import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';

interface CreedPrinciple {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
}

const creedPrinciples: CreedPrinciple[] = [
  {
    id: 1,
    title: "Build Good Citizenship",
    shortDescription: "Promote civic responsibility and community engagement",
    fullDescription: "We strive to build good citizenship by encouraging active participation in civic life, promoting education, and fostering responsible citizenship among all members of society.",
    icon: "🏛️"
  },
  {
    id: 2,
    title: "Enjoy Life",
    shortDescription: "Find joy and fulfillment in service to others",
    fullDescription: "We believe that true happiness comes from serving others and making a positive difference in our communities while maintaining a positive outlook on life.",
    icon: "😊"
  },
  {
    id: 3,
    title: "Work for World Peace",
    shortDescription: "Promote understanding and harmony across all communities",
    fullDescription: "Through our local actions and global connections, we work toward a world where understanding, cooperation, and peace prevail over conflict and division.",
    icon: "🌍"
  },
  {
    id: 4,
    title: "Live the Golden Rule",
    shortDescription: "Treat others as we would like to be treated",
    fullDescription: "The foundation of all our service - treating every person with dignity, respect, and compassion regardless of their abilities or circumstances.",
    icon: "⭐"
  },
  {
    id: 5,
    title: "Promote Justice",
    shortDescription: "Champion fairness and equal opportunities for all",
    fullDescription: "We advocate for justice, fairness, and equal opportunities regardless of ability, background, or circumstances. Everyone deserves a chance to succeed and be valued.",
    icon: "⚖️"
  },
  {
    id: 6,
    title: "Have Faith in Democracy",
    shortDescription: "Support democratic principles and civic participation",
    fullDescription: "We believe in the power of democratic institutions and encourage active participation in the democratic process to create positive change in our communities.",
    icon: "🗳️"
  },
  {
    id: 7,
    title: "Maintain an Optimistic Attitude",
    shortDescription: "Approach challenges with hope and determination",
    fullDescription: "We face challenges with hope, determination, and the belief that positive change is possible when we work together toward common goals.",
    icon: "🌟"
  },
  {
    id: 8,
    title: "Work for Equal Rights",
    shortDescription: "Ensure equal opportunities for people with disabilities",
    fullDescription: "We are committed to ensuring that all individuals, especially those with developmental disabilities, have equal access to opportunities, services, and full participation in community life.",
    icon: "🤝"
  },
  {
    id: 9,
    title: "Do Unto Others",
    shortDescription: "Practice the golden rule in all our interactions",
    fullDescription: "We commit to treating every person with the same kindness, respect, and consideration that we would want for ourselves and our loved ones.",
    icon: "💝"
  },
  {
    id: 10,
    title: "Help the Needy",
    shortDescription: "Serve those who need our support most",
    fullDescription: "We dedicate ourselves to identifying and serving those in our community who need support, particularly individuals with developmental disabilities and their families.",
    icon: "🤲"
  },
  {
    id: 11,
    title: "Eliminate Prejudice",
    shortDescription: "Promote understanding and acceptance of all people",
    fullDescription: "We work to eliminate prejudice and discrimination by promoting understanding, acceptance, and inclusion of all people, regardless of their differences.",
    icon: "🌈"
  },
  {
    id: 12,
    title: "Practice Tolerance",
    shortDescription: "Embrace diversity and respect different perspectives",
    fullDescription: "We practice tolerance by embracing diversity, respecting different perspectives, and creating inclusive environments where everyone feels valued and welcomed.",
    icon: "🕊️"
  }
];

const CivitanCreedSection = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (id: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const isFlipped = (id: number) => flippedCards.has(id);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-civitan-blue/5 via-white to-civitan-gold/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-civitan-blue mb-4 md:mb-6">
            The Civitan Creed
          </h2>
          <p className="text-lg md:text-xl text-civitan-gray max-w-3xl mx-auto leading-relaxed">
            These twelve principles guide everything we do at Duluth Civitan. 
            Click each card to discover how we live these values in our community service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {creedPrinciples.map((principle) => (
            <div 
              key={principle.id} 
              className="h-64 md:h-72 lg:h-80"
              style={{ perspective: '1000px' }}
            >
              <Card 
                className={`relative w-full h-full cursor-pointer transition-all duration-700 hover:scale-105 ${
                  isFlipped(principle.id) ? '[transform:rotateY(180deg)]' : ''
                }`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center'
                }}
                onClick={() => toggleCard(principle.id)}
              >
                {/* Front of card */}
                <CardContent 
                  className="absolute inset-0 p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-civitan-blue to-civitan-blue/80 text-white rounded-lg shadow-xl"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 lg:mb-6 filter drop-shadow-lg">
                    {principle.icon}
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 lg:mb-4 leading-tight">
                    {principle.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg opacity-90 leading-relaxed mb-3 md:mb-4 lg:mb-6">
                    {principle.shortDescription}
                  </p>
                  <div className="text-xs md:text-sm opacity-75 flex items-center">
                    <span>Tap to learn more</span>
                    <svg className="ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </CardContent>

                {/* Back of card */}
                <CardContent 
                  className="absolute inset-0 p-4 md:p-6 lg:p-8 flex flex-col justify-center bg-gradient-to-br from-civitan-gold to-civitan-gold/90 text-civitan-blue rounded-lg shadow-xl"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3 lg:mb-4 text-center">
                    {principle.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 lg:mb-4 text-center">
                    {principle.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-center flex-grow flex items-center">
                    {principle.fullDescription}
                  </p>
                  <div className="mt-3 md:mt-4 lg:mt-6 text-xs md:text-sm text-center opacity-75 flex items-center justify-center">
                    <span>Tap to flip back</span>
                    <svg className="ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-4xl mx-auto shadow-lg border border-civitan-gold/20">
            <h3 className="text-xl md:text-2xl font-bold text-civitan-blue mb-3 md:mb-4">
              Living Our Values in Duluth, Georgia
            </h3>
            <p className="text-base md:text-lg text-civitan-gray leading-relaxed">
              Since 2003, Duluth Civitan has embodied these principles through our dedication to serving 
              individuals with developmental disabilities, supporting our local community, and building 
              bridges of understanding and friendship. Join us in making these values a reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CivitanCreedSection;
