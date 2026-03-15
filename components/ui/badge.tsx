import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export const Badge = ({ className, variant = "default", ...props }: BadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center text-xs font-mono px-3 py-1 rounded-full",
      variant === "default" && "bg-accent/15 text-accent border border-accent/25",
      variant === "outline" && "border border-border text-fg-muted",
      className
    )}
    {...props}
  />
);
