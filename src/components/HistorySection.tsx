
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const HistorySection = () => {
  return (
    <section id="history" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our History</h2>
          <div className="w-20 h-1 bg-civitan-gold mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>History & Founding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">The Duluth Civitan Club was chartered in 2003 as a local chapter of Civitan International, serving Duluth, Georgia and surrounding communities. For decades, we've operated as a community-based civic club united under Civitan's mission of service.</p>
              <p>Notable members like Terry Crouch have been involved since the 1970s, marking 50 years of Civitan membership as of 2024. Throughout our history, we've focused on improving local quality of life, especially for those with special needs.</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Mission & Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Our mission aligns with Civitan International's goal of making the world a better place through service, with a special emphasis on helping people with intellectual and developmental disabilities.</p>
              <h4 className="font-semibold mb-2">Core Values:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Service to others</li>
                <li>Knowledge that leads to understanding</li>
                <li>Fellowship among members</li>
                <li>Community engagement</li>
                <li>Integrity in all we do</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Leadership & Key Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Terry Crouch</h4>
                  <p>A long-time member and early organizer, served as club president and was instrumental in major events like the State of the City Address.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Claire Dees</h4>
                  <p>Recent past president and Executive Director of Spectrum Autism Support Group, recognized as an "outstanding club president" during her tenure.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Jerry Robb</h4>
                  <p>Served as Club President around 2010-2011, helping raise funds through the State of the City sponsorship and guiding charitable distributions.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
