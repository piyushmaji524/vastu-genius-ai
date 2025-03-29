
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiesPageEn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-yatra mb-6 text-vastu-deepred text-center">Cookies Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              This Cookies Policy explains how the Vastu Genius website uses cookies and similar technologies. We use cookies to provide you with a better experience.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit our website. They are essential for the functionality and performance of the website and are often necessary to enhance your user experience.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">2. Types of Cookies We Use</h2>
            <p>
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly and must be enabled to use our services.</li>
              <li><strong>Performance Cookies:</strong> These help us monitor the performance and functionality of the website.</li>
              <li><strong>Functional Cookies:</strong> These help us remember your preferences and provide enhanced features.</li>
              <li><strong>Analytical/Performance Cookies:</strong> These help us understand and analyze how our website is used.</li>
            </ul>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">3. Managing Cookies</h2>
            <p>
              Most web browsers accept cookies automatically, but you can modify your browser settings to block or delete cookies. However, if you disable cookies, you may not be able to access certain features of our website.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">4. Third-Party Cookies</h2>
            <p>
              We use third-party services for analytics, advertising, and social media integration purposes. These services may set their own cookies, which we have no control over. These cookies are subject to the privacy policies of those services.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">5. Changes to Our Cookies Policy</h2>
            <p>
              We may update this Cookies Policy as necessary. When we make significant changes, we will provide a notice on the website.
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">6. Contact Us</h2>
            <p>
              If you have any questions about our Cookies Policy, please contact us at contact@vastugenius.com.
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

export default CookiesPageEn;
