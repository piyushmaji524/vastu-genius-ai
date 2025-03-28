
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-vastu-maroon to-vastu-brown text-vastu-cream py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-yatra mb-4">वास्तु जीनियस के बारे में</h3>
            <p className="text-sm">
              वास्तु जीनियस एक AI-संचालित वास्तुशास्त्र वेबसाइट है जो आपको अपने घर और कार्यालय के लिए वास्तु सुझाव प्रदान करती है। हमारा लक्ष्य प्राचीन वास्तु ज्ञान को आधुनिक तकनीक के साथ जोड़ना है।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-yatra mb-4">जल्दी लिंक</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-vastu-gold transition-colors">होम</Link></li>
              <li><Link to="/blog" className="hover:text-vastu-gold transition-colors">ब्लॉग</Link></li>
              <li><Link to="/ask" className="hover:text-vastu-gold transition-colors">प्रश्न पूछें</Link></li>
              <li><Link to="/principles" className="hover:text-vastu-gold transition-colors">वास्तु सिद्धांत</Link></li>
              <li><Link to="/assistant" className="hover:text-vastu-gold transition-colors">AI सहायक</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-yatra mb-4">हमसे जुड़ें</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-vastu-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-vastu-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-vastu-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact@vastugenius.com" className="hover:text-vastu-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="mt-4 text-sm">contact@vastugenius.com</p>
          </div>
        </div>

        <div className="border-t border-vastu-cream/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} वास्तु जीनियस AI। सर्वाधिकार सुरक्षित।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
