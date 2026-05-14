"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ChevronDown } from "lucide-react";
import { useTranslation } from "@/lib/language-context";
import { SITE_CONFIG } from "@/lib/constants";

interface ContactFormProps {
  onSubmitted?: () => void;
}

export function ContactForm({ onSubmitted }: ContactFormProps) {
  const [succeeded, setSucceeded] = useState(false);
  const { t } = useTranslation();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const topicSelect = form.elements.namedItem("topic") as HTMLSelectElement;
    const topicText = topicSelect.options[topicSelect.selectedIndex].text;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`New Lead: ${topicText}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nService Interest: ${topicText}\n\nMessage:\n${message}`
    );

    const mailtoLink = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank");

    setSucceeded(true);
    onSubmitted?.();
  }

  if (succeeded) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {t.contactForm.successTitle}
          </h3>
          <p className="text-muted-foreground mb-6">
            {t.contactForm.successMessage}
          </p>
          <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
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

          <Button type="submit" size="lg" className="w-full">
            {t.contactForm.send}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
