"use client";

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { useTranslation } from "@/lib/language-context";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-20 pt-20">
      {/* Full-bleed background image */}
      <Image
        src="/images/hero-teachers.jpg"
        alt="Teachers together in a classroom"
        fill
        className="object-cover"
        priority
      />

      {/* Dark tint overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-24 lg:px-8">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 font-sans">
            {t.hero.badge}
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
            {t.hero.title}
          </h1>

          {/* Accent rule */}
          <div className="mt-6 h-[3px] w-[60px] bg-primary rounded-full" />

          <p
            className="mt-6 max-w-lg text-lg text-white/80 font-sans animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/contact"
              className={
                buttonVariants({ size: "lg" }) +
                " text-base px-8 py-4 h-auto"
              }
            >
              {t.hero.cta} &rarr;
            </Link>
          </div>

          <p
            className="mt-4 text-sm text-white/60 font-sans animate-fade-up"
            style={{ animationDelay: "450ms" }}
          >
            {t.hero.trust}
          </p>

          <span
            className="mt-8 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/20 font-sans animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            {t.hero.license}
          </span>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="#faf9f6"
          />
        </svg>
      </div>
    </section>
  );
}
