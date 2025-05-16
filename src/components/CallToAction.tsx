
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-secondary rounded-3xl p-12 relative overflow-hidden shadow-xl">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-purple-200/50 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-indigo-200/50 blur-3xl"></div>
          
          <div className="relative z-10 space-y-6 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold gradient-heading">
              Ready to Transform Your Audience Engagement?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of influencers who are using StellarVote to understand their audience 
              and secure better brand partnerships.
            </p>
            <div className="pt-6">
              <Button size="lg" className="gradient-bg">
                Get Started — It's Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
