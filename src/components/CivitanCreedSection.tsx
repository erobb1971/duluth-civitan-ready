
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
    title: "Golden Rule",
    shortDescription: "Do unto others as you would have them do unto you",
    fullDescription: "The foundation of all our service - treating every person with dignity, respect, and compassion. We believe in creating positive change through acts of kindness and understanding.",
    icon: "⭐"
  },
  {
    id: 2,
    title: "Service Above Self",
    shortDescription: "Put the needs of others before our own",
    fullDescription: "We dedicate ourselves to serving our community, particularly those with developmental disabilities, placing their needs and wellbeing at the center of our mission.",
    icon: "🤝"
  },
  {
    id: 3,
    title: "Building Good Citizenship",
    shortDescription: "Promote civic responsibility and community engagement",
    fullDescription: "We work to strengthen our communities by encouraging active participation in civic life, promoting education, and fostering responsible citizenship among all members of society.",
    icon: "🏛️"
  },
  {
    id: 4,
    title: "Individual Worth",
    shortDescription: "Recognize the value and potential in every person",
    fullDescription: "Every individual has inherent worth and unlimited potential. We celebrate diversity, embrace inclusion, and work to ensure everyone has opportunities to thrive and contribute.",
    icon: "💎"
  },
  {
    id: 5,
    title: "Justice and Equality",
    shortDescription: "Champion fairness and equal opportunities for all",
    fullDescription: "We advocate for justice, fairness, and equal opportunities regardless of ability, background, or circumstances. Everyone deserves a chance to succeed and be valued.",
    icon: "⚖️"
  },
  {
    id: 6,
    title: "World Peace",
    shortDescription: "Promote understanding and harmony across all communities",
    fullDescription: "Through our local actions and global connections, we work toward a world where understanding, cooperation, and peace prevail over conflict and division.",
    icon: "🌍"
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
    <section className="py-16 bg-gradient-to-br from-civitan-blue/5 via-white to-civitan-gold/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-civitan-blue mb-6">
            The Civitan Creed
          </h2>
          <p className="text-xl text-civitan-gray max-w-3xl mx-auto leading-relaxed">
            These principles guide everything we do at Duluth Civitan. 
            Click each card to discover how we live these values in our community service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {creedPrinciples.map((principle) => (
            <div key={principle.id} className="perspective-1000">
              <Card 
                className={`relative h-80 cursor-pointer transition-all duration-700 transform-style-preserve-3d hover:scale-105 ${
                  isFlipped(principle.id) ? 'rotate-y-180' : ''
                }`}
                onClick={() => toggleCard(principle.id)}
              >
                {/* Front of card */}
                <CardContent className={`absolute inset-0 p-8 backface-hidden flex flex-col items-center justify-center text-center bg-gradient-to-br from-civitan-blue to-civitan-blue/80 text-white rounded-lg shadow-xl ${
                  isFlipped(principle.id) ? 'rotate-y-180' : ''
                }`}>
                  <div className="text-6xl mb-6 filter drop-shadow-lg">
                    {principle.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {principle.title}
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    {principle.shortDescription}
                  </p>
                  <div className="mt-6 text-sm opacity-75 flex items-center">
                    <span>Click to learn more</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </CardContent>

                {/* Back of card */}
                <CardContent className={`absolute inset-0 p-8 backface-hidden rotate-y-180 flex flex-col justify-center bg-gradient-to-br from-civitan-gold to-civitan-gold/90 text-civitan-blue rounded-lg shadow-xl ${
                  isFlipped(principle.id) ? '' : 'rotate-y-180'
                }`}>
                  <div className="text-4xl mb-4 text-center">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {principle.title}
                  </h3>
                  <p className="text-base leading-relaxed text-center flex-grow flex items-center">
                    {principle.fullDescription}
                  </p>
                  <div className="mt-6 text-sm text-center opacity-75 flex items-center justify-center">
                    <span>Click to flip back</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto shadow-lg border border-civitan-gold/20">
            <h3 className="text-2xl font-bold text-civitan-blue mb-4">
              Living Our Values in Duluth, Georgia
            </h3>
            <p className="text-lg text-civitan-gray leading-relaxed">
              Since 2003, Duluth Civitan has embodied these principles through our dedication to serving 
              individuals with developmental disabilities, supporting our local community, and building 
              bridges of understanding and friendship. Join us in making these values a reality.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default CivitanCreedSection;
