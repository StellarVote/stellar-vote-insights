
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full px-4 py-4 flex items-center justify-between bg-white border-b border-gray-200">
      <div className="flex items-center">
        <Link to="/">
          <img 
            src="/lovable-uploads/d3338b83-6a24-4fbf-a604-35b7b7087f2e.png" 
            alt="StellarVote Logo" 
            className="h-8 filter brightness-0"
          />
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About</Link>
        <Link to="/influencers" className="text-gray-600 hover:text-purple-600 transition-colors">For Influencers</Link>
        <Link to="/brands" className="text-gray-600 hover:text-purple-600 transition-colors">For Brands</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <a 
          href="https://www.instagram.com/stellarvote/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="m16 11.37-2-2v2.63c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5v-5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v1.5"/>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
