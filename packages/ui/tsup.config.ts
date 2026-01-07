import { defineConfig } from "tsup";
import { cpSync, existsSync } from "node:fs";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  target: "es2022",
  dts: true,
  clean: true,
  outDir: "dist",
  external: ["react", "react-dom"],

  onSuccess() {
    if (existsSync("src/styles")) {
      cpSync("src/styles", "dist/styles", { recursive: true });
    }
  },
});
