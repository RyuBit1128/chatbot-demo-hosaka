import { ChatConfig } from "../types";

/**
 * プレースホルダーを実際の値に置換する
 */
function replacePlaceholders(template: string, config: ChatConfig): string {
  const { business } = config;

  // {{hours}} — 全営業時間を改行で
  const hoursText = business.hours.map((h) => `${h.label} ${h.time}`).join("\n");

  // {{hours_short}} — 短縮版（平日+土のみ）
  const hoursShort = business.hours
    .filter((h) => !h.label.includes("木"))
    .map((h) => `${h.label} ${h.time}`)
    .join("\n");

  return template
    .replace(/\{\{name\}\}/g, business.name)
    .replace(/\{\{phone\}\}/g, business.phone)
    .replace(/\{\{address\}\}/g, business.address)
    .replace(/\{\{access\}\}/g, business.access || "")
    .replace(/\{\{parking\}\}/g, business.parking || "")
    .replace(/\{\{closedDays\}\}/g, business.closedDays)
    .replace(/\{\{hours\}\}/g, hoursText)
    .replace(/\{\{hours_short\}\}/g, hoursShort);
}

/**
 * メッセージに対する応答を生成する
 */
export function generateReply(message: string, config: ChatConfig): string {
  const m = message.toLowerCase();

  // FAQ をpriority降順でソート
  const sortedFaq = [...config.faq].sort(
    (a, b) => (b.priority ?? 0) - (a.priority ?? 0)
  );

  for (const entry of sortedFaq) {
    const matched = entry.keywords.some((kw) => new RegExp(kw).test(m));
    if (matched) {
      return replacePlaceholders(entry.response, config);
    }
  }

  return replacePlaceholders(config.fallbackResponse, config);
}
