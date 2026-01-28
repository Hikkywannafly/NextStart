/**
 * Site Configuration
 * Update these values to customize your boilerplate
 */

export const siteConfig = {
  name: "NextStart",
  description:
    "Production-ready Next.js 16 boilerplate with Supabase, shadcn/ui, and modern tooling",
  url: "https://nextstart-demo.vercel.app",

  author: {
    name: "Nekozzuki",
    github: "https://github.com/Hikkywannafly",
    donate: "https://ko-fi.com/nekozzuki",
  },

  links: {
    github: "https://github.com/Hikkywannafly/NextStart",
    demo: "https://nextstart-demo.vercel.app",
  },

  // Features included in the boilerplate
  features: [
    { name: "Next.js 16", enabled: true },
    { name: "Supabase", enabled: true },
    { name: "shadcn/ui", enabled: true },
    { name: "React Query", enabled: true },
    { name: "Dark Mode", enabled: true },
    { name: "i18n", enabled: true },
    { name: "Biome", enabled: true },
    { name: "Git Hooks", enabled: true },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
