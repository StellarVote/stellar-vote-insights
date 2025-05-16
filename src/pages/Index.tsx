
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import DashboardPreview from '@/components/DashboardPreview';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialSection from '@/components/TestimonialSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <DashboardPreview />
        <HowItWorksSection />
        <TestimonialSection />
        <div id="waitlist">
          <CallToAction />
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
