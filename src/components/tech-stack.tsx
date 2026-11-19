import { TECH_STACK } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function TechStack() {
  return (
    <section id="stack" className="space-y-6 py-12">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Tech Stack</h2>
        <p className="text-sm text-zinc-400">
          Core tools and frameworks I use to ship production software.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {Object.entries(TECH_STACK).map(([category, skills]) => (
          <div
            key={category}
            className="space-y-3 rounded-lg border border-zinc-800 bg-zinc-900/30 p-4"
          >
            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-400">
              {category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="border-zinc-800 bg-zinc-950/60 font-mono text-xs font-normal text-zinc-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
