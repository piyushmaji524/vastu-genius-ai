
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DisclaimerPageEn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-yatra mb-6 text-vastu-deepred text-center">Disclaimer</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              Please read this disclaimer carefully before using the Vastu Genius website.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">1. General Information</h2>
            <p>
              The information available on the Vastu Genius website is provided for general information purposes only. It is based on the principles of Vastu Shastra but should not be considered a substitute for professional Vastu advice.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">2. AI-Based Advice</h2>
            <p>
              Our website uses artificial intelligence (AI) technology that provides information and suggestions based on the principles of Vastu Shastra. However, AI technology has limitations, and the information provided may not always be accurate or suitable for your specific circumstances.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">3. Limitation of Liability</h2>
            <p>
              Vastu Genius and its creators/operators will not be liable for any direct, indirect, incidental, consequential, or special damages resulting from the use of the Website or reliance on the information provided on the Website.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">4. No Guarantee of Accuracy</h2>
            <p>
              We do not guarantee the accuracy, completeness, or usefulness of the information provided on the Website. We reserve the right to correct errors or inaccuracies in the Website, but we are not obligated to do so.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">5. Links to External Sites</h2>
            <p>
              Our Website may provide links to other websites that are not under our control. We are not responsible for the content, privacy policies, or practices of such websites.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">6. Professional Advice</h2>
            <p>
              Before making any significant Vastu-related decisions, we advise you to consult with a qualified Vastu expert. The information on our Website is not a substitute for professional Vastu consultation.
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

export default DisclaimerPageEn;
