"use client";

import ChatWidget from "../components/ChatWidget";
import FeatureBanner from "../components/FeatureBanner";
import config from "../config/hosaka-dental";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── 疑似HPコンテンツ（ウィジェットの背景として） ── */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <span className="text-2xl">{config.theme.icon}</span>
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              {config.business.name}
            </h1>
            <p className="text-xs text-gray-500">
              {config.business.address}
            </p>
          </div>
          <div className="ml-auto">
            <a
              href={`tel:${config.business.phone}`}
              className="text-sm text-sky-600 font-semibold hover:underline"
            >
              📞 {config.business.phone}
            </a>
          </div>
        </div>
      </header>

      {/* ヒーローエリア */}
      <div className="bg-gradient-to-br from-sky-500 to-sky-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-3">
            地域に寄り添う、あなたのかかりつけ歯科
          </h2>
          <p className="text-sky-100 text-sm mb-6">
            お子さまからご高齢の方まで、丁寧な説明と確かな技術でサポートします
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">🦷 一般歯科</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">😁 矯正歯科</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🛡️ 予防歯科</span>
          </div>
        </div>
      </div>

      {/* コンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* 左カラム：医院情報 */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">📅 診療時間</h3>
              <table className="text-sm w-full">
                <tbody>
                  {config.business.hours.map((h) => (
                    <tr key={h.label} className="border-b border-gray-100">
                      <td className="py-2 text-gray-600 font-medium w-24">
                        {h.label}
                      </td>
                      <td className="py-2 text-gray-800">{h.time}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-2 text-red-500 font-medium">休診</td>
                    <td className="py-2 text-red-500">
                      {config.business.closedDays}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">📍 アクセス</h3>
              <p className="text-sm text-gray-700 mb-2">
                {config.business.address}
              </p>
              <p className="text-sm text-gray-600">
                🚗 {config.business.parking}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                🚌 {config.business.access}
              </p>
            </div>
          </div>

          {/* 右カラム：Fit AI デモ訴求 */}
          <div className="space-y-6">
            <FeatureBanner />

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">
                💡 AIチャットボットとは？
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  ホームページに設置するだけで、
                  <strong className="text-gray-800">24時間365日</strong>
                  お客様の質問に自動で対応するAIアシスタントです。
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-amber-800 font-medium text-xs mb-1">
                    💬 右下のチャットボタンをタップしてみてください！
                  </p>
                  <p className="text-amber-700 text-xs">
                    実際のお客様の視点で体験できます
                  </p>
                </div>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    電話対応の負担を大幅削減
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    営業時間外の問合せも取りこぼさない
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    お客様の満足度UP → リピート率向上
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl p-6 text-white text-center">
              <p className="font-bold text-lg mb-2">導入をご検討の方へ</p>
              <p className="text-sky-100 text-sm mb-4">
                初回相談無料・最短1週間で導入可能
              </p>
              <a
                href="mailto:ryu@fitai.jp"
                className="inline-block bg-white text-sky-600 font-bold text-sm px-6 py-2.5 rounded-full hover:bg-sky-50 transition-colors"
              >
                📩 無料相談する
              </a>
              <p className="text-sky-200 text-xs mt-3">
                Fit AI — AIチャットボット導入支援
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-gray-400 text-xs text-center py-4">
        <p>※ これはAIチャットボットのデモページです。実際の医院サイトではありません。</p>
        <p className="mt-1">
          Powered by <span className="text-white font-semibold">Fit AI</span>
        </p>
      </footer>

      {/* ── チャットウィジェット（右下ポップアップ） ── */}
      <ChatWidget config={config} />
    </div>
  );
}
