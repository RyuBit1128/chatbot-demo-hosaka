export default function FeatureBanner() {
  return (
    <div className="bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200/60 rounded-xl p-4 mb-6">
      <p className="text-xs font-bold text-sky-700 mb-3 flex items-center gap-1.5">
        <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
        デモ版をご覧いただいています
      </p>
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: "🤖", label: "AI自然会話", desc: "どんな質問にも対応" },
          { icon: "📱", label: "LINE連携", desc: "お客様のLINEから直接" },
          { icon: "📅", label: "予約自動化", desc: "24時間自動受付" },
          { icon: "📊", label: "分析レポート", desc: "問合せ傾向を可視化" },
        ].map((f) => (
          <div
            key={f.label}
            className="flex items-start gap-2 bg-white/70 rounded-lg px-2.5 py-2"
          >
            <span className="text-base mt-0.5">{f.icon}</span>
            <div>
              <p className="text-[11px] font-bold text-gray-700">{f.label}</p>
              <p className="text-[10px] text-gray-500">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-gray-500 mt-2.5 text-center">
        本番導入ではこれらの機能もご利用いただけます
      </p>
    </div>
  );
}
