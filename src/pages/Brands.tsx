
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, BarChart3, UserCheck, TrendingUp, Award, PieChart, Users, MessageCircle, Bell, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Toaster } from '@/components/ui/toaster';

const BrandsPage = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
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
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <div className="space-y-6 fade-in">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                    <span>For Brands & Agencies</span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Unlock authentic <span className="gradient-heading">audience insights</span> through creator collaborations
                  </h1>
                  <p className="text-lg text-gray-600 max-w-xl">
                    StellarVote helps brands connect with the right influencers based on verified audience data and real engagement metrics.
                  </p>
                  <div className="pt-4">
                    <button className="gradient-bg text-lg text-white px-6 py-3 rounded-lg" onClick={scrollToContact}>Get in Touch</button>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative">
                {/* Detailed Brand Dashboard Mockup */}
                <div className="relative w-full aspect-[4/3] bg-white rounded-xl shadow-lg overflow-hidden fade-in border border-gray-200" style={{ animationDelay: '300ms' }}>
                  <div className="absolute inset-0 flex flex-col">
                    {/* Dashboard header */}
                    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-800">Brand Analytics Dashboard</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <Bell className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-purple-600">BR</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Dashboard content */}
                    <div className="flex-1 grid grid-cols-3 gap-4 p-6 bg-gray-50">
                      {/* Left column */}
                      <div className="col-span-2 space-y-4">
                        {/* Stats cards */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <div className="text-sm text-gray-500 mb-1">Total Reach</div>
                            <div className="text-xl font-semibold">4.7M</div>
                            <div className="flex items-center text-xs text-green-600 mt-2">
                              <span className="flex items-center"><TrendingUp className="w-3 h-3 mr-1" />+12.4%</span>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <div className="text-sm text-gray-500 mb-1">Engagement</div>
                            <div className="text-xl font-semibold">328K</div>
                            <div className="flex items-center text-xs text-green-600 mt-2">
                              <span className="flex items-center"><TrendingUp className="w-3 h-3 mr-1" />+8.2%</span>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <div className="text-sm text-gray-500 mb-1">Conversions</div>
                            <div className="text-xl font-semibold">15.3K</div>
                            <div className="flex items-center text-xs text-green-600 mt-2">
                              <span className="flex items-center"><TrendingUp className="w-3 h-3 mr-1" />+21.6%</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Chart */}
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-48 flex flex-col">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="font-medium text-gray-700">Campaign Performance</h4>
                            <div className="flex gap-2">
                              <div className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">Weekly</div>
                              <div className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">Monthly</div>
                            </div>
                          </div>
                          
                          {/* Chart mockup */}
                          <div className="flex-1 flex items-end">
                            <div className="w-full grid grid-cols-7 gap-2 h-32">
                              {[40, 65, 45, 80, 60, 75, 90].map((height, index) => (
                                <div key={index} className="flex flex-col items-center">
                                  <div className="w-full bg-purple-100 rounded-sm" style={{ height: `${height}%` }}>
                                    <div className="w-full bg-purple-500 rounded-sm" style={{ height: `${height * 0.65}%` }}></div>
                                  </div>
                                  <span className="text-xs text-gray-400 mt-1">D{index + 1}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right column */}
                      <div className="space-y-4">
                        {/* Audience insights */}
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                          <h4 className="font-medium text-gray-700 mb-3">Audience Insights</h4>
                          
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Female</span>
                                <span className="text-gray-700">68%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-100 rounded-full mt-1">
                                <div className="h-2 bg-purple-500 rounded-full" style={{ width: '68%' }}></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Male</span>
                                <span className="text-gray-700">32%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-100 rounded-full mt-1">
                                <div className="h-2 bg-purple-500 rounded-full" style={{ width: '32%' }}></div>
                              </div>
                            </div>
                            
                            <div className="pt-2">
                              <div className="text-xs text-gray-500 mb-2">Age Groups</div>
                              <div className="grid grid-cols-3 gap-1">
                                <div className="text-center p-1 bg-purple-100 rounded">
                                  <div className="text-xs font-medium text-purple-700">18-24</div>
                                  <div className="text-xs text-gray-500">32%</div>
                                </div>
                                <div className="text-center p-1 bg-purple-200 rounded">
                                  <div className="text-xs font-medium text-purple-700">25-34</div>
                                  <div className="text-xs text-gray-500">45%</div>
                                </div>
                                <div className="text-center p-1 bg-purple-100 rounded">
                                  <div className="text-xs font-medium text-purple-700">35-44</div>
                                  <div className="text-xs text-gray-500">23%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Top interests */}
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                          <h4 className="font-medium text-gray-700 mb-3">Top Interests</h4>
                          <div className="space-y-2">
                            <div className="bg-gray-50 rounded px-3 py-2 text-sm flex justify-between">
                              <span>Beauty & Skincare</span>
                              <span className="font-medium">76%</span>
                            </div>
                            <div className="bg-gray-50 rounded px-3 py-2 text-sm flex justify-between">
                              <span>Wellness</span>
                              <span className="font-medium">64%</span>
                            </div>
                            <div className="bg-gray-50 rounded px-3 py-2 text-sm flex justify-between">
                              <span>Sustainable Living</span>
                              <span className="font-medium">58%</span>
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

        {/* Value Proposition */}
        <section className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Work with <span className="gradient-heading">StellarVote</span> Creators
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Go beyond engagement metrics by understanding exactly what audiences think about your brand
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="scale-up-hover">
                <CardContent className="p-8">
                  <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                    <UserCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Verified Audience Data</h3>
                  <p className="text-gray-600">
                    Access real-time polling data that shows exactly what creator audiences think about your brand or product category.
                  </p>
                </CardContent>
              </Card>

              <Card className="scale-up-hover">
                <CardContent className="p-8">
                  <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Measurable ROI</h3>
                  <p className="text-gray-600">
                    Understand the true impact of your campaigns with before-and-after sentiment analysis and conversion metrics.
                  </p>
                </CardContent>
              </Card>

              <Card className="scale-up-hover">
                <CardContent className="p-8">
                  <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Trend Forecasting</h3>
                  <p className="text-gray-600">
                    Identify emerging trends and consumer preferences within specific creator audiences before they go mainstream.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how brands are using StellarVote to drive better results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="scale-up-hover">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="text-sm font-medium text-purple-600 mb-1">Beauty Brand</div>
                      <h3 className="text-xl font-semibold mb-2">20% Increase in Conversion Rate</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      A skincare brand used StellarVote data to identify which product features resonated most with their target audience, resulting in more effective messaging and higher conversion rates.
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">5 influencer partnerships</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">150K+ audience members polled</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="scale-up-hover">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="text-sm font-medium text-purple-600 mb-1">Food & Beverage</div>
                      <h3 className="text-xl font-semibold mb-2">35% Higher Engagement Than Previous Campaigns</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      A beverage company used audience polling data to refine their product launch strategy, selecting influencers whose audiences showed the highest interest in their category.
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">3 targeted creator partnerships</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">75K+ product samples requested</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section with Tally Form */}
        <section id="contact" className="py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-secondary rounded-3xl p-12 relative overflow-hidden shadow-xl">
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-purple-200/50 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-indigo-200/50 blur-3xl"></div>
              
              <div className="relative z-10 space-y-6 fade-in">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold gradient-heading">
                  Ready to Partner with Influential Creators?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Get in touch with our brand partnerships team to discover how StellarVote can help you find the perfect creators for your next campaign.
                </p>
                <div className="pt-6 max-w-md mx-auto">
                  <iframe 
                    data-tally-src="https://tally.so/embed/m65K6J?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                    loading="lazy" 
                    width="100%" 
                    height="177" 
                    frameBorder="0" 
                    title="Sales Contact"
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

export default BrandsPage;
