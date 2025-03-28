
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState(blogPosts.find(post => post.id === id));
  const [relatedPosts, setRelatedPosts] = useState(blogPosts.filter(p => p.id !== id && p.category === post?.category).slice(0, 3));
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update post and related posts when id changes
    const currentPost = blogPosts.find(post => post.id === id);
    setPost(currentPost);
    
    if (currentPost) {
      setRelatedPosts(blogPosts.filter(p => p.id !== id && p.category === currentPost.category).slice(0, 3));
    }
  }, [id]);
  
  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 vastu-pattern">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <div className="mb-6">
            <Button asChild variant="ghost" className="text-vastu-brown hover:text-vastu-deepred hover:bg-vastu-gold/10">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                सभी ब्लॉग पर वापस जाएं
              </Link>
            </Button>
          </div>
          
          {/* Blog Header */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-10">
            <div className="h-64 md:h-80">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Tag size={14} className="mr-1" />
                  <span>{post.category}</span>
                </div>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-yatra mb-4 text-vastu-deepred">{post.title}</h1>
              
              <p className="text-gray-700 italic mb-6">{post.excerpt}</p>
              
              <div className="prose prose-stone max-w-none">
                {/* Render content as HTML */}
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {post.content}
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-4xl mx-auto mt-16">
              <h2 className="text-2xl font-yatra mb-6 text-vastu-deepred">संबंधित ब्लॉग</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Link to={`/blog/${relatedPost.id}`}>
                      <img 
                        src={relatedPost.imageUrl} 
                        alt={relatedPost.title} 
                        className="w-full h-40 object-cover"
                      />
                    </Link>
                    
                    <div className="p-4">
                      <h3 className="font-yatra text-lg mb-2 text-vastu-brown line-clamp-2">
                        <Link 
                          to={`/blog/${relatedPost.id}`} 
                          className="hover:text-vastu-orange transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </h3>
                      
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <Calendar size={12} className="mr-1" />
                        <span>{relatedPost.date}</span>
                      </div>
                      
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="text-sm text-vastu-brown hover:text-vastu-orange transition-colors"
                      >
                        पूरा पढ़ें →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
