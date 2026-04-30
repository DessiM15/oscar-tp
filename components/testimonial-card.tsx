import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("bg-card", className)}>
      <CardContent className="pt-2">
        <blockquote className="mb-4 text-sm italic text-muted-foreground leading-relaxed font-serif">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
