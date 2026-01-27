"use client";

import { Github, Coffee } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { siteConfig } from "@/config/site";

export function LandingHeader() {
  const t = useTranslations("header");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="glass-card fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-full border border-border/40 px-6 py-3 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="font-bold text-lg">{siteConfig.name}</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <button
            type="button"
            onClick={() => scrollToSection("features")}
            className="cursor-pointer font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            {t("features")}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("preview")}
            className="cursor-pointer font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            {t("preview")}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("showcase")}
            className="cursor-pointer font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            {t("demo")}
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />

          {/* Ko-fi Donate Button */}
          <Button
            size="sm"
            variant="ghost"
            className="hidden gap-2 rounded-full sm:inline-flex"
            asChild
          >
            <a
              href={siteConfig.author.donate}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Coffee className="h-4 w-4" />
              <span className="hidden lg:inline">Support</span>
            </a>
          </Button>

          {/* GitHub Button */}
          <Button
            size="sm"
            variant="ghost"
            className="hidden gap-2 rounded-full sm:inline-flex"
            asChild
          >
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="hidden lg:inline">GitHub</span>
            </a>
          </Button>

          {/* Get Started Button */}
          <Button
            size="sm"
            className="rounded-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
            asChild
          >
            <Link href="/dashboard">{t("getStarted")}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
