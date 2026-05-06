"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, Clock } from "lucide-react";
import { useTranslation } from "@/lib/language-context";
import { CALENDAR_LINK } from "@/lib/constants";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState("");
  const { t } = useTranslation();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      topic: (form.elements.namedItem("topic") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSucceeded(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (succeeded) {
    return (
      <div className="space-y-6">
        {/* Step 1: Success */}
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t.contactForm.successTitle}
            </h3>
            <p className="text-muted-foreground">
              {t.contactForm.successMessage}
            </p>
          </CardContent>
        </Card>

        {/* Step 2: Calendar */}
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <Calendar className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t.contactForm.scheduleTitle}
            </h3>
            {CALENDAR_LINK ? (
              <>
                <p className="text-muted-foreground mb-6">
                  {t.contactForm.scheduleMessage}
                </p>
                <a
                  href={CALENDAR_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Clock className="h-4 w-4" />
                  {t.contactForm.scheduleButton}
                </a>
              </>
            ) : (
              <p className="text-muted-foreground">
                {t.contactForm.calendarComingSoon}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
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
              <option value="roth">{t.contactForm.topicRoth}</option>
              <option value="insurance">{t.contactForm.topicInsurance}</option>
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

          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}

          <Button type="submit" disabled={submitting} size="lg" className="w-full">
            {submitting ? t.contactForm.sending : t.contactForm.send}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
