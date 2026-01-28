# Vercel Deployment Troubleshooting

## Common Issue: "Cannot read properties of null (reading 'data')"

### Root Cause

This error occurs when Supabase environment variables are not set in your Vercel
deployment, causing the Supabase client to fail initialization.

### Solution

#### 1. Set Environment Variables in Vercel

Go to your Vercel project settings and add the following environment variables:

**Required Variables:**

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key

**Steps:**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add both variables for **Production**, **Preview**, and **Development**
   environments
5. Redeploy your application

#### 2. Get Your Supabase Credentials

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Settings** → **API**
4. Copy:
   - **Project URL** → Use for `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → Use for `NEXT_PUBLIC_SUPABASE_ANON_KEY`

#### 3. Redeploy

After setting the environment variables:

- Trigger a new deployment (push to your branch or use "Redeploy" button in
  Vercel)
- The error should be resolved

### Verification

The updated Supabase clients now include proper validation:

- If environment variables are missing, you'll see a clear error message
- This prevents cryptic "Cannot read properties of null" errors

### Additional Notes

- Environment variables with `NEXT_PUBLIC_` prefix are exposed to the browser
- Never commit `.env.local` to git
- Always use `.env.example` as a template for required variables

## Other Common Deployment Issues

### Build Errors

If you encounter build errors on Vercel:

```bash
# Locally test the production build
pnpm build

# Check for TypeScript errors
pnpm typecheck

# Check for linting errors
pnpm check
```

### Middleware Issues

If middleware is not working:

- Ensure `src/proxy.ts` is properly configured
- Check that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are
  set
- Verify the `config.matcher` pattern in `proxy.ts`

### Database Connection Issues

If you can't connect to Supabase:

- Verify your Supabase project is active (not paused)
- Check RLS policies are properly configured
- Ensure your Supabase project region matches your Vercel deployment region for
  best performance

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
