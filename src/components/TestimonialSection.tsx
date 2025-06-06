
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "StellarVote has been a game-changer for my brand deals. Now I can show companies exactly what my audience thinks about their products.",
    author: "Alex Morgan",
    role: "Travel Influencer, 125K Followers",
    avatar: "AM"
  },
  {
    quote: "I used to guess what my audience wanted. Now I know exactly what they're interested in, and my engagement has gone through the roof!",
    author: "Jamie Lee",
    role: "Lifestyle Creator, 200K Followers",
    avatar: "JL"
  },
  {
    quote: "The analytics from StellarVote helped me secure a brand deal by proving my audience's interest in their new product line.",
    author: "Raj Patel",
    role: "Tech Reviewer, 80K Subscribers",
    avatar: "RP"
  }
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-20 px-4 md:px-12 lg:px-20 gradient-bg text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Loved by Influencers Everywhere
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            See how creators are transforming their audience engagement into valuable insights
          </p>
        </div>
        
        {/* Testimonial grid for desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 scale-up-hover fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
                      <path d="M13.4 36L0 24.8V24L8.2 12H16.6L11 24.8H20.2V36H13.4ZM37.4 36L24 24.8V24L32.2 12H40.6L35 24.8H44.2V36H37.4Z" fill="white"/>
                    </svg>
                  </div>
                  
                  <p className="text-lg mb-8 flex-grow text-white">{testimonial.quote}</p>
                  
                  <div className="flex items-center mt-auto">
                    <Avatar className="h-12 w-12 border-2 border-white/20">
                      <AvatarFallback className="bg-primary/20 text-white">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-white/70">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Testimonial carousel for mobile */}
        <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4 scrollbar-none">
          <div className="flex space-x-4 w-max">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 flex-shrink-0 w-[85vw] max-w-[320px] fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <svg width="35" height="28" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
                        <path d="M13.4 36L0 24.8V24L8.2 12H16.6L11 24.8H20.2V36H13.4ZM37.4 36L24 24.8V24L32.2 12H40.6L35 24.8H44.2V36H37.4Z" fill="white"/>
                      </svg>
                    </div>
                    
                    <p className="text-base mb-6 flex-grow text-white">{testimonial.quote}</p>
                    
                    <div className="flex items-center mt-auto">
                      <Avatar className="h-10 w-10 border-2 border-white/20">
                        <AvatarFallback className="bg-primary/20 text-white text-sm">{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                        <p className="text-xs text-white/70">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
