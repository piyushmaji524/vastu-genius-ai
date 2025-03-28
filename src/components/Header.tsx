
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Book, MessageCircle, HelpCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-vastu-brown to-vastu-maroon shadow-md sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-vastu-gold rounded-full flex items-center justify-center">
              <span className="text-vastu-maroon text-xl font-bold">वा</span>
            </div>
            <h1 className="text-vastu-cream text-xl md:text-2xl font-yatra">वास्तु जीनियस</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <NavLink to="/" icon={<Home size={18} />} text="होम" />
            <NavLink to="/blog" icon={<Book size={18} />} text="ब्लॉग" />
            <NavLink to="/ask" icon={<MessageCircle size={18} />} text="प्रश्न पूछें" />
            <NavLink to="/principles" icon={<Info size={18} />} text="वास्तु सिद्धांत" />
            <NavLink to="/assistant" icon={<HelpCircle size={18} />} text="AI सहायक" />
          </nav>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className="md:hidden text-vastu-cream hover:bg-vastu-deepred/20"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-vastu-cream/20">
            <div className="flex flex-col space-y-3">
              <MobileNavLink to="/" icon={<Home size={18} />} text="होम" onClick={toggleMenu} />
              <MobileNavLink to="/blog" icon={<Book size={18} />} text="ब्लॉग" onClick={toggleMenu} />
              <MobileNavLink to="/ask" icon={<MessageCircle size={18} />} text="प्रश्न पूछें" onClick={toggleMenu} />
              <MobileNavLink to="/principles" icon={<Info size={18} />} text="वास्तु सिद्धांत" onClick={toggleMenu} />
              <MobileNavLink to="/assistant" icon={<HelpCircle size={18} />} text="AI सहायक" onClick={toggleMenu} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link 
    to={to} 
    className="text-vastu-cream hover:text-vastu-gold transition-colors flex items-center space-x-1"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const MobileNavLink = ({ 
  to, 
  icon, 
  text, 
  onClick 
}: { 
  to: string; 
  icon: React.ReactNode; 
  text: string;
  onClick: () => void;
}) => (
  <Link 
    to={to} 
    className="text-vastu-cream hover:text-vastu-gold transition-colors flex items-center space-x-2 py-2"
    onClick={onClick}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Header;
