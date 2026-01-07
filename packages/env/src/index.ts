import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  DATABASE_URL: z.url(),
  NEXT_PUBLIC_API_URL: z.url(),
});

export type Env = z.infer<typeof envSchema>;

export function loadEnv(raw: unknown): Env {
  return envSchema.parse(raw);
}
