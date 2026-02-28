import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-bold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[#FFCC33] text-black brutal-border brutal-shadow hover:brutal-shadow-hover": variant === "default",
            "bg-white text-black brutal-border brutal-shadow hover:bg-zinc-100 hover:brutal-shadow-hover": variant === "outline",
            "hover:bg-black/5 text-black": variant === "ghost",
            "text-black underline-offset-4 hover:underline": variant === "link",
            "h-12 px-6 py-2 text-sm": size === "default",
            "h-10 px-4 text-xs": size === "sm",
            "h-14 px-10 text-base": size === "lg",
            "h-12 w-12": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
