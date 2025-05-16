
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`w-full py-3 md:py-4 px-4 md:px-12 lg:px-20 flex items-center justify-between z-20 sticky top-0 transition-all duration-200 ${isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="flex items-center">
        <Link to="/" className="h-8 md:h-10">
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
        <Button className="gradient-bg text-sm px-4 py-2 h-9 md:h-10" onClick={scrollToWaitlist}>Join Waitlist</Button>
        <button
          className="ml-2 p-1.5 rounded-md md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-20 animate-fade-in">
          <nav className="flex flex-col py-2">
            <Link 
              to="/brands" 
              className="py-3 px-6 text-gray-700 hover:bg-gray-50 text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Brands
            </Link>
            <Link 
              to="/influencers" 
              className="py-3 px-6 text-gray-700 hover:bg-gray-50 text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Influencers
            </Link>
            <Link 
              to="/about" 
              className="py-3 px-6 text-gray-700 hover:bg-gray-50 text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="px-6 py-3">
              <button
                className="w-full py-2.5 px-4 text-center text-white font-medium bg-purple-600 rounded-md hover:bg-purple-700 transition-colors"
                onClick={scrollToWaitlist}
              >
                Join Waitlist
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
