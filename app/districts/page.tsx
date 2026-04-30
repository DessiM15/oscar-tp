"use client";

import { useEffect } from "react";
import {
  Building2,
  GraduationCap,
  BarChart3,
  Shield,
  CheckCircle,
  Mail,
  Phone,
  Users,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { buttonVariants } from "@/components/ui/button";
import { useTranslation } from "@/lib/language-context";

const benefitIcons = [GraduationCap, BarChart3, Users, Shield];

export default function DistrictsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t.districts.metaTitle} | Teacher's Pension`;
  }, [t]);

  const districtBenefits = [
    { icon: benefitIcons[0], title: t.districts.noCostEducation, description: t.districts.noCostEducationDesc },
    { icon: benefitIcons[1], title: t.districts.tpxTitle, description: t.districts.tpxDesc },
    { icon: benefitIcons[2], title: t.districts.consultingTitle, description: t.districts.consultingDesc },
    { icon: benefitIcons[3], title: t.districts.wellnessTitle, description: t.districts.wellnessDesc },
  ];

  const whatWeDo = [
    t.districts.deliver1,
    t.districts.deliver2,
    t.districts.deliver3,
    t.districts.deliver4,
    t.districts.deliver5,
    t.districts.deliver6,
  ];

  return (
    <>
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            {t.districts.pageTitle}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            {t.districts.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <SectionHeading
            title={t.districts.partnerTitle}
            align="left"
          />
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>{t.districts.partnerP1}</p>
            <p>{t.districts.partnerP2}</p>
            <p>{t.districts.partnerP3}</p>
          </div>
        </div>
      </section>

      {/* Benefits cards */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title={t.districts.howWeHelpTitle}
            subtitle={t.districts.howWeHelpSubtitle}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {districtBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title}>
                  <CardContent className="pt-2">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* TPX Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    {t.districts.tpxSectionTitle}
                  </h2>
                  <p className="text-sm font-medium text-primary">{t.districts.tpxSectionLabel}</p>
                </div>
              </div>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>{t.districts.tpxSectionP1}</p>
                <p>{t.districts.tpxSectionP2}</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>tpx@tpensions.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>888-498-6870</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {t.districts.whatWeDeliver}
              </h3>
              <ul className="space-y-4">
                {whatWeDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* District CTA */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <Building2 className="mx-auto h-10 w-10 text-primary mb-6" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t.districts.bringWellnessTitle}
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            {t.districts.bringWellnessDesc}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg" })}
            >
              {t.districts.scheduleConsultation}
            </Link>
            <div className="text-sm text-muted-foreground">
              {t.districts.orCallUs} <span className="font-semibold text-foreground">1-800-474-1440</span>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title={t.districts.ctaTitle}
        description={t.districts.ctaDescription}
        buttonText={t.districts.ctaButton}
        buttonHref="/contact"
      />
    </>
  );
}
