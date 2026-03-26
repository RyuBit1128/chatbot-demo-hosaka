import { NextRequest, NextResponse } from "next/server";
import config from "../../../config/hosaka-dental";

const SYSTEM_PROMPT = `あなたは「${config.business.name}」のAIアシスタントです。
患者さんからの質問に、親しみやすく丁寧に答えてください。

## 医院情報
- 医院名: ${config.business.name}
- 住所: ${config.business.address}
- 電話: ${config.business.phone}
- 駐車場: ${config.business.parking}
- アクセス: ${config.business.access}

## 診療時間
${config.business.hours.map((h) => `- ${h.label}: ${h.time}`).join("\n")}
- 休診日: ${config.business.closedDays}

## 診療内容
- 虫歯治療、歯周病治療、予防歯科（3ヶ月ごとの定期検診推奨）
- インプラント（マイクロスコープ使用）
- ホワイトニング、入れ歯、審美歯科（オールセラミック等）
- 矯正歯科（ワイヤー矯正・インビザライン）、小児矯正
- 根管治療（マイクロスコープ使用）

## 矯正治療の料金（税込）
- 小児矯正: 495,000〜561,000円 / 治療期間2〜3年
- ワイヤー矯正（全顎）: 825,000〜891,000円 / 治療期間2〜3年
- ワイヤー矯正（部分）: 165,000〜330,000円
- インビザライン（全顎）: 880,000〜990,000円 / 半年〜1年
- インビザライン（部分）: 385,000円
- 矯正担当医: 桐井絢子先生（日本矯正歯科学会認定医）

## 院長
保坂浩之（昭和大学歯学部卒）。小児歯科から高齢者医療まで幅広く対応。

## 特長
- 口腔管理機能強化加算（口管強）認定施設（予防処置・歯周病メンテが保険適用で毎月可能）
- マイクロスコープによる精密治療
- インフォームド・コンセント重視

## 回答のルール
- 絵文字を適度に使って親しみやすく
- 必要に応じて電話番号（${config.business.phone}）を案内
- 医療的な診断・具体的な症状の判断はしない（「まずは受診をおすすめします」と案内）
- 簡潔に答える（長文にならないように）
- 予約はお電話でお願いする旨を案内
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://fitai.jp",
          "X-Title": "Fit AI Chatbot Demo",
        },
        body: JSON.stringify({
          model: "anthropic/claude-haiku",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.slice(-10), // 直近10メッセージだけ送る（コスト抑制）
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter error:", errorText);
      return NextResponse.json(
        { error: "AI service error" },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply =
      data.choices?.[0]?.message?.content ?? "申し訳ございません。もう一度お試しください。";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
