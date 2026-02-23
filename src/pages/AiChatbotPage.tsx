import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, User, Send, Loader2, Sparkles } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import Markdown from "react-markdown";

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function AiChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "سلام! من دستیار هوشمند حساب‌یار هستم. چطور می‌توانم در امور مالی و حسابداری به شما کمک کنم؟",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Create a chat session with context
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `شما یک دستیار حسابداری هوشمند و حرفه‌ای به نام "حساب‌یار" هستید که برای کسب‌وکارهای ایرانی طراحی شده‌اید.
          شما به زبان فارسی روان و محترمانه صحبت می‌کنید.
          شما با قوانین مالیاتی ایران (مانند مالیات بر ارزش افزوده ۱۰٪، مالیات‌های تکلیفی، معاملات فصلی ماده ۱۶۹) آشنا هستید.
          شما می‌توانید به سوالات حسابداری پاسخ دهید و راهنمایی‌های مالی ارائه کنید.
          در پاسخ‌های خود از اعداد فارسی استفاده کنید.
          اگر سوالی خارج از حوزه مالی، حسابداری، یا کسب‌وکار پرسیده شد، مودبانه یادآوری کنید که تخصص شما در زمینه حسابداری است.`,
        },
      });

      // Send previous messages to build context (simplified for this demo)
      // In a real app, we would maintain the chat history properly with the SDK
      
      const response = await chat.sendMessage({ message: userMessage.content });
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.text || "متاسفانه در پردازش درخواست شما مشکلی پیش آمد.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "متاسفانه در ارتباط با سرور هوش مصنوعی مشکلی پیش آمد. لطفا دوباره تلاش کنید.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Bot className="w-6 h-6 text-primary" />
          دستیار هوشمند مالی
        </h1>
        <p className="text-gray-500 mt-1">پاسخگوی سوالات حسابداری و تحلیلگر داده‌های مالی شما</p>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden border-primary/20 shadow-sm">
        <CardHeader className="bg-primary/5 border-b border-primary/10 py-4">
          <CardTitle className="text-lg flex items-center gap-2 text-primary">
            <Sparkles className="w-5 h-5" />
            چت با حساب‌یار
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[80%] ${
                msg.role === "user" ? "mr-auto flex-row-reverse" : "ml-auto"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === "user"
                    ? "bg-gray-200 text-gray-600"
                    : "bg-primary text-white"
                }`}
              >
                {msg.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              <div
                className={`p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-white border border-gray-200 text-gray-800 rounded-tr-sm"
                    : "bg-primary/10 text-gray-900 rounded-tl-sm border border-primary/20"
                }`}
              >
                {msg.role === "assistant" ? (
                  <div className="prose prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-gray-800 prose-pre:text-gray-100">
                    <Markdown>{msg.content}</Markdown>
                  </div>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 max-w-[80%] ml-auto">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="p-4 rounded-2xl bg-primary/10 rounded-tl-sm border border-primary/20 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
                <span className="text-sm text-gray-600">در حال پردازش...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>

        <div className="p-4 bg-white border-t border-gray-200">
          <form onSubmit={handleSend} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="سوال خود را درباره حسابداری یا وضعیت مالی بپرسید..."
              className="flex-1 bg-gray-50"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading || !input.trim()} className="gap-2 px-6">
              <Send className="w-4 h-4 rtl:rotate-180" />
              ارسال
            </Button>
          </form>
          <div className="mt-2 text-center">
            <span className="text-xs text-gray-400">
              پاسخ‌های هوش مصنوعی ممکن است دقیق نباشند. برای تصمیمات مهم مالی با یک حسابدار مشورت کنید.
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
