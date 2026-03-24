(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52683,e=>{"use strict";var s=e.i(43476),t=e.i(71645);let a="〒400-0061 山梨県甲府市荒川1-8-12",l="055-254-0418",r="月・火・水・金 9:00〜12:30 / 14:30〜19:00",i="木 9:00〜12:30（午後は訪問診療）",n="土 9:00〜12:30 / 14:30〜17:00",d="日曜・祝日",o=["虫歯治療","歯周病治療","予防歯科（3ヶ月ごとの定期検診推奨）","インプラント","ホワイトニング","入れ歯","審美歯科（オールセラミック等）","矯正歯科（ワイヤー矯正・インビザライン）","小児矯正","根管治療（マイクロスコープ使用）"],c={pediatric:"495,000〜561,000円（税込）/ 治療期間2〜3年",wireFullArch:"825,000〜891,000円（税込）/ 治療期間2〜3年",wirePartial:"165,000〜330,000円（税込）",invisalignFull:"880,000〜990,000円（税込）/ 治療期間半年〜1年",invisalignPartial:"385,000円（税込）"},x=["口腔管理機能強化加算（口管強）認定施設","マイクロスコープによる精密治療","インフォームド・コンセント重視（丁寧な説明）","小児から高齢者まで幅広く対応","昭和大学歯学部卒の院長が幅広い診療に対応","矯正担当医：桐井絢子先生（日本矯正歯科学会認定医）"],m=["診療時間は？","場所・駐車場","矯正の料金","どんな治療ができる？","予約したい"];e.s(["default",0,function(){let[e,u]=(0,t.useState)([{role:"assistant",content:`こんにちは！
保坂歯科医院のAIアシスタントです😊

ご質問があればお気軽にどうぞ！

例えば：
・診療時間を知りたい
・矯正の料金は？
・場所はどこ？`}]),[h,b]=(0,t.useState)(""),[p,g]=(0,t.useState)(!1),f=(0,t.useRef)(null);(0,t.useEffect)(()=>{f.current?.scrollIntoView({behavior:"smooth"})},[e]);let y=e=>{if(!e.trim())return;let s={role:"user",content:e.trim()};u(e=>[...e,s]),b(""),g(!0),setTimeout(()=>{let s,t=(s=e.trim().toLowerCase(),/^(こんにちは|はじめまして|hello|hi|おはよう|こんばんは)/.test(s)?`こんにちは！保坂歯科医院のAIアシスタントです😊

ご質問をどうぞ！例えば：
・診療時間を知りたい
・矯正の料金は？
・どんな治療ができる？
・場所はどこ？`:/診療時間|営業時間|何時|開いて|受付|時間/.test(s)?`📅 **診療時間のご案内**

${r}
${i}
${n}

🔴 休診日：${d}

※診療時間に変更がある場合がございます。お電話でもご確認いただけます。
📞 ${l}`:/場所|住所|アクセス|行き方|どこ|駐車|車|バス|地図/.test(s)?`📍 **アクセス情報**

${a}

🚗 敷地内に専用駐車場11台分あり
🚌 はま寿司甲府荒川店の道挟んで向かい側、COCO's甲府荒川店の隣。「荒川一丁目」バス停下車、徒歩5分。

📞 お電話：${l}`:/電話|tel|連絡|問い合わせ|予約/.test(s)?`📞 **ご予約・お問い合わせ**

${l}

受付時間内にお電話ください。
${r}
${n}`:/矯正.*(料金|費用|値段|価格|いくら)|料金.*矯正|インビザライン/.test(s)?`💰 **矯正治療の料金**

【小児矯正】
${c.pediatric}

【ワイヤー矯正（成人）】
・全顎：${c.wireFullArch}
・部分：${c.wirePartial}

【インビザライン】
・全顎：${c.invisalignFull}
・部分：${c.invisalignPartial}

※すべて税込価格です。
矯正担当医は桐井絢子先生（日本矯正歯科学会認定医）です。

初回相談は約30分です。お気軽にお電話ください📞
${l}`:/矯正|歯並び|出っ歯|受け口|ワイヤー|マウスピース/.test(s)?`🦷 **矯正歯科について**

当院では以下の矯正治療に対応しています：

・**ワイヤー矯正**：幅広い症例に対応可能
・**インビザライン**：透明で目立ちにくいマウスピース矯正
・**小児矯正**：6〜12歳頃が対象

矯正担当医：桐井絢子先生（日本矯正歯科学会認定医）

初回相談（約30分）でお気軽にご相談ください。
📞 ${l}

💰 料金について知りたい場合は「矯正の料金」とお聞きください。`:/インプラント/.test(s)?`🦷 **インプラント治療**

当院ではインプラント治療を行っております。
マイクロスコープを使用した精密な治療が特長です。

治療前に丁寧なカウンセリングを行い、CTやモニターを使って現在の状態をご説明します。

まずはお気軽にご相談ください。
📞 ${l}`:/ホワイトニング|白く/.test(s)?`✨ **ホワイトニング**

当院ではホワイトニング治療を行っております。

詳しい料金や治療方法については、お気軽にお電話でご相談ください。
📞 ${l}`:/虫歯|歯が痛|歯 痛|しみる|むし歯/.test(s)?`🦷 **虫歯治療について**

歯がしみる、痛むなどの症状がございましたら、早めの受診をおすすめします。

当院では：
・マイクロスコープによる精密な根管治療
・できるだけ歯を残す治療方針
・段階に応じた適切な処置

を行っております。

痛みが出る前の早期発見が大切です。
定期検診（3ヶ月ごと）もおすすめしています。

📞 ご予約：${l}`:/予防|定期検診|クリーニング|歯石|メンテナンス/.test(s)?`🛡️ **予防歯科**

当院では3ヶ月ごとの定期検診をおすすめしています。

口腔管理機能強化加算（口管強）認定施設として：
・フッ素塗布などの予防処置を保険適用で毎月実施可能
・歯周病メンテナンスも保険適用で毎月実施可能

一人ひとりに合わせたオーダーメイドの口腔ケアプログラムをご提案します。

📞 ご予約：${l}`:/治療|メニュー|診療科目|できる|対応/.test(s)?`🏥 **診療内容**

${o.map(e=>`・${e}`).join("\n")}

当院の特長：
${x.slice(0,3).map(e=>`✅ ${e}`).join("\n")}

詳しくはお気軽にお問い合わせください。
📞 ${l}`:/料金|費用|値段|価格|いくら/.test(s)?`💰 **料金について**

保険診療と自費診療がございます。

【矯正治療の料金（自費）】
・小児矯正：495,000円〜
・ワイヤー矯正：165,000円〜（部分）/ 825,000円〜（全顎）
・インビザライン：385,000円〜（部分）/ 880,000円〜（全顎）

その他の自費治療の料金は、診察後にご説明いたします。

📞 ${l}`:/保険|自費|保険適用/.test(s)?`💳 **保険診療について**

虫歯治療・歯周病治療・予防歯科（定期検診）などは保険適用です。

口管強認定施設のため、予防処置や歯周病メンテナンスを保険適用で毎月受けられます。

矯正・インプラント・ホワイトニング・セラミックなどは自費診療となります。

保険外治療の場合は、事前に料金のご説明をいたします。`:/院長|先生|ドクター|医師/.test(s)?`👨‍⚕️ **院長紹介**

**保坂 浩之**

昭和大学歯学部卒業後、昭和大学付属病院にて小児歯科から高齢者医療まで幅広く研修。

地域のかかりつけ医として、お子さまからご高齢の方まで幅広い診療に対応しています。

**矯正担当医：桐井 絢子 先生**
東京医科歯科大学卒業
日本矯正歯科学会認定医`:/子供|こども|小児|キッズ|子ども/.test(s)?`👶 **お子さまの治療について**

当院では小児歯科から対応しております。

・フッ素塗布（保険適用で毎月実施可能）
・小児矯正（6〜12歳頃が対象）
・院長は小児歯科の研修経験あり

お気軽にご来院ください。
📞 ${l}`:/初めて|はじめて|初診|初回/.test(s)?`🏥 **初めての方へ**

初診の方はお電話でご予約ください。
📞 ${l}

当院ではインフォームド・コンセントを大切にしています。
治療前にCTや口腔内カメラを使って、現在の状態を丁寧にご説明いたします。

📍 ${a}
🚗 駐車場11台完備`:`ご質問ありがとうございます😊

お答えできる内容の例：
・診療時間
・アクセス・駐車場
・治療内容（虫歯、矯正、インプラント等）
・矯正の料金
・予約方法

上記以外のご質問は、お電話でお気軽にどうぞ。
📞 ${l}`);u(e=>[...e,{role:"assistant",content:t}]),g(!1)},600+800*Math.random())};return(0,s.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-sky-50 to-white",children:[(0,s.jsx)("header",{className:"bg-white shadow-sm border-b border-sky-100",children:(0,s.jsxs)("div",{className:"max-w-2xl mx-auto px-4 py-4 flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-lg",children:"🦷"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-lg font-bold text-gray-800",children:"保坂歯科医院"}),(0,s.jsx)("p",{className:"text-xs text-gray-500",children:"AIアシスタント（デモ版）"})]}),(0,s.jsx)("div",{className:"ml-auto",children:(0,s.jsxs)("span",{className:"inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full",children:[(0,s.jsx)("span",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),"オンライン"]})})]})}),(0,s.jsx)("main",{className:"max-w-2xl mx-auto px-4 py-4 pb-44",children:(0,s.jsxs)("div",{className:"space-y-4",children:[e.map((e,t)=>(0,s.jsx)("div",{className:`flex ${"user"===e.role?"justify-end":"justify-start"}`,children:(0,s.jsx)("div",{className:`max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line leading-relaxed ${"user"===e.role?"bg-sky-500 text-white rounded-br-md":"bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md"}`,children:e.content.split("\n").map((t,a)=>(0,s.jsxs)("span",{children:[t.split(/(\*\*[^*]+\*\*)/g).map((e,t)=>e.startsWith("**")&&e.endsWith("**")?(0,s.jsx)("strong",{className:"font-bold",children:e.slice(2,-2)},t):(0,s.jsx)("span",{children:e},t)),a<e.content.split("\n").length-1&&(0,s.jsx)("br",{})]},a))})},t)),p&&(0,s.jsx)("div",{className:"flex justify-start",children:(0,s.jsx)("div",{className:"bg-white shadow-sm border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3",children:(0,s.jsxs)("div",{className:"flex gap-1",children:[(0,s.jsx)("span",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0ms"}}),(0,s.jsx)("span",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"150ms"}}),(0,s.jsx)("span",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"300ms"}})]})})}),(0,s.jsx)("div",{ref:f})]})}),(0,s.jsxs)("div",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200",children:[(0,s.jsx)("div",{className:"max-w-2xl mx-auto px-4 pt-2 pb-1",children:(0,s.jsx)("div",{className:"flex gap-2 overflow-x-auto pb-2 scrollbar-hide",children:m.map(e=>(0,s.jsx)("button",{onClick:()=>y(e),className:"flex-shrink-0 text-xs bg-sky-50 text-sky-600 px-3 py-1.5 rounded-full border border-sky-200 hover:bg-sky-100 transition-colors",children:e},e))})}),(0,s.jsx)("div",{className:"max-w-2xl mx-auto px-4 pb-4",children:(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),y(h)},className:"flex gap-2",children:[(0,s.jsx)("input",{type:"text",value:h,onChange:e=>b(e.target.value),placeholder:"ご質問を入力してください...",className:"flex-1 border border-gray-300 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300"}),(0,s.jsx)("button",{type:"submit",disabled:!h.trim(),className:"bg-sky-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-sky-600 disabled:bg-gray-300 transition-colors",children:"▶"})]})}),(0,s.jsx)("div",{className:"text-center pb-2",children:(0,s.jsxs)("p",{className:"text-[10px] text-gray-400",children:["Powered by ",(0,s.jsx)("span",{className:"font-semibold",children:"Fit AI"})," — AIチャットボット導入支援"]})})]})]})}])}]);