import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';

// https://github.com/eslint/eslint/discussions/15305
import { readFileSync } from 'fs';
const packageJSON = JSON.parse(
  readFileSync('./package.json', { encoding: 'utf-8' }),
);

const { name } = packageJSON;

const nodeEnv = `${process.env.NODE_ENV}`;

console.log(`package name: ${name}`);
console.log(`environment: ${nodeEnv}`);

const isProduction = `${nodeEnv}` === 'production';

// https://vite.dev/config/
export default defineConfig({
  ...(isProduction ? { base: `/${name}/` } : { build: { sourcemap: true } }),

  resolve: {
    tsconfigPaths: true,
  },

  plugins: [tailwindcss(), svelte() /*, tsconfigPaths() */],
});
