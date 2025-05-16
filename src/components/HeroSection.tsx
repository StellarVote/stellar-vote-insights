
import React from 'react';
import { Vote, BarChart, TrendingUp } from 'lucide-react';
import TallyForm from './TallyForm';

const HeroSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-4 fade-in">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                <span className="mr-1.5 relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                </span>
                Coming Soon - Join the Waitlist
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Turn your followers' opinions into 
                <span className="gradient-heading"> influence, insights & brand deals</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                StellarVote helps influencers easily measure and prove their cultural impact with quick polls for their audience.
              </p>
            </div>
            
            <div className="fade-in" style={{ animationDelay: '200ms' }}>
              <TallyForm />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-6 text-sm text-gray-500 fade-in" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-2">
                <Vote className="h-5 w-5 text-purple-500" />
                <span>5,000+ Polls Created</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-purple-500" />
                <span>3M+ Votes Collected</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                <span>2,000+ Influencer Success Stories</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl shadow-lg overflow-hidden fade-in" style={{ animationDelay: '300ms' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-4/5 bg-white rounded-lg shadow-md p-4 flex flex-col">
                  <div className="h-1/4 border-b border-gray-100 flex items-center justify-center">
                    <div className="w-3/4 h-6 bg-purple-100 rounded-full"></div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4 p-4">
                    <div className="bg-purple-50 rounded-lg"></div>
                    <div className="bg-indigo-50 rounded-lg"></div>
                    <div className="bg-violet-50 rounded-lg"></div>
                    <div className="bg-fuchsia-50 rounded-lg"></div>
                  </div>
                  <div className="h-1/5 border-t border-gray-100 flex items-center justify-center">
                    <div className="w-1/2 h-6 bg-purple-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
