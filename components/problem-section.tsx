"use client";

import { HelpCircle, DollarSign, Clock, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/lib/language-context";

export function ProblemSection() {
  useScrollReveal();
  const { t } = useTranslation();

  const cards = [
    {
      icon: HelpCircle,
      title: t.problem.trsConfusing,
      description: t.problem.trsConfusingDesc,
    },
    {
      icon: DollarSign,
      title: t.problem.healthcareCosts,
      description: t.problem.healthcareCostsDesc,
    },
    {
      icon: Clock,
      title: t.problem.incomeGap,
      description: t.problem.incomeGapDesc,
    },
    {
      icon: Layers,
      title: t.problem.fullPicture,
      description: t.problem.fullPictureDesc,
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 font-sans">
            {t.problem.label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.problem.title}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            {t.problem.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="reveal rounded-xl bg-muted border-l-4 border-primary p-6"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2 font-heading">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
