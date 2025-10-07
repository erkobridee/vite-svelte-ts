import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tsconfigPaths from "vite-tsconfig-paths";

import { name } from "./package.json";

const nodeEnv = `${process.env.NODE_ENV}`;

console.log(`package name: ${name}`);
console.log(`environment: ${nodeEnv}`);

const isProduction = `${nodeEnv}` === "production";

// https://vite.dev/config/
export default defineConfig({
  ...(isProduction ? { base: `/${name}/` } : { build: { sourcemap: true } }),

  plugins: [svelte(), tsconfigPaths()],
});
