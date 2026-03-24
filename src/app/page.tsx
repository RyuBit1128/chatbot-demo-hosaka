"use client";

import { useState, useRef, useEffect } from "react";

// ── Knowledge base built from hosaka-dc.com ──
const CLINIC_INFO = {
  name: "保坂歯科医院",
  director: "保坂 浩之",
  address: "〒400-0061 山梨県甲府市荒川1-8-12",
  phone: "055-254-0418",
  parking: "敷地内に専用駐車場11台分あり",
  access: "はま寿司甲府荒川店の道挟んで向かい側、COCO's甲府荒川店の隣。「荒川一丁目」バス停下車、徒歩5分。",
  hours: {
    weekday: "月・火・水・金 9:00〜12:30 / 14:30〜19:00",
    thursday: "木 9:00〜12:30（午後は訪問診療）",
    saturday: "土 9:00〜12:30 / 14:30〜17:00",
    closed: "日曜・祝日",
  },
  treatments: [
    "虫歯治療",
    "歯周病治療",
    "予防歯科（3ヶ月ごとの定期検診推奨）",
    "インプラント",
    "ホワイトニング",
    "入れ歯",
    "審美歯科（オールセラミック等）",
    "矯正歯科（ワイヤー矯正・インビザライン）",
    "小児矯正",
    "根管治療（マイクロスコープ使用）",
  ],
  orthodonticsPricing: {
    pediatric: "495,000〜561,000円（税込）/ 治療期間2〜3年",
    wireFullArch: "825,000〜891,000円（税込）/ 治療期間2〜3年",
    wirePartial: "165,000〜330,000円（税込）",
    invisalignFull: "880,000〜990,000円（税込）/ 治療期間半年〜1年",
    invisalignPartial: "385,000円（税込）",
  },
  features: [
    "口腔管理機能強化加算（口管強）認定施設",
    "マイクロスコープによる精密治療",
    "インフォームド・コンセント重視（丁寧な説明）",
    "小児から高齢者まで幅広く対応",
    "昭和大学歯学部卒の院長が幅広い診療に対応",
    "矯正担当医：桐井絢子先生（日本矯正歯科学会認定医）",
  ],
};

