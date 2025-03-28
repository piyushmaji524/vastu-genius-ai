
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

interface VastuTipProps {
  tip: string;
  date: string;
}

const VastuTip = ({ tip, date }: VastuTipProps) => {
  return (
    <Card className="border-vastu-gold/30 bg-secondary/50 overflow-hidden">
      <div className="bg-gradient-to-r from-vastu-gold/20 to-vastu-cream py-2 px-4">
        <div className="flex items-center text-vastu-brown">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">{date}</span>
        </div>
      </div>
      <CardContent className="pt-4">
        <blockquote className="italic text-gray-700">"{tip}"</blockquote>
      </CardContent>
    </Card>
  );
};

export default VastuTip;
