import { useState, FormEvent } from "react";

interface Props {
  onSend: (text: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="ご質問を入力してください..."
        className="flex-1 border border-gray-300 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300"
      />
      <button
        type="submit"
        disabled={!input.trim()}
        className="bg-sky-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-sky-600 disabled:bg-gray-300 transition-colors"
      >
        ▶
      </button>
    </form>
  );
}