// ── Simple rule-based + keyword matching chatbot ──
function generateReply(message: string): string {
  const m = message.toLowerCase();

  // Greetings
  if (/^(こんにちは|はじめまして|hello|hi|おはよう|こんばんは)/.test(m)) {
    return `こんにちは！保坂歯科医院のAIアシスタントです😊\n\nご質問をどうぞ！例えば：\n・診療時間を知りたい\n・矯正の料金は？\n・どんな治療ができる？\n・場所はどこ？`;
  }

  // Hours
  if (/診療時間|営業時間|何時|開いて|受付|時間/.test(m)) {
    return `📅 **診療時間のご案内**\n\n${CLINIC_INFO.hours.weekday}\n${CLINIC_INFO.hours.thursday}\n${CLINIC_INFO.hours.saturday}\n\n🔴 休診日：${CLINIC_INFO.hours.closed}\n\n※診療時間に変更がある場合がございます。お電話でもご確認いただけます。\n📞 ${CLINIC_INFO.phone}`;
  }

  // Location / Access
  if (/場所|住所|アクセス|行き方|どこ|駐車|車|バス|地図/.test(m)) {
    return `📍 **アクセス情報**\n\n${CLINIC_INFO.address}\n\n🚗 ${CLINIC_INFO.parking}\n🚌 ${CLINIC_INFO.access}\n\n📞 お電話：${CLINIC_INFO.phone}`;
  }

  // Phone
  if (/電話|tel|連絡|問い合わせ|予約/.test(m)) {
    return `📞 **ご予約・お問い合わせ**\n\n${CLINIC_INFO.phone}\n\n受付時間内にお電話ください。\n${CLINIC_INFO.hours.weekday}\n${CLINIC_INFO.hours.saturday}`;
  }

  // Orthodontics pricing
  if (/矯正.*(料金|費用|値段|価格|いくら)|料金.*矯正|インビザライン/.test(m)) {
    const p = CLINIC_INFO.orthodonticsPricing;
    return `💰 **矯正治療の料金**\n\n【小児矯正】\n${p.pediatric}\n\n【ワイヤー矯正（成人）】\n・全顎：${p.wireFullArch}\n・部分：${p.wirePartial}\n\n【インビザライン】\n・全顎：${p.invisalignFull}\n・部分：${p.invisalignPartial}\n\n※すべて税込価格です。\n矯正担当医は桐井絢子先生（日本矯正歯科学会認定医）です。\n\n初回相談は約30分です。お気軽にお電話ください📞\n${CLINIC_INFO.phone}`;
  }

  // Orthodontics general
  if (/矯正|歯並び|出っ歯|受け口|ワイヤー|マウスピース/.test(m)) {
    return `🦷 **矯正歯科について**\n\n当院では以下の矯正治療に対応しています：\n\n・**ワイヤー矯正**：幅広い症例に対応可能\n・**インビザライン**：透明で目立ちにくいマウスピース矯正\n・**小児矯正**：6〜12歳頃が対象\n\n矯正担当医：桐井絢子先生（日本矯正歯科学会認定医）\n\n初回相談（約30分）でお気軽にご相談ください。\n📞 ${CLINIC_INFO.phone}\n\n💰 料金について知りたい場合は「矯正の料金」とお聞きください。`;
  }

  // Implant
  if (/インプラント/.test(m)) {
    return `🦷 **インプラント治療**\n\n当院ではインプラント治療を行っております。\nマイクロスコープを使用した精密な治療が特長です。\n\n治療前に丁寧なカウンセリングを行い、CTやモニターを使って現在の状態をご説明します。\n\nまずはお気軽にご相談ください。\n📞 ${CLINIC_INFO.phone}`;
  }

  // Whitening
  if (/ホワイトニング|白く/.test(m)) {
    return `✨ **ホワイトニング**\n\n当院ではホワイトニング治療を行っております。\n\n詳しい料金や治療方法については、お気軽にお電話でご相談ください。\n📞 ${CLINIC_INFO.phone}`;
  }

  // Cavity / Toothache
  if (/虫歯|歯が痛|歯 痛|しみる|むし歯/.test(m)) {
    return `🦷 **虫歯治療について**\n\n歯がしみる、痛むなどの症状がございましたら、早めの受診をおすすめします。\n\n当院では：\n・マイクロスコープによる精密な根管治療\n・できるだけ歯を残す治療方針\n・段階に応じた適切な処置\n\nを行っております。\n\n痛みが出る前の早期発見が大切です。\n定期検診（3ヶ月ごと）もおすすめしています。\n\n📞 ご予約：${CLINIC_INFO.phone}`;
  }

  // Prevention
  if (/予防|定期検診|クリーニング|歯石|メンテナンス/.test(m)) {
    return `🛡️ **予防歯科**\n\n当院では3ヶ月ごとの定期検診をおすすめしています。\n\n口腔管理機能強化加算（口管強）認定施設として：\n・フッ素塗布などの予防処置を保険適用で毎月実施可能\n・歯周病メンテナンスも保険適用で毎月実施可能\n\n一人ひとりに合わせたオーダーメイドの口腔ケアプログラムをご提案します。\n\n📞 ご予約：${CLINIC_INFO.phone}`;
  }

  // Treatments overview
  if (/治療|メニュー|診療科目|できる|対応/.test(m)) {
    return `🏥 **診療内容**\n\n${CLINIC_INFO.treatments.map((t) => `・${t}`).join("\n")}\n\n当院の特長：\n${CLINIC_INFO.features.slice(0, 3).map((f) => `✅ ${f}`).join("\n")}\n\n詳しくはお気軽にお問い合わせください。\n📞 ${CLINIC_INFO.phone}`;
  }

  // Pricing general
  if (/料金|費用|値段|価格|いくら/.test(m)) {
    return `💰 **料金について**\n\n保険診療と自費診療がございます。\n\n【矯正治療の料金（自費）】\n・小児矯正：495,000円〜\n・ワイヤー矯正：165,000円〜（部分）/ 825,000円〜（全顎）\n・インビザライン：385,000円〜（部分）/ 880,000円〜（全顎）\n\nその他の自費治療の料金は、診察後にご説明いたします。\n\n📞 ${CLINIC_INFO.phone}`;
  }

  // Insurance
  if (/保険|自費|保険適用/.test(m)) {
    return `💳 **保険診療について**\n\n虫歯治療・歯周病治療・予防歯科（定期検診）などは保険適用です。\n\n口管強認定施設のため、予防処置や歯周病メンテナンスを保険適用で毎月受けられます。\n\n矯正・インプラント・ホワイトニング・セラミックなどは自費診療となります。\n\n保険外治療の場合は、事前に料金のご説明をいたします。`;
  }

  // About the doctor
  if (/院長|先生|ドクター|医師/.test(m)) {
    return `👨‍⚕️ **院長紹介**\n\n**保坂 浩之**\n\n昭和大学歯学部卒業後、昭和大学付属病院にて小児歯科から高齢者医療まで幅広く研修。\n\n地域のかかりつけ医として、お子さまからご高齢の方まで幅広い診療に対応しています。\n\n**矯正担当医：桐井 絢子 先生**\n東京医科歯科大学卒業\n日本矯正歯科学会認定医`;
  }

  // Children
  if (/子供|こども|小児|キッズ|子ども/.test(m)) {
    return `👶 **お子さまの治療について**\n\n当院では小児歯科から対応しております。\n\n・フッ素塗布（保険適用で毎月実施可能）\n・小児矯正（6〜12歳頃が対象）\n・院長は小児歯科の研修経験あり\n\nお気軽にご来院ください。\n📞 ${CLINIC_INFO.phone}`;
  }

  // First visit
  if (/初めて|はじめて|初診|初回/.test(m)) {
    return `🏥 **初めての方へ**\n\n初診の方はお電話でご予約ください。\n📞 ${CLINIC_INFO.phone}\n\n当院ではインフォームド・コンセントを大切にしています。\n治療前にCTや口腔内カメラを使って、現在の状態を丁寧にご説明いたします。\n\n📍 ${CLINIC_INFO.address}\n🚗 駐車場11台完備`;
  }

  // Fallback
  return `ご質問ありがとうございます😊\n\nお答えできる内容の例：\n・診療時間\n・アクセス・駐車場\n・治療内容（虫歯、矯正、インプラント等）\n・矯正の料金\n・予約方法\n\n上記以外のご質問は、お電話でお気軽にどうぞ。\n📞 ${CLINIC_INFO.phone}`;
}

