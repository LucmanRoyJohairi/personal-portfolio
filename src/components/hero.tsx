"use client";

import { useState } from "react";
import { ArrowDownRight, Check, Copy } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";


export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-6 py-10">
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        {PROFILE.availability}
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          {PROFILE.name}
        </h1>
        <p className="font-mono text-sm text-emerald-400">
          {PROFILE.role} · {PROFILE.experience}
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
          {PROFILE.tagline}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
            href="#projects"
            className={buttonVariants({
                className: "bg-zinc-100 text-zinc-950 hover:bg-zinc-200",
            })}
            >
            View Projects
            <ArrowDownRight className="ml-1.5 h-4 w-4" />
        </a>


        <Button
          variant="outline"
          onClick={handleCopyEmail}
          className="border-zinc-800 bg-zinc-900/60 text-zinc-200 hover:bg-zinc-800"
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
    </section>
  );
}
