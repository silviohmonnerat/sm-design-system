// src/index.ts
import { z } from "zod";
var envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  DATABASE_URL: z.string().url()
});
function loadEnv(raw) {
  return envSchema.parse(raw);
}
export {
  envSchema,
  loadEnv
};
