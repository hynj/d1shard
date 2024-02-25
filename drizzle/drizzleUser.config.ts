import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/schemas/entry.ts',
  out: 'drizzle',
  verbose: true
} satisfies Config;


