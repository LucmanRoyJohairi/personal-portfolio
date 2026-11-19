import { Bot, Code2, CreditCard } from "lucide-react";
import { SpotlightCard } from "@/components/spotlight-card";

const SERVICES = [
  {
    icon: Code2,
    title: "Full-Stack Web Applications",
    description:
      "End-to-end SaaS platforms, admin dashboards, and scalable APIs built with Next.js, TypeScript, FastAPI, and PostgreSQL.",
    deliverables: ["Production MVPs", "REST & Webhook APIs", "Auth & Role-Based Access"],
  },
  {
    icon: CreditCard,
    title: "Automated Payment Systems",
    description:
      "Custom fiat and crypto payment gateways with on-chain verification, idempotent ledger tracking, and automated fulfillment.",
    deliverables: ["Stripe & Billing Sync", "USDT / TRC20 Verification", "Replay-Safe Webhooks"],
  },
  {
    icon: Bot,
    title: "AI Workflows & RAG Integration",
    description:
      "Context-aware AI assistants, document search pipelines, and automated triage tools connected to your existing data.",
    deliverables: ["Vector Search & RAG", "LLM Triage & Agents", "Streaming Chat Interfaces"],
  },
];

export function Services() {
  return (
    <section id="services" className="space-y-6 py-8">
      <div className="space-y-1">
        <span className="font-mono text-xs uppercase tracking-wider text-sky-400">
          02 // What I Build
        </span>
        <h2 className="text-xl font-semibold tracking-tight text-slate-50">
          Capabilities &amp; Services
        </h2>
        <p className="text-sm text-slate-300">
          End-to-end engineering solutions for startups, product teams, and businesses.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, description, deliverables }) => (
          <SpotlightCard
            key={title}
            className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/75 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-900"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="space-y-3">
              <div className="inline-flex rounded-xl border border-sky-500/30 bg-sky-500/10 p-2.5 text-sky-400">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="text-base font-semibold leading-snug text-slate-50">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-300">
                {description}
              </p>
            </div>

            <ul className="mt-5 space-y-1.5 border-t border-slate-800/80 pt-4 font-mono text-xs text-slate-300">
              {deliverables.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-sky-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
