"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Sparkles, UserRoundPlus } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const { error: signUpError } = await authClient.signUp.email({ email, password, name });
    if (signUpError) {
      setError(signUpError.message || signUpError.code || "Something went wrong");
      return;
    }
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-white text-[#2d365c]">
      <div className="grid min-h-screen lg:grid-cols-[.92fr_1.08fr]">
        <section className="relative hidden overflow-hidden bg-[#5f55d2] p-10 text-white lg:flex lg:flex-col">
          <div className="absolute -left-20 top-40 size-64 rounded-full border-[38px] border-[#7b71e0]" /><div className="absolute -bottom-24 -right-20 size-72 rounded-full bg-[#7167dc]" />
          <Link href="/" className="relative flex items-center gap-2.5 self-start"><span className="grid size-10 place-items-center rounded-xl bg-white text-lg text-[#5f55d2]">✦</span><span className="text-[21px] font-extrabold tracking-tight">Ask Teacher</span></Link>
          <div className="relative my-auto max-w-sm"><p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-[#e9e7ff]"><Sparkles size={14}/> Your family&apos;s learning space</p><h1 className="text-4xl font-extrabold leading-tight tracking-[-.04em]">Let&apos;s grow curious minds together.</h1><p className="mt-5 text-[16px] leading-7 text-[#e1dfff]">Create a free family account and give your child a friendly guide for every maths adventure.</p></div>
          <div className="relative space-y-3">{["Child-friendly lessons and practice", "AI feedback that teaches, not just checks", "Parent prompts for every tricky moment"].map((item) => <p key={item} className="flex items-center gap-2.5 text-sm font-semibold text-[#eeedff]"><span className="grid size-5 place-items-center rounded-full bg-[#8fd6c3] text-[#365d52]"><Check size={13}/></span>{item}</p>)}</div>
        </section>
        <section className="relative flex flex-col px-6 py-7 sm:px-12 sm:py-10 lg:border-l lg:border-[#eeedf5]"><div className="flex items-center justify-between lg:hidden"><Link href="/" className="flex items-center gap-2 text-lg font-extrabold"><span className="grid size-8 place-items-center rounded-lg bg-[#5f55d2] text-sm text-white">✦</span> Ask Teacher</Link></div><Link href="/" className="mt-7 flex items-center gap-1.5 text-sm font-bold text-[#7c8198] hover:text-[#5f55d2] lg:mt-0"><ArrowLeft size={16}/> Back to home</Link><div className="mx-auto flex w-full max-w-[400px] flex-1 flex-col justify-center py-8"><div className="mb-6"><div className="mb-4 grid size-11 place-items-center rounded-2xl bg-[#f0eeff] text-[#5f55d2]"><UserRoundPlus size={21}/></div><h2 className="text-3xl font-extrabold tracking-[-.035em]">Start learning together</h2><p className="mt-2 text-[15px] leading-6 text-[#737991]">It&apos;s free to create your family&apos;s learning space.</p></div><form onSubmit={handleSubmit} className="space-y-4"><div className="space-y-2"><Label htmlFor="name" className="text-sm font-extrabold text-[#4c5472]">Your name</Label><Input id="name" type="text" placeholder="e.g. Nur Aina" value={name} onChange={(e) => setName(e.target.value)} required className="h-12 rounded-xl border-[#deddeb] bg-[#fcfcff] px-3.5 text-sm shadow-none focus-visible:border-[#6a5ed3] focus-visible:ring-[#6a5ed3]/20" /></div><div className="space-y-2"><Label htmlFor="email" className="text-sm font-extrabold text-[#4c5472]">Email address</Label><Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-12 rounded-xl border-[#deddeb] bg-[#fcfcff] px-3.5 text-sm shadow-none focus-visible:border-[#6a5ed3] focus-visible:ring-[#6a5ed3]/20" /></div><div className="space-y-2"><Label htmlFor="password" className="text-sm font-extrabold text-[#4c5472]">Create a password</Label><Input id="password" type="password" placeholder="At least 8 characters" value={password} onChange={(e) => setPassword(e.target.value)} required className="h-12 rounded-xl border-[#deddeb] bg-[#fcfcff] px-3.5 text-sm shadow-none focus-visible:border-[#6a5ed3] focus-visible:ring-[#6a5ed3]/20" /></div>{error && <p className="rounded-xl bg-[#fff0ee] px-3 py-2.5 text-sm font-semibold text-[#b34f43]">{error}</p>}<button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#5f55d2] text-sm font-extrabold text-white shadow-[0_8px_16px_rgba(95,85,210,.22)] transition hover:bg-[#5148c4]">Create free account <ArrowRight size={17}/></button></form><p className="mt-6 text-center text-sm text-[#737991]">Already have an account? <a href="/login" className="font-extrabold text-[#5f55d2] hover:underline">Sign in</a></p></div></section>
      </div>
    </main>
  );
}
