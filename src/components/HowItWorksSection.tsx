
import React from 'react';
import { Badge } from '@/components/ui/badge';

const steps = [
  {
    number: "01",
    title: "Create Your Poll",
    description: "Design a quick poll about trending topics, brands, or products in just a few clicks.",
    color: "from-purple-400 to-purple-600"
  },
  {
    number: "02",
    title: "Share with Followers",
    description: "Share your poll across your social media channels with a single link.",
    color: "from-violet-400 to-violet-600"
  },
  {
    number: "03",
    title: "Collect Responses",
    description: "Watch as your audience votes and engages with your content in real-time.",
    color: "from-indigo-400 to-indigo-600"
  },
  {
    number: "04",
    title: "Analyze the Results",
    description: "Get detailed insights about your audience's preferences and opinions.",
    color: "from-fuchsia-400 to-fuchsia-600"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 fade-in">
          <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200 bg-purple-50 hover:bg-purple-100">Simple Process</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-heading mb-3 md:mb-4">
            How StellarVote Works
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Turn your audience engagement into valuable insights in four simple steps
          </p>
        </div>
        
        {/* Desktop view - horizontal steps with connecting lines */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className={`h-2 w-full bg-gradient-to-r ${step.color} rounded-full mb-8 ${index === steps.length - 1 ? 'opacity-0' : ''}`}></div>
              
              <div className="flex flex-col p-6 bg-white rounded-xl border border-gray-100 shadow-sm h-full">
                <div className={`w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-gradient-to-r ${step.color} text-white font-bold`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="absolute top-1 -right-4 h-2 w-8 items-center justify-center z-10">
                  <div className="h-3 w-3 rounded-full bg-white border border-gray-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile view - vertical steps with numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden">
          {steps.map((step, index) => (
            <div key={index} className="relative fade-in flex" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex flex-col p-5 bg-white rounded-xl border border-gray-100 shadow-sm h-full">
                <div className={`w-10 h-10 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r ${step.color} text-white font-bold text-sm`}>
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
