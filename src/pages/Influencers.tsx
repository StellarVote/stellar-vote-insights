
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Users, MessageCircle, CreditCard, Star, BarChart3, PieChart, Bell, Calendar, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Toaster } from '@/components/ui/toaster';

const InfluencersPage = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <div className="space-y-6 fade-in">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
                    <span>For Influencers & Creators</span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Transform your <span className="gradient-heading">audience</span> into your biggest asset
                  </h1>
                  <p className="text-lg text-gray-600 max-w-xl">
                    Get to know your followers better, create more engaging content they love, and unlock new monetization opportunities with StellarVote.
                  </p>
                  <div className="pt-4">
                    <Button className="gradient-bg text-lg" onClick={scrollToWaitlist}>Join the Waitlist</Button>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative">
                {/* Detailed Influencer Dashboard Mockup */}
                <div className="relative w-full aspect-[4/3] bg-white rounded-xl shadow-lg overflow-hidden fade-in border border-gray-200" style={{ animationDelay: '300ms' }}>
                  <div className="absolute inset-0 flex flex-col">
                    {/* Dashboard header */}
                    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-800">Creator Dashboard</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <Bell className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-indigo-600">JP</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Dashboard content */}
                    <div className="flex-1 grid grid-cols-3 gap-4 p-6 bg-gray-50">
                      {/* Left sidebar */}
                      <div className="space-y-4">
                        {/* Profile summary */}
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-3">
                              <span className="text-lg font-semibold text-indigo-600">JP</span>
                            </div>
                            <h4 className="font-medium">Jessica Parker</h4>
                            <p className="text-sm text-gray-500">Lifestyle & Wellness</p>
                            <div className="flex items-center gap-1 text-yellow-500 mt-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-3 h-3 fill-current" />
                              ))}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 mt-4 text-center">
                            <div className="bg-gray-50 rounded py-2">
                              <div className="text-sm font-medium">125K</div>
                              <div className="text-xs text-gray-500">Followers</div>
                            </div>
                            <div className="bg-gray-50 rounded py-2">
                              <div className="text-sm font-medium">4.8%</div>
                              <div className="text-xs text-gray-500">Engagement</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Navigation */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                          <div className="py-2 px-2">
                            <div className="flex items-center gap-3 px-2 py-2 bg-indigo-50 rounded text-indigo-700">
                              <BarChart3 className="w-4 h-4" />
                              <span className="text-sm font-medium">Analytics</span>
                            </div>
                            
                            <div className="flex items-center gap-3 px-2 py-2 text-gray-600">
                              <PieChart className="w-4 h-4" />
                              <span className="text-sm">Polls</span>
                            </div>
                            
                            <div className="flex items-center gap-3 px-2 py-2 text-gray-600">
                              <MessageCircle className="w-4 h-4" />
                              <span className="text-sm">Feedback</span>
                            </div>
                            
                            <div className="flex items-center gap-3 px-2 py-2 text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">Campaigns</span>
                            </div>
                            
                            <div className="flex items-center gap-3 px-2 py-2 text-gray-600">
                              <CreditCard className="w-4 h-4" />
                              <span className="text-sm">Earnings</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Main content area (middle + right) */}
                      <div className="col-span-2 space-y-4">
                        {/* Stats overview */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <div className="text-sm text-gray-500 mb-1">Poll Responses</div>
                            <div className="text-xl font-semibold">8,547</div>
                            <div className="flex items-center text-xs text-green-600 mt-2">
                              <ChevronUp className="w-3 h-3 mr-1" />
                              <span>+24.3% vs last week</span>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <div className="text-sm text-gray-500 mb-1">Response Rate</div>
                            <div className="text-xl font-semibold">6.8%</div>
                            <div className="flex items-center text-xs text-green-600 mt-2">
                              <ChevronUp className="w-3 h-3 mr-1" />
                              <span>+1.2% vs last week</span>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <div className="text-sm text-gray-500 mb-1">Brand Matches</div>
                            <div className="text-xl font-semibold">12</div>
                            <div className="flex items-center text-xs text-green-600 mt-2">
                              <ChevronUp className="w-3 h-3 mr-1" />
                              <span>+5 new this week</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Audience insights */}
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="font-medium text-gray-700">Audience Insights</h4>
                            <div className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded">Last 30 days</div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            {/* Demographics */}
                            <div>
                              <h5 className="text-sm font-medium mb-3">Demographics</h5>
                              
                              <div className="space-y-2">
                                <div>
                                  <div className="flex justify-between items-center text-xs">
                                    <span className="text-gray-500">Female</span>
                                    <span className="text-gray-700">74%</span>
                                  </div>
                                  <div className="w-full h-2 bg-gray-100 rounded-full mt-1">
                                    <div className="h-2 bg-indigo-500 rounded-full" style={{ width: '74%' }}></div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex justify-between items-center text-xs">
                                    <span className="text-gray-500">Male</span>
                                    <span className="text-gray-700">26%</span>
                                  </div>
                                  <div className="w-full h-2 bg-gray-100 rounded-full mt-1">
                                    <div className="h-2 bg-indigo-500 rounded-full" style={{ width: '26%' }}></div>
                                  </div>
                                </div>
                                
                                <div className="mt-3">
                                  <h6 className="text-xs font-medium text-gray-500 mb-2">Age Distribution</h6>
                                  <div className="flex gap-1 h-16">
                                    {[15, 35, 25, 15, 10].map((value, i) => (
                                      <div key={i} className="flex-1 flex flex-col justify-end">
                                        <div className="bg-indigo-100 hover:bg-indigo-200 rounded-t-sm" style={{ height: `${value * 2}px` }}></div>
                                        <span className="text-xxs text-gray-500 text-center mt-1">{i * 10 + 18}-{(i + 1) * 10 + 17}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Interests */}
                            <div>
                              <h5 className="text-sm font-medium mb-3">Top Interests</h5>
                              
                              <div className="space-y-2 text-xs">
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-600">Skincare</span>
                                  <span className="text-gray-800 font-medium">82%</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full">
                                  <div className="h-1.5 bg-indigo-500 rounded-full" style={{ width: '82%' }}></div>
                                </div>
                                
                                <div className="flex justify-between items-center pt-1">
                                  <span className="text-gray-600">Fitness</span>
                                  <span className="text-gray-800 font-medium">76%</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full">
                                  <div className="h-1.5 bg-indigo-500 rounded-full" style={{ width: '76%' }}></div>
                                </div>
                                
                                <div className="flex justify-between items-center pt-1">
                                  <span className="text-gray-600">Healthy Eating</span>
                                  <span className="text-gray-800 font-medium">65%</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full">
                                  <div className="h-1.5 bg-indigo-500 rounded-full" style={{ width: '65%' }}></div>
                                </div>
                                
                                <div className="flex justify-between items-center pt-1">
                                  <span className="text-gray-600">Sustainable Living</span>
                                  <span className="text-gray-800 font-medium">58%</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full">
                                  <div className="h-1.5 bg-indigo-500 rounded-full" style={{ width: '58%' }}></div>
                                </div>
                                
                                <div className="flex justify-between items-center pt-1">
                                  <span className="text-gray-600">Mental Wellness</span>
                                  <span className="text-gray-800 font-medium">53%</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full">
                                  <div className="h-1.5 bg-indigo-500 rounded-full" style={{ width: '53%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Brand matches */}
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="font-medium text-gray-700">Potential Brand Matches</h4>
                            <div className="text-xs text-indigo-600">See all</div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between items-center p-2 bg-indigo-50 rounded">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-medium">NT</div>
                                <div>
                                  <div className="text-sm font-medium">NatureTone Skincare</div>
                                  <div className="text-xs text-gray-500">94% audience match</div>
                                </div>
                              </div>
                              <div className="text-xs text-indigo-600 font-medium">View Details</div>
                            </div>
                            
                            <div className="flex justify-between items-center p-2 rounded">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium">EF</div>
                                <div>
                                  <div className="text-sm font-medium">EcoFitness</div>
                                  <div className="text-xs text-gray-500">87% audience match</div>
                                </div>
                              </div>
                              <div className="text-xs text-indigo-600 font-medium">View Details</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Creators Love <span className="gradient-heading">StellarVote</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Drive engagement, understand your audience, and increase your earning potential
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="scale-up-hover">
                <CardContent className="p-8">
                  <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Boost Engagement</h3>
                  <p className="text-gray-600">
                    Create interactive polls that get your followers actively participating and sharing their opinions, increasing your reach and engagement.
                  </p>
                </CardContent>
              </Card>

              <Card className="scale-up-hover">
                <CardContent className="p-8">
                  <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Know Your Audience</h3>
                  <p className="text-gray-600">
                    Gain deep insights into what your followers think, like, and want - helping you create content they'll love and share.
                  </p>
                </CardContent>
              </Card>

              <Card className="scale-up-hover">
                <CardContent className="p-8">
                  <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4">
                    <CreditCard className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Monetize Better</h3>
                  <p className="text-gray-600">
                    Attract brand deals with data-backed audience insights, and earn from your audience's participation in sponsored polls.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How StellarVote Works For You
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Simple, effective, and designed for growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create a Poll</h3>
                <p className="text-gray-600">Design engaging questions for your audience in just a few clicks.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Share with Followers</h3>
                <p className="text-gray-600">Post your poll across your social platforms with a single link.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Collect Responses</h3>
                <p className="text-gray-600">Watch as your audience votes and engages with your content.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-indigo-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Analyze & Monetize</h3>
                <p className="text-gray-600">Use insights to improve content and attract brand partnerships.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Creator Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how other creators are growing with StellarVote
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="scale-up-hover">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="flex items-center mb-3">
                        <div className="flex">
                          {Array(5).fill(0).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "StellarVote helped me learn that my audience was much more interested in sustainable fashion than I realized. This led to a brand deal that tripled my monthly income."
                      </p>
                    </div>
                    <div className="mt-auto pt-4">
                      <div className="font-medium">Jessica T.</div>
                      <div className="text-sm text-gray-500">Fashion Creator, 120K followers</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="scale-up-hover">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="flex items-center mb-3">
                        <div className="flex">
                          {Array(5).fill(0).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "I used to guess what my audience wanted. Now I know exactly what content they're looking for, and my views have increased by 45% in just two months."
                      </p>
                    </div>
                    <div className="mt-auto pt-4">
                      <div className="font-medium">Marcus J.</div>
                      <div className="text-sm text-gray-500">Gaming Creator, 75K followers</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="scale-up-hover">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="flex items-center mb-3">
                        <div className="flex">
                          {Array(5).fill(0).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "The data I gathered from StellarVote polls helped me secure a partnership with my dream brand. They were impressed by how well I understood my audience."
                      </p>
                    </div>
                    <div className="mt-auto pt-4">
                      <div className="font-medium">Aisha K.</div>
                      <div className="text-sm text-gray-500">Lifestyle Creator, 220K followers</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Waitlist CTA with Tally Form */}
        <section id="waitlist" className="py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-secondary rounded-3xl p-12 relative overflow-hidden shadow-xl">
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-indigo-200/50 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-purple-200/50 blur-3xl"></div>
              
              <div className="relative z-10 space-y-6 fade-in">
                <Star className="w-12 h-12 text-indigo-600 mx-auto mb-4 fill-indigo-200" />
                <h2 className="text-3xl md:text-4xl font-bold gradient-heading">
                  Ready to Transform Your Creator Journey?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Join the StellarVote waitlist today to be among the first creators to access our platform when we launch.
                </p>
                <div className="max-w-md mx-auto pt-6">
                  <iframe 
                    data-tally-src="https://tally.so/embed/mZyOJz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                    loading="lazy" 
                    width="100%" 
                    height="319" 
                    frameBorder="0" 
                    title="StellarVote Waitlist"
                    className="bg-transparent">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default InfluencersPage;
