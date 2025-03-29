
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-yatra mb-6 text-vastu-deepred text-center">गोपनीयता नीति</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              वास्तु जीनियस में, हम आपकी गोपनीयता का सम्मान करते हैं और आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि हम कैसे आपकी जानकारी एकत्र, उपयोग और सुरक्षित करते हैं।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">1. एकत्रित की जाने वाली जानकारी</h2>
            <p>
              हम वेबसाइट के माध्यम से आपके द्वारा स्वेच्छा से प्रदान की गई जानकारी एकत्र करते हैं, जैसे कि आपका नाम, ईमेल पता, और आपके द्वारा पूछे गए वास्तु संबंधित प्रश्न।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">2. जानकारी का उपयोग</h2>
            <p>
              हम आपकी जानकारी का उपयोग निम्न उद्देश्यों के लिए करते हैं:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>आपके प्रश्नों का उत्तर देने और आपको वास्तु संबंधित सलाह प्रदान करने के लिए</li>
              <li>आपके अनुभव को अनुकूलित करने और हमारी सेवाओं को बेहतर बनाने के लिए</li>
              <li>नई सुविधाओं और सेवाओं के बारे में आपसे संवाद करने के लिए</li>
            </ul>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">3. जानकारी का साझाकरण</h2>
            <p>
              हम आपकी व्यक्तिगत जानकारी को तीसरे पक्षों के साथ बिना आपकी सहमति के साझा नहीं करते हैं, सिवाय जहां कानून द्वारा आवश्यक हो या नीचे बताए अनुसार:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>हमारी सेवाओं को प्रदान करने में सहायता करने वाले सेवा प्रदाताओं के साथ</li>
              <li>कानूनी अनिवार्यताओं का पालन करने के लिए</li>
              <li>हमारे अधिकारों, गोपनीयता, सुरक्षा, या संपत्ति की रक्षा करने के लिए</li>
            </ul>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">4. कुकीज़ और ट्रैकिंग तकनीक</h2>
            <p>
              हम आपके वेबसाइट उपयोग के बारे में जानकारी एकत्र करने के लिए कुकीज़ और समान तकनीकों का उपयोग करते हैं। आप अपने ब्राउज़र सेटिंग्स में कुकीज़ को अस्वीकार कर सकते हैं, लेकिन इससे हमारी वेबसाइट की कुछ सुविधाएँ प्रभावित हो सकती हैं।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">5. डेटा सुरक्षा</h2>
            <p>
              हम आपकी जानकारी की सुरक्षा के लिए उचित तकनीकी और संगठनात्मक उपाय करते हैं, लेकिन इंटरनेट पर कोई भी प्रसारण या इलेक्ट्रॉनिक स्टोरेज विधि 100% सुरक्षित नहीं है।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">6. आपके अधिकार</h2>
            <p>
              आपके पास अपनी व्यक्तिगत जानकारी तक पहुंचने, सुधारने, या हटाने का अधिकार है। आप हमें contact@vastugenius.com पर ईमेल भेजकर इन अधिकारों का प्रयोग कर सकते हैं।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">7. नीति में परिवर्तन</h2>
            <p>
              हम इस गोपनीयता नीति को समय-समय पर अपडेट कर सकते हैं। किसी भी परिवर्तन के बारे में आपको सूचित करने के लिए हम इस पृष्ठ पर एक नोटिस पोस्ट करेंगे।
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

export default PrivacyPage;
