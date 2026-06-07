"use client";

import { useEffect } from "react";
import { Phone, Globe, Award, Mail, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, CALENDAR_LINK } from "@/lib/constants";
import { useTranslation } from "@/lib/language-context";

const { agent, locations } = SITE_CONFIG;

export default function ContactPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t.contact.metaTitle} | OG Insurance Solutions`;
  }, [t]);

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: SITE_CONFIG.phone,
      detail: t.contact.phoneDetail,
      href: `tel:${SITE_CONFIG.phone.replace(/-/g, "")}`,
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: SITE_CONFIG.email,
      detail: t.contact.emailDetail,
      href: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: Globe,
      label: t.contact.website,
      value: "tpensions.com",
      detail: t.contact.websiteDetail,
      href: "https://tpensions.com",
    },
    {
      icon: Award,
      label: t.contact.license,
      value: `No. ${agent.license}`,
      detail: `${agent.name} — ${agent.title}`,
    },
  ];

  return (
    <>
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            {t.contact.pageTitle}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            {t.contact.pageSubtitle} {agent.name}.
          </p>
        </div>
      </section>

      <section id="lead-form" className="py-20 sm:py-28 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="flex flex-col items-center text-center gap-6 py-12 px-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {t.contactForm.bookingLabel}
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      {t.contactForm.scheduleMessage}
                    </p>
                  </div>
                  <a
                    href={CALENDAR_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="text-lg px-8 py-6">
                      {t.contactForm.scheduleButton}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <Card key={item.label}>
                    <CardContent className="flex items-start gap-4 pt-2">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.label}
                        </p>
                        <p className="text-sm text-foreground">{item.value}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block transition-opacity hover:opacity-80"
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {content}
                    </a>
                  );
                }

                return content;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.contact.locationsTitle}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.contact.locationsSubtitle}
            </p>
          </div>
          <div className="mx-auto max-w-sm grid grid-cols-1 gap-6">
            {locations.map((location) => (
              <Card key={location.name}>
                <CardContent className="pt-2">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {location.name}
                  </h3>
                  {"address" in location && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {location.address}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {location.city}, {location.state}{" "}
                    {"zip" in location && location.zip}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
