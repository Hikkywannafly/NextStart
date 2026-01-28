"use client";

import { ArrowRight, Github, Sparkles } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const t = useTranslations("hero");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Aurora Gradient Background */}
      <div className="aurora-gradient absolute inset-0 opacity-20 dark:opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl animate-fade-in text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 font-medium text-blue-600 text-sm dark:bg-blue-500/20 dark:text-blue-400">
            <Sparkles className="h-4 w-4" />
            <span>{t("badge")}</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 font-bold text-5xl tracking-tight sm:text-6xl lg:text-7xl">
            {t("title")}
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group cursor-pointer bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
              onClick={() => scrollToSection("features")}
            >
              {t("ctaPrimary")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer"
              asChild
            >
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                {t("ctaSecondary")}
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid animate-fade-in-up grid-cols-3 gap-8 sm:gap-12"
            style={{ animationDelay: "300ms" }}
          >
            <div>
              <div className="font-bold text-3xl text-blue-600 sm:text-4xl dark:text-blue-400">
                {t("stat1")}
              </div>
              <div className="mt-1 text-muted-foreground text-sm">
                {t("stat1Text")}
              </div>
            </div>
            <div>
              <div className="font-bold text-3xl text-blue-600 sm:text-4xl dark:text-blue-400">
                {t("stat2")}
              </div>
              <div className="mt-1 text-muted-foreground text-sm">
                {t("stat2Text")}
              </div>
            </div>
            <div>
              <div className="font-bold text-3xl text-blue-600 sm:text-4xl dark:text-blue-400">
                {t("stat3")}
              </div>
              <div className="mt-1 text-muted-foreground text-sm">
                {t("stat3Text")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="-left-4 absolute top-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="-right-4 absolute top-1/3 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      </div>
    </section>
  );
}
