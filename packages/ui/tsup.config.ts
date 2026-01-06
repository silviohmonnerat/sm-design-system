import { defineConfig } from "tsup";
import { execSync } from "node:child_process";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  onSuccess() {
    execSync("cp -R src/styles dist/styles", { stdio: "inherit" });
  },
});
