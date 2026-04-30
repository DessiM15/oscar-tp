"use client";

import { useTranslation } from "@/lib/language-context";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  variant?: "light" | "dark";
}

export function LanguageToggle({ variant = "dark" }: LanguageToggleProps) {
  const { language, setLanguage } = useTranslation();

  const base = "text-xs font-semibold tracking-wide transition-colors cursor-pointer";
  const active =
    variant === "light"
      ? "text-white"
      : "text-foreground";
  const inactive =
    variant === "light"
      ? "text-white/50 hover:text-white/80"
      : "text-muted-foreground hover:text-foreground";

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => setLanguage("en")}
        className={cn(base, language === "en" ? active : inactive)}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className={cn("text-xs", variant === "light" ? "text-white/30" : "text-muted-foreground/50")}>
        |
      </span>
      <button
        onClick={() => setLanguage("es")}
        className={cn(base, language === "es" ? active : inactive)}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}
