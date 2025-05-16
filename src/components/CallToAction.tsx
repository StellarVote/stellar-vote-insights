
import React from 'react';
import TallyForm from './TallyForm';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-20" id="waitlist">
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-secondary rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-xl">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-36 md:w-48 h-36 md:h-48 rounded-full bg-purple-200/50 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-36 md:w-48 h-36 md:h-48 rounded-full bg-indigo-200/50 blur-3xl"></div>
          
          <div className="relative z-10 space-y-4 md:space-y-6 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-heading">
              Be Among the First to Transform Your Audience Engagement
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Join the waitlist today and be notified when StellarVote launches. Get early access and turn your followers' opinions into valuable insights.
            </p>
            <div className="pt-4 md:pt-6 max-w-lg mx-auto">
              <TallyForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
