
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VastuPrinciples from '@/components/VastuPrinciples';
import { Compass } from 'lucide-react';

const PrinciplesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 vastu-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <div className="mb-12 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-vastu-gold rounded-full flex items-center justify-center">
                  <Compass size={32} className="text-vastu-maroon" />
                </div>
              </div>
              
              <h1 className="text-3xl font-yatra mb-4 text-vastu-deepred">वास्तु के मूल सिद्धांत</h1>
              <p className="text-gray-700">
                वास्तुशास्त्र एक प्राचीन भारतीय ज्ञान प्रणाली है जो स्थापत्य, डिजाइन और निर्माण के सिद्धांतों पर आधारित है। यह पांच तत्वों - पृथ्वी, जल, अग्नि, वायु और आकाश - के संतुलन पर केंद्रित है।
              </p>
            </div>
            
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-10">
              <div className="prose prose-stone max-w-none">
                <h2 className="font-yatra text-xl text-vastu-deepred mb-4">वास्तुशास्त्र का परिचय</h2>
                
                <p>
                  वास्तुशास्त्र का इतिहास लगभग 5000 से 6000 वर्ष पुराना है और यह वेदों का एक महत्वपूर्ण अंग है। प्राचीन काल में मंदिरों, महलों और अन्य भवनों के निर्माण में वास्तुशास्त्र के सिद्धांतों का पालन किया जाता था।
                </p>
                
                <p>
                  वास्तुशास्त्र का मुख्य उद्देश्य मनुष्य और प्रकृति के बीच सामंजस्य स्थापित करना है। इसके अनुसार, जब हम प्रकृति के नियमों के अनुसार अपने घर या कार्यालय का निर्माण करते हैं, तो वहां सकारात्मक ऊर्जा का प्रवाह होता है, जिससे निवासियों का स्वास्थ्य, समृद्धि और खुशहाली में वृद्धि होती है।
                </p>
                
                <p>
                  वास्तुशास्त्र विज्ञान और आध्यात्मिकता का अद्भुत संगम है। यह सूर्य की किरणों, पृथ्वी के चुंबकीय क्षेत्र, दिशाओं और पंचतत्वों के प्रभाव पर आधारित है। वास्तु के अनुसार, हर दिशा का अपना महत्व और प्रभाव होता है, और इसलिए घर के विभिन्न हिस्सों का निर्माण विशिष्ट दिशाओं में करना चाहिए।
                </p>
              </div>
            </div>
            
            {/* Vastu Principles */}
            <VastuPrinciples />
            
            {/* Tips Section */}
            <div className="mt-12 bg-secondary/50 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-yatra mb-6 text-vastu-deepred">घर के लिए सरल वास्तु टिप्स</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-semibold text-vastu-brown mb-2">मुख्य द्वार</h3>
                  <p className="text-gray-700 text-sm">
                    मुख्य द्वार पूर्व, उत्तर या उत्तर-पूर्व दिशा में होना चाहिए। द्वार के सामने कोई अवरोध नहीं होना चाहिए।
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-semibold text-vastu-brown mb-2">रसोईघर</h3>
                  <p className="text-gray-700 text-sm">
                    रसोईघर दक्षिण-पूर्व कोने में होना चाहिए। रसोई बनाते समय मुख पूर्व दिशा की ओर होना चाहिए।
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-semibold text-vastu-brown mb-2">पूजा कक्ष</h3>
                  <p className="text-gray-700 text-sm">
                    पूजा कक्ष उत्तर-पूर्व (ईशान) कोने में होना चाहिए। पूजा करते समय मुख पूर्व या उत्तर दिशा की ओर होना चाहिए।
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-semibold text-vastu-brown mb-2">बेडरूम</h3>
                  <p className="text-gray-700 text-sm">
                    मास्टर बेडरूम दक्षिण-पश्चिम कोने में होना चाहिए। सोते समय सिर दक्षिण या पश्चिम दिशा की ओर और पैर उत्तर या पूर्व दिशा की ओर होने चाहिए।
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-semibold text-vastu-brown mb-2">बाथरूम और शौचालय</h3>
                  <p className="text-gray-700 text-sm">
                    बाथरूम और शौचालय दक्षिण-पश्चिम या उत्तर-पश्चिम कोने में होने चाहिए। इन्हें कभी भी उत्तर-पूर्व कोने में न बनाएं।
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-semibold text-vastu-brown mb-2">अध्ययन कक्ष</h3>
                  <p className="text-gray-700 text-sm">
                    अध्ययन कक्ष पूर्व या उत्तर दिशा में होना चाहिए। अध्ययन करते समय मुख पूर्व या उत्तर दिशा की ओर होना चाहिए।
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

export default PrinciplesPage;
