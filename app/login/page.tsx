"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, LockKeyhole, Sparkles } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const { error: signInError } = await authClient.signIn.email({ email, password });
    if (signInError) {
      setError(signInError.message || signInError.code || "Something went wrong");
      return;
    }
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-white text-[#2d365c]">
      <div className="grid min-h-screen lg:grid-cols-[.92fr_1.08fr]">
        <section className="relative hidden overflow-hidden bg-[#5f55d2] p-10 text-white lg:flex lg:flex-col">
          <div className="absolute -left-20 top-40 size-64 rounded-full border-[38px] border-[#7b71e0]" />
          <div className="absolute -bottom-24 -right-20 size-72 rounded-full bg-[#7167dc]" />
          <Link href="/" className="relative flex items-center gap-2.5 self-start"><span className="grid size-10 place-items-center rounded-xl bg-white text-lg text-[#5f55d2]">✦</span><span className="text-[21px] font-extrabold tracking-tight">Ask Teacher</span></Link>
          <div className="relative my-auto max-w-sm"><p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-[#e9e7ff]"><Sparkles size={14}/> A little support goes a long way</p><h1 className="text-4xl font-extrabold leading-tight tracking-[-.04em]">Welcome back to learning together.</h1><p className="mt-5 text-[16px] leading-7 text-[#e1dfff]">Pick up where you and your child left off — one small, confidence-building step at a time.</p></div>
          <div className="relative rounded-2xl bg-white/12 p-4"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-[#ffce77] text-lg">💡</span><p className="text-sm font-semibold leading-5">“Let&apos;s figure this out together.”<br/><span className="text-xs font-medium text-[#dcd9ff]">The most powerful words in learning.</span></p></div></div>
        </section>
        <section className="relative flex flex-col px-6 py-7 sm:px-12 sm:py-10 lg:border-l lg:border-[#eeedf5]">
          <div className="flex items-center justify-between lg:hidden"><Link href="/" className="flex items-center gap-2 text-lg font-extrabold"><span className="grid size-8 place-items-center rounded-lg bg-[#5f55d2] text-sm text-white">✦</span> Ask Teacher</Link></div>
          <Link href="/" className="mt-7 flex items-center gap-1.5 text-sm font-bold text-[#7c8198] hover:text-[#5f55d2] lg:mt-0"><ArrowLeft size={16}/> Back to home</Link>
          <div className="mx-auto flex w-full max-w-[400px] flex-1 flex-col justify-center py-10"><div className="mb-7"><div className="mb-4 grid size-11 place-items-center rounded-2xl bg-[#f0eeff] text-[#5f55d2]"><LockKeyhole size={20}/></div><h2 className="text-3xl font-extrabold tracking-[-.035em]">Welcome back</h2><p className="mt-2 text-[15px] leading-6 text-[#737991]">Sign in to continue your family&apos;s learning journey.</p></div><form onSubmit={handleSubmit} className="space-y-5"><div className="space-y-2"><Label htmlFor="email" className="text-sm font-extrabold text-[#4c5472]">Email address</Label><Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-12 rounded-xl border-[#deddeb] bg-[#fcfcff] px-3.5 text-sm shadow-none focus-visible:border-[#6a5ed3] focus-visible:ring-[#6a5ed3]/20" /></div><div className="space-y-2"><div className="flex items-center justify-between"><Label htmlFor="password" className="text-sm font-extrabold text-[#4c5472]">Password</Label><button type="button" className="text-xs font-bold text-[#6257ca] hover:underline">Forgot password?</button></div><Input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required className="h-12 rounded-xl border-[#deddeb] bg-[#fcfcff] px-3.5 text-sm shadow-none focus-visible:border-[#6a5ed3] focus-visible:ring-[#6a5ed3]/20" /></div>{error && <p className="rounded-xl bg-[#fff0ee] px-3 py-2.5 text-sm font-semibold text-[#b34f43]">{error}</p>}<button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#5f55d2] text-sm font-extrabold text-white shadow-[0_8px_16px_rgba(95,85,210,.22)] transition hover:bg-[#5148c4]">Sign in <ArrowRight size={17}/></button></form><p className="mt-7 text-center text-sm text-[#737991]">New to Ask Teacher? <a href="/signup" className="font-extrabold text-[#5f55d2] hover:underline">Create a free account</a></p></div><p className="hidden text-center text-xs font-medium text-[#a0a4b4] sm:block">Your family&apos;s learning data is private and secure.</p></section>
      </div>
    </main>
  );
}
