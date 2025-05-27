
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import TallyForm from '@/components/TallyForm';
import { Vote, BarChart, TrendingUp, Instagram } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header */}
      <header className="w-full py-4 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/lovable-uploads/d3338b83-6a24-4fbf-a604-35b7b7087f2e.png" alt="StellarVote Logo" className="h-8 md:h-10" />
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="https://www.instagram.com/stellarvote/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-9 h-9 rounded-full bg-gray-800/80 hover:bg-gray-700/80 flex items-center justify-center transition-colors shadow-sm border border-gray-700/50"
          >
            <Instagram className="w-4 h-4 text-gray-300" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 md:px-8 py-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 text-purple-300 text-sm font-medium">
            <span className="mr-2 relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
            </span>
            Early Access - Join the Waitlist
          </div>

          {/* Main Heading */}
          <div className="space-y-4 fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              Discover what your audience 
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"> loves</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
              Share polls, gather insights, and attract brand partnerships with StellarVote's platform for influencers.
            </p>
          </div>

          {/* Signup Form */}
          <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700/50 fade-in" style={{ animationDelay: '200ms' }}>
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Get Early Access</h2>
              <p className="text-gray-400">Be among the first to transform your audience engagement</p>
            </div>
            <TallyForm />
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4 text-sm text-gray-400 fade-in justify-center" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-2 justify-center">
              <Vote className="h-5 w-5 text-purple-400" />
              <span>100+ Polls Created</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <BarChart className="h-5 w-5 text-blue-400" />
              <span>5K+ Votes Collected</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <TrendingUp className="h-5 w-5 text-cyan-400" />
              <span>50+ Beta Testers</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-8 text-center text-sm text-gray-500 border-t border-gray-800/50">
        <p>© 2025 StellarVote. All rights reserved.</p>
      </footer>

      <Toaster />
    </div>
  );
};

export default Index;
