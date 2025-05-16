import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Users, MessageCircle, CreditCard, Star } from 'lucide-react';
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
                <div className="relative w-full aspect-[4/3] bg-white rounded-xl shadow-lg overflow-hidden fade-in border border-gray-200" style={{ animationDelay: '300ms' }}>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
                      <Users className="w-24 h-24 text-indigo-500 opacity-80" />
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
