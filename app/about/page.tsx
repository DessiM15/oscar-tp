"use client";

import { useEffect } from "react";
import {
  Heart,
  GraduationCap,
  Scale,
  Users,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { useTranslation } from "@/lib/language-context";

const valueIcons = [GraduationCap, Heart, Scale, Users];

export default function AboutPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t.about.metaTitle} | Teacher's Pension`;
  }, [t]);

  const values = [
    { icon: valueIcons[0], title: t.about.educatingEducators, description: t.about.educatingEducatorsDesc },
    { icon: valueIcons[1], title: t.about.familyOwned, description: t.about.familyOwnedDesc },
    { icon: valueIcons[2], title: t.about.vendorNeutral, description: t.about.vendorNeutralDesc },
    { icon: valueIcons[3], title: t.about.ledByEducators, description: t.about.ledByEducatorsDesc },
  ];

  const credentials = [
    t.about.credential1,
    t.about.credential2,
    t.about.credential3,
    t.about.credential4,
    t.about.credential5,
    t.about.credential6,
  ];

  return (
    <>
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            {t.about.pageTitle}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            {t.about.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Mission Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <SectionHeading title={t.about.storyTitle} align="left" />
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>{t.about.storyP1}</p>
            <p>{t.about.storyP2}</p>
            <p>{t.about.storyP3}</p>
            <p>{t.about.storyP4}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title={t.about.valuesTitle}
            subtitle={t.about.valuesSubtitle}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title}>
                  <CardContent className="pt-2">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <SectionHeading
            title={t.about.commitmentTitle}
            subtitle={t.about.commitmentSubtitle}
          />
          <ul className="space-y-4">
            {credentials.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-base text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        title={t.about.ctaTitle}
        description={t.about.ctaDescription}
        buttonText={t.about.ctaButton}
        buttonHref="/contact"
      />
    </>
  );
}
