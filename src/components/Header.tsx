
import React from 'react';
import { Button } from '@/components/ui/button';

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
        <div className="h-10 mr-3">
          <img src="/lovable-uploads/0c61eecc-b066-4207-b9d3-67a675d00c66.png" alt="StellarVote Logo" className="h-full" />
        </div>
        <span className="text-xl font-bold gradient-heading">StellarVote</span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Features</a>
        <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">How It Works</a>
        <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Testimonials</a>
        <a href="/brands" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">For Brands</a>
      </nav>
      <div className="flex items-center">
        <Button className="gradient-bg" onClick={scrollToWaitlist}>Join Waitlist</Button>
      </div>
    </header>
  );
};

export default Header;
