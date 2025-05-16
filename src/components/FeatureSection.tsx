
import React from 'react';
import { Vote, BarChart, Users, TrendingUp, MessageSquare, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Vote className="h-10 w-10 text-black" />,
    title: "Quick & Engaging Polls",
    description: "Create beautiful polls in seconds that your audience will love to interact with."
  },
  {
    icon: <BarChart className="h-10 w-10 text-black" />,
    title: "Real-time Analytics",
    description: "Watch responses roll in instantly with beautiful, shareable visualization dashboards."
  },
  {
    icon: <Users className="h-10 w-10 text-black" />,
    title: "Audience Insights",
    description: "Understand what your followers care about to create more resonant content."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-black" />,
    title: "Prove Your Influence",
    description: "Show brands exactly how much impact you have with concrete data."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-black" />,
    title: "Boost Engagement",
    description: "Increase follower interaction and loyalty through meaningful participation."
  },
  {
    icon: <Database className="h-10 w-10 text-black" />,
    title: "Monetize Your Opinions",
    description: "Turn your audience insights into attractive data for brand partnerships."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="bolt-section bg-gray-50">
      <div className="bolt-container">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Powerful Features for Influencers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to understand your audience and grow your influence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="scale-up-hover border border-gray-100 bg-white shadow-sm rounded-xl fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
