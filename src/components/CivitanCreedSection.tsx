
import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';

interface CreedLine {
  id: number;
  lineText: string;
  frontContent: string;
  backContent: string;
  icon: string;
}

const civitanCreed: CreedLine[] = [
  {
    id: 1,
    lineText: "That citizenship is a privilege to be cherished",
    frontContent: "Citizenship is a privilege to be cherished",
    backContent: "We believe that being a citizen comes with both rights and responsibilities. We cherish the opportunity to participate in our democracy and work to make our communities better places for everyone.",
    icon: "🏛️"
  },
  {
    id: 2,
    lineText: "That service is the rent we pay for the space we occupy",
    frontContent: "Service is the rent we pay for the space we occupy",
    backContent: "Through volunteer service, we give back to our community as payment for the benefits we receive from living here. Every act of service strengthens the fabric of our society.",
    icon: "🤝"
  },
  {
    id: 3,
    lineText: "That work is the mission of life",
    frontContent: "Work is the mission of life",
    backContent: "We find purpose and meaning through our efforts to improve the lives of others, particularly those with developmental disabilities. Our work creates lasting positive change.",
    icon: "💼"
  },
  {
    id: 4,
    lineText: "That mankind is entitled to an abundance of life",
    frontContent: "Mankind is entitled to an abundance of life",
    backContent: "Every person deserves the opportunity to live a full, meaningful life with access to education, employment, and community participation, regardless of their abilities or circumstances.",
    icon: "🌟"
  },
  {
    id: 5,
    lineText: "That every individual is entitled to human dignity",
    frontContent: "Every individual is entitled to human dignity",
    backContent: "We treat every person with respect and recognize their inherent worth. This is especially important in our work with individuals who have developmental disabilities.",
    icon: "👥"
  },
  {
    id: 6,
    lineText: "That equal opportunity is every human's right",
    frontContent: "Equal opportunity is every human's right",
    backContent: "We advocate for fair access to education, employment, housing, and community resources for all people, working to remove barriers that prevent full participation in society.",
    icon: "⚖️"
  },
  {
    id: 7,
    lineText: "That human differences are assets, not defects",
    frontContent: "Human differences are assets, not defects",
    backContent: "We celebrate diversity and recognize that different perspectives, abilities, and experiences make our community stronger. Every person brings unique gifts to contribute.",
    icon: "🌈"
  },
  {
    id: 8,
    lineText: "That working together enriches us all",
    frontContent: "Working together enriches us all",
    backContent: "Collaboration and partnership amplify our impact. When we work together across differences, we achieve more than any of us could accomplish alone.",
    icon: "🤲"
  },
  {
    id: 9,
    lineText: "That helping one another is our greatest joy",
    frontContent: "Helping one another is our greatest joy",
    backContent: "We find deep fulfillment in service to others. The relationships we build and the lives we touch through our volunteer work bring meaning and happiness to our own lives.",
    icon: "💝"
  },
  {
    id: 10,
    lineText: "That only the highest character and motives should guide us",
    frontContent: "Only the highest character and motives should guide us",
    backContent: "We hold ourselves to the highest standards of integrity, honesty, and ethical behavior in all our actions and decisions, both in our service work and daily lives.",
    icon: "⭐"
  },
  {
    id: 11,
    lineText: "That love conquers hate",
    frontContent: "Love conquers hate",
    backContent: "We respond to prejudice, discrimination, and negativity with compassion and understanding. Love and acceptance have the power to overcome division and build bridges.",
    icon: "❤️"
  },
  {
    id: 12,
    lineText: "That faith and hope shall not perish from the earth",
    frontContent: "Faith and hope shall not perish from the earth",
    backContent: "We maintain optimism and belief in humanity's capacity for good. Through our service and dedication, we help ensure that hope continues to flourish in our communities.",
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
          <p className="text-lg md:text-xl text-civitan-gray max-w-3xl mx-auto leading-relaxed mb-6">
            These twelve principles have guided Civitan International since our founding. 
            Click each card to explore how we live these values in our community service.
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 md:p-6 max-w-4xl mx-auto shadow-sm border border-civitan-gold/20">
            <p className="text-sm md:text-base text-civitan-blue font-medium italic">
              "We believe..."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {civitanCreed.map((creed) => (
            <div 
              key={creed.id} 
              className="h-64 md:h-72 lg:h-80"
              style={{ perspective: '1000px' }}
            >
              <Card 
                className={`relative w-full h-full cursor-pointer transition-all duration-700 hover:scale-105 ${
                  isFlipped(creed.id) ? '[transform:rotateY(180deg)]' : ''
                }`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center'
                }}
                onClick={() => toggleCard(creed.id)}
              >
                {/* Front of card */}
                <CardContent 
                  className="absolute inset-0 p-4 md:p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-civitan-blue to-civitan-blue/80 text-white rounded-lg shadow-xl"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4 filter drop-shadow-lg">
                    {creed.icon}
                  </div>
                  <div className="text-xs md:text-sm opacity-75 mb-2">
                    Line {creed.id}
                  </div>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold mb-3 md:mb-4 leading-tight">
                    {creed.frontContent}
                  </h3>
                  <div className="text-xs opacity-75 flex items-center mt-auto">
                    <span>Tap to learn more</span>
                    <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </CardContent>

                {/* Back of card */}
                <CardContent 
                  className="absolute inset-0 p-4 md:p-6 flex flex-col justify-center bg-gradient-to-br from-civitan-gold to-civitan-gold/90 text-civitan-blue rounded-lg shadow-xl"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="text-2xl md:text-3xl mb-2 md:mb-3 text-center">
                    {creed.icon}
                  </div>
                  <div className="text-xs md:text-sm font-medium mb-2 text-center opacity-75">
                    Line {creed.id}
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-3 md:mb-4 text-center">
                    {creed.frontContent}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed text-center flex-grow flex items-center">
                    {creed.backContent}
                  </p>
                  <div className="mt-3 md:mt-4 text-xs text-center opacity-75 flex items-center justify-center">
                    <span>Tap to flip back</span>
                    <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              Living the Creed in Duluth, Georgia
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
