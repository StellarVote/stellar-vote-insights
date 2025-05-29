
import React from 'react';
import { Vote, BarChart, TrendingUp } from 'lucide-react';
import TallyForm from './TallyForm';

const HeroSection = () => {
  return (
    <section className="pt-8 pb-12 md:py-20 px-4 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
            <div className="space-y-4 fade-in">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs md:text-sm font-medium mb-2 md:mb-4">
                <span className="mr-1.5 relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                </span>
                Coming Soon - Join the Waitlist
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Discover what your audience 
                <span className="gradient-heading"> loves</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
                Share polls, gather insights, and attract brand partnerships with StellarVote's platform for influencers.
              </p>
            </div>
            
            <div className="fade-in w-full" style={{ animationDelay: '200ms' }}>
              <TallyForm />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 text-xs sm:text-sm text-gray-500 fade-in justify-center md:justify-start" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-2">
                <Vote className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                <span>100+ Polls Created</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                <span>5K+ Votes Collected</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                <span>50+ Beta Testers</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative mt-6 md:mt-0 w-full max-w-md mx-auto md:max-w-none">
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
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-purple-100 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 bg-indigo-100 rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