// ── Simple markdown-ish bold rendering ──
function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

type Message = { role: "user" | "assistant"; content: string };

const QUICK_QUESTIONS = [
  "診療時間は？",
  "場所・駐車場",
  "矯正の料金",
  "どんな治療ができる？",
  "予約したい",
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `こんにちは！\n保坂歯科医院のAIアシスタントです😊\n\nご質問があればお気軽にどうぞ！\n\n例えば：\n・診療時間を知りたい\n・矯正の料金は？\n・場所はどこ？`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const reply = generateReply(text.trim());
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-sky-100">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            🦷
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">保坂歯科医院</h1>
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

      {/* Chat Area */}
      <main className="max-w-2xl mx-auto px-4 py-4 pb-44">
        <div className="space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line leading-relaxed ${
                  msg.role === "user"
                    ? "bg-sky-500 text-white rounded-br-md"
                    : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md"
                }`}
              >
                {msg.content.split("\n").map((line, j) => (
                  <span key={j}>
                    {renderText(line)}
                    {j < msg.content.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white shadow-sm border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Quick Questions + Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 pt-2 pb-1">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="flex-shrink-0 text-xs bg-sky-50 text-sky-600 px-3 py-1.5 rounded-full border border-sky-200 hover:bg-sky-100 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
        <div className="max-w-2xl mx-auto px-4 pb-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex gap-2"
          >
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
        </div>

        {/* Branding */}
        <div className="text-center pb-2">
          <p className="text-[10px] text-gray-400">
            Powered by <span className="font-semibold">Fit AI</span> — AIチャットボット導入支援
          </p>
        </div>
      </div>
    </div>
  );
}
