# チャットボットデモ リファクタ仕様書

## 目的
現在の1ファイル構成（page.tsx に全て詰め込み）を、**業種別テンプレートで量産可能な設計**にリファクタする。
将来的にClaude（AI）に「歯科を不動産に変えて」と指示するだけで新しいボットが作れる構造にする。

## 現状
- Next.js 16 + TailwindCSS 4 + TypeScript
- Static Export（GitHub Pages）
- 全てが `src/app/page.tsx` に入っている（ナレッジベース、チャットロジック、UI）

## リファクタ後の構造

```
src/
├── config/
│   └── hosaka-dental.ts      ← 業種別設定（店舗情報、FAQ、テーマカラー等）
├── engine/
│   └── chat-engine.ts        ← チャットロジック（キーワードマッチング）
├── components/
│   ├── ChatWindow.tsx         ← チャットUI全体
│   ├── MessageBubble.tsx      ← メッセージ吹き出し
│   ├── QuickQuestions.tsx     ← クイック質問ボタン
│   ├── ChatInput.tsx          ← 入力欄
│   ├── ChatHeader.tsx         ← ヘッダー
│   └── TypingIndicator.tsx    ← タイピングアニメーション
├── types/
│   └── index.ts               ← 型定義（ChatConfig, Message, FAQ等）
└── app/
    ├── page.tsx               ← configを読み込んでChatWindowを表示するだけ
    ├── layout.tsx             ← そのまま
    └── globals.css            ← そのまま
```

## config の型定義（重要）

```typescript
// types/index.ts

export interface BusinessHours {
  label: string;    // 例: "月・火・水・金"
  time: string;     // 例: "9:00〜12:30 / 14:30〜19:00"
}

export interface FAQEntry {
  keywords: string[];          // マッチするキーワード（正規表現文字列）
  response: string;            // 応答テンプレート（{{phone}} 等のプレースホルダー対応）
  priority?: number;           // 優先度（高い方が先にマッチ）
}

export interface ChatConfig {
  // ビジネス基本情報
  business: {
    name: string;
    type: string;              // "dental" | "realestate" | "restaurant" 等
    phone: string;
    address: string;
    access?: string;
    parking?: string;
    hours: BusinessHours[];
    closedDays: string;
  };

  // テーマ
  theme: {
    primaryColor: string;      // TailwindCSS色名 例: "sky"
    icon: string;              // 絵文字
    brandName: string;         // "Fit AI"
  };

  // 挨拶
  greeting: string;

  // クイック質問
  quickQuestions: string[];

  // FAQ（キーワードマッチ）
  faq: FAQEntry[];

  // フォールバック応答
  fallbackResponse: string;
}
```

## chat-engine.ts の設計

- `generateReply(message: string, config: ChatConfig): string`
- FAQEntryのkeywordsを正規表現としてマッチ
- priorityが高い順にチェック
- レスポンス内の `{{phone}}`, `{{address}}`, `{{name}}` 等のプレースホルダーを置換
- マッチしなければ fallbackResponse を返す

## config/hosaka-dental.ts

現在の `CLINIC_INFO` と `generateReply` の全知識を、上記の `ChatConfig` 形式に変換する。
現在の全パターン（挨拶、診療時間、場所、電話、矯正料金、矯正一般、インプラント、ホワイトニング、虫歯、予防、治療一覧、料金、保険、院長、子供、初診、フォールバック）を漏れなくFAQEntryに変換すること。

## 制約
- 既存の見た目・動作を一切変えない（UI/UXはそのまま）
- Next.js 16 + TailwindCSS 4の構成は維持
- Static Export（GitHub Pages）対応を維持
- next.config.ts の basePath はそのまま
- package.json の依存関係は変更しない
- `npm run build` が通ること

## 完了条件
1. 上記のファイル構造になっている
2. `npm run build` が成功する
3. 既存の全キーワードパターンが config/hosaka-dental.ts のFAQに移行されている
4. page.tsx は configを読み込んでChatWindowを表示するだけのシンプルな構造
5. 新しい業種のボットを作るには config/ に新ファイルを追加するだけで良い状態
