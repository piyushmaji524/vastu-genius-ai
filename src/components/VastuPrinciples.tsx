
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const VastuPrinciples = () => {
  const principles = [
    {
      title: "दिशाओं का महत्व",
      description: "वास्तुशास्त्र में आठों दिशाओं का विशेष महत्व है। प्रत्येक दिशा का अपना स्वामी देवता और विशेषताएं हैं।",
      details: [
        { name: "पूर्व", deity: "इंद्र", element: "सूर्य", quality: "ऊर्जा और जीवन शक्ति" },
        { name: "उत्तर", deity: "कुबेर", element: "धन", quality: "समृद्धि और धन" },
        { name: "पश्चिम", deity: "वरुण", element: "जल", quality: "प्रगति और गतिशीलता" },
        { name: "दक्षिण", deity: "यम", element: "अग्नि", quality: "अनुशासन और स्थिरता" },
        { name: "उत्तर-पूर्व (ईशान)", deity: "शिव", element: "आकाश", quality: "आध्यात्मिकता" },
        { name: "दक्षिण-पूर्व (आग्नेय)", deity: "अग्नि", element: "अग्नि", quality: "उत्साह और शक्ति" },
        { name: "दक्षिण-पश्चिम (नैऋत्य)", deity: "नैऋति", element: "पृथ्वी", quality: "स्थिरता और सुरक्षा" },
        { name: "उत्तर-पश्चिम (वायव्य)", deity: "वायु", element: "वायु", quality: "नेतृत्व और संचार" }
      ]
    },
    {
      title: "पांच तत्वों का संतुलन",
      description: "वास्तुशास्त्र पांच मूल तत्वों - पृथ्वी, जल, अग्नि, वायु और आकाश - के संतुलन पर आधारित है। इन तत्वों का सही संतुलन घर में सकारात्मक ऊर्जा लाता है।",
      details: [
        { name: "पृथ्वी", location: "दक्षिण-पश्चिम", represents: "स्थिरता और सुरक्षा" },
        { name: "जल", location: "उत्तर-पूर्व", represents: "शांति और समृद्धि" },
        { name: "अग्नि", location: "दक्षिण-पूर्व", represents: "ऊर्जा और शक्ति" },
        { name: "वायु", location: "उत्तर-पश्चिम", represents: "गति और प्रगति" },
        { name: "आकाश", location: "केंद्र", represents: "स्पष्टता और विस्तार" }
      ]
    },
    {
      title: "ब्रह्मस्थान",
      description: "घर का केंद्रीय भाग 'ब्रह्मस्थान' कहलाता है। यह घर की आत्मा का प्रतिनिधित्व करता है और इसे खुला और साफ रखना चाहिए।",
      details: []
    },
    {
      title: "वास्तु पुरुष",
      description: "वास्तुशास्त्र में मान्यता है कि हर भवन में 'वास्तु पुरुष' का वास होता है। वास्तु पुरुष एक देवता है जिसका सिर उत्तर-पूर्व में और पैर दक्षिण-पश्चिम में होते हैं। वास्तु नियमों का पालन करके वास्तु पुरुष को प्रसन्न रखा जाता है।",
      details: []
    },
    {
      title: "दिशानुसार कमरों का विभाजन",
      description: "वास्तुशास्त्र के अनुसार, घर के विभिन्न कमरे विशिष्ट दिशाओं में होने चाहिए:",
      details: [
        { name: "उत्तर-पूर्व (ईशान)", use: "पूजा कक्ष या जल संबंधी क्षेत्र" },
        { name: "पूर्व", use: "मुख्य प्रवेश द्वार या बच्चों का कमरा" },
        { name: "दक्षिण-पूर्व (आग्नेय)", use: "रसोईघर" },
        { name: "दक्षिण", use: "भंडार कक्ष या अतिथि कक्ष" },
        { name: "दक्षिण-पश्चिम (नैऋत्य)", use: "मास्टर बेडरूम" },
        { name: "पश्चिम", use: "भोजन कक्ष" },
        { name: "उत्तर-पश्चिम (वायव्य)", use: "मेहमान कक्ष या बच्चों का कमरा" },
        { name: "उत्तर", use: "अध्ययन कक्ष या कार्यालय" }
      ]
    },
  ];

  return (
    <div className="space-y-6">
      {principles.map((principle, index) => (
        <Card key={index} className="overflow-hidden border-vastu-gold/30">
          <div className="bg-gradient-to-r from-vastu-brown to-vastu-deepred p-4">
            <h3 className="font-yatra text-xl text-white">{principle.title}</h3>
          </div>
          <CardContent className="pt-4">
            <p className="text-gray-700 mb-4">{principle.description}</p>
            
            {principle.details.length > 0 && (
              <div className="mt-4">
                <Separator className="mb-4 bg-vastu-gold/20" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {principle.details.map((detail, idx) => (
                    <div key={idx} className="bg-secondary/50 p-3 rounded-md">
                      <h4 className="font-semibold text-vastu-brown">{detail.name}</h4>
                      {detail.deity && <p className="text-sm">देवता: {detail.deity}</p>}
                      {detail.element && <p className="text-sm">तत्व: {detail.element}</p>}
                      {detail.quality && <p className="text-sm">गुण: {detail.quality}</p>}
                      {detail.location && <p className="text-sm">स्थान: {detail.location}</p>}
                      {detail.represents && <p className="text-sm">प्रतिनिधित्व: {detail.represents}</p>}
                      {detail.use && <p className="text-sm">उपयोग: {detail.use}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default VastuPrinciples;
