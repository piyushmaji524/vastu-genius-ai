
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsPageEn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-yatra mb-6 text-vastu-deepred text-center">Terms of Use</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              By using the Vastu Genius website ("Website"), you agree to these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use the Website.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">1. Use of Website</h2>
            <p>
              You agree to use the Website only for personal, non-commercial purposes and in accordance with applicable laws and regulations. You will not use the Website for any illegal or unauthorized purpose.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">2. Intellectual Property Rights</h2>
            <p>
              The Website and its content, including text, graphics, logos, icons, images, and software, are the property of Vastu Genius or its licensors and are protected by Indian and international intellectual property laws.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">3. Limitation of Liability</h2>
            <p>
              Vastu Genius will not be liable for any loss or damage resulting from any advice, information, or suggestions provided on the Website. The information provided on the Website is for general informational purposes only and should not be considered as Vastu advice.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">4. Disclaimer of Warranty</h2>
            <p>
              The Website is provided on an "as is" and "as available" basis, without any warranties of any kind, express or implied. Vastu Genius does not warrant that the Website will be continuous, secure, or error-free.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">5. Changes to Terms</h2>
            <p>
              Vastu Genius reserves the right to modify these Terms at any time. Changes will be effective after they are posted on the Website. Your continued use of the Website will constitute your acceptance of the modified Terms.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">6. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India.
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

export default TermsPageEn;
