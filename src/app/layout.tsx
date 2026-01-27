import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "NextStart | Production-Ready Next.js Boilerplate",
  description:
    "Ship your next project 10x faster with NextStart - a modern, production-ready Next.js 16 boilerplate with Supabase, shadcn/ui, and all the tools you need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
