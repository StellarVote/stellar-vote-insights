
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
          <img 
            src="/lovable-uploads/d3338b83-6a24-4fbf-a604-35b7b7087f2e.png" 
            alt="StellarVote Logo" 
            className="h-8 md:h-10 brightness-0 invert" 
          />
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 text-purple-200 text-sm font-medium">
            <span className="mr-2 relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
            </span>
            Early Access - Join the Waitlist
          </div>

          {/* Main Heading */}
          <div className="space-y-6 fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white px-2">
              Discover what your audience 
              <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent"> loves</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mx-auto leading-relaxed px-4">
              Share polls, gather insights, and attract brand partnerships with StellarVote's platform for influencers.
            </p>
          </div>

          {/* Signup Form */}
          <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-600/50 fade-in mx-4" style={{ animationDelay: '200ms' }}>
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">Get Early Access</h2>
              <p className="text-gray-300 text-base leading-relaxed">Be among the first to transform your audience engagement</p>
            </div>
            <TallyForm />
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4 text-sm sm:text-base text-gray-300 fade-in justify-center px-4" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-3 justify-center">
              <Vote className="h-5 w-5 text-purple-300 flex-shrink-0" />
              <span className="font-medium">100+ Polls Created</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <BarChart className="h-5 w-5 text-blue-300 flex-shrink-0" />
              <span className="font-medium">5K+ Votes Collected</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <TrendingUp className="h-5 w-5 text-cyan-300 flex-shrink-0" />
              <span className="font-medium">50+ Beta Testers</span>
            </div>
          </div>
        </div>
      </main>

      {/* Brand Partners Section */}
      <section className="py-12 px-4 md:px-8 border-t border-gray-700/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm mb-8 font-medium">Trusted by leading brands</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center opacity-60 hover:opacity-80 transition-opacity duration-300">
            {/* L'Oréal */}
            <div className="flex items-center justify-center">
              <svg width="100" height="40" viewBox="0 0 100 40" fill="none" className="text-gray-300">
                <path d="M10 8h80v24H10z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <text x="50" y="22" textAnchor="middle" className="fill-current font-bold text-sm tracking-wider">L'ORÉAL</text>
                <text x="50" y="30" textAnchor="middle" className="fill-current text-xs">PARIS</text>
              </svg>
            </div>
            
            {/* Calvin Klein */}
            <div className="flex items-center justify-center">
              <svg width="80" height="40" viewBox="0 0 80 40" fill="none" className="text-gray-300">
                <rect x="5" y="10" width="70" height="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <text x="40" y="18" textAnchor="middle" className="fill-current font-bold text-xs tracking-wider">CALVIN</text>
                <text x="40" y="26" textAnchor="middle" className="fill-current font-bold text-xs tracking-wider">KLEIN</text>
              </svg>
            </div>
            
            {/* Chanel */}
            <div className="flex items-center justify-center">
              <svg width="70" height="40" viewBox="0 0 70 40" fill="none" className="text-gray-300">
                <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="50" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path d="M20 8 C30 15, 40 15, 50 8" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M20 32 C30 25, 40 25, 50 32" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            
            {/* Gucci */}
            <div className="flex items-center justify-center">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-gray-300">
                <text x="30" y="15" textAnchor="middle" className="fill-current font-bold text-lg tracking-wider">G</text>
                <circle cx="30" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
                <text x="30" y="28" textAnchor="middle" className="fill-current font-bold text-xs tracking-wider">GUCCI</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-8 text-center text-sm text-gray-400 border-t border-gray-700/50">
        <p>© 2025 StellarVote. All rights reserved.</p>
      </footer>

      <Toaster />
    </div>
  );
};

export default Index;
