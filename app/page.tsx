"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  CirclePlay,
  Menu,
  Play,
  Sparkles,
  X,
} from "lucide-react";

const benefits = [
  ["✦", "Learns their way", "A tutor that adapts to your child, not the other way around."],
  ["♡", "Helps you help", "Simple prompts and explanations that make homework feel lighter."],
  ["↗", "Builds real confidence", "Encouragement and feedback that focus on thinking, not just answers."],
];

const chineseBenefits = [
  ["✦", "跟着孩子的节奏学", "AI 导师会配合孩子的学习进度，而不是要求孩子配合系统。"],
  ["♡", "帮助您陪伴学习", "用简单的提问和解释，让陪作业变得更轻松。"],
  ["↗", "建立真正的自信", "让孩子专注思考、理解和进步，而不只是背答案。"],
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const zh = language === "zh";
  const copy = zh ? {
    how: "运作方式", parents: "家长专区", curriculum: "课程内容", login: "登录", start: "免费开始学习",
    badge: "AI 学习，带着父母的温度", hero: <>小小学习者。<br/><span className="text-[#6256d1]">大大自信心。</span></>,
    intro: "一个快乐的 AI 学习伙伴，帮助孩子真正理解数学，也让家长知道如何在旁陪伴。", watch: "看看怎么学", noCard: "无需信用卡", standard: "为一年级数学而设",
    adventure: "今天的学习冒险", addition: "20 以内的加法", stars: "让我们一起数星星！", tip: "家长小提示：", tipText: "请 Maya 从 3 开始接着数。",
    short: "短小学习时段", guided: "AI 引导式学习", family: "为家庭而设计",
    way: "ASK TEACHER 学习方式", supported: <>当每个人都感受到支持，<br/>学习会更美好。</>, curiosity: "我们为孩子的好奇心，也为家长的真实生活，留出温暖的空间。",
    forParents: "献给家长", allAnswers: <>您不需要知道<br/>所有答案。</>, parentIntro: "当孩子卡住时，Ask Teacher 会给您温和的引导方式——不替孩子做，也不让作业变成亲子大战。",
    ask: "用提问来引导，而不是直接说答案", explain: "简单解释难懂的概念", progress: "清楚掌握进度、强项与下一步", helper: "认识您的教学小帮手",
    helperTitle: "家长教学小帮手", mixed: "Maya 把 3 + 5 算错了。", tryAsking: "试着这样问", question: "“现在有 3 颗星星。你能不能接着数 5 个，而不从头开始？”", everyday: "生活中的练习", idea: "用纽扣、袜子或水果——任何孩子能移动和数数的东西。",
    strong: "打好数学基础。", courseIntro: "我们的第一条学习路径专为一年级孩子设计：数、加法、减法、钱币、时间、图形和测量。", footer: "为小小学习者，以及在身旁为他们加油的人而做。",
    modalTitle: "更温柔的学习方式", modalText: "Ask Teacher 将每一次短短的练习，变成理解、成长和一起感到骄傲的机会。", tryFree: "免费试用 Ask Teacher",
  } : {
    how: "How it works", parents: "For parents", curriculum: "Our curriculum", login: "Log in", start: "Start learning free",
    badge: "AI learning, with a parent’s heart", hero: <>Little learners.<br/><span className="text-[#6256d1]">Big confidence.</span></>,
    intro: "A joyful AI learning companion that helps children understand maths — and gives parents the words to help along the way.", watch: "See how it works", noCard: "No credit card needed", standard: "Made for Standard 1 Maths",
    adventure: "TODAY’S ADVENTURE", addition: "Addition within 20", stars: "Let’s count the stars together!", tip: "Parent tip:", tipText: "Ask Maya to count on from 3.",
    short: "bite-sized sessions", guided: "AI-guided learning", family: "designed for families",
    way: "THE ASK TEACHER WAY", supported: <>Learning feels better when<br/>everyone feels supported.</>, curiosity: "We make space for the child’s curiosity and the parent’s real life.",
    forParents: "FOR PARENTS", allAnswers: <>You don’t have to know<br/>all the answers.</>, parentIntro: "When your child gets stuck, Ask Teacher gives you a gentle way to guide them — without taking over or turning homework into a battle.",
    ask: "Questions to ask instead of giving the answer", explain: "Simple ways to explain tricky ideas", progress: "A clear view of progress, strengths and next steps", helper: "Meet your teaching helper",
    helperTitle: "PARENT TEACHING HELPER", mixed: "Maya mixed up 3 + 5.", tryAsking: "TRY ASKING", question: "“We have 3 stars already. Can you count 5 more without starting over?”", everyday: "EVERYDAY IDEA", idea: "Use buttons, socks, or fruit — anything your child can move and count.",
    strong: "A strong start in maths.", courseIntro: "Our first learning path is built especially for Standard 1 children: numbers, addition, subtraction, money, time, shapes and measurement.", footer: "Made for little learners and the people who cheer them on.",
    modalTitle: "A gentler way to learn", modalText: "Ask Teacher turns every small moment of practice into a chance to understand, grow and feel proud — together.", tryFree: "Try Ask Teacher free",
  };
  const localBenefits = zh ? chineseBenefits : benefits;
  const topics = zh ? ["数", "加法", "减法", "钱币", "时间", "图形", "测量"] : ["Numbers", "Addition", "Subtraction", "Money", "Time", "Shapes", "Measurement"];

  return (
    <main lang={zh ? "zh-CN" : "en"} className="overflow-hidden bg-[#fffdf9] text-[#26325a]">
      <header className="relative z-30 mx-auto flex h-[78px] max-w-[1260px] items-center justify-between px-5 lg:px-7">
        <a href="#top" className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-xl bg-[#5f55d2] text-lg text-white shadow-[0_4px_10px_rgba(95,85,210,.26)]">✦</span><span className="text-[21px] font-extrabold tracking-tight">Ask Teacher</span></a>
        <nav className="hidden items-center gap-8 text-sm font-bold text-[#565f7e] md:flex"><a href="#how" className="hover:text-[#5f55d2]">{copy.how}</a><a href="#parents" className="hover:text-[#5f55d2]">{copy.parents}</a><a href="#curriculum" className="hover:text-[#5f55d2]">{copy.curriculum}</a></nav>
        <div className="hidden items-center gap-4 md:flex"><button onClick={() => setLanguage(zh ? "en" : "zh")} className="rounded-lg border border-[#e1dff1] px-2.5 py-1.5 text-xs font-extrabold text-[#5e5784]">{zh ? "EN" : "中文"}</button><a href="/login" className="text-sm font-extrabold text-[#4d5572]">{copy.login}</a><a href="/signup" className="rounded-xl bg-[#5f55d2] px-4 py-2.5 text-sm font-extrabold text-white shadow-[0_5px_12px_rgba(95,85,210,.2)] hover:bg-[#5148c4]">{copy.start}</a></div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 place-items-center rounded-xl bg-[#f1efff] text-[#554bbd] md:hidden" aria-label="Open navigation">{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <div className="absolute left-5 right-5 top-[66px] rounded-2xl border border-[#eceaf9] bg-white p-4 shadow-xl md:hidden"><a href="#how" className="block rounded-lg px-3 py-2.5 text-sm font-bold">{copy.how}</a><a href="#parents" className="block rounded-lg px-3 py-2.5 text-sm font-bold">{copy.parents}</a><button onClick={() => setLanguage(zh ? "en" : "zh")} className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-bold">{zh ? "English" : "中文"}</button><a href="/signup" className="mt-2 block rounded-lg bg-[#5f55d2] px-3 py-2.5 text-center text-sm font-bold text-white">{copy.start}</a></div>}
      </header>

      <section id="top" className="relative isolate px-5 pb-20 pt-12 sm:pb-28 sm:pt-20">
        <div className="absolute left-[-110px] top-10 -z-10 size-[400px] rounded-full bg-[#f4e9ff] blur-3xl" /><div className="absolute right-[-130px] top-28 -z-10 size-[400px] rounded-full bg-[#e5f7ef] blur-3xl" />
        <div className="mx-auto grid max-w-[1150px] items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <div className="max-w-[560px] lg:pb-9"><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ded9ff] bg-[#f5f3ff] px-3 py-1.5 text-xs font-extrabold text-[#655ace]"><Sparkles size={14} /> {copy.badge}</div><h1 className="text-[43px] font-extrabold leading-[1.05] tracking-[-.045em] text-[#28345e] sm:text-[59px]">{copy.hero}</h1><p className="mt-6 max-w-[500px] text-[17px] leading-7 text-[#68708b]">{copy.intro}</p><div className="mt-8 flex flex-wrap items-center gap-3"><a href="/signup" className="flex items-center gap-2 rounded-xl bg-[#5f55d2] px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_8px_18px_rgba(95,85,210,.25)] hover:bg-[#5148c4]">{copy.start} <ArrowRight size={17}/></a><button onClick={() => setShowVideo(true)} className="flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-extrabold text-[#565e80]"><CirclePlay className="text-[#ff966f]" size={22} fill="#fff3ed"/>{copy.watch}</button></div><p className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#8990a6]"><Check size={14} className="text-[#48a77e]"/>{copy.noCard} <span className="mx-1">·</span> {copy.standard}</p></div>

          <div className="relative mx-auto w-full max-w-[550px] px-3 sm:px-8"><div className="absolute -left-3 top-[28%] grid size-[74px] place-items-center rounded-[22px] bg-[#ffc960] text-3xl shadow-[0_12px_24px_rgba(203,152,45,.2)]">⭐</div><div className="absolute -right-3 bottom-[17%] grid size-[64px] place-items-center rounded-[20px] bg-[#8fd6c3] text-2xl shadow-[0_12px_24px_rgba(49,143,115,.18)]">✚</div><div className="overflow-hidden rounded-[28px] border-[7px] border-white bg-[#f7f6ff] shadow-[0_22px_50px_rgba(54,50,105,.18)]"><div className="flex h-11 items-center justify-between bg-white px-5 text-[11px] font-bold text-[#858aa2]"><span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#ff8e8e]"/><span className="size-2 rounded-full bg-[#ffd46f]"/><span className="size-2 rounded-full bg-[#7fd4b3]"/></span><span>Ask Teacher • Maya&apos;s learning</span><span>•••</span></div><div className="p-5 sm:p-7"><div className="flex items-center justify-between"><div><p className="text-xs font-extrabold text-[#8179d7]">{copy.adventure}</p><h2 className="mt-1 text-xl font-extrabold">{copy.addition}</h2></div><div className="grid size-11 place-items-center rounded-2xl bg-[#fff1d2] text-xl">🌞</div></div><div className="mt-5 rounded-2xl bg-[#6559ce] p-5 text-white"><p className="text-sm font-bold text-[#dedaff]">{copy.stars}</p><div className="my-4 text-[34px] tracking-[.11em] sm:text-[42px]">⭐⭐⭐ <span className="font-light text-[#bdb8ef]">+</span> ⭐⭐⭐⭐⭐</div><div className="flex gap-2">{[6,7,8,9].map((n) => <span key={n} className={`grid size-9 place-items-center rounded-lg text-sm font-extrabold ${n === 8 ? "bg-white text-[#5f55d2]" : "bg-white/15"}`}>{n}</span>)}</div></div><div className="mt-4 flex items-center gap-3 rounded-xl bg-white p-3"><span className="grid size-9 place-items-center rounded-xl bg-[#f3eaff]">💡</span><p className="text-xs leading-5 text-[#6e728b]"><b className="text-[#424862]">{copy.tip}</b> {copy.tipText}</p></div></div></div></div>
        </div>
      </section>

      <section className="border-y border-[#edf0eb] bg-white px-5 py-7"><div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-center gap-x-14 gap-y-5 text-center"><div><p className="text-2xl font-extrabold text-[#5f55d2]">10 min</p><p className="mt-1 text-xs font-bold text-[#868da1]">{copy.short}</p></div><div className="hidden h-9 w-px bg-[#e7e9e8] sm:block"/><div><p className="text-2xl font-extrabold text-[#5f55d2]">1:1</p><p className="mt-1 text-xs font-bold text-[#868da1]">{copy.guided}</p></div><div className="hidden h-9 w-px bg-[#e7e9e8] sm:block"/><div><p className="text-2xl font-extrabold text-[#5f55d2]">100%</p><p className="mt-1 text-xs font-bold text-[#868da1]">{copy.family}</p></div></div></section>

      <section id="how" className="mx-auto max-w-[1150px] px-5 py-20 sm:py-28"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-extrabold tracking-[.15em] text-[#7b70d4]">{copy.way}</p><h2 className="mt-3 text-3xl font-extrabold tracking-[-.035em] sm:text-4xl">{copy.supported}</h2><p className="mt-4 text-[16px] leading-7 text-[#727991]">{copy.curiosity}</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{localBenefits.map(([icon, title, description], i) => <article key={title} className={`rounded-[24px] p-6 ${i === 0 ? "bg-[#f1efff]" : i === 1 ? "bg-[#fff1e6]" : "bg-[#eaf8f3]"}`}><div className="grid size-12 place-items-center rounded-2xl bg-white text-2xl shadow-sm">{icon}</div><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#69718a]">{description}</p></article>)}</div></section>

      <section id="parents" className="bg-[#30345d] px-5 py-20 text-white sm:py-24"><div className="mx-auto grid max-w-[1080px] items-center gap-12 lg:grid-cols-[1fr_.9fr]"><div><p className="text-xs font-extrabold tracking-[.14em] text-[#b8b0ff]">{copy.forParents}</p><h2 className="mt-3 text-3xl font-extrabold tracking-[-.035em] sm:text-4xl">{copy.allAnswers}</h2><p className="mt-5 max-w-lg text-[16px] leading-7 text-[#c8cae1]">{copy.parentIntro}</p><ul className="mt-7 space-y-3 text-sm font-semibold text-[#e9e9f8]"><li className="flex gap-3"><Check className="shrink-0 text-[#8fd6c3]" size={18}/>{copy.ask}</li><li className="flex gap-3"><Check className="shrink-0 text-[#8fd6c3]" size={18}/>{copy.explain}</li><li className="flex gap-3"><Check className="shrink-0 text-[#8fd6c3]" size={18}/>{copy.progress}</li></ul><a href="/signup" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#ffbd66] px-5 py-3 text-sm font-extrabold text-[#4a3862]">{copy.helper} <ArrowRight size={16}/></a></div><div className="rounded-[26px] bg-white p-5 text-[#313754] shadow-2xl"><div className="flex items-center gap-3 border-b border-[#eff0f4] pb-4"><div className="grid size-10 place-items-center rounded-xl bg-[#fff0d9] text-lg">💡</div><div><p className="text-xs font-extrabold text-[#867bd6]">{copy.helperTitle}</p><p className="text-sm font-extrabold">{copy.addition}</p></div></div><p className="mt-5 text-sm font-bold">{copy.mixed}</p><div className="mt-3 rounded-xl bg-[#f7f6fd] p-4"><p className="text-xs font-extrabold text-[#7b74a4]">{copy.tryAsking}</p><p className="mt-2 text-sm leading-6">{copy.question}</p></div><div className="mt-3 rounded-xl bg-[#ecf8f2] p-4"><p className="text-xs font-extrabold text-[#4f997a]">{copy.everyday}</p><p className="mt-2 text-sm leading-6">{copy.idea}</p></div></div></div></section>

      <section id="curriculum" className="mx-auto max-w-[960px] px-5 py-20 text-center sm:py-28"><span className="text-3xl">🧮</span><h2 className="mt-4 text-3xl font-extrabold tracking-[-.035em] sm:text-4xl">{copy.strong}</h2><p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-[#727991]">{copy.courseIntro}</p><div className="mt-8 flex flex-wrap justify-center gap-2">{topics.map((topic) => <span key={topic} className="rounded-full border border-[#e3e1f4] bg-[#faf9ff] px-4 py-2 text-sm font-bold text-[#5c5682]">{topic}</span>)}</div></section>

      <footer className="border-t border-[#ecebed] px-5 py-8"><div className="mx-auto flex max-w-[1150px] flex-wrap items-center justify-between gap-4"><a href="#top" className="flex items-center gap-2 text-lg font-extrabold"><span className="grid size-7 place-items-center rounded-lg bg-[#5f55d2] text-sm text-white">✦</span> Ask Teacher</a><p className="text-xs font-semibold text-[#9599a9]">{copy.footer}</p></div></footer>

      {showVideo && <div className="fixed inset-0 z-50 grid place-items-center bg-[#1d2045]/60 p-5 backdrop-blur-sm"><div className="relative w-full max-w-lg rounded-[24px] bg-white p-6 text-center shadow-2xl"><button onClick={() => setShowVideo(false)} className="absolute right-4 top-4 text-[#8990a6]" aria-label="Close"><X/></button><div className="mx-auto grid size-16 place-items-center rounded-full bg-[#f1efff] text-[#6256d1]"><Play size={25} fill="currentColor"/></div><h2 className="mt-5 text-2xl font-extrabold">{copy.modalTitle}</h2><p className="mt-3 text-sm leading-6 text-[#6e748b]">{copy.modalText}</p><a href="/signup" className="mt-6 inline-flex rounded-xl bg-[#5f55d2] px-5 py-3 text-sm font-extrabold text-white">{copy.tryFree}</a></div></div>}
    </main>
  );
}
