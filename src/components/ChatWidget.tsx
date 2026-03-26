"use client";

import { useState, useRef, useEffect } from "react";
import { ChatConfig, Message } from "../types";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import QuickQuestions from "./QuickQuestions";
import ChatInput from "./ChatInput";

interface Props {
  config: ChatConfig;
}

export default function ChatWidget({ config }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: config.greeting },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      // API Routeに送信（systemメッセージを除く会話履歴）
      const chatMessages = newMessages
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatMessages }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `申し訳ございません、一時的にエラーが発生しました。\n\nお電話でもお問い合わせいただけます。\n📞 ${config.business.phone}`,
        },
      ]);
    } finally {
      setIsTyping(false);
      if (!isOpen) setUnread((u) => u + 1);
    }
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setUnread(0);
  };

  return (
    <>
      {/* ── ウィジェット（開いた状態） ── */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[370px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden z-50 animate-slideUp">
          {/* ヘッダー */}
          <div className="bg-gradient-to-r from-sky-500 to-sky-600 px-4 py-3 flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-lg">
              {config.theme.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-white font-bold text-sm truncate">
                {config.business.name}
              </h2>
              <p className="text-sky-100 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-300 rounded-full" />
                AI対応中
              </p>
            </div>
            <button
              onClick={toggleOpen}
              className="text-white/80 hover:text-white transition-colors text-xl leading-none p-1"
              aria-label="閉じる"
            >
              ✕
            </button>
          </div>

          {/* メッセージエリア */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-gradient-to-b from-sky-50/50 to-white">
            {messages.map((msg, i) => (
              <MessageBubble key={i} message={msg} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* クイック質問 */}
          <div className="px-3 pt-2 pb-1 border-t border-gray-100 bg-white flex-shrink-0">
            <QuickQuestions
              questions={config.quickQuestions}
              onSelect={sendMessage}
            />
          </div>

          {/* 入力欄 */}
          <div className="px-3 pb-2 bg-white flex-shrink-0">
            <ChatInput onSend={sendMessage} />
          </div>

          {/* ブランディング */}
          <div className="text-center pb-2 bg-white flex-shrink-0">
            <p className="text-[10px] text-gray-400">
              Powered by{" "}
              <span className="font-semibold">{config.theme.brandName}</span>
            </p>
          </div>
        </div>
      )}

      {/* ── フローティングボタン ── */}
      <button
        onClick={toggleOpen}
        className="fixed bottom-6 right-4 sm:right-6 w-14 h-14 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center text-2xl z-50 group"
        aria-label="チャットを開く"
      >
        {isOpen ? (
          <span className="text-white text-xl">✕</span>
        ) : (
          <>
            <span className="text-white group-hover:scale-110 transition-transform">
              💬
            </span>
            {unread > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                {unread}
              </span>
            )}
          </>
        )}
      </button>
    </>
  );
}
