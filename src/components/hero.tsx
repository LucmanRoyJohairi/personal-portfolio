"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDownRight, Check, Copy, Sparkles, Terminal } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { Button, buttonVariants } from "@/components/ui/button";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-10 py-8">
      <div className="flex flex-col-reverse items-start justify-between gap-10 sm:flex-row sm:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {PROFILE.availability}
          </div>

          <div className="space-y-3">
            <h1 className="bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              {PROFILE.name}
            </h1>
            <p className="font-mono text-sm text-emerald-400">
              {PROFILE.role} · {PROFILE.experience}
            </p>
            <p className="max-w-xl text-base leading-relaxed text-zinc-400">
              {PROFILE.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              className={buttonVariants({
                className:
                  "bg-emerald-500 font-medium text-zinc-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:bg-emerald-400",
              })}
            >
              View Projects
              <ArrowDownRight className="ml-1.5 h-4 w-4" />
            </a>

            <Button
              variant="outline"
              onClick={handleCopyEmail}
              className="border-zinc-800 bg-zinc-900/70 text-zinc-200 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-zinc-700 hover:bg-zinc-800"
            >
              {copied ? (
                <>
                  <Check className="mr-1.5 h-4 w-4 text-emerald-400" />
                  Copied Email
                </>
              ) : (
                <>
                  <Copy className="mr-1.5 h-4 w-4" />
                  {PROFILE.email}
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Larger Framed Avatar Card */}
        <div className="group relative shrink-0 self-center sm:self-auto">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500/35 via-cyan-500/20 to-purple-500/25 opacity-75 blur-xl transition duration-500 group-hover:opacity-100" />
          <div className="relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900/90 p-2 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
            {/* Window Top Bar */}
            <div className="mb-2 flex items-center justify-between px-1.5 pt-0.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-[10px] text-zinc-500">dev.profile</span>
            </div>

            <Image
              src="/avatar.jpg"
              alt={PROFILE.name}
              width={200}
              height={200}
              priority
              className="h-40 w-40 rounded-xl object-cover sm:h-48 sm:w-48"
            />

            {/* Bottom Status Pill */}
            <div className="mt-2 flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950/80 px-2.5 py-1.5 font-mono text-[11px] text-zinc-300">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Terminal className="h-3 w-3" /> kaizen.sh
              </span>
              <span className="text-zinc-500">v4.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Proof-of-Work Metrics Bar */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 px-4 py-3 backdrop-blur-sm transition hover:border-zinc-700">
          <p className="font-mono text-lg font-semibold text-zinc-100">4+ Years</p>
          <p className="text-xs text-zinc-400">Production Full-Stack Delivery</p>
        </div>
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 px-4 py-3 backdrop-blur-sm transition hover:border-zinc-700">
          <p className="font-mono text-lg font-semibold text-zinc-100">End-to-End</p>
          <p className="text-xs text-zinc-400">System Architecture to Deployment</p>
        </div>
        <div className="col-span-2 rounded-xl border border-zinc-800/80 bg-zinc-900/40 px-4 py-3 backdrop-blur-sm transition hover:border-emerald-500/30 sm:col-span-1">
          <p className="flex items-center gap-1.5 font-mono text-lg font-semibold text-emerald-400">
            <Sparkles className="h-4 w-4" /> AI-Native
          </p>
          <p className="text-xs text-zinc-400">RAG, Agents & Rapid Shipping</p>
        </div>
      </div>
    </section>
  );
}
