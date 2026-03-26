import { Message } from "../types";
import { ReactNode } from "react";

function renderText(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line leading-relaxed ${
          isUser
            ? "bg-sky-500 text-white rounded-br-md"
            : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md"
        }`}
      >
        {message.content.split("\n").map((line, j, arr) => (
          <span key={j}>
            {renderText(line)}
            {j < arr.length - 1 && <br />}
          </span>
        ))}
      </div>
    </div>
  );
}
