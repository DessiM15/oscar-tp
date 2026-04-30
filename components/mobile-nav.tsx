"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useTranslation } from "@/lib/language-context";
import { buttonVariants } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";

const NAV_KEYS = ["home", "about", "services", "districts", "calculator", "contact"] as const;

export function MobileNav({ solid }: { solid: boolean }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors ${
          solid ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
        }`}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 border-b bg-background shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {t.nav[NAV_KEYS[i]]}
              </Link>
            ))}
            <div className="px-3 py-2">
              <LanguageToggle />
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={buttonVariants({ size: "lg" }) + " mt-2"}
            >
              {t.nav.freeConsultation}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
