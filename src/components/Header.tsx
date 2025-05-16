
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full py-4 px-6 md:px-12 lg:px-20 flex items-center justify-between z-10 bg-white/90 backdrop-blur-sm sticky top-0">
      <div className="flex items-center">
        <Link to="/" className="h-10">
          <img src="/lovable-uploads/0c61eecc-b066-4207-b9d3-67a675d00c66.png" alt="StellarVote Logo" className="h-full" />
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/brands" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">For Brands</Link>
        <Link to="/influencers" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">For Influencers</Link>
        <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">About</Link>
      </nav>
      
      <div className="flex items-center">
        <Button className="gradient-bg" onClick={scrollToWaitlist}>Join Waitlist</Button>
        <button
          className="ml-4 p-2 rounded-md md:hidden text-gray-500 hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-20">
          <nav className="flex flex-col p-4">
            <Link 
              to="/brands" 
              className="py-3 px-4 text-gray-700 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Brands
            </Link>
            <Link 
              to="/influencers" 
              className="py-3 px-4 text-gray-700 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Influencers
            </Link>
            <Link 
              to="/about" 
              className="py-3 px-4 text-gray-700 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <button
              className="mt-2 py-3 px-4 text-left text-white bg-purple-600 rounded-md"
              onClick={() => {
                scrollToWaitlist();
                setMobileMenuOpen(false);
              }}
            >
              Join Waitlist
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
