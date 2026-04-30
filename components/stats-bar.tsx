"use client";

import { useTranslation } from "@/lib/language-context";

export function StatsBar() {
  const { t } = useTranslation();

  const stats = [
    { value: "500+", label: t.stats.teachersHelped },
    { value: "15+ Years", label: t.stats.experience },
    { value: "Multi-Carrier", label: t.stats.insurance },
  ];

  return (
    <section className="bg-cream border-y border-primary/20 py-8">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                i > 0 ? "sm:border-l sm:border-primary/20" : ""
              }`}
            >
              <p className="text-[2.5rem] font-bold leading-tight text-primary font-heading">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-foreground font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
