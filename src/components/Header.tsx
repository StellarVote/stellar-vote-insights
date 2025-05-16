
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
        <span className="text-xl font-bold gradient-heading">StellarVote</span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Features</a>
        <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">How It Works</a>
        <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Testimonials</a>
      </nav>
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="hidden md:inline-flex">Contact</Button>
        <Button className="gradient-bg" onClick={scrollToWaitlist}>Join Waitlist</Button>
      </div>
    </header>
  );
};

export default Header;
