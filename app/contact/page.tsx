"use client";

import { useEffect } from "react";
import { Phone, Globe, Award, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { SITE_CONFIG } from "@/lib/constants";
import { useTranslation } from "@/lib/language-context";

const { agent, locations } = SITE_CONFIG;

export default function ContactPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t.contact.metaTitle} | Teacher's Pension`;
  }, [t]);

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.tollFree,
      value: SITE_CONFIG.phone,
      detail: t.contact.tollFreeDetail,
    },
    {
      icon: Phone,
      label: t.contact.direct,
      value: agent.directPhone,
      detail: t.contact.directDetail,
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: SITE_CONFIG.email,
      detail: t.contact.emailDetail,
    },
    {
      icon: Globe,
      label: t.contact.website,
      value: "tpensions.com",
      detail: t.contact.websiteDetail,
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
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
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
