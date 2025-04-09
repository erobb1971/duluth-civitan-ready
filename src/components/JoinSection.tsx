
import { Button } from './ui/button';

const JoinSection = () => {
  return (
    <section id="join" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Duluth Civitan</h2>
          <div className="w-20 h-1 bg-civitan-gold mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">Become part of a dedicated group of individuals committed to making a difference in our community.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-civitan-blue text-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Why Join Civitan?</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="mr-2 text-civitan-gold">✓</span>
                <span>Make a meaningful impact in your community</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-civitan-gold">✓</span>
                <span>Develop leadership skills and personal growth</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-civitan-gold">✓</span>
                <span>Network with community leaders and like-minded individuals</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-civitan-gold">✓</span>
                <span>Attend social events and build lasting friendships</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-civitan-gold">✓</span>
                <span>Access to international conventions and leadership training</span>
              </li>
            </ul>
            <Button className="bg-white text-civitan-blue hover:bg-civitan-gold">
              Learn More About Membership
            </Button>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-civitan-blue mb-4">Membership Application</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitan-blue"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitan-blue"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitan-blue"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitan-blue"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Why are you interested in joining?</label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-civitan-blue"
                ></textarea>
              </div>
              
              <Button className="w-full bg-civitan-blue hover:bg-civitan-gold hover:text-civitan-blue">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
