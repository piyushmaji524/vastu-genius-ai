
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const FeatureCard = ({ title, description, icon, link, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-vastu-gold/20 group",
      className
    )}>
      <div className="mb-4 text-vastu-deepred group-hover:text-vastu-orange transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-yatra mb-2 text-vastu-brown">{title}</h3>
      <p className="text-gray-700 mb-4 text-sm">{description}</p>
      <Button asChild variant="outline" className="border-vastu-gold text-vastu-brown hover:bg-vastu-gold/10 hover:text-vastu-deepred">
        <Link to={link}>अभी देखें</Link>
      </Button>
    </div>
  );
};

export default FeatureCard;
