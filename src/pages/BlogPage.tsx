
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import VastuTip from '@/components/VastuTip';
import { getRandomVastuTip, getFormattedDate, blogPosts } from '@/data/blogData';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [dailyTip, setDailyTip] = useState('');
  
  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  useEffect(() => {
    // Generate a random Vastu tip
    setDailyTip(getRandomVastuTip());
    
    // Filter posts based on search term and category
    const filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'all' || post.category === category;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredPosts(filtered);
  }, [searchTerm, category]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 vastu-pattern">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-yatra mb-4 text-vastu-deepred">वास्तु ब्लॉग और टिप्स</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              वास्तुशास्त्र के विविध पहलुओं पर विस्तृत लेख और दैनिक वास्तु टिप्स पढ़ें। हमारा लक्ष्य प्राचीन वास्तु ज्ञान को सरल और समझने योग्य बनाना है।
            </p>
          </div>
          
          {/* Daily Vastu Tip */}
          <div className="max-w-3xl mx-auto mb-12">
            <VastuTip 
              tip={dailyTip}
              date={getFormattedDate()}
            />
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
              <h2 className="font-yatra text-xl mb-4 text-vastu-brown">ब्लॉग खोजें</h2>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="खोजने के लिए कीवर्ड टाइप करें..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 border-vastu-brown/30"
                  />
                </div>
                
                <div className="w-full md:w-64">
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="border-vastu-brown/30">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="श्रेणी चुनें" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat, index) => (
                        <SelectItem key={index} value={cat}>
                          {cat === 'all' ? 'सभी श्रेणियां' : cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Blog Posts */}
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    category={post.category}
                    imageUrl={post.imageUrl}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-yatra text-vastu-brown mb-2">कोई परिणाम नहीं मिला</h3>
                <p className="text-gray-600">कृपया अपनी खोज मापदंड बदलें और पुनः प्रयास करें।</p>
                <Button 
                  className="mt-4 bg-vastu-deepred hover:bg-vastu-maroon text-white"
                  onClick={() => {
                    setSearchTerm('');
                    setCategory('all');
                  }}
                >
                  फ़िल्टर साफ़ करें
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
