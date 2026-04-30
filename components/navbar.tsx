"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { useTranslation } from "@/lib/language-context";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { LanguageToggle } from "@/components/language-toggle";

const NAV_KEYS = ["home", "about", "services", "districts", "calculator", "contact"] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { t } = useTranslation();

  // Only use transparent/white style on homepage before scroll
  const solid = scrolled || !isHome;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        solid
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Teacher's Pension"
            width={196}
            height={60}
            className="h-12 w-auto"
            priority
          />
          <div className="hidden sm:block">
            <span className={`block text-xs tracking-wide font-sans transition-colors duration-300 ${
              solid ? "text-muted-foreground" : "text-white"
            }`}>
              {t.nav.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                solid
                  ? "text-foreground/80 hover:text-foreground hover:bg-muted"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t.nav[NAV_KEYS[i]]}
            </Link>
          ))}
          <div className="ml-3">
            <LanguageToggle variant={solid ? "dark" : "light"} />
          </div>
          <Link
            href="/contact#lead-form"
            className={buttonVariants({ size: "lg" }) + " ml-3"}
          >
            {t.nav.bookReview}
          </Link>
        </nav>

        <MobileNav solid={solid} />
      </div>
    </header>
  );
}
