import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ExampleForm } from "@/components/examples/example-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ExamplesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" className="cursor-pointer" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-bold text-4xl">Form Validation Example</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Demonstrating react-hook-form with Zod validation, error handling, and
          toast notifications
        </p>
      </div>

      {/* Form Example */}
      <div className="mb-16">
        <ExampleForm />
      </div>

      {/* Implementation Details */}
      <div className="space-y-6">
        <h2 className="font-bold text-2xl">Implementation Details</h2>

        <Card>
          <CardHeader>
            <CardTitle>Form Component</CardTitle>
            <CardDescription className="font-mono text-xs">
              src/components/examples/example-form.tsx
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>✓ react-hook-form integration</li>
              <li>✓ Zod schema validation</li>
              <li>✓ Error messages</li>
              <li>✓ Loading states</li>
              <li>✓ Toast notifications</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Other Examples</CardTitle>
            <CardDescription>
              More examples available in the boilerplate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <Link
                  href="/protected"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  Protected Route Example
                </Link>
                <p className="text-muted-foreground text-sm">
                  Server-side authentication check with Supabase
                </p>
              </div>
              <div>
                <span className="font-medium">API Route Example</span>
                <p className="text-muted-foreground text-sm">
                  POST /api/example - Request validation with Zod
                </p>
              </div>
              <div>
                <span className="font-medium">Environment Validation</span>
                <p className="text-muted-foreground text-sm">
                  src/env.mjs - Type-safe environment variables
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
