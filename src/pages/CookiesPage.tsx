
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-yatra mb-6 text-vastu-deepred text-center">कुकीज़ नीति</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              यह कुकीज़ नीति समझाती है कि वास्तु जीनियस वेबसाइट कुकीज़ और समान तकनीकों का उपयोग कैसे करती है। हम आपको एक बेहतर अनुभव प्रदान करने के लिए कुकीज़ का उपयोग करते हैं।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">1. कुकीज़ क्या हैं?</h2>
            <p>
              कुकीज़ छोटी पाठ फाइलें हैं जो आपके कंप्यूटर या मोबाइल डिवाइस पर संग्रहीत की जाती हैं जब आप हमारी वेबसाइट पर जाते हैं। वे वेबसाइट की कार्यक्षमता और प्रदर्शन के लिए महत्वपूर्ण हैं और अक्सर आपके उपयोगकर्ता अनुभव को बेहतर बनाने के लिए आवश्यक होते हैं।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">2. हम किस प्रकार की कुकीज़ का उपयोग करते हैं?</h2>
            <p>
              हम निम्नलिखित प्रकार की कुकीज़ का उपयोग करते हैं:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>आवश्यक कुकीज़:</strong> ये वेबसाइट के ठीक से काम करने के लिए आवश्यक हैं और इन्हें हमारी सेवाओं का उपयोग करने के लिए सक्षम किया जाना चाहिए।</li>
              <li><strong>प्रदर्शन कुकीज़:</strong> ये हमें वेबसाइट के प्रदर्शन और कार्यक्षमता की निगरानी करने में मदद करती हैं।</li>
              <li><strong>कार्यात्मक कुकीज़:</strong> ये हमें आपकी पसंद को याद रखने और बेहतर सुविधाएँ प्रदान करने में मदद करती हैं।</li>
              <li><strong>विश्लेषणात्मक/प्रदर्शन कुकीज़:</strong> ये हमें अपनी वेबसाइट के उपयोग को समझने और विश्लेषण करने में मदद करती हैं।</li>
            </ul>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">3. कुकीज़ का प्रबंधन</h2>
            <p>
              अधिकांश वेब ब्राउज़र स्वचालित रूप से कुकीज़ स्वीकार करते हैं, लेकिन आप अपने ब्राउज़र सेटिंग्स को संशोधित करके कुकीज़ को ब्लॉक या हटा सकते हैं। हालांकि, यदि आप कुकीज़ को अक्षम करते हैं, तो आप हमारी वेबसाइट की कुछ सुविधाओं तक नहीं पहुंच पाएंगे।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">4. तृतीय-पक्ष कुकीज़</h2>
            <p>
              हम विश्लेषण, विज्ञापन और सोशल मीडिया एकीकरण के उद्देश्यों के लिए तृतीय-पक्ष सेवाओं का उपयोग करते हैं। ये सेवाएँ अपनी कुकीज़ सेट कर सकती हैं, जिन पर हमारा कोई नियंत्रण नहीं है। ये कुकीज़ उन सेवाओं की गोपनीयता नीतियों के अधीन हैं।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">5. हमारी कुकीज़ नीति में परिवर्तन</h2>
            <p>
              हम इस कुकीज़ नीति को आवश्यकतानुसार अपडेट कर सकते हैं। जब हम महत्वपूर्ण परिवर्तन करते हैं, तो हम आपको वेबसाइट पर एक नोटिस प्रदान करेंगे।
            </p>
            
            <h2 className="text-xl font-yatra text-vastu-brown mt-4">6. हमसे संपर्क करें</h2>
            <p>
              यदि आपके पास हमारी कुकीज़ नीति के बारे में कोई प्रश्न हैं, तो कृपया हमसे contact@vastugenius.com पर संपर्क करें।
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

export default CookiesPage;
