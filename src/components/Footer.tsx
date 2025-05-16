
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-xl font-bold gradient-heading">StellarVote</span>
            </div>
            <p className="text-gray-600 max-w-xs">
              Turn your followers' opinions into influence, insights & brand deals.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 5.98c-.78.35-1.63.58-2.5.69.9-.54 1.58-1.39 1.91-2.4-.84.5-1.78.86-2.76 1.06C17.78 4.36 16.57 4 15.25 4c-2.55 0-4.7 2.12-4.7 4.7 0 .37.04.73.12 1.07-3.91-.2-7.38-2.07-9.71-4.92-.4.7-.63 1.53-.63 2.4 0 1.66.84 3.12 2.1 3.97-.78-.02-1.5-.24-2.14-.6v.06c0 2.32 1.65 4.26 3.83 4.7-.4.11-.82.17-1.26.17-.31 0-.61-.03-.91-.08.61 1.9 2.38 3.29 4.47 3.33-1.64 1.29-3.71 2.05-5.95 2.05-.39 0-.77-.02-1.15-.07A14.17 14.17 0 0 0 10 21c9.6 0 14.84-7.97 14.84-14.84v-.67A10.44 10.44 0 0 0 22 5.98z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-6h2v6zm-1-8c-.41 0-.8-.17-1.08-.45C8.17 7.27 8 6.88 8 6.5c0-.41.17-.8.45-1.08.28-.28.67-.45 1.08-.45.17 0 .33.03.49.08.15.05.29.12.42.21.12.09.22.2.3.33.08.13.14.26.19.4.05.13.08.27.08.41 0 .41-.17.8-.45 1.08C11.8 7.83 11.41 8 11 8z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.62a12.83 12.83 0 0 1-.55-2H5V6h14v8.06c.7.07 1.39.21 2 .45V4a1 1 0 0 0-1-1zM9 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 6l-3-2.5-2 1.8L9 13l-3 3v2h11v-2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 StellarVote. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
