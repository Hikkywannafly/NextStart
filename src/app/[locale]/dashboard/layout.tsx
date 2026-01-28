"use client";

import { ErrorBoundary } from "@/components/error-boundary";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex-1 overflow-y-auto bg-background">{children}</main>
      </div>
    </ErrorBoundary>
  );
}
