
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Separator } from '@/components/ui/separator';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: May 16, 2025</p>
          
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                These Terms of Service constitute a legally binding agreement made between you and StellarVote ("we," "our," or "us"), concerning your access to and use of the StellarVote website and services.
              </p>
              <p className="text-gray-600">
                By accessing or using StellarVote, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
              <p className="text-gray-600">
                StellarVote provides a platform for influencers to create polls, collect audience insights, and connect with brands. Our services may include audience analytics, content optimization recommendations, and connection to potential brand partnerships based on audience data and preferences.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">Account Registration</h3>
                <p className="text-gray-600">
                  To access certain features of our platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">Account Security</h3>
                <p className="text-gray-600">
                  You are responsible for safeguarding the password that you use to access our services and for any activities or actions under your account. We encourage you to use "strong" passwords with your account.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Account Termination</h3>
                <p className="text-gray-600">
                  We reserve the right to suspend or terminate your account if you violate these Terms or if your account has been inactive for an extended period.
                </p>
              </div>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. User Content</h2>
              <p className="text-gray-600 mb-4">
                Our platform may allow you to create, upload, or share content. You retain ownership of all content you submit, but grant us a license to use, modify, display, and distribute that content in connection with our services.
              </p>
              <p className="text-gray-600">
                You are solely responsible for your content and must have all necessary rights to submit it. Content that violates our guidelines or applicable laws may be removed, and repeated violations may result in account termination.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Prohibited Activities</h2>
              <p className="text-gray-600 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Use our services for any illegal purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Submit false or misleading information</li>
                <li>Upload or transmit viruses or malicious code</li>
                <li>Attempt to interfere with or disrupt our services</li>
                <li>Access or use our services in an unauthorized manner</li>
                <li>Collect user information without permission</li>
              </ul>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                The StellarVote platform, including its original content, features, functionality, and design, is owned by StellarVote and protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-600">
                Our name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of StellarVote or its affiliates or licensors. You must not use such marks without our prior written permission.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Disclaimers</h2>
              <p className="text-gray-600">
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will meet your requirements, be available on an uninterrupted, timely, secure, or error-free basis, or that the results that may be obtained from the use of our services will be accurate or reliable.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600">
                To the maximum extent permitted by law, StellarVote shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from or in connection with your access to or use of our services or your inability to access or use our services.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the changes becoming effective.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> <a href="mailto:legal@stellarvote.com" className="text-purple-600 hover:underline">legal@stellarvote.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Terms;
