import { ChatConfig } from "../types";

interface Props {
  config: ChatConfig;
}

export default function ChatHeader({ config }: Props) {
  return (
    <header className="bg-white shadow-sm border-b border-sky-100">
      <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {config.theme.icon}
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-800">
            {config.business.name}
          </h1>
          <p className="text-xs text-gray-500">AIアシスタント（デモ版）</p>
        </div>
        <div className="ml-auto">
          <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            オンライン
          </span>
        </div>
      </div>
    </header>
  );
}
