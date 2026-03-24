import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "保坂歯科医院 AIアシスタント | デモ",
  description: "保坂歯科医院の情報をAIがお答えします",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
