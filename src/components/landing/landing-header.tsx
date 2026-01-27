"use client";

import { Github, Rocket } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function LandingHeader() {
  const t = useTranslations("header");

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="glass-card container mx-auto flex items-center justify-between rounded-2xl border-0 px-4 py-3 shadow-lg sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl transition-colors hover:text-blue-600 dark:hover:text-blue-400"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-orange-500">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="hidden sm:inline">NextStart</span>
        </Link>

        {/* Navigation & Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#features"
              className="cursor-pointer font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
            >
              {t("features")}
            </a>
            <a
              href="#preview"
              className="cursor-pointer font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
            >
              {t("preview")}
            </a>
            <a
              href="#showcase"
              className="cursor-pointer font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
            >
              {t("demo")}
            </a>
          </nav>

          {/* Divider */}
          <div className="hidden h-6 w-px bg-border md:block" />

          {/* Interactive Controls */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* GitHub Button */}
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>

            {/* Get Started Button - Hidden on mobile */}
            <Button
              size="sm"
              className="hidden cursor-pointer bg-orange-500 text-white hover:bg-orange-600 sm:inline-flex dark:bg-orange-600 dark:hover:bg-orange-700"
              asChild
            >
              <Link href="/dashboard">{t("getStarted")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
