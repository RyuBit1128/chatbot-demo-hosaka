(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52683,e=>{"use strict";var s=e.i(43476),r=e.i(71645);function t(e,s){let{business:r}=s,t=r.hours.map(e=>`${e.label} ${e.time}`).join("\n"),n=r.hours.filter(e=>!e.label.includes("木")).map(e=>`${e.label} ${e.time}`).join("\n");return e.replace(/\{\{name\}\}/g,r.name).replace(/\{\{phone\}\}/g,r.phone).replace(/\{\{address\}\}/g,r.address).replace(/\{\{access\}\}/g,r.access||"").replace(/\{\{parking\}\}/g,r.parking||"").replace(/\{\{closedDays\}\}/g,r.closedDays).replace(/\{\{hours\}\}/g,t).replace(/\{\{hours_short\}\}/g,n)}function n({config:e}){return(0,s.jsx)("header",{className:"bg-white shadow-sm border-b border-sky-100",children:(0,s.jsxs)("div",{className:"max-w-2xl mx-auto px-4 py-4 flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-lg",children:e.theme.icon}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-lg font-bold text-gray-800",children:e.business.name}),(0,s.jsx)("p",{className:"text-xs text-gray-500",children:"AIアシスタント（デモ版）"})]}),(0,s.jsx)("div",{className:"ml-auto",children:(0,s.jsxs)("span",{className:"inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full",children:[(0,s.jsx)("span",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),"オンライン"]})})]})})}function o({message:e}){let r="user"===e.role;return(0,s.jsx)("div",{className:`flex ${r?"justify-end":"justify-start"}`,children:(0,s.jsx)("div",{className:`max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line leading-relaxed ${r?"bg-sky-500 text-white rounded-br-md":"bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md"}`,children:e.content.split("\n").map((e,r,t)=>(0,s.jsxs)("span",{children:[e.split(/(\*\*[^*]+\*\*)/g).map((e,r)=>e.startsWith("**")&&e.endsWith("**")?(0,s.jsx)("strong",{className:"font-bold",children:e.slice(2,-2)},r):(0,s.jsx)("span",{children:e},r)),r<t.length-1&&(0,s.jsx)("br",{})]},r))})})}function a(){return(0,s.jsx)("div",{className:"flex justify-start",children:(0,s.jsx)("div",{className:"bg-white shadow-sm border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3",children:(0,s.jsxs)("div",{className:"flex gap-1",children:[(0,s.jsx)("span",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0ms"}}),(0,s.jsx)("span",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"150ms"}}),(0,s.jsx)("span",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"300ms"}})]})})})}function i({questions:e,onSelect:r}){return(0,s.jsx)("div",{className:"flex gap-2 overflow-x-auto pb-2 scrollbar-hide",children:e.map(e=>(0,s.jsx)("button",{onClick:()=>r(e),className:"flex-shrink-0 text-xs bg-sky-50 text-sky-600 px-3 py-1.5 rounded-full border border-sky-200 hover:bg-sky-100 transition-colors",children:e},e))})}function l({onSend:e}){let[t,n]=(0,r.useState)("");return(0,s.jsxs)("form",{onSubmit:s=>{s.preventDefault(),t.trim()&&(e(t.trim()),n(""))},className:"flex gap-2",children:[(0,s.jsx)("input",{type:"text",value:t,onChange:e=>n(e.target.value),placeholder:"ご質問を入力してください...",className:"flex-1 border border-gray-300 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300"}),(0,s.jsx)("button",{type:"submit",disabled:!t.trim(),className:"bg-sky-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-sky-600 disabled:bg-gray-300 transition-colors",children:"▶"})]})}function d({config:e}){let[c,p]=(0,r.useState)([{role:"assistant",content:e.greeting}]),[m,x]=(0,r.useState)(!1),u=(0,r.useRef)(null);(0,r.useEffect)(()=>{u.current?.scrollIntoView({behavior:"smooth"})},[c]);let h=s=>{if(!s.trim())return;let r={role:"user",content:s.trim()};p(e=>[...e,r]),x(!0),setTimeout(()=>{let r=function(e,s){let r=e.toLowerCase();for(let e of[...s.faq].sort((e,s)=>(s.priority??0)-(e.priority??0)))if(e.keywords.some(e=>new RegExp(e).test(r)))return t(e.response,s);return t(s.fallbackResponse,s)}(s.trim(),e);p(e=>[...e,{role:"assistant",content:r}]),x(!1)},600+800*Math.random())};return(0,s.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-sky-50 to-white",children:[(0,s.jsx)(n,{config:e}),(0,s.jsx)("main",{className:"max-w-2xl mx-auto px-4 py-4 pb-44",children:(0,s.jsxs)("div",{className:"space-y-4",children:[c.map((e,r)=>(0,s.jsx)(o,{message:e},r)),m&&(0,s.jsx)(a,{}),(0,s.jsx)("div",{ref:u})]})}),(0,s.jsxs)("div",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200",children:[(0,s.jsx)("div",{className:"max-w-2xl mx-auto px-4 pt-2 pb-1",children:(0,s.jsx)(i,{questions:e.quickQuestions,onSelect:h})}),(0,s.jsx)("div",{className:"max-w-2xl mx-auto px-4 pb-4",children:(0,s.jsx)(l,{onSend:h})}),(0,s.jsx)("div",{className:"text-center pb-2",children:(0,s.jsxs)("p",{className:"text-[10px] text-gray-400",children:["Powered by"," ",(0,s.jsx)("span",{className:"font-semibold",children:e.theme.brandName})," — AIチャットボット導入支援"]})})]})]})}let c={business:{name:"保坂歯科医院",type:"dental",phone:"055-254-0418",address:"〒400-0061 山梨県甲府市荒川1-8-12",access:"はま寿司甲府荒川店の道挟んで向かい側、COCO's甲府荒川店の隣。「荒川一丁目」バス停下車、徒歩5分。",parking:"敷地内に専用駐車場11台分あり",hours:[{label:"月・火・水・金",time:"9:00〜12:30 / 14:30〜19:00"},{label:"木",time:"9:00〜12:30（午後は訪問診療）"},{label:"土",time:"9:00〜12:30 / 14:30〜17:00"}],closedDays:"日曜・祝日"},theme:{primaryColor:"sky",icon:"🦷",brandName:"Fit AI"},greeting:`こんにちは！
保坂歯科医院のAIアシスタントです😊

ご質問があればお気軽にどうぞ！

例えば：
・診療時間を知りたい
・矯正の料金は？
・場所はどこ？`,quickQuestions:["診療時間は？","場所・駐車場","矯正の料金","どんな治療ができる？","予約したい"],faq:[{keywords:["^(こんにちは|はじめまして|hello|hi|おはよう|こんばんは)"],response:`こんにちは！{{name}}のAIアシスタントです😊

ご質問をどうぞ！例えば：
・診療時間を知りたい
・矯正の料金は？
・どんな治療ができる？
・場所はどこ？`,priority:10},{keywords:["診療時間","営業時間","何時","開いて","受付","時間"],response:`📅 **診療時間のご案内**

{{hours}}

🔴 休診日：{{closedDays}}

※診療時間に変更がある場合がございます。お電話でもご確認いただけます。
📞 {{phone}}`,priority:5},{keywords:["場所","住所","アクセス","行き方","どこ","駐車","車","バス","地図"],response:`📍 **アクセス情報**

{{address}}

🚗 {{parking}}
🚌 {{access}}

📞 お電話：{{phone}}`,priority:5},{keywords:["電話","tel","連絡","問い合わせ","予約"],response:`📞 **ご予約・お問い合わせ**

{{phone}}

受付時間内にお電話ください。
{{hours_short}}`,priority:5},{keywords:["矯正.*(料金|費用|値段|価格|いくら)","料金.*矯正","インビザライン"],response:`💰 **矯正治療の料金**

【小児矯正】
495,000〜561,000円（税込）/ 治療期間2〜3年

【ワイヤー矯正（成人）】
・全顎：825,000〜891,000円（税込）/ 治療期間2〜3年
・部分：165,000〜330,000円（税込）

【インビザライン】
・全顎：880,000〜990,000円（税込）/ 治療期間半年〜1年
・部分：385,000円（税込）

※すべて税込価格です。
矯正担当医は桐井絢子先生（日本矯正歯科学会認定医）です。

初回相談は約30分です。お気軽にお電話ください📞
{{phone}}`,priority:20},{keywords:["矯正","歯並び","出っ歯","受け口","ワイヤー","マウスピース"],response:`🦷 **矯正歯科について**

当院では以下の矯正治療に対応しています：

・**ワイヤー矯正**：幅広い症例に対応可能
・**インビザライン**：透明で目立ちにくいマウスピース矯正
・**小児矯正**：6〜12歳頃が対象

矯正担当医：桐井絢子先生（日本矯正歯科学会認定医）

初回相談（約30分）でお気軽にご相談ください。
📞 {{phone}}

💰 料金について知りたい場合は「矯正の料金」とお聞きください。`,priority:10},{keywords:["インプラント"],response:`🦷 **インプラント治療**

当院ではインプラント治療を行っております。
マイクロスコープを使用した精密な治療が特長です。

治療前に丁寧なカウンセリングを行い、CTやモニターを使って現在の状態をご説明します。

まずはお気軽にご相談ください。
📞 {{phone}}`,priority:10},{keywords:["ホワイトニング","白く"],response:`✨ **ホワイトニング**

当院ではホワイトニング治療を行っております。

詳しい料金や治療方法については、お気軽にお電話でご相談ください。
📞 {{phone}}`,priority:10},{keywords:["虫歯","歯が痛","歯 痛","しみる","むし歯"],response:`🦷 **虫歯治療について**

歯がしみる、痛むなどの症状がございましたら、早めの受診をおすすめします。

当院では：
・マイクロスコープによる精密な根管治療
・できるだけ歯を残す治療方針
・段階に応じた適切な処置

を行っております。

痛みが出る前の早期発見が大切です。
定期検診（3ヶ月ごと）もおすすめしています。

📞 ご予約：{{phone}}`,priority:10},{keywords:["予防","定期検診","クリーニング","歯石","メンテナンス"],response:`🛡️ **予防歯科**

当院では3ヶ月ごとの定期検診をおすすめしています。

口腔管理機能強化加算（口管強）認定施設として：
・フッ素塗布などの予防処置を保険適用で毎月実施可能
・歯周病メンテナンスも保険適用で毎月実施可能

一人ひとりに合わせたオーダーメイドの口腔ケアプログラムをご提案します。

📞 ご予約：{{phone}}`,priority:10},{keywords:["治療","メニュー","診療科目","できる","対応"],response:`🏥 **診療内容**

・虫歯治療
・歯周病治療
・予防歯科（3ヶ月ごとの定期検診推奨）
・インプラント
・ホワイトニング
・入れ歯
・審美歯科（オールセラミック等）
・矯正歯科（ワイヤー矯正・インビザライン）
・小児矯正
・根管治療（マイクロスコープ使用）

当院の特長：
✅ 口腔管理機能強化加算（口管強）認定施設
✅ マイクロスコープによる精密治療
✅ インフォームド・コンセント重視（丁寧な説明）

詳しくはお気軽にお問い合わせください。
📞 {{phone}}`,priority:5},{keywords:["料金","費用","値段","価格","いくら"],response:`💰 **料金について**

保険診療と自費診療がございます。

【矯正治療の料金（自費）】
・小児矯正：495,000円〜
・ワイヤー矯正：165,000円〜（部分）/ 825,000円〜（全顎）
・インビザライン：385,000円〜（部分）/ 880,000円〜（全顎）

その他の自費治療の料金は、診察後にご説明いたします。

📞 {{phone}}`,priority:3},{keywords:["保険","自費","保険適用"],response:`💳 **保険診療について**

虫歯治療・歯周病治療・予防歯科（定期検診）などは保険適用です。

口管強認定施設のため、予防処置や歯周病メンテナンスを保険適用で毎月受けられます。

矯正・インプラント・ホワイトニング・セラミックなどは自費診療となります。

保険外治療の場合は、事前に料金のご説明をいたします。`,priority:5},{keywords:["院長","先生","ドクター","医師"],response:`👨‍⚕️ **院長紹介**

**保坂 浩之**

昭和大学歯学部卒業後、昭和大学付属病院にて小児歯科から高齢者医療まで幅広く研修。

地域のかかりつけ医として、お子さまからご高齢の方まで幅広い診療に対応しています。

**矯正担当医：桐井 絢子 先生**
東京医科歯科大学卒業
日本矯正歯科学会認定医`,priority:5},{keywords:["子供","こども","小児","キッズ","子ども"],response:`👶 **お子さまの治療について**

当院では小児歯科から対応しております。

・フッ素塗布（保険適用で毎月実施可能）
・小児矯正（6〜12歳頃が対象）
・院長は小児歯科の研修経験あり

お気軽にご来院ください。
📞 {{phone}}`,priority:5},{keywords:["初めて","はじめて","初診","初回"],response:`🏥 **初めての方へ**

初診の方はお電話でご予約ください。
📞 {{phone}}

当院ではインフォームド・コンセントを大切にしています。
治療前にCTや口腔内カメラを使って、現在の状態を丁寧にご説明いたします。

📍 {{address}}
🚗 駐車場11台完備`,priority:5}],fallbackResponse:`ご質問ありがとうございます😊

お答えできる内容の例：
・診療時間
・アクセス・駐車場
・治療内容（虫歯、矯正、インプラント等）
・矯正の料金
・予約方法

上記以外のご質問は、お電話でお気軽にどうぞ。
📞 {{phone}}`};e.s(["default",0,function(){return(0,s.jsx)(d,{config:c})}],52683)}]);