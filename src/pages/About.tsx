
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
                <img 
                  src="/lovable-uploads/screenshot.png" 
                  alt="StellarVote Dashboard" 
                  className="rounded-xl shadow-lg w-full object-cover"
                />
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
        
        {/* Team Section (Placeholder) */}
        <section className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold gradient-heading mb-16">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              StellarVote is built by a team of passionate creators, developers, and data analysts 
              who understand the challenges faced by today's influencers.
            </p>
            
            {/* Team grid placeholder - you can replace this with actual team members later */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-purple-100 rounded-full mb-4"></div>
                  <h3 className="text-lg font-medium">Team Member {index}</h3>
                  <p className="text-gray-500">Position</p>
                </div>
              ))}
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
