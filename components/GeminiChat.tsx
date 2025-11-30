import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';
import { MessageCircle, X, Send, Bot, Phone, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

// REPLACE THIS WITH YOUR MAKE.COM OR ZAPIER WEBHOOK URL
// Example: "https://hook.eu1.make.com/your-unique-hash"
const WEBHOOK_URL = ""; 

export const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Вітаю! Я віртуальний помічник ДДАЕУ. Запитайте мене про спеціальності, вартість навчання або гуртожитки!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Lead Collection State
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', phone: '', question: '' });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, showLeadForm]);

  const handleSend = async () => {
    const apiKey = process.env.API_KEY;
    if (!input.trim() || !apiKey) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: apiKey });
      const model = 'gemini-2.5-flash';

      const chat = ai.chats.create({
        model: model,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result: GenerateContentResponse = await chat.sendMessage({ message: userMessage });
      const text = result.text || "Вибачте, я не зміг знайти відповідь.";

      setMessages(prev => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Виникла помилка з'єднання." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call to Webhook
    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(leadData)
        });
      } catch (err) {
        console.error("Failed to send to webhook", err);
      }
    } else {
        console.log("No Webhook URL configured. Data captured:", leadData);
    }

    setLeadSubmitted(true);
    setTimeout(() => {
        setShowLeadForm(false);
        setLeadSubmitted(false);
        setMessages(prev => [...prev, { role: 'model', text: `Дякую, ${leadData.name}! Ми отримали ваш запит і скоро зателефонуємо.` }]);
        setLeadData({ name: '', phone: '', question: '' });
    }, 2000);
  };

  if (!process.env.API_KEY) return null;

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} bg-amber-500 text-white`}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[550px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-amber-500 text-white p-4 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot size={20} />
            <span className="font-bold">Асистент ДДАЕУ</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-amber-600 p-1 rounded">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-amber-500 text-white rounded-br-none' : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
             <div className="flex justify-start">
               <div className="bg-white text-gray-500 p-3 rounded-2xl rounded-bl-none border border-gray-200 text-xs animate-pulse">
                 Друкує...
               </div>
             </div>
          )}
          
          {/* Lead Form Widget */}
          {showLeadForm ? (
              <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-lg animate-in fade-in slide-in-from-bottom-4">
                  {leadSubmitted ? (
                      <div className="text-center py-8 text-green-600">
                          <CheckCircle size={40} className="mx-auto mb-2" />
                          <p className="font-bold">Надіслано!</p>
                      </div>
                  ) : (
                    <form onSubmit={submitLead} className="space-y-3">
                        <div className="flex justify-between items-center">
                            <h4 className="text-sm font-bold text-gray-800">Замовити дзвінок</h4>
                            <button type="button" onClick={() => setShowLeadForm(false)} className="text-gray-400 hover:text-gray-600"><X size={16}/></button>
                        </div>
                        <input 
                            required
                            placeholder="Ваше ім'я"
                            value={leadData.name}
                            onChange={e => setLeadData({...leadData, name: e.target.value})}
                            className="w-full text-sm p-2 border border-gray-300 rounded focus:border-amber-500 outline-none"
                        />
                        <input 
                            required
                            placeholder="Телефон"
                            value={leadData.phone}
                            onChange={e => setLeadData({...leadData, phone: e.target.value})}
                            className="w-full text-sm p-2 border border-gray-300 rounded focus:border-amber-500 outline-none"
                        />
                         <textarea 
                            placeholder="Коротке питання (необов'язково)"
                            value={leadData.question}
                            onChange={e => setLeadData({...leadData, question: e.target.value})}
                            className="w-full text-sm p-2 border border-gray-300 rounded focus:border-amber-500 outline-none h-16 resize-none"
                        />
                        <Button fullWidth size="sm" type="submit">Надіслати фахівцю</Button>
                    </form>
                  )}
              </div>
          ) : (
             /* Call to Action Button inside chat */
             <div className="flex justify-center mt-4">
                 <button 
                    onClick={() => setShowLeadForm(true)}
                    className="flex items-center gap-2 text-xs font-bold text-amber-600 bg-amber-50 hover:bg-amber-100 px-4 py-2 rounded-full transition-colors border border-amber-200"
                 >
                    <Phone size={14} /> Не знайшли відповідь? Зв'язатися з людиною
                 </button>
             </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-gray-100 bg-white rounded-b-2xl flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Запитайте про вступ..."
            className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 text-sm"
          />
          <button 
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="p-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
};