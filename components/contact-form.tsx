"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "@/lib/language-context";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const { t } = useTranslation();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Mock network delay
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSucceeded(true);
  }

  if (succeeded) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <CheckCircle className="h-12 w-12 text-accent mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {t.contactForm.successTitle}
          </h3>
          <p className="text-muted-foreground">
            {t.contactForm.successMessage}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.contactForm.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">{t.contactForm.firstName}</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder={t.contactForm.firstNamePlaceholder}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">{t.contactForm.lastName}</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder={t.contactForm.lastNamePlaceholder}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t.contactForm.emailLabel}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t.contactForm.emailPlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{t.contactForm.phone}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder={t.contactForm.phonePlaceholder}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="topic">{t.contactForm.topic}</Label>
            <select
              id="topic"
              name="topic"
              required
              className="flex h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <option value="">{t.contactForm.topicPlaceholder}</option>
              <option value="pension-consulting">{t.contactForm.topicPension}</option>
              <option value="retirement-planning">{t.contactForm.topicRetirement}</option>
              <option value="benefits-review">{t.contactForm.topicBenefits}</option>
              <option value="spousal-planning">{t.contactForm.topicSpousal}</option>
              <option value="tax-strategy">{t.contactForm.topicTax}</option>
              <option value="early-retirement">{t.contactForm.topicEarly}</option>
              <option value="other">{t.contactForm.topicOther}</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t.contactForm.message}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t.contactForm.messagePlaceholder}
              rows={5}
              required
            />
          </div>

          <Button type="submit" disabled={submitting} size="lg" className="w-full">
            {submitting ? t.contactForm.sending : t.contactForm.send}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
