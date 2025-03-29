
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-yatra mb-6 text-vastu-deepred text-center">अस्वीकरण</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              वास्तु जीनियस वेबसाइट का उपयोग करने से पहले कृपया इस अस्वीकरण को ध्यान से पढ़ें।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">1. सामान्य जानकारी</h2>
            <p>
              वास्तु जीनियस वेबसाइट पर उपलब्ध जानकारी केवल सामान्य जानकारी उद्देश्यों के लिए प्रदान की गई है। यह वास्तु शास्त्र के सिद्धांतों पर आधारित है, लेकिन इसे पेशेवर वास्तु सलाह के विकल्प के रूप में नहीं माना जाना चाहिए।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">2. AI-आधारित सलाह</h2>
            <p>
              हमारी वेबसाइट कृत्रिम बुद्धिमत्ता (AI) तकनीक का उपयोग करती है जो वास्तु शास्त्र के सिद्धांतों पर आधारित जानकारी और सुझाव प्रदान करती है। हालांकि, AI तकनीक की सीमाएं हैं और इससे प्राप्त जानकारी हमेशा सटीक या आपकी विशिष्ट परिस्थितियों के लिए उपयुक्त नहीं हो सकती है।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">3. उत्तरदायित्व की सीमा</h2>
            <p>
              वास्तु जीनियस और इसके निर्माता/संचालक वेबसाइट के उपयोग या वेबसाइट पर प्रदान की गई जानकारी पर निर्भरता के परिणामस्वरूप होने वाले किसी भी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक, परिणामी या विशेष नुकसान के लिए उत्तरदायी नहीं होंगे।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">4. सटीकता की कोई गारंटी नहीं</h2>
            <p>
              हम वेबसाइट पर प्रदान की गई जानकारी की सटीकता, पूर्णता या उपयोगिता की कोई गारंटी नहीं देते हैं। हम वेबसाइट में त्रुटियों या अशुद्धियों को सुधारने का अधिकार सुरक्षित रखते हैं, लेकिन ऐसा करने के लिए बाध्य नहीं हैं।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">5. बाहरी साइटों के लिंक</h2>
            <p>
              हमारी वेबसाइट अन्य वेबसाइटों के लिंक प्रदान कर सकती है जो हमारे नियंत्रण में नहीं हैं। ऐसी वेबसाइटों पर मौजूद सामग्री, गोपनीयता नीतियों या प्रथाओं के लिए हम जिम्मेदार नहीं हैं।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">6. पेशेवर सलाह</h2>
            <p>
              कोई भी महत्वपूर्ण वास्तु संबंधित निर्णय लेने से पहले, हम आपको एक योग्य वास्तु विशेषज्ञ से परामर्श करने की सलाह देते हैं। हमारी वेबसाइट पर दी गई जानकारी पेशेवर वास्तु परामर्श का विकल्प नहीं है।
            </p>
            
            <p className="text-sm text-gray-500 mt-8">
              अंतिम अपडेट: 1 जुलाई, 2024
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DisclaimerPage;
