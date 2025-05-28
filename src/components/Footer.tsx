
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full px-6 py-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/d3338b83-6a24-4fbf-a604-35b7b7087f2e.png" 
              alt="StellarVote Logo" 
              className="h-8 filter brightness-0"
            />
            <p className="text-gray-600 text-sm">
              Turn engagement into influence with powerful audience insights.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/influencers" className="text-gray-600 hover:text-purple-600 text-sm">For Influencers</Link></li>
              <li><Link to="/brands" className="text-gray-600 hover:text-purple-600 text-sm">For Brands</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-purple-600 text-sm">About</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-purple-600 text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-purple-600 text-sm">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/stellarvote/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-purple-100 transition-colors"
              >
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="m16 11.37-2-2v2.63c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5v-5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v1.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">© 2025 StellarVote. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
