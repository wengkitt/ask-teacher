"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  Home,
  Lightbulb,
  LogOut,
  Play,
  Sparkles,
  Target,
  UsersRound,
  X,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

const subjects = [
  { icon: "🔢", title: "Numbers", detail: "Numbers to 100", progress: 82, tone: "bg-[#eef0ff]" },
  { icon: "➕", title: "Addition", detail: "Adding within 20", progress: 64, tone: "bg-[#fff1da]" },
  { icon: "➖", title: "Subtraction", detail: "Taking away", progress: 41, tone: "bg-[#e9f8f1]" },
  { icon: "🪙", title: "Money", detail: "Recognising coins", progress: 25, tone: "bg-[#f8ebfb]" },
];

export default function DashboardPage() {
  const router = useRouter();
  const [answer, setAnswer] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [parentOpen, setParentOpen] = useState(false);
  const correct = answer === 8;

  const handleSignOut = async () => {
    await authClient.signOut();
    router.replace("/");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-[#fbfbfe] text-[#2c355b]">
      <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-[#edecf3] bg-white/90 px-5 backdrop-blur lg:px-9">
        <Link href="/dashboard" className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-xl bg-[#5f55d2] text-lg text-white shadow-[0_4px_10px_rgba(95,85,210,.25)]">✦</span><span className="text-xl font-extrabold tracking-tight">Ask Teacher</span></Link>
        <div className="flex items-center gap-3"><button className="relative grid size-9 place-items-center rounded-full text-[#717891] hover:bg-[#f5f4ff]" aria-label="Notifications"><Bell size={19}/><span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-[#f7856c] ring-2 ring-white"/></button><div className="flex items-center gap-2 rounded-full bg-[#f2f0ff] py-1.5 pl-1.5 pr-2 text-sm font-extrabold text-[#5148ad]"><span className="grid size-7 place-items-center rounded-full bg-[#ffce9f] text-xs text-[#735032]">M</span><span className="hidden sm:inline">Maya</span><button onClick={handleSignOut} className="grid size-7 place-items-center rounded-full text-[#6258bc] hover:bg-white" aria-label="Sign out" title="Sign out"><LogOut size={15}/></button></div></div>
      </header>

      <div className="mx-auto flex max-w-[1450px]">
        <aside className="hidden min-h-[calc(100vh-72px)] w-[238px] shrink-0 border-r border-[#edecf3] bg-white px-5 py-7 lg:flex lg:flex-col"><p className="mb-3 px-3 text-[10px] font-extrabold tracking-[.15em] text-[#a4a8b7]">LEARNING SPACE</p><nav className="space-y-1"><Nav icon={Home} label="Home" active/><Nav icon={BookOpen} label="My learning"/><Nav icon={Target} label="Progress"/></nav><div className="my-7 border-t border-[#eff0f4]"/><p className="mb-3 px-3 text-[10px] font-extrabold tracking-[.15em] text-[#a4a8b7]">PARENT ZONE</p><button onClick={() => setParentOpen(true)} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-[#6e758d] hover:bg-[#f7f6fd]"><UsersRound size={18}/>Parent dashboard</button><button onClick={() => setParentOpen(true)} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-[#6e758d] hover:bg-[#f7f6fd]"><Lightbulb size={18}/>Teaching helper</button><div className="mt-14 rounded-2xl bg-[#fff3dc] p-4"><span className="grid size-9 place-items-center rounded-xl bg-white text-lg">🌱</span><p className="mt-3 text-sm font-extrabold text-[#745b31]">Learning grows together</p><p className="mt-1 text-xs leading-5 text-[#91774c]">Support that helps your child think for themselves.</p></div><button onClick={handleSignOut} className="mt-auto flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-[#7c8196] hover:bg-[#f7f6fd]"><LogOut size={18}/>Sign out</button></aside>

        <section className="min-w-0 flex-1 px-5 py-8 sm:px-8 lg:px-10">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-bold text-[#7e8499]">Saturday, 16 March</p><h1 className="mt-1 text-3xl font-extrabold tracking-[-.035em] sm:text-[34px]">Good morning, Maya! <span>☀️</span></h1><p className="mt-1.5 text-[15px] text-[#777e94]">Ready for a little maths adventure?</p></div><div className="flex items-center gap-2 rounded-2xl border border-[#ece9ff] bg-white px-4 py-2.5 shadow-sm"><span className="grid size-8 place-items-center rounded-xl bg-[#fff4d9]">🔥</span><div><p className="text-[11px] font-bold text-[#8f8796]">Learning streak</p><p className="text-sm font-extrabold">5 days</p></div></div></div>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(300px,.82fr)]"><div className="space-y-5"><section className="relative overflow-hidden rounded-[24px] bg-[#6257ce] p-6 text-white shadow-[0_15px_30px_rgba(90,76,192,.18)] sm:p-7"><div className="absolute -right-12 -top-16 size-48 rounded-full border-[26px] border-[#8176e3] opacity-60"/><div className="absolute bottom-[-36px] right-16 text-[150px] font-light leading-none text-white/10">+</div><div className="relative max-w-md"><div className="mb-5 flex items-center gap-2 text-xs font-bold text-[#dfdcff]"><span className="rounded-full bg-white/15 px-2.5 py-1">CONTINUE LEARNING</span><span>Standard 1 Maths</span></div><h2 className="text-2xl font-extrabold">Addition within 20</h2><p className="mt-2 text-sm leading-6 text-[#e4e1ff]">Use pictures and number bonds to add two groups together.</p><div className="mt-6 flex flex-wrap items-center gap-4"><button className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-extrabold text-[#5046b9]"><Play size={16} fill="currentColor"/>Continue lesson</button><span className="flex items-center gap-1.5 text-xs font-bold text-[#dedbff]"><Clock3 size={15}/>12 min left</span></div></div></section>

            <section className="rounded-[22px] border border-[#e9eaf1] bg-white p-5 shadow-[0_2px_8px_rgba(34,38,71,.03)] sm:p-6"><div className="flex items-start justify-between"><div><p className="text-xs font-extrabold tracking-[.12em] text-[#7c70d8]">QUICK PRACTICE</p><h2 className="mt-1 text-xl font-extrabold">Let&apos;s try one together</h2></div><button onClick={() => setParentOpen(true)} className="grid size-9 place-items-center rounded-full bg-[#f5f4ff] text-[#6559cc]" aria-label="Get help"><CircleHelp size={19}/></button></div><p className="mt-4 text-[16px] font-semibold">How many stars are there altogether?</p><div className="my-5 flex items-center gap-3 text-3xl sm:text-4xl"><span className="tracking-[.14em]">⭐⭐⭐</span><span className="font-light text-[#b9bbca]">+</span><span className="tracking-[.14em]">⭐⭐⭐⭐⭐</span><span className="font-light text-[#b9bbca]">=</span><span className="text-[#6257ce]">?</span></div><div className="grid max-w-md grid-cols-4 gap-2.5">{[6, 7, 8, 9].map((value) => <button key={value} onClick={() => { setAnswer(value); setChecked(false); }} className={`h-12 rounded-xl border-2 text-lg font-extrabold transition ${answer === value ? "border-[#665ad2] bg-[#f0efff] text-[#5d50c8]" : "border-[#e6e7ef] hover:border-[#bcb6e9]"}`}>{value}</button>)}</div>{checked && <div className={`mt-4 flex items-start gap-2 rounded-xl p-3 text-sm leading-5 ${correct ? "bg-[#eaf8f1] text-[#28744e]" : "bg-[#fff4e7] text-[#995b20]"}`}>{correct ? <Check className="mt-0.5 shrink-0" size={18}/> : <Lightbulb className="mt-0.5 shrink-0" size={18}/>}<span>{correct ? "Wonderful thinking! You counted both groups: 3 + 5 makes 8." : "Almost! Count the two groups together, starting with 3. Then count on: 4, 5, 6, 7, 8."}</span></div>}<div className="mt-5 flex items-center justify-between border-t border-[#eff0f4] pt-4"><button onClick={() => setParentOpen(true)} className="flex items-center gap-1.5 text-xs font-extrabold text-[#7063ce]"><Sparkles size={15}/>Parent teaching tip</button><button disabled={answer === null} onClick={() => setChecked(true)} className="flex items-center gap-1.5 rounded-lg bg-[#6257ce] px-4 py-2.5 text-sm font-extrabold text-white disabled:cursor-not-allowed disabled:opacity-45">Check answer <ArrowRight size={16}/></button></div></section></div>

            <div className="space-y-5"><section className="rounded-[22px] border border-[#e9eaf1] bg-white p-5 shadow-[0_2px_8px_rgba(34,38,71,.03)]"><div className="flex items-start justify-between"><div><p className="text-xs font-extrabold tracking-[.12em] text-[#a0a4b5]">YOUR PROGRESS</p><h2 className="mt-1 text-lg font-extrabold">This week</h2></div><BarChart3 size={20} className="text-[#7f84a0]"/></div><div className="mt-5 flex items-center gap-5"><div className="relative grid size-[88px] place-items-center rounded-full" style={{ background: "conic-gradient(#675bd4 0 73%, #eeeff4 73% 100%)" }}><div className="grid size-[68px] place-items-center rounded-full bg-white"><b className="text-lg">73%</b><span className="-mt-1 text-[10px] text-[#8b90a1]">mastery</span></div></div><p className="text-sm leading-5 text-[#70768d]"><b className="text-[#343c5d]">You&apos;re doing great!</b><br/>2 lessons completed<br/>this week.</p></div><button className="mt-5 flex w-full items-center justify-center gap-1 text-xs font-extrabold text-[#6257ce]">See full progress <ChevronRight size={15}/></button></section><section className="rounded-[22px] border border-[#e9eaf1] bg-white p-5 shadow-[0_2px_8px_rgba(34,38,71,.03)]"><div className="flex items-center justify-between"><h2 className="text-lg font-extrabold">Your maths map</h2><span className="rounded-full bg-[#eef9f5] px-2.5 py-1 text-[10px] font-extrabold text-[#2f8964]">4 of 7 started</span></div><div className="mt-4 space-y-3.5">{subjects.map((subject) => <div key={subject.title} className="flex items-center gap-3"><span className={`grid size-10 place-items-center rounded-xl text-lg ${subject.tone}`}>{subject.icon}</span><div className="min-w-0 flex-1"><div className="flex justify-between gap-3 text-sm"><b>{subject.title}</b><span className="font-bold text-[#797f95]">{subject.progress}%</span></div><p className="mt-0.5 text-xs text-[#858a9e]">{subject.detail}</p><div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#eef0f5]"><div className="h-full rounded-full bg-[#6a5fd3]" style={{ width: `${subject.progress}%` }}/></div></div></div>)}</div><button className="mt-5 flex items-center gap-1 text-xs font-extrabold text-[#6257ce]">Explore all topics <ChevronRight size={15}/></button></section></div></div>
        </section>
      </div>
      {parentOpen && <div className="fixed inset-0 z-30 grid place-items-center bg-[#24213e]/30 p-4 backdrop-blur-sm"><div className="relative w-full max-w-md rounded-[24px] bg-white p-6 shadow-2xl"><button onClick={() => setParentOpen(false)} className="absolute right-4 top-4 text-[#888da0]" aria-label="Close"><X size={20}/></button><div className="grid size-11 place-items-center rounded-2xl bg-[#fff0d8] text-xl">💡</div><p className="mt-4 text-xs font-extrabold tracking-[.1em] text-[#877bd8]">PARENT TEACHING HELPER</p><h2 className="mt-1 text-xl font-extrabold">Help Maya discover the answer</h2><p className="mt-3 text-sm leading-6 text-[#6d738a]">Place 3 small objects on one side, then 5 on the other. Ask, “If we count all the objects without starting over, what number do we land on?”</p><div className="mt-4 rounded-xl bg-[#f7f6fd] p-3 text-sm leading-6 text-[#5e5980]"><b>Try saying:</b> “Let&apos;s start at 3 and count on 5 more together.”</div><button onClick={() => setParentOpen(false)} className="mt-5 w-full rounded-xl bg-[#6257ce] py-3 text-sm font-extrabold text-white">Got it</button></div></div>}
    </main>
  );
}

function Nav({ icon: Icon, label, active = false }: { icon: typeof Home; label: string; active?: boolean }) {
  return <button className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold ${active ? "bg-[#f0eeff] text-[#554ac1]" : "text-[#6e758d] hover:bg-[#f7f6fd]"}`}><Icon size={18}/>{label}</button>;
}
