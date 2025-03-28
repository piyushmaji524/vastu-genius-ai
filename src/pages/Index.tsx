
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import VastuTip from '@/components/VastuTip';
import { Button } from '@/components/ui/button';
import { MessageCircle, BookOpen, Home, Calendar, HelpCircle } from 'lucide-react';
import { blogPosts, getRandomVastuTip, getFormattedDate } from '@/data/blogData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 mandala-pattern">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-yatra mb-12 text-center text-vastu-deepred">हमारी सेवाएँ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="वास्तु प्रश्न पूछें"
                description="अपने घर, ऑफिस या व्यवसाय के बारे में वास्तु संबंधित प्रश्न पूछें और विशेषज्ञ द्वारा उत्तर पाएं।"
                icon={<MessageCircle size={36} />}
                link="/ask"
              />
              
              <FeatureCard
                title="दैनिक वास्तु ब्लॉग"
                description="वास्तु शास्त्र के विविध विषयों पर विस्तृत जानकारी और दैनिक वास्तु टिप्स पढ़ें।"
                icon={<BookOpen size={36} />}
                link="/blog"
              />
              
              <FeatureCard
                title="वास्तु सिद्धांत"
                description="वास्तुशास्त्र के मूल सिद्धांतों और नियमों को समझें जो आपके जीवन को सकारात्मक रूप से प्रभावित कर सकते हैं।"
                icon={<Home size={36} />}
                link="/principles"
              />
            </div>
          </div>
        </section>
        
        {/* Daily Vastu Tip */}
        <section className="py-12 bg-gradient-to-r from-vastu-cream to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-yatra mb-6 text-center text-vastu-deepred">आज का वास्तु टिप</h2>
            
            <div className="max-w-xl mx-auto">
              <VastuTip 
                tip={getRandomVastuTip()}
                date={getFormattedDate()}
              />
              
              <div className="mt-6 text-center">
                <Button asChild variant="outline" className="border-vastu-gold text-vastu-brown hover:bg-vastu-gold/10">
                  <Link to="/blog">
                    <Calendar className="mr-2 h-4 w-4" />
                    और वास्तु टिप्स देखें
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Blog Posts */}
        <section className="py-16 bg-secondary/50 vastu-pattern">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-yatra mb-2 text-center text-vastu-deepred">हाल के ब्लॉग</h2>
            <p className="text-center text-gray-600 mb-12">वास्तु शास्त्र के विविध पहलुओं पर नवीनतम लेख</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                  <Link to={`/blog/${post.id}`}>
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  
                  <div className="p-4">
                    <span className="inline-block bg-vastu-cream text-vastu-brown px-2 py-1 rounded-full text-xs mb-2">
                      {post.category}
                    </span>
                    
                    <h3 className="font-yatra text-lg mb-2 text-vastu-deepred">
                      <Link to={`/blog/${post.id}`} className="hover:text-vastu-orange transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-sm text-vastu-brown hover:text-vastu-orange transition-colors"
                      >
                        पूरा पढ़ें →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild className="bg-vastu-deepred hover:bg-vastu-maroon text-white">
                <Link to="/blog">
                  सभी ब्लॉग देखें
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* AI Assistant CTA */}
        <section className="py-16 bg-gradient-to-r from-vastu-maroon to-vastu-brown text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-yatra mb-4">वास्तु AI सहायक से बात करें</h2>
            <p className="max-w-xl mx-auto mb-8">
              हमारे AI सहायक से वास्तु के बारे में अपने प्रश्न पूछें। आप लिख सकते हैं या अपनी आवाज का उपयोग करके बात कर सकते हैं।
            </p>
            
            <Button asChild variant="outline" className="border-white hover:bg-white/10 text-white">
              <Link to="/assistant">
                <HelpCircle className="mr-2 h-4 w-4" />
                AI सहायक से बात करें
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
