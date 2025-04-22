
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Community Engagement Workshop",
    date: "May 15, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Duluth Community Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius pharetra eros, id eleifend mauris maximus faucibus. Pellentesque ligula ipsum, cursus eget neque id, ultrices rhoncus ipsum."
  },
  {
    id: 2,
    title: "Volunteer Appreciation Event",
    date: "June 22, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "Local Park Pavilion",
    description: "Ut ultrices eros a sagittis porttitor. Phasellus pulvinar justo sit amet dapibus suscipit. Praesent gravida felis vitae ex elementum porttitor. Ut eros sem, consequat non efficitur in, laoreet ultrices erat."
  },
  {
    id: 3,
    title: "Annual Community Gathering",
    date: "July 10, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Duluth Civic Center",
    description: "Nullam sit amet nibh convallis, rhoncus diam eget, tristique lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

const EventsSection = () => {
  return (
    <section id="events" className="py-16 bg-civitan-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-civitan-gold mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">Stay informed about our latest community initiatives and networking opportunities.</p>
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
