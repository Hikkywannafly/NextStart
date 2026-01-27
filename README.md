# NextStart Boilerplate

A production-ready Next.js 16 starter template with Supabase authentication,
shadcn/ui components, and Tailwind CSS v4.

## ✨ Features

### Core Stack

- ⚡ **Next.js 16** - Latest Next.js with App Router and React 19
- 🗄️ **Supabase** - Authentication and database with SSR support
- 🎨 **shadcn/ui** - Beautiful, accessible UI components
- 🎯 **Tailwind CSS v4** - Latest Tailwind with modern features
- 📘 **TypeScript** - Full type safety with strict mode

### Developer Experience

- 🔧 **Biome** - Fast linter and formatter (replaces ESLint + Prettier)
- 🪝 **Husky** - Git hooks for code quality
- 📝 **Commitlint** - Conventional commit messages
- 🔄 **React Query** - Powerful data fetching and caching
- 🌍 **next-intl** - Internationalization ready
- 🌙 **next-themes** - Dark mode support

### UI Components (shadcn/ui)

All Radix UI components pre-installed:

- Accordion, Alert Dialog, Avatar, Button, Card, Checkbox
- Dialog, Dropdown Menu, Form, Input, Label, Select
- Tabs, Toast, Tooltip, and many more...

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm (required - this project uses pnpm)
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nextstart-boilerplate
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser** Navigate to
   [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nextstart-boilerplate/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Internationalized routes
│   │   │   ├── dashboard/     # Dashboard example
│   │   │   ├── examples/      # Example components showcase
│   │   │   ├── protected/     # Protected route example
│   │   │   ├── layout.tsx     # Root layout
│   │   │   └── page.tsx       # Landing page
│   │   └── api/
│   │       ├── auth/          # Auth callback routes
│   │       └── example/       # Example API route
│   ├── components/
│   │   ├── examples/          # Example components
│   │   ├── layouts/           # Layout components
│   │   ├── providers/         # React providers
│   │   └── ui/                # shadcn/ui components
│   ├── hooks/                 # Custom React hooks
│   ├── i18n/                  # Internationalization config
│   ├── lib/
│   │   ├── auth/              # Auth utilities
│   │   ├── react-query/       # React Query setup
│   │   ├── supabase/          # Supabase clients
│   │   ├── theme.ts           # Theme utilities
│   │   └── utils.ts           # Utility functions
│   ├── types/
│   │   └── db/                # Database type definitions
│   ├── middleware.ts          # Next.js middleware
│   └── env.mjs                # Environment validation
├── messages/                  # i18n translation files
├── public/                    # Static assets
├── .husky/                    # Git hooks
├── .nvmrc                     # Node.js version
├── biome.jsonc               # Biome configuration
├── CHANGELOG.md              # Version history
├── components.json           # shadcn/ui configuration
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## 🗄️ Supabase Setup

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Copy your project URL and anon key to `.env.local`

### 2. Set Up Authentication

Supabase Auth is pre-configured. You can enable additional providers in your
Supabase dashboard:

- Email/Password (enabled by default)
- Google, GitHub, etc. (configure in Supabase dashboard)

### 3. Generate Database Types

```bash
# Install Supabase CLI
pnpm add -g supabase

# Login to Supabase
supabase login

# Generate types
supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/db/database.types.ts
```

Or add this script to `package.json`:

```json
"db:types": "supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/db/database.types.ts"
```

## 🎨 Adding UI Components

This project uses shadcn/ui. To add new components:

```bash
pnpm dlx shadcn@latest add [component-name]
```

Example:

```bash
pnpm dlx shadcn@latest add form
pnpm dlx shadcn@latest add table
```

## 🌍 Internationalization

The boilerplate includes next-intl for i18n support.

### Add a new language

1. Create a new message file in `messages/[locale].json`
2. Add the locale to `i18nConfig.ts`

### Use translations

```tsx
import { useTranslations } from "next-intl";

export default function Component() {
   const t = useTranslations("ComponentName");

   return <h1>{t("title")}</h1>;
}
```

## 🔧 Development Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm preview          # Build and start production server

# Code Quality
pnpm lint             # Lint code
pnpm lint:fix         # Lint and fix issues
pnpm format           # Format code
pnpm check            # Lint and format
pnpm typecheck        # Type check

# Git
pnpm commit           # Commit with conventional commits
```

## 📝 Code Quality

### Biome

This project uses Biome instead of ESLint + Prettier for faster linting and
formatting.

```bash
pnpm check            # Lint and format all files
```

### Git Hooks

Husky is configured to run checks before commits:

- Pre-commit: Runs Biome on staged files
- Commit-msg: Validates commit message format

### Commit Messages

Use conventional commits:

```bash
pnpm commit           # Interactive commit with commitizen
```

Format: `type(scope): message`

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style
- `refactor`: Code refactoring
- `test`: Tests
- `chore`: Maintenance

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

This is a standard Next.js app and can be deployed to:

- Netlify
- Railway
- AWS Amplify
- Self-hosted with Docker

## 🔐 Environment Variables

Required variables:

```env
NEXT_PUBLIC_SUPABASE_URL=        # Your Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=   # Your Supabase anon key
```

Optional variables:

```env
NEXT_PUBLIC_SITE_URL=            # Your site URL (auto-detected on Vercel)
```

## 🎯 What's Included

### Authentication

- ✅ Supabase Auth with SSR configured
- ✅ Auth callback route setup
- ✅ Protected route example
- ✅ Environment variable validation
- ⚠️ Login/signup pages not included (add as needed)

### Example Components

- ✅ Form with validation (react-hook-form + Zod)
- ✅ Protected route with auth check
- ✅ API route with validation
- ✅ Server component patterns
- ✅ Examples showcase page

### UI/UX

- ✅ Responsive layouts
- ✅ Dark mode support
- ✅ Loading states
- ✅ Toast notifications (Sonner)
- ✅ Form handling (react-hook-form + Zod)

### Developer Tools

- ✅ TypeScript strict mode
- ✅ Path aliases (@/...)
- ✅ Git hooks
- ✅ Commit linting
- ✅ Code formatting

## 🛠️ Customization

### Theme

Edit `src/app/globals.css` to customize colors and design tokens.

### Fonts

The default font is Nunito. To change:

1. Update `src/app/[locale]/layout.tsx`
2. Import your preferred Google Font

### Layout

- Header: `src/components/layouts/header.tsx`
- Footer: `src/components/layouts/footer.tsx`
- Dashboard: `src/components/layouts/dashboard-layout.tsx`

## 📚 Learn More

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest)

### Resources

- [Next.js App Router](https://nextjs.org/docs/app)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Radix UI](https://www.radix-ui.com)
- [Biome](https://biomejs.dev)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm check` to ensure code quality
5. Commit using `pnpm commit`
6. Push and create a pull request

## 📄 License

MIT License - feel free to use this boilerplate for your projects!

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) by Vercel
- [Supabase](https://supabase.com) for backend infrastructure
- [shadcn](https://ui.shadcn.com) for the amazing UI components
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Radix UI](https://www.radix-ui.com) for accessible components

---

**Happy coding! 🚀**

If you find this boilerplate helpful, please give it a ⭐ on GitHub!
