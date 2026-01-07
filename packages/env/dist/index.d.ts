import { z } from 'zod';

declare const envSchema: z.ZodObject<{
    NODE_ENV: z.ZodEnum<{
        development: "development";
        test: "test";
        production: "production";
    }>;
    DATABASE_URL: z.ZodURL;
    NEXT_PUBLIC_API_URL: z.ZodURL;
}, z.core.$strip>;
type Env = z.infer<typeof envSchema>;
declare function loadEnv(raw: unknown): Env;

export { type Env, envSchema, loadEnv };
