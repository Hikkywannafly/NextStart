"use client";

import { DashboardLayout } from "@/components/layouts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Code2,
  Database,
  FileCode,
  Folder,
  Package,
  Settings,
  Terminal,
  Layers,
  Palette
} from "lucide-react";

export default function DashboardPage() {
  const setupItems = [
    { name: "Next.js 16", icon: CheckCircle2 },
    { name: "Supabase", icon: Database },
    { name: "shadcn/ui", icon: Palette },
    { name: "React Query", icon: Layers },
    { name: "Dark Mode", icon: Settings },
    { name: "i18n", icon: Code2 },
    { name: "Biome", icon: Terminal },
    { name: "Git Hooks", icon: CheckCircle2 },
  ];

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
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Boilerplate configuration and setup overview
          </p>
        </div>

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
              {setupItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Badge
                    key={item.name}
                    variant="secondary"
                    className="gap-1.5 px-3 py-1.5"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {item.name}
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
                    <code className="text-sm font-mono font-medium">{item.path}</code>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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
              <CardDescription>
                Common development commands
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {scripts.map((script) => (
                  <div key={script.command} className="space-y-1">
                    <code className="block rounded-md bg-background/60 px-3 py-2 text-sm font-mono">
                      {script.command}
                    </code>
                    <p className="text-xs text-muted-foreground pl-3">
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
              <CardDescription>
                Main packages included
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {dependencies.map((dep) => (
                  <div
                    key={dep.name}
                    className="flex items-center justify-between rounded-md bg-background/60 px-3 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs font-normal">
                        {dep.category}
                      </Badge>
                      <code className="text-xs font-mono">{dep.name}</code>
                    </div>
                    <span className="text-xs text-muted-foreground">
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
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                  1
                </div>
                <p className="text-sm">
                  Set up your Supabase project and add credentials to{" "}
                  <code className="rounded bg-background/60 px-1.5 py-0.5 text-xs font-mono">.env.local</code>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                  2
                </div>
                <p className="text-sm">
                  Generate database types:{" "}
                  <code className="rounded bg-background/60 px-1.5 py-0.5 text-xs font-mono">supabase gen types typescript</code>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                  3
                </div>
                <p className="text-sm">
                  Add your own pages and components in{" "}
                  <code className="rounded bg-background/60 px-1.5 py-0.5 text-xs font-mono">src/app/</code>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                  4
                </div>
                <p className="text-sm">
                  Customize the theme in{" "}
                  <code className="rounded bg-background/60 px-1.5 py-0.5 text-xs font-mono">src/app/globals.css</code>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                  5
                </div>
                <p className="text-sm">
                  Update{" "}
                  <code className="rounded bg-background/60 px-1.5 py-0.5 text-xs font-mono">README.md</code>
                  {" "}with your project information
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
