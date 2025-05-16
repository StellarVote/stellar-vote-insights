
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
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
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Features</a>
        <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">How It Works</a>
        <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Testimonials</a>
        <Link to="/brands" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">For Brands</Link>
        <Link to="/influencers" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">For Influencers</Link>
      </nav>
      <div className="flex items-center">
        <Button className="gradient-bg" onClick={scrollToWaitlist}>Join Waitlist</Button>
      </div>
    </header>
  );
};

export default Header;
