
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import DashboardPreview from '@/components/DashboardPreview';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    // Initialize Tally Forms
    const initializeTallyForms = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
          iframe.setAttribute('src', iframe.getAttribute('data-tally-src') || '');
        });
      }
    };

    // Load the Tally script if it's not already loaded
    const tallyWidgetUrl = "https://tally.so/widgets/embed.js";
    if (!document.querySelector(`script[src="${tallyWidgetUrl}"]`)) {
      const script = document.createElement("script");
      script.src = tallyWidgetUrl;
      script.onload = initializeTallyForms;
      script.onerror = initializeTallyForms;
      document.body.appendChild(script);
    } else {
      initializeTallyForms();
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
          <div className="max-w-7xl mx-auto text-center">
            <div className="space-y-8 fade-in">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                Early Access - Join the Waitlist
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover what your audience <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">loves</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Share polls, gather insights, and attract brand partnerships with StellarVote's platform for influencers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/influencers">
                  <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 text-lg">
                    For Influencers
                  </Button>
                </Link>
                <Link to="/brands">
                  <Button variant="outline" className="px-8 py-3 text-lg border-gray-300">
                    For Brands
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="mt-16 fade-in" style={{ animationDelay: '300ms' }}>
              <div className="bg-white rounded-xl shadow-xl p-8 max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-4">Get Early Access</h2>
                <p className="text-gray-600 mb-6">Be among the first to transform your audience engagement</p>
                <iframe 
                  data-tally-src="https://tally.so/embed/mZyOJz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="319" 
                  frameBorder="0" 
                  title="StellarVote Waitlist Signup"
                  className="bg-transparent">
                </iframe>
              </div>
            </div>
          </div>
        </section>

        <FeatureSection />
        <DashboardPreview />
        <TestimonialSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
