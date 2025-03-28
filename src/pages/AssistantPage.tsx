
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VastuAssistant from '@/components/VastuAssistant';
import { MessageSquare, Mic, Volume2 } from 'lucide-react';

const AssistantPage = () => {
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
                  <MessageSquare size={32} className="text-vastu-maroon" />
                </div>
              </div>
              
              <h1 className="text-3xl font-yatra mb-4 text-vastu-deepred">वास्तु AI सहायक</h1>
              <p className="text-gray-700 max-w-2xl mx-auto">
                हमारे AI सहायक से वास्तु शास्त्र के बारे में अपने प्रश्न पूछें। आप लिख सकते हैं या अपनी आवाज का उपयोग करके बात कर सकते हैं।
              </p>
            </div>
            
            {/* Assistant */}
            <VastuAssistant />
            
            {/* Features */}
            <div className="mt-16">
              <h2 className="text-2xl font-yatra mb-8 text-center text-vastu-deepred">AI सहायक की विशेषताएं</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <MessageSquare size={36} className="text-vastu-deepred" />
                  </div>
                  <h3 className="font-yatra text-lg mb-2 text-vastu-brown">टेक्स्ट चैट</h3>
                  <p className="text-gray-600 text-sm">
                    अपने वास्तु प्रश्न टाइप करें और तुरंत विस्तृत उत्तर प्राप्त करें।
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Mic size={36} className="text-vastu-deepred" />
                  </div>
                  <h3 className="font-yatra text-lg mb-2 text-vastu-brown">वॉयस कमांड</h3>
                  <p className="text-gray-600 text-sm">
                    अपनी आवाज के साथ प्रश्न पूछें - बस माइक बटन दबाएं और बोलें।
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Volume2 size={36} className="text-vastu-deepred" />
                  </div>
                  <h3 className="font-yatra text-lg mb-2 text-vastu-brown">वॉयस रिस्पांस</h3>
                  <p className="text-gray-600 text-sm">
                    AI सहायक आपके प्रश्न का उत्तर आवाज में भी देगा।
                  </p>
                </div>
              </div>
            </div>
            
            {/* Usage Tips */}
            <div className="mt-16 bg-secondary/50 rounded-lg p-6 md:p-8">
              <h2 className="text-xl font-yatra mb-6 text-vastu-deepred">AI सहायक का उपयोग कैसे करें</h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-semibold text-vastu-brown mb-2">1. स्पष्ट प्रश्न पूछें</h3>
                  <p className="text-gray-700 text-sm">
                    जितना स्पष्ट प्रश्न होगा, उतना ही सटीक उत्तर मिलेगा। उदाहरण: "मेरे घर का मुख्य द्वार किस दिशा में होना चाहिए?"
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-semibold text-vastu-brown mb-2">2. वॉयस कमांड का उपयोग करें</h3>
                  <p className="text-gray-700 text-sm">
                    माइक बटन पर क्लिक करें और अपना प्रश्न बोलें। बोलना समाप्त होने पर माइक बटन पर फिर से क्लिक करें।
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-semibold text-vastu-brown mb-2">3. विस्तृत जानकारी दें</h3>
                  <p className="text-gray-700 text-sm">
                    यदि आप अपने घर या संपत्ति के बारे में प्रश्न पूछ रहे हैं, तो अधिक विस्तृत जानकारी दें, जैसे दिशा, आकार आदि।
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-semibold text-vastu-brown mb-2">4. फॉलो-अप प्रश्न पूछें</h3>
                  <p className="text-gray-700 text-sm">
                    यदि आपको पहले उत्तर से संतुष्टि नहीं हुई है, तो फॉलो-अप प्रश्न पूछें या अधिक विवरण मांगें।
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

export default AssistantPage;
