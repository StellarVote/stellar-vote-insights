
import React from 'react';
import { Vote, BarChart, TrendingUp } from 'lucide-react';
import TallyForm from './TallyForm';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="bolt-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-6 fade-in">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-4">
                <span className="mr-1.5 relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                </span>
                Coming Soon - Join the Waitlist
              </div>
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black tracking-tight">
                Discover what your audience 
                <span className="block mt-2"> truly values</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                Share polls, gather insights, and attract brand partnerships with StellarVote's platform for influencers.
              </p>
            </div>
            
            <div className="fade-in" style={{ animationDelay: '200ms' }}>
              <TallyForm />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 pt-6 text-sm text-gray-500 fade-in" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-2">
                <Vote className="h-5 w-5 text-black" />
                <span>100+ Polls Created</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-black" />
                <span>5K+ Votes Collected</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-black" />
                <span>50+ Beta Testers</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative mt-8 md:mt-0">
            <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-2xl shadow-lg overflow-hidden fade-in" style={{ animationDelay: '300ms' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-4/5 bg-white rounded-2xl shadow-md p-4 flex flex-col">
                  <div className="h-1/4 border-b border-gray-100 flex items-center justify-center">
                    <div className="w-3/4 h-6 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4 p-4">
                    <div className="bg-gray-50 rounded-lg"></div>
                    <div className="bg-gray-50 rounded-lg"></div>
                    <div className="bg-gray-50 rounded-lg"></div>
                    <div className="bg-gray-50 rounded-lg"></div>
                  </div>
                  <div className="h-1/5 border-t border-gray-100 flex items-center justify-center">
                    <div className="w-1/2 h-6 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
