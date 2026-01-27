import type React from "react";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  variant?: "default" | "centered" | "gradient" | "full";
  className?: string;
  containerClassName?: string;
}

export function PageLayout({
  children,
  variant = "default",
  className,
  containerClassName,
}: PageLayoutProps) {
  const variants = {
    default: "min-h-screen bg-background",
    centered:
      "relative flex w-full min-h-screen items-center justify-center bg-background px-4 py-12",
    gradient:
      "relative flex w-full min-h-screen items-center justify-center bg-linear-to-br from-background via-background to-primary/5 px-4 py-12",
    full: "min-h-screen",
  };

  return (
    <div className={cn(variants[variant], className)}>
      <main className={cn("flex-1", containerClassName)}>{children}</main>
    </div>
  );
}
