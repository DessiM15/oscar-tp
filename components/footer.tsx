"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { useTranslation } from "@/lib/language-context";
import { Phone } from "lucide-react";

const NAV_KEYS = ["home", "about", "services", "districts", "calculator", "contact"] as const;

const { agent } = SITE_CONFIG;

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/images/logo.png"
              alt="Teacher's Pension"
              width={200}
              height={60}
              className="h-12 w-auto mb-5"
            />
            <p className="text-base text-background/70 max-w-xs leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-background mb-5">
              {t.footer.quickLinks}
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-background/70 hover:text-primary transition-colors"
                >
                  {t.nav[NAV_KEYS[i]]}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-background mb-5">
              {t.footer.contactTitle}
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold text-background">
                {agent.name}
              </p>
              <p className="text-sm text-background/70">
                {agent.title} | {t.footer.licenseNo} {agent.license}
              </p>
              <div className="flex items-center gap-2.5 text-base text-background/80">
                <Phone className="h-4 w-4 text-primary" />
                <span>{t.footer.directLabel} {agent.directPhone}</span>
              </div>
              <div className="flex items-center gap-2.5 text-base text-background/80">
                <Phone className="h-4 w-4 text-primary" />
                <span>{t.footer.officeLabel} {agent.officePhone}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. {t.footer.copyright}{" "}
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
