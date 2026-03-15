import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer select-none",
          {
            "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-accent/40": variant === "default",
            "border border-border text-fg hover:border-accent hover:text-accent bg-transparent": variant === "outline",
            "text-fg-muted hover:text-fg bg-transparent": variant === "ghost",
          },
          {
            "text-sm px-4 py-2 rounded-lg": size === "sm",
            "text-sm px-6 py-3 rounded-xl": size === "md",
            "text-base px-8 py-4 rounded-xl": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
