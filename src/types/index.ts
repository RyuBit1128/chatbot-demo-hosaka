export interface BusinessHours {
  label: string;
  time: string;
}

export interface FAQEntry {
  keywords: string[];    // 正規表現パターン文字列
  response: string;      // {{phone}}, {{address}}, {{name}} 等のプレースホルダー対応
  priority?: number;     // 高い方が先にマッチ（デフォルト: 0）
}

export interface ChatConfig {
  business: {
    name: string;
    type: string;
    phone: string;
    address: string;
    access?: string;
    parking?: string;
    hours: BusinessHours[];
    closedDays: string;
  };

  theme: {
    primaryColor: string;
    icon: string;
    brandName: string;
  };

  greeting: string;
  quickQuestions: string[];
  faq: FAQEntry[];
  fallbackResponse: string;
}

export type Message = {
  role: "user" | "assistant";
  content: string;
};
