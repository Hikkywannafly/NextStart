"use client";

import {
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  FileCode,
  Folder,
  Layers,
  Package,
  Palette,
  Settings,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layouts";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export default function DashboardPage() {
  const iconMap: Record<string, typeof CheckCircle2> = {
    "Next.js 16": CheckCircle2,
    Supabase: Database,
    "shadcn/ui": Palette,
    "React Query": Layers,
    "Dark Mode": Settings,
    i18n: Code2,
    Biome: Terminal,
    "Git Hooks": CheckCircle2,
  };

  const projectStructure = [
    { path: "src/app/", description: "Next.js App Router pages" },
    { path: "src/components/", description: "React components & UI library" },
    { path: "src/lib/", description: "Utilities & configurations" },
    { path: "src/hooks/", description: "Custom React hooks" },
    { path: "src/types/", description: "TypeScript type definitions" },
  ];

  const scripts = [
    { command: "pnpm dev", description: "Start development server" },
    { command: "pnpm build", description: "Build for production" },
    { command: "pnpm typecheck", description: "Run TypeScript type checking" },
    { command: "pnpm check", description: "Run Biome linter & formatter" },
    { command: "pnpm commit", description: "Commit with conventional commits" },
  ];

  const dependencies = [
    { name: "next", version: "16.1.0", category: "Core" },
    { name: "react", version: "19.2.0", category: "Core" },
    { name: "@supabase/supabase-js", version: "2.78.0", category: "Backend" },
    { name: "@tanstack/react-query", version: "5.90.10", category: "State" },
    { name: "next-themes", version: "0.4.6", category: "UI" },
    { name: "next-intl", version: "4.4.0", category: "i18n" },
    { name: "tailwindcss", version: "4.1.16", category: "Styling" },
    { name: "@biomejs/biome", version: "2.3.2", category: "DevTools" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="font-bold text-3xl">Dashboard</h1>
          <p className="text-muted-foreground">
            Boilerplate configuration and setup overview
          </p>
        </div>

        {/* Live Demo Info */}
        <Card className="border-blue-500/20 bg-blue-500/5">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <ExternalLink className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Live Demo
            </CardTitle>
            <CardDescription>
              This is a live demonstration of {siteConfig.name}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-3">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-background/60 px-3 py-2 font-medium text-sm transition-colors hover:bg-background"
              >
                <Code2 className="h-4 w-4" />
                View on GitHub
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link
                href={siteConfig.author.donate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-orange-500/10 px-3 py-2 font-medium text-orange-600 text-sm transition-colors hover:bg-orange-500/20 dark:text-orange-400"
              >
                ☕ Support on Ko-fi
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">
              Created by{" "}
              <Link
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                {siteConfig.author.name}
              </Link>
            </p>
          </CardContent>
        </Card>

        {/* Setup Status */}
        <Card className="border-0 bg-muted/30">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
              Setup Status
            </CardTitle>
            <CardDescription>
              All core features configured and ready
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {siteConfig.features
                .filter((f) => f.enabled)
                .map((feature) => {
                  const Icon = iconMap[feature.name] || CheckCircle2;
                  return (
                    <Badge
                      key={feature.name}
                      variant="secondary"
                      className="gap-1.5 px-3 py-1.5"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {feature.name}
                    </Badge>
                  );
                })}
            </div>
          </CardContent>
        </Card>

        {/* Project Structure */}
        <Card className="border-0 bg-muted/30">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Folder className="h-5 w-5" />
              Project Structure
            </CardTitle>
            <CardDescription>
              Organized folder structure for scalability
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {projectStructure.map((item) => (
                <div key={item.path} className="flex items-start gap-3">
                  <FileCode className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div className="flex-1 space-y-0.5">
                    <code className="font-medium font-mono text-sm">
                      {item.path}
                    </code>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Available Scripts */}
          <Card className="border-0 bg-muted/30">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Terminal className="h-5 w-5" />
                Available Scripts
              </CardTitle>
              <CardDescription>Common development commands</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {scripts.map((script) => (
                  <div key={script.command} className="space-y-1">
                    <code className="block rounded-md bg-background/60 px-3 py-2 font-mono text-sm">
                      {script.command}
                    </code>
                    <p className="pl-3 text-muted-foreground text-xs">
                      {script.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Dependencies */}
          <Card className="border-0 bg-muted/30">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Package className="h-5 w-5" />
                Key Dependencies
              </CardTitle>
              <CardDescription>Main packages included</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {dependencies.map((dep) => (
                  <div
                    key={dep.name}
                    className="flex items-center justify-between rounded-md bg-background/60 px-3 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="font-normal text-xs">
                        {dep.category}
                      </Badge>
                      <code className="font-mono text-xs">{dep.name}</code>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      v{dep.version}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="border-0 bg-muted/30">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl">Next Steps</CardTitle>
            <CardDescription>
              Customize this boilerplate for your project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-medium text-primary text-xs">
                  1
                </div>
                <p className="text-sm">
                  Update site configuration in{" "}
                  <code className="rounded bg-background/60 px-1.5 py-0.5 font-mono text-xs">
                    src/config/site.ts
                  </code>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-medium text-primary text-xs">
                  2
                </div>
                <p className="text-sm">
                  Set up your Supabase project and add credentials to{" "}
                  <code className="rounded bg-background/60 px-1.5 py-0.5 font-mono text-xs">
                    .env.local
                  </code>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-medium text-primary text-xs">
                  3
                </div>
                <p className="text-sm">
                  Generate database types:{" "}
                  <code className="rounded bg-background/60 px-1.5 py-0.5 font-mono text-xs">
                    supabase gen types typescript
                  </code>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-medium text-primary text-xs">
                  4
                </div>
                <p className="text-sm">
                  Add your own pages and components in{" "}
                  <code className="rounded bg-background/60 px-1.5 py-0.5 font-mono text-xs">
                    src/app/
                  </code>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-medium text-primary text-xs">
                  5
                </div>
                <p className="text-sm">
                  Customize the theme in{" "}
                  <code className="rounded bg-background/60 px-1.5 py-0.5 font-mono text-xs">
                    src/app/globals.css
                  </code>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
