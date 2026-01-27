"use client";

import { Check, Code2, Globe, Moon, Palette, Shield } from "lucide-react";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const showcaseFeatures = [
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Toggle between light and dark themes",
    component: "ThemeToggle",
    color: "text-purple-500",
  },
  {
    icon: Globe,
    title: "Internationalization",
    description: "Switch between English and Vietnamese",
    component: "LanguageSwitcher",
    color: "text-blue-500",
  },
  {
    icon: Code2,
    title: "Form Validation",
    description: "React Hook Form with Zod validation",
    component: "ExampleForm",
    color: "text-orange-500",
  },
  {
    icon: Shield,
    title: "Protected Routes",
    description: "Authentication-based route protection",
    component: "ProtectedRoute",
    color: "text-green-500",
  },
  {
    icon: Palette,
    title: "shadcn/ui Components",
    description: "48+ pre-installed UI components",
    component: "Components",
    color: "text-pink-500",
  },
];

export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400"
          >
            Live Demo
          </Badge>
          <h2 className="mb-4 font-bold text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Try It Yourself
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Interact with real features included in the boilerplate. Everything
            you see here is ready to use.
          </p>
        </div>

        {/* Interactive Demo Cards */}
        <div className="mx-auto mb-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="glass-card group smooth-transition animate-fade-in-up border-0 hover:shadow-blue-500/10 hover:shadow-lg"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader className="pb-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div
                      className={`rounded-lg bg-gradient-to-br from-blue-500/10 to-orange-500/10 p-3 ${feature.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {feature.component}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Live Interactive Demo */}
        <div className="mx-auto max-w-4xl">
          <Card className="glass-card animate-fade-in border-0">
            <CardHeader>
              <CardTitle className="text-center">
                Interactive Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Theme Toggle Demo */}
              <div className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/30 p-6">
                <div>
                  <h3 className="mb-1 font-semibold">Theme Switcher</h3>
                  <p className="text-muted-foreground text-sm">
                    Try switching between light and dark mode
                  </p>
                </div>
                <ThemeToggle />
              </div>

              {/* Language Switcher Demo */}
              <div className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/30 p-6">
                <div>
                  <h3 className="mb-1 font-semibold">Language Selector</h3>
                  <p className="text-muted-foreground text-sm">
                    Switch between English and Vietnamese
                  </p>
                </div>
                <LanguageSwitcher />
              </div>

              {/* Example Links */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Button
                  variant="outline"
                  className="cursor-pointer justify-start"
                  asChild
                >
                  <Link href="/examples">
                    <Code2 className="mr-2 h-4 w-4" />
                    View Form Example
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="cursor-pointer justify-start"
                  asChild
                >
                  <Link href="/protected">
                    <Shield className="mr-2 h-4 w-4" />
                    Protected Route Demo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
