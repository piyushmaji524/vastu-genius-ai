
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Mic, MicOff, Send, Volume2, Loader } from 'lucide-react';
import { toast } from 'sonner';

const GEMINI_API_KEY = 'AIzaSyD1SFLhp2Us8anc0ohgS9LcakID-h-4N9c';

const VastuAssistant = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [loading, setLoading] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to speak the message
  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'hi-IN';
      window.speechSynthesis.speak(speech);
    } else {
      toast.error('आपका ब्राउज़र वॉयस असिस्टेंट का समर्थन नहीं करता है।');
    }
  };

  // Function to scroll to the bottom of the messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to start voice recognition
  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast.error('आपका ब्राउज़र वॉयस रिकग्निशन का समर्थन नहीं करता है।');
      return;
    }

    if (isListening) {
      stopListening();
      return;
    }

    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    const recognition = recognitionRef.current;
    
    recognition.lang = 'hi-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setInput(speechResult);
      toast.success('आपका संदेश दर्ज किया गया!');
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      toast.error('वॉयस रिकग्निशन में त्रुटि हुई। कृपया पुनः प्रयास करें।');
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
    setIsListening(true);
  };

  // Function to stop voice recognition
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  // Function to send a message
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message to the chat
    setMessages(prev => [...prev, {role: 'user', content: userMessage}]);
    
    setLoading(true);
    
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a Vastu Shastra expert voice assistant named Vastu Genius. Always respond in Hindi. Answer the following query from a user about Vastu: ${userMessage}`
            }]
          }]
        }),
      });

      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        const aiResponse = data.candidates[0].content.parts[0].text;
        
        // Add assistant message to the chat
        setMessages(prev => [...prev, {role: 'assistant', content: aiResponse}]);
        
        // Speak the response
        setTimeout(() => {
          speakMessage(aiResponse);
        }, 500);
      } else {
        throw new Error('No response from AI');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('संदेश भेजने में त्रुटि हुई। कृपया पुनः प्रयास करें।');
    } finally {
      setLoading(false);
      // Scroll to the bottom after messages are updated
      setTimeout(scrollToBottom, 100);
    }
  };

  return (
    <div className="h-[600px] max-w-2xl mx-auto flex flex-col">
      <Card className="flex-1 border-vastu-gold/30 overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-vastu-brown to-vastu-maroon p-3 text-vastu-cream flex items-center">
          <div className="w-8 h-8 bg-vastu-gold rounded-full flex items-center justify-center mr-2">
            <span className="text-vastu-maroon text-sm font-bold">वा</span>
          </div>
          <h3 className="font-yatra">वास्तु AI सहायक</h3>
        </div>
        
        <CardContent className="flex-1 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
              <Volume2 size={48} className="mb-4 text-vastu-gold animate-pulse-slow" />
              <p className="font-yatra text-vastu-brown text-xl mb-2">वास्तु जीनियस AI सहायक</p>
              <p className="text-sm max-w-md">वास्तु से संबंधित कोई भी प्रश्न पूछें। आप टाइप कर सकते हैं या अपनी आवाज का उपयोग करके बात कर सकते हैं।</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user' 
                        ? 'bg-vastu-deepred text-white rounded-tr-none' 
                        : 'bg-gray-100 text-gray-800 rounded-tl-none'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </CardContent>
        
        <div className="p-3 border-t border-vastu-gold/20 bg-white">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={startListening}
              className={`border-vastu-brown/30 ${isListening ? 'bg-vastu-orange text-white' : ''}`}
            >
              {isListening ? <MicOff size={18} /> : <Mic size={18} />}
            </Button>
            
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="अपना प्रश्न यहां टाइप करें या माइक बटन दबाकर बोलें..."
              className="min-h-10 resize-none border-vastu-brown/30"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />
            
            <Button
              variant="default"
              size="icon"
              type="button"
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="bg-vastu-deepred hover:bg-vastu-maroon"
            >
              {loading ? <Loader size={18} className="animate-spin" /> : <Send size={18} />}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Add these types for Speech Recognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export default VastuAssistant;
