
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

const BlogCard = ({ id, title, excerpt, date, category, imageUrl }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden border-vastu-gold/20 hover:shadow-md transition-shadow">
      <div className="overflow-hidden h-48">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <CardContent className="pt-4">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <span className="bg-vastu-cream text-vastu-brown px-2 py-0.5 rounded-full text-xs">
            {category}
          </span>
        </div>
        
        <h3 className="font-yatra text-lg mb-2 text-vastu-deepred line-clamp-2">
          <Link to={`/blog/${id}`} className="hover:text-vastu-orange transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-3">{excerpt}</p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Link 
          to={`/blog/${id}`}
          className="text-sm text-vastu-brown hover:text-vastu-orange transition-colors"
        >
          पूरा पढ़ें →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
