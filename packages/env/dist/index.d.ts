import { z } from 'zod';

declare const envSchema: z.ZodObject<{
    NODE_ENV: z.ZodEnum<["development", "test", "production"]>;
    DATABASE_URL: z.ZodString;
}, "strip", z.ZodTypeAny, {
    NODE_ENV: "development" | "test" | "production";
    DATABASE_URL: string;
}, {
    NODE_ENV: "development" | "test" | "production";
    DATABASE_URL: string;
}>;
type Env = z.infer<typeof envSchema>;
declare function loadEnv(raw: unknown): Env;

export { type Env, envSchema, loadEnv };
