
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AskQuestion from '@/components/AskQuestion';
import { QuestionMarkIcon } from 'lucide-react';

const AskPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 vastu-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-vastu-gold rounded-full flex items-center justify-center">
                  <QuestionMarkIcon size={32} className="text-vastu-maroon" />
                </div>
              </div>
              
              <h1 className="text-3xl font-yatra mb-4 text-vastu-deepred">वास्तु प्रश्न पूछें</h1>
              <p className="text-gray-700">
                आप अपने घर, कार्यालय या किसी भी संपत्ति के बारे में वास्तु संबंधित प्रश्न पूछ सकते हैं। हमारा AI आपको वास्तु शास्त्र के अनुसार उत्तर देगा।
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <AskQuestion fullPage={true} />
            </div>
            
            <div className="mt-12 bg-secondary/50 rounded-lg p-6">
              <h2 className="text-xl font-yatra mb-4 text-vastu-brown">अक्सर पूछे जाने वाले प्रश्न</h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-semibold text-vastu-deepred mb-2">मेरे घर का मुख्य द्वार किस दिशा में होना चाहिए?</h3>
                  <p className="text-gray-700 text-sm">
                    वास्तुशास्त्र के अनुसार, घर का मुख्य द्वार पूर्व, उत्तर या उत्तर-पूर्व दिशा में होना सबसे शुभ माना जाता है। इन दिशाओं से सूर्य की किरणें घर में प्रवेश करती हैं, जो सकारात्मक ऊर्जा लाती हैं।
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-semibold text-vastu-deepred mb-2">रसोईघर किस दिशा में होना चाहिए?</h3>
                  <p className="text-gray-700 text-sm">
                    वास्तुशास्त्र के अनुसार, रसोईघर दक्षिण-पूर्व (आग्नेय कोण) में होना चाहिए। यह अग्नि तत्व का स्थान है, जो भोजन पकाने के लिए उपयुक्त है।
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-semibold text-vastu-deepred mb-2">बेडरूम की सही वास्तु क्या है?</h3>
                  <p className="text-gray-700 text-sm">
                    मास्टर बेडरूम दक्षिण-पश्चिम कोने में होना चाहिए। बिस्तर इस तरह रखें कि सिर दक्षिण या पश्चिम दिशा की ओर हो और पैर उत्तर या पूर्व दिशा की ओर हों। बिस्तर कभी भी सीधे दरवाजे के सामने नहीं होना चाहिए।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AskPage;
