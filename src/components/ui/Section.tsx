import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  containerClassName?: string;
}

export function Section({ id, className, children, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 section-padding relative", className)}>
      <div className={cn("container mx-auto max-w-6xl", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
