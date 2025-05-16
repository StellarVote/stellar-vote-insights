
import React from 'react';
import { Vote, BarChart, Users, TrendingUp, MessageSquare, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Vote className="h-8 w-8 md:h-10 md:w-10 text-purple-500" />,
    title: "Quick & Engaging Polls",
    description: "Create beautiful polls in seconds that your audience will love to interact with."
  },
  {
    icon: <BarChart className="h-8 w-8 md:h-10 md:w-10 text-purple-500" />,
    title: "Real-time Analytics",
    description: "Watch responses roll in instantly with beautiful, shareable visualization dashboards."
  },
  {
    icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-purple-500" />,
    title: "Audience Insights",
    description: "Understand what your followers care about to create more resonant content."
  },
  {
    icon: <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-purple-500" />,
    title: "Prove Your Influence",
    description: "Show brands exactly how much impact you have with concrete data."
  },
  {
    icon: <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-purple-500" />,
    title: "Boost Engagement",
    description: "Increase follower interaction and loyalty through meaningful participation."
  },
  {
    icon: <Database className="h-8 w-8 md:h-10 md:w-10 text-purple-500" />,
    title: "Monetize Your Opinions",
    description: "Turn your audience insights into attractive data for brand partnerships."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-heading mb-3 md:mb-4">
            Powerful Features for Influencers
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to understand your audience and grow your influence
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="scale-up-hover border border-gray-100 bg-white/50 backdrop-blur-sm fade-in h-full" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-3">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
