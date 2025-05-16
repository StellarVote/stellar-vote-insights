
import React from 'react';
import { Badge } from '@/components/ui/badge';

const steps = [
  {
    number: "01",
    title: "Create Your Poll",
    description: "Design a quick poll about trending topics, brands, or products in just a few clicks.",
    color: "bg-black"
  },
  {
    number: "02",
    title: "Share with Followers",
    description: "Share your poll across your social media channels with a single link.",
    color: "bg-black"
  },
  {
    number: "03",
    title: "Collect Responses",
    description: "Watch as your audience votes and engages with your content in real-time.",
    color: "bg-black"
  },
  {
    number: "04",
    title: "Analyze the Results",
    description: "Get detailed insights about your audience's preferences and opinions.",
    color: "bg-black"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bolt-section bg-white">
      <div className="bolt-container">
        <div className="text-center mb-16 fade-in">
          <Badge variant="outline" className="mb-4 text-black border-gray-200 bg-gray-50">Simple Process</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            How StellarVote Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Turn your audience engagement into valuable insights in four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className={`h-1 w-full bg-gray-200 rounded-full mb-8 hidden lg:block ${index === steps.length - 1 ? 'opacity-0' : ''}`}></div>
              
              <div className="flex flex-col p-6 bg-white rounded-2xl border border-gray-100 shadow-sm h-full">
                <div className={`w-12 h-12 mb-6 flex items-center justify-center rounded-lg ${step.color} text-white font-bold`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1 -right-4 h-1 w-8 items-center justify-center z-10">
                  <div className="h-3 w-3 rounded-full bg-black"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
