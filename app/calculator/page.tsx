"use client";

import { useEffect } from "react";
import { PensionCalculator } from "@/components/pension-calculator";
import { CtaSection } from "@/components/cta-section";
import { useTranslation } from "@/lib/language-context";

export default function CalculatorPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t.calculator.metaTitle} | Teacher's Pension`;
  }, [t]);

  return (
    <>
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            {t.calculator.pageTitle}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            {t.calculator.pageSubtitle}
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <PensionCalculator />
        </div>
      </section>

      <CtaSection
        title={t.calculator.ctaTitle}
        description={t.calculator.ctaDescription}
        buttonText={t.calculator.ctaButton}
        buttonHref="/contact"
      />
    </>
  );
}
