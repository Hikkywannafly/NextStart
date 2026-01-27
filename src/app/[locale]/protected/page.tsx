import { redirect } from "next/navigation";
import { DashboardLayout } from "@/components/layouts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export default async function ProtectedPage() {
    // Create Supabase client for server component
    const supabase = await createClient();

    // Check authentication status
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    // Redirect to login if not authenticated
    if (error || !user) {
        redirect("/login");
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">Protected Page</h1>
                    <p className="text-muted-foreground">
                        This page is only accessible to authenticated users
                    </p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>User Information</CardTitle>
                        <CardDescription>
                            Data from authenticated Supabase session
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <div className="flex justify-between">
                                <span className="font-medium">User ID:</span>
                                <code className="rounded bg-muted px-2 py-1 text-sm">
                                    {user.id}
                                </code>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Email:</span>
                                <code className="rounded bg-muted px-2 py-1 text-sm">
                                    {user.email}
                                </code>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Created:</span>
                                <code className="rounded bg-muted px-2 py-1 text-sm">
                                    {new Date(user.created_at).toLocaleDateString()}
                                </code>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>How This Works</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                        <p>
                            This is a <strong>server component</strong> that checks
                            authentication status before rendering.
                        </p>
                        <p>Key features demonstrated:</p>
                        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                            <li>Server-side authentication check using Supabase SSR</li>
                            <li>Automatic redirect for unauthenticated users</li>
                            <li>Type-safe user data access</li>
                            <li>Protected route pattern</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
