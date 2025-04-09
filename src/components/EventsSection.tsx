
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Monthly Meeting",
    date: "August 15, 2023",
    time: "7:00 PM - 8:30 PM",
    location: "Duluth City Hall",
    description: "Join us for our monthly membership meeting where we'll discuss upcoming events and service opportunities."
  },
  {
    id: 2,
    title: "Fall Fundraising Gala",
    date: "October 12, 2023",
    time: "6:00 PM - 10:00 PM",
    location: "Duluth Convention Center",
    description: "Our annual fundraising gala featuring dinner, silent auction, and entertainment. All proceeds support our programs."
  },
  {
    id: 3,
    title: "Holiday Food Drive",
    date: "November 18-20, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Duluth Community Center",
    description: "Help us collect food items for families in need during the holiday season."
  }
];

const EventsSection = () => {
  return (
    <section id="events" className="py-16 bg-civitan-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-civitan-gold mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">Join us at one of our upcoming events to get involved, meet our members, and support our mission.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center mb-2 text-sm">
                  <Calendar size={16} className="mr-2 text-civitan-blue" /> 
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center mb-2 text-sm">
                  <Clock size={16} className="mr-2 text-civitan-blue" /> 
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center mb-4 text-sm">
                  <MapPin size={16} className="mr-2 text-civitan-blue" /> 
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue">
                  Register
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="bg-white text-civitan-blue border-civitan-blue hover:bg-civitan-blue hover:text-white">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
