"use client";

import { ArrowRight, Github, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative py-20 lg:py-32">
      {/* Aurora Background */}
      <div className="aurora-gradient absolute inset-0 opacity-10 dark:opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Heading */}
          <h2 className="mb-6 font-bold text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            Ready to Build Something
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Amazing?
            </span>
          </h2>

          {/* Description */}
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Get started with NextStart today and ship your next project 10x
            faster.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group cursor-pointer bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
              asChild
            >
              <Link href="/dashboard">
                Get Started for Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </a>
            </Button>
          </div>

          {/* Quick Start Steps */}
          <div className="mx-auto max-w-2xl space-y-3 text-left">
            <div className="text-center font-semibold text-muted-foreground text-sm uppercase tracking-wide">
              Quick Start
            </div>
            <div className="glass-card smooth-transition cursor-pointer rounded-lg p-4 hover:shadow-md">
              <code className="block text-sm">
                <span className="text-muted-foreground">$</span> git clone
                your-repo-url
              </code>
            </div>
            <div className="glass-card smooth-transition cursor-pointer rounded-lg p-4 hover:shadow-md">
              <code className="block text-sm">
                <span className="text-muted-foreground">$</span> pnpm install
              </code>
            </div>
            <div className="glass-card smooth-transition cursor-pointer rounded-lg p-4 hover:shadow-md">
              <code className="block text-sm">
                <span className="text-muted-foreground">$</span> pnpm dev
              </code>
            </div>
          </div>

          {/* GitHub Stats */}
          <div className="mt-12 flex items-center justify-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
              <span>1.2k stars</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div>MIT License</div>
            <div className="h-4 w-px bg-border" />
            <div>Free & Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
}
