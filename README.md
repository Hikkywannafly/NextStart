# NextStart

<div align="center">

![NextStart Banner](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Ready-green?style=for-the-badge&logo=supabase)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**Production-ready Next.js 16 boilerplate with Supabase, shadcn/ui, and modern
tooling**

Ship your next project 10x faster with a fully configured, type-safe foundation.

[Get Started](#quick-start) · [Live Demo](https://next-start-khaki.vercel.app/) ·
[Documentation](#features) ·
[Report Bug](https://github.com/Hikkywannafly/NextStart/issues)

</div>

---

## ✨ Features

### 🚀 Core Stack

- **[Next.js 16](https://nextjs.org/)** - App Router, Server Components,
  Streaming
- **[React 19](https://react.dev/)** - Latest React features
- **[TypeScript](https://www.typescriptlang.org/)** - Strict mode, full type
  safety
- **[Supabase](https://supabase.com/)** - Authentication, Database, Real-time
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first styling

### 🎨 UI & Components

- **[shadcn/ui](https://ui.shadcn.com/)** - 48+ beautiful, accessible components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible primitives
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon library
- **Dark Mode** - Built-in theme switching with `next-themes`

### 🌍 Developer Experience

- **[Biome](https://biomejs.dev/)** - Fast linting & formatting
- **[next-intl](https://next-intl-docs.vercel.app/)** - Internationalization
  (i18n)
- **[React Query](https://tanstack.com/query)** - Data fetching & caching
- **[React Hook Form](https://react-hook-form.com/)** +
  **[Zod](https://zod.dev/)** - Type-safe forms
- **[Husky](https://typicode.github.io/husky/)** +
  **[Commitlint](https://commitlint.js.org/)** - Git hooks & conventional
  commits

### 📦 Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components & UI library
│   ├── ui/          # shadcn/ui components
│   ├── layouts/     # Layout components
│   └── landing/     # Landing page sections
├── lib/             # Utilities & configurations
├── hooks/           # Custom React hooks
├── types/           # TypeScript type definitions
└── config/          # Site configuration
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and **pnpm** (recommended)
- **Supabase** account (free tier available)

### 1. Use This Template

Click the **"Use this template"** button at the top of this repository, or clone
it:

```bash
git clone https://github.com/Hikkywannafly/NextStart.git my-project
cd my-project
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Configure Site Settings

Update `src/config/site.ts` with your project information:

```typescript
export const siteConfig = {
   name: "YourApp",
   description: "Your app description",
   url: "https://yourapp.com",

   author: {
      name: "Your Name",
      github: "https://github.com/yourusername",
      donate: "https://ko-fi.com/yourusername",
   },

   links: {
      github: "https://github.com/yourusername/yourapp",
      demo: "https://yourapp.com",
   },
};
```

### 5. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📚 Available Scripts

| Command          | Description                      |
| ---------------- | -------------------------------- |
| `pnpm dev`       | Start development server         |
| `pnpm build`     | Build for production             |
| `pnpm start`     | Start production server          |
| `pnpm typecheck` | Run TypeScript type checking     |
| `pnpm check`     | Run Biome linter & formatter     |
| `pnpm check:fix` | Fix linting issues automatically |
| `pnpm commit`    | Commit with conventional commits |

---

## 🗄️ Database Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Copy your project URL and anon key to `.env.local`

### 2. Run Migrations

Apply the schema migration:

```bash
# Install Supabase CLI
npm install -g supabase

# Link your project
supabase link --project-ref your-project-ref

# Apply migrations
supabase db push
```

### 3. Generate TypeScript Types

```bash
supabase gen types typescript --project-id your-project-id > src/types/db/index.ts
```

---

## 🎨 Customization

### Theme

Customize colors in `src/app/globals.css`:

```css
:root {
   --primary: #2563eb;
   --secondary: #f1f5f9;
   /* ... */
}
```

### Components

All UI components are in `src/components/ui/`. Modify them to match your design
system.

### Internationalization

Add new languages in `messages/`:

```
messages/
├── en.json
├── vi.json
└── your-language.json
```

---

## 📖 Documentation

### Key Features Explained

#### Authentication

- Supabase Auth with email/password, OAuth providers
- Protected routes with middleware
- Server-side session handling

#### Forms

- Type-safe forms with React Hook Form + Zod
- Example form in `/examples` page
- Automatic validation and error handling

#### Styling

- Tailwind CSS v4 with custom design tokens
- Dark mode support out of the box
- Responsive design utilities

#### Code Quality

- Biome for fast linting & formatting
- Husky for pre-commit hooks
- Conventional commits enforced

---

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Hikkywannafly/NextStart)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

This template works with any platform that supports Next.js:

- **Netlify**
- **Railway**
- **Render**
- **AWS Amplify**

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

---

## 💖 Support

If you find this template helpful, please consider:

- ⭐ **Starring this repository**
- ☕ **[Buying me a coffee](https://ko-fi.com/nekozzuki)**
- 🐛 **[Reporting bugs](https://github.com/Hikkywannafly/NextStart/issues)**
- 💡
  **[Suggesting features](https://github.com/Hikkywannafly/NextStart/issues)**

---

## 🙏 Acknowledgments

Built with amazing open-source projects:

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

---

<div align="center">

**Made with ❤️ by [Nekozzuki](https://github.com/Hikkywannafly)**

[GitHub](https://github.com/Hikkywannafly) ·
[Ko-fi](https://ko-fi.com/nekozzuki)

</div>
