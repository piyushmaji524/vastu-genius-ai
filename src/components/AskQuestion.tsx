
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Send, Loader } from 'lucide-react';
import { toast } from 'sonner';

const GEMINI_API_KEY = 'AIzaSyD1SFLhp2Us8anc0ohgS9LcakID-h-4N9c';

interface AskQuestionProps {
  fullPage?: boolean;
}

const AskQuestion = ({ fullPage = false }: AskQuestionProps) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) {
      toast.error('कृपया एक प्रश्न दर्ज करें');
      return;
    }

    setLoading(true);
    setAnswer('');

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a Vastu Shastra expert. Answer the following question about Vastu in Hindi. Be detailed but concise (maximum 150 words). Format your answer nicely with proper paragraphs. Question: ${question}`
            }]
          }]
        }),
      });

      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        setAnswer(data.candidates[0].content.parts[0].text);
      } else {
        throw new Error('No response from AI');
      }
    } catch (error) {
      console.error('Error fetching answer:', error);
      toast.error('उत्तर प्राप्त करने में समस्या हुई। कृपया बाद में पुनः प्रयास करें।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={fullPage ? "" : "max-w-lg mx-auto"}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="question" className="block text-lg font-yatra text-vastu-brown">
            अपना वास्तु प्रश्न पूछें
          </label>
          <Textarea
            id="question"
            placeholder="उदाहरण: मेरे घर का मुख्य द्वार किस दिशा में होना चाहिए?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="h-24 border-vastu-brown/30 focus:border-vastu-gold"
          />
        </div>

        <Button 
          type="submit" 
          className="bg-vastu-deepred hover:bg-vastu-maroon text-white w-full"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader size={16} className="mr-2 animate-spin" />
              उत्तर पा रहे हैं...
            </>
          ) : (
            <>
              <Send size={16} className="mr-2" />
              प्रश्न भेजें
            </>
          )}
        </Button>
      </form>

      {answer && (
        <Card className="mt-6 border-vastu-gold/30">
          <CardContent className="pt-6">
            <h3 className="text-lg font-yatra mb-2 text-vastu-brown">आपके प्रश्न का उत्तर:</h3>
            <div className="bg-secondary/50 p-4 rounded-md text-gray-700 whitespace-pre-line">
              {answer}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AskQuestion;
