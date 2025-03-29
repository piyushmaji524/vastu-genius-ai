import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  return <div className="bg-gradient-to-b from-vastu-cream to-white vastu-pattern py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-vastu-gold rounded-full flex items-center justify-center animate-float shadow-lg">
              <span className="text-vastu-maroon text-3xl font-bold font-yatra">वा</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-yatra mb-4 text-vastu-deepred">
            अपने घर और जीवन के लिए <span className="text-vastu-orange">वास्तु जीनियस </span>
          </h1>
          
          <p className="mb-8 text-lg max-w-2xl mx-auto text-gray-700">
            प्राचीन वास्तुशास्त्र और आधुनिक AI तकनीक का अनूठा मिश्रण आपके घर और कार्यालय के लिए सर्वोत्तम समाधान प्रदान करता है।
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild className="bg-vastu-deepred hover:bg-vastu-maroon text-white">
              <Link to="/ask">
                वास्तु प्रश्न पूछें
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="border-vastu-gold text-vastu-brown hover:bg-vastu-gold/10">
              <Link to="/principles">
                वास्तु सिद्धांत जानें
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;