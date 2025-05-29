
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6 fade-in">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Discover what your audience <span className="gradient-heading">loves</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                  Share polls, gather insights, and attract brand partnerships with StellarVote's innovative platform for influencers.
                </p>
                <div className="pt-4">
                  <Link to="/#waitlist">
                    <Button className="gradient-bg text-white">Join Waitlist</Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 relative fade-in" style={{ animationDelay: '200ms' }}>
                {/* Dashboard example visualization */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl shadow-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4/5 h-4/5 bg-white rounded-lg shadow-md p-4 flex flex-col">
                      {/* Dashboard header */}
                      <div className="h-1/6 border-b border-gray-100 flex items-center">
                        <div className="w-1/3 h-6 bg-purple-100 rounded-full"></div>
                      </div>
                      
                      {/* Dashboard content */}
                      <div className="flex-1 grid grid-cols-2 gap-4 p-4">
                        <div className="bg-purple-50 rounded-lg p-3">
                          <div className="w-full h-4 bg-purple-200 rounded-full mb-2"></div>
                          <div className="w-3/4 h-20 bg-purple-100 rounded-lg"></div>
                        </div>
                        <div className="bg-indigo-50 rounded-lg p-3">
                          <div className="w-full h-4 bg-indigo-200 rounded-full mb-2"></div>
                          <div className="w-3/4 h-20 bg-indigo-100 rounded-lg"></div>
                        </div>
                        <div className="bg-violet-50 rounded-lg p-3">
                          <div className="w-full h-4 bg-violet-200 rounded-full mb-2"></div>
                          <div className="w-3/4 h-20 bg-violet-100 rounded-lg"></div>
                        </div>
                        <div className="bg-fuchsia-50 rounded-lg p-3">
                          <div className="w-full h-4 bg-fuchsia-200 rounded-full mb-2"></div>
                          <div className="w-3/4 h-20 bg-fuchsia-100 rounded-lg"></div>
                        </div>
                      </div>
                      
                      {/* Dashboard footer */}
                      <div className="h-1/6 border-t border-gray-100 flex items-center justify-center">
                        <div className="w-1/2 h-6 bg-purple-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-full z-[-1]"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 rounded-full z-[-1]"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold gradient-heading">Our Mission</h2>
            <p className="text-lg text-gray-600">
              At StellarVote, we're on a mission to empower influencers with the data and insights 
              they need to build stronger connections with their audience and create more valuable 
              partnerships with brands.
            </p>
            <p className="text-lg text-gray-600">
              We believe that understanding your audience shouldn't be complicated or expensive. 
              Our platform makes it easy to create engaging polls, collect meaningful data, 
              and turn those insights into opportunities.
            </p>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold gradient-heading text-center mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Transparency</h3>
                <p className="text-gray-600">
                  We believe in clear, honest communication with our users and partners.
                  No hidden fees, no data selling, just straightforward value.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Empowerment</h3>
                <p className="text-gray-600">
                  We're committed to giving creators the tools they need to take control
                  of their content strategy and build sustainable careers.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We're constantly evolving our platform based on user feedback and
                  emerging trends in the creator economy.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-purple-50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold gradient-heading">Join the StellarVote Community</h2>
            <p className="text-lg text-gray-600">
              Be among the first to transform how you connect with your audience and monetize your influence.
            </p>
            <div>
              <Link to="/#waitlist">
                <Button className="gradient-bg text-white">Join Waitlist</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default About;
