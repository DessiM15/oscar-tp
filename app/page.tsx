"use client";

import {
  Shield,
  Calculator,
  Users,
  TrendingUp,
  Clock,
  Award,
  GraduationCap,
  Briefcase,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { Hero } from "@/components/hero-video";
import { StatsBar } from "@/components/stats-bar";
import { ProblemSection } from "@/components/problem-section";
import { PensionCalculator } from "@/components/pension-calculator";
import { SectionHeading } from "@/components/section-heading";
import { FeatureCard } from "@/components/feature-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { CtaSection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { useTranslation } from "@/lib/language-context";

const whoWeServeIcons = [GraduationCap, Briefcase, UserCheck];
const featureIcons = [Shield, Calculator, Users, TrendingUp, Clock, Award];

export default function Home() {
  const { t } = useTranslation();

  const whoWeServe = [
    { icon: whoWeServeIcons[0], title: t.home.teachers, description: t.home.teachersDesc },
    { icon: whoWeServeIcons[1], title: t.home.classifiedStaff, description: t.home.classifiedStaffDesc },
    { icon: whoWeServeIcons[2], title: t.home.administrators, description: t.home.administratorsDesc },
  ];

  const features = [
    { icon: featureIcons[0], title: t.home.pensionProtection, description: t.home.pensionProtectionDesc },
    { icon: featureIcons[1], title: t.home.benefitAnalysis, description: t.home.benefitAnalysisDesc },
    { icon: featureIcons[2], title: t.home.spousalPlanning, description: t.home.spousalPlanningDesc },
    { icon: featureIcons[3], title: t.home.investmentGuidance, description: t.home.investmentGuidanceDesc },
    { icon: featureIcons[4], title: t.home.earlyRetirement, description: t.home.earlyRetirementDesc },
    { icon: featureIcons[5], title: t.home.certifiedExpertise, description: t.home.certifiedExpertiseDesc },
  ];

  const testimonials = [
    { quote: t.home.testimonial1Quote, name: t.home.testimonial1Name, role: t.home.testimonial1Role },
    { quote: t.home.testimonial2Quote, name: t.home.testimonial2Name, role: t.home.testimonial2Role },
    { quote: t.home.testimonial3Quote, name: t.home.testimonial3Name, role: t.home.testimonial3Role },
  ];

  return (
    <>
      <Hero />

      <StatsBar />

      <ProblemSection />

      {/* Calculator */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading
            title={t.home.calculatorTitle}
            subtitle={t.home.calculatorSubtitle}
          />
          <PensionCalculator />
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 font-sans">
              {t.home.whoWeServeLabel}
            </p>
          </div>
          <SectionHeading
            title={t.home.whoWeServeTitle}
            subtitle={t.home.whoWeServeSubtitle}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {whoWeServe.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <CardContent className="pt-2 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {t.home.exploreServices}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading
            title={t.home.whyChooseTitle}
            subtitle={t.home.whyChooseSubtitle}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading
            title={t.home.testimonialsTitle}
            subtitle={t.home.testimonialsSubtitle}
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={t.home.ctaTitle}
        description={t.home.ctaDescription}
        buttonText={t.home.ctaButton}
        buttonHref="/contact"
      />
    </>
  );
}
