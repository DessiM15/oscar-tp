"use client";

import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function ClickToCall() {
  const phoneDigits = SITE_CONFIG.phone.replace(/-/g, "");

  return (
    <a
      href={`tel:${phoneDigits}`}
      aria-label={`Call ${SITE_CONFIG.phone}`}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 active:scale-95 md:h-16 md:w-16"
    >
      <Phone className="h-6 w-6 md:h-7 md:w-7" />
    </a>
  );
}
