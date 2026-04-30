import Link from "next/link";
import { cn } from "@/lib/utils";

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

export function CtaSection({
  title,
  description,
  buttonText,
  buttonHref,
  className,
}: CtaSectionProps) {
  return (
    <section className={cn("bg-primary py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">
          {description}
        </p>
        <div className="mt-8">
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-primary transition-colors hover:bg-white/90"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
