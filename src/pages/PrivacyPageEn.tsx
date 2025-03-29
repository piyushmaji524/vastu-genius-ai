
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPageEn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-yatra mb-6 text-vastu-deepred text-center">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              At Vastu Genius, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide through the Website, such as your name, email address, and Vastu-related questions you ask.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">2. Use of Information</h2>
            <p>
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your questions and provide you with Vastu-related advice</li>
              <li>To personalize your experience and improve our services</li>
              <li>To communicate with you about new features and services</li>
            </ul>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">3. Sharing of Information</h2>
            <p>
              We do not share your personal information with third parties without your consent, except where required by law or as described below:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With service providers who help us provide our services</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to collect information about your Website usage. You can refuse cookies in your browser settings, but this may affect some features of the Website.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">5. Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your information, but no transmission over the Internet or electronic storage method is 100% secure.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You can exercise these rights by emailing us at contact@vastugenius.com.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">7. Changes to Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post a notice on this page to inform you of any changes.
            </p>
            
            <p className="text-sm text-gray-500 mt-8">
              Last Updated: July 1, 2024
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPageEn;
