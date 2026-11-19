import { Cpu, Layers, ShieldCheck } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Layers,
    title: "Clean, Maintainable Architecture",
    description:
      "Modular codebases, strict TypeScript boundaries, and predictable API contracts built to scale without rewrites.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Payment & Data Flows",
    description:
      "Idempotent webhooks, atomic database transactions, and defensive error handling for mission-critical systems.",
  },
  {
    icon: Cpu,
    title: "AI-Accelerated Engineering",
    description:
      "Integrating LLMs, RAG pipelines, and modern AI coding workflows to ship production features fast without sacrificing quality.",
  },
];

export function HowIWork() {
  return (
    <section className="space-y-6 py-8">
      <div className="space-y-1">
        <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
          02 // Engineering Approach
        </span>
        <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
          How I Work
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {PRINCIPLES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 transition hover:border-emerald-500/30 hover:bg-zinc-900/70"
          >
            <div className="mb-3 inline-flex rounded-lg border border-zinc-800 bg-zinc-950 p-2 text-emerald-400 transition group-hover:border-emerald-500/30">
              <Icon className="h-4 w-4" />
            </div>
            <h3 className="mb-1.5 text-sm font-semibold text-zinc-100">{title}</h3>
            <p className="text-xs leading-relaxed text-zinc-400">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
