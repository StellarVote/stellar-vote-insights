
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Link to="/" className="h-8">
                <img src="/lovable-uploads/0c61eecc-b066-4207-b9d3-67a675d00c66.png" alt="StellarVote Logo" className="h-full" />
              </Link>
            </div>
            <p className="text-gray-600 max-w-xs">
              Discover what your audience loves. Share polls, gather insights, and attract brand partnerships.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/stellarvote/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-3">
              <li><Link to="/brands" className="text-gray-600 hover:text-primary transition-colors">For Brands</Link></li>
              <li><Link to="/influencers" className="text-gray-600 hover:text-primary transition-colors">For Influencers</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 StellarVote. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
