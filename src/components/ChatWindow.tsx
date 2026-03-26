"use client";

import { useState, useRef, useEffect } from "react";
import { ChatConfig, Message } from "../types";
import { generateReply } from "../engine/chat-engine";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import QuickQuestions from "./QuickQuestions";
import ChatInput from "./ChatInput";

interface Props {
  config: ChatConfig;
}

export default function ChatWindow({ config }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: config.greeting },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateReply(text.trim(), config);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <ChatHeader config={config} />

      {/* Chat Area */}
      <main className="max-w-2xl mx-auto px-4 py-4 pb-44">
        <div className="space-y-4">
          {messages.map((msg, i) => (
            <MessageBubble key={i} message={msg} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Quick Questions + Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 pt-2 pb-1">
          <QuickQuestions
            questions={config.quickQuestions}
            onSelect={sendMessage}
          />
        </div>
        <div className="max-w-2xl mx-auto px-4 pb-4">
          <ChatInput onSend={sendMessage} />
        </div>
        <div className="text-center pb-2">
          <p className="text-[10px] text-gray-400">
            Powered by{" "}
            <span className="font-semibold">{config.theme.brandName}</span> —
            AIチャットボット導入支援
          </p>
        </div>
      </div>
    </div>
  );
}
