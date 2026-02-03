import React, { useState, useRef, useEffect } from 'react';
import OpenAI from 'openai';
import { ChatMessage } from '../types';
import { ICON_MAP } from '../constants';

export const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hello! I'm your WestCoast AI assistant. Describe your plumbing issue and I'll help you diagnose it or get you to the right pro." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      console.log('API Key present:', !!apiKey, apiKey ? apiKey.substring(0, 10) + '...' : 'none');
      if (!apiKey) {
        throw new Error('API key not found');
      }

      const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
      });

      // Format messages for OpenAI
      const formattedMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: `You are a professional, super-intelligent plumbing assistant for "West Coast Plumbing" in Burbank, CA.
          - Help customers identify plumbing issues clearly.
          - Ask follow-up questions to understand the problem fully.
          - If it sounds dangerous (gas leak, flooding), tell them to call (714) 267-9974 immediately.
          - Avoid DIY instructions that could cause damage; focus on diagnosis and recommendations.
          - Be friendly, professional, and highly informative.`
        },
        ...newMessages.map(msg => ({
          role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
          content: msg.content
        }))
      ];

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: formattedMessages,
        max_tokens: 500,
        temperature: 0.7,
      });

      const response = completion.choices[0]?.message?.content || 'Sorry, I couldn\'t generate a response.';
      setMessages([...newMessages, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="assistant" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-full px-4 sm:px-12 lg:px-32">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-800">
          <div className="p-8 sm:p-10 bg-blue-600 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                <div className="text-white scale-125">
                  {ICON_MAP.Droplets}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">WestCoast AI Diagnostic</h2>
                <p className="text-blue-100 text-lg">Instant insights for homeowners</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-700/50 rounded-full text-blue-50 text-sm font-bold">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              Always Online
            </div>
          </div>

          <div className="p-6 sm:p-10 flex flex-col h-[600px]">
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto space-y-6 mb-8 pr-4 custom-scrollbar"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-3xl p-6 text-base sm:text-lg leading-relaxed ${msg.role === 'user'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-800 text-slate-100 border border-slate-700'
                      }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 text-slate-100 rounded-3xl p-6 flex gap-3">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce delay-100">●</span>
                    <span className="animate-bounce delay-200">●</span>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your issue in detail..."
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-8 py-5 text-lg text-white focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-3 top-3 bottom-3 bg-blue-600 text-white px-8 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center"
              >
                Diagnose
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
