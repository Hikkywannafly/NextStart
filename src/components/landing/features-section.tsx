"use client";

import {
  Code2,
  Database,
  Globe,
  Layers,
  Moon,
  Palette,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Next.js 16",
    description: "Latest Next.js with App Router and React 19",
    color: "text-yellow-500",
  },
  {
    icon: Database,
    title: "Supabase Ready",
    description: "Authentication & Database configured",
    color: "text-green-500",
  },
  {
    icon: Palette,
    title: "shadcn/ui",
    description: "Beautiful UI component library",
    color: "text-pink-500",
  },
  {
    icon: Globe,
    title: "i18n Ready",
    description: "Internationalization built-in",
    color: "text-blue-500",
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    description: "Biome, Husky, commitlint",
    color: "text-orange-500",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Theme system included",
    color: "text-purple-500",
  },
  {
    icon: Code2,
    title: "TypeScript",
    description: "Strict type safety",
    color: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Best practices included",
    color: "text-red-500",
  },
  {
    icon: Layers,
    title: "React Query",
    description: "Data fetching & caching",
    color: "text-indigo-500",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Everything You Need
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A complete toolkit for building modern web applications with best
            practices built-in.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="glass-card group smooth-transition cursor-pointer border-0 hover:shadow-blue-500/10 hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className={`rounded-lg bg-gradient-to-br from-blue-500/10 to-orange-500/10 p-3 ${feature.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
