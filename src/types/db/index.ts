/**
 * Database Type Definitions
 *
 * This file contains TypeScript types for your Supabase database schema.
 *
 * ## Generating Types
 *
 * ### Option 1: Using the script (recommended)
 * 1. Update `package.json` with your Supabase project ID
 * 2. Run: `pnpm db:types`
 *
 * ### Option 2: Manual generation
 * ```bash
 * supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/db/database.types.ts
 * ```
 *
 * ### Option 3: Using Supabase CLI with linked project
 * ```bash
 * supabase login
 * supabase link --project-ref YOUR_PROJECT_ID
 * supabase gen types typescript --linked > src/types/db/database.types.ts
 * ```
 *
 * ## Usage
 *
 * After generating types, import them in your code:
 *
 * ```typescript
 * import type { Database } from '@/types/db';
 *
 * // Use with Supabase client
 * const supabase = createClient<Database>();
 *
 * // Type-safe queries
 * const { data } = await supabase
 *   .from('your_table')
 *   .select('*');
 * ```
 *
 * ## Example Database Type Structure
 *
 * ```typescript
 * export type Database = {
 *   public: {
 *     Tables: {
 *       users: {
 *         Row: {
 *           id: string;
 *           email: string;
 *           created_at: string;
 *         };
 *         Insert: {
 *           id?: string;
 *           email: string;
 *           created_at?: string;
 *         };
 *         Update: {
 *           id?: string;
 *           email?: string;
 *           created_at?: string;
 *         };
 *       };
 *     };
 *   };
 * };
 * ```
 */

// Uncomment after generating types:
// export type { Database } from './database.types';
