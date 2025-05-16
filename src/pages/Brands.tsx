
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, BarChart3, UserCheck, TrendingUp, Award } from 'lucide-react';
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
                    <Button className="gradient-bg text-lg" onClick={scrollToContact}>Get in Touch</Button>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="relative w-full aspect-[4/3] bg-white rounded-xl shadow-lg overflow-hidden fade-in border border-gray-200" style={{ animationDelay: '300ms' }}>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-full h-full bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-24 h-24 text-purple-500 opacity-80" />
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

        {/* Contact Section */}
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
                <div className="pt-6">
                  <Button className="gradient-bg text-lg px-8 py-6" size="lg">
                    Contact Our Brand Team
                  </Button>
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
