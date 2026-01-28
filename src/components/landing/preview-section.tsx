"use client";

import { Code2, FileCode, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PreviewSection() {
  return (
    <section id="preview" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            See It In Action
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore example implementations and see how easy it is to build with
            NextStart.
          </p>
        </div>

        {/* Preview Tabs */}
        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="auth" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted/50">
              <TabsTrigger value="auth" className="cursor-pointer">
                <Shield className="mr-2 h-4 w-4" />
                Authentication
              </TabsTrigger>
              <TabsTrigger value="api" className="cursor-pointer">
                <Code2 className="mr-2 h-4 w-4" />
                API Routes
              </TabsTrigger>
              <TabsTrigger value="deploy" className="cursor-pointer">
                <Rocket className="mr-2 h-4 w-4" />
                Deployment
              </TabsTrigger>
            </TabsList>

            <TabsContent value="auth" className="mt-6">
              <Card className="glass-card border-0">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-md bg-blue-500/10 p-2">
                        <FileCode className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 font-semibold">
                          Supabase Authentication
                        </h3>
                        <p className="mb-4 text-muted-foreground text-sm">
                          Pre-configured authentication with email/password,
                          OAuth providers, and SSR support.
                        </p>
                        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs">
                          <code>{`// Server Component
import { createClient } from '@/supabase-clients/server'


export default async function ProtectedPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) redirect('/login')
  
  return <Dashboard user={user} />
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api" className="mt-6">
              <Card className="glass-card border-0">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-md bg-orange-500/10 p-2">
                        <Code2 className="h-5 w-5 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 font-semibold">
                          Type-Safe API Routes
                        </h3>
                        <p className="mb-4 text-muted-foreground text-sm">
                          Build robust APIs with Zod validation and TypeScript
                          type safety.
                        </p>
                        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs">
                          <code>{`// app/api/example/route.ts
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
})

export async function POST(request: Request) {
  const body = await request.json()
  const data = schema.parse(body)
  
  return Response.json({ success: true })
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="deploy" className="mt-6">
              <Card className="glass-card border-0">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-md bg-green-500/10 p-2">
                        <Rocket className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 font-semibold">Deploy to Vercel</h3>
                        <p className="mb-4 text-muted-foreground text-sm">
                          One-click deployment to Vercel with automatic CI/CD
                          pipeline.
                        </p>
                        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs">
                          <code>{`# Install Vercel CLI
pnpm add -g vercel

# Deploy to production
vercel --prod

# Environment variables are automatically synced
# from your .env.local to Vercel dashboard`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function Shield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}
