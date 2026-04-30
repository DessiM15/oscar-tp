"use client";

import { useEffect } from "react";
import {
  PiggyBank,
  BarChart3,
  Shield,
  FileText,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { buttonVariants } from "@/components/ui/button";
import { useTranslation } from "@/lib/language-context";

export default function ServicesPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t.services.metaTitle} | Teacher's Pension`;
  }, [t]);

  const services = [
    {
      id: "retirement-planning",
      icon: PiggyBank,
      title: t.services.retirementPlanningTitle,
      subtitle: t.services.retirementPlanningSubtitle,
      description: t.services.retirementPlanningDesc,
      details: [
        { icon: FileText, title: t.services.plans403b, text: t.services.plans403bDesc },
        { icon: DollarSign, title: t.services.plans457, text: t.services.plans457Desc },
        { icon: TrendingUp, title: t.services.investmentStrategy, text: t.services.investmentStrategyDesc },
      ],
    },
    {
      id: "pension-analysis",
      icon: BarChart3,
      title: t.services.pensionAnalysisTitle,
      subtitle: t.services.pensionAnalysisSubtitle,
      description: t.services.pensionAnalysisDesc,
      details: [
        { icon: Target, title: t.services.benefitProjections, text: t.services.benefitProjectionsDesc },
        { icon: Clock, title: t.services.retirementTiming, text: t.services.retirementTimingDesc },
        { icon: DollarSign, title: t.services.incomeGapAnalysis, text: t.services.incomeGapAnalysisDesc },
      ],
    },
    {
      id: "life-insurance",
      icon: Shield,
      title: t.services.lifeInsuranceTitle,
      subtitle: t.services.lifeInsuranceSubtitle,
      description: t.services.lifeInsuranceDesc,
      details: [
        { icon: Shield, title: t.services.termLife, text: t.services.termLifeDesc },
        { icon: FileText, title: t.services.assetProtection, text: t.services.assetProtectionDesc },
        { icon: TrendingUp, title: t.services.personalizedPlans, text: t.services.personalizedPlansDesc },
      ],
    },
    {
      id: "financial-planning",
      icon: Target,
      title: t.services.financialPlanningTitle,
      subtitle: t.services.financialPlanningSubtitle,
      description: t.services.financialPlanningDesc,
      details: [
        { icon: BarChart3, title: t.services.comprehensiveAnalysis, text: t.services.comprehensiveAnalysisDesc },
        { icon: DollarSign, title: t.services.taxStrategy, text: t.services.taxStrategyDesc },
        { icon: Clock, title: t.services.spousalCoordination, text: t.services.spousalCoordinationDesc },
      ],
    },
  ];

  return (
    <>
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            {t.services.pageTitle}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            {t.services.pageSubtitle}
          </p>
        </div>
      </section>

      {services.map((service, index) => {
        const Icon = service.icon;
        const isAlt = index % 2 === 1;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 sm:py-28 scroll-mt-24 ${isAlt ? "bg-muted" : ""}`}
          >
            <div className="mx-auto max-w-6xl px-4 lg:px-8">
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-primary">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {service.details.map((detail) => {
                  const DetailIcon = detail.icon;
                  return (
                    <Card key={detail.title}>
                      <CardContent className="pt-2">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <DetailIcon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="mb-2 text-base font-semibold text-foreground">
                          {detail.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {detail.text}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Quick links */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <SectionHeading
            title={t.services.notSureTitle}
            subtitle={t.services.notSureSubtitle}
          />
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/calculator"
              className={buttonVariants({ size: "lg" })}
            >
              {t.services.tryCalculator}
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {t.services.contactUs}
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        title={t.services.ctaTitle}
        description={t.services.ctaDescription}
        buttonText={t.services.ctaButton}
        buttonHref="/contact"
      />
    </>
  );
}
