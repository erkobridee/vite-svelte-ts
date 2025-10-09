# Svelte + TS + Vite [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/erkobridee/vite-svelte-ts)

- [Vite.js](https://vitejs.dev/)

- [TypeScript](https://www.typescriptlang.org/)

- [Svelte](https://svelte.dev/)
  - [TypeScript support](https://svelte.dev/docs/svelte/typescript)

- [TailwindCSS](https://tailwindcss.com/)

This template should help get you started developing with Svelte and TypeScript
in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) +
[Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) +
[Tailwind CSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also
powered by Vite. Deploy anywhere with its serverless-first approach and adapt to
various platforms, with out of the box support for TypeScript, SCSS, and Less,
and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some
  users.
- It is first and foremost a framework that just happens to use Vite under the
  hood, not a Vite app.

This template contains as little as possible to get started with Vite +
TypeScript + Svelte, while taking into account the developer experience with
regards to HMR and intellisense. It demonstrates capabilities on par with the
other `create-vite` templates and is a good starting point for beginners dipping
their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by
SvelteKit, the template has been structured similarly to SvelteKit so that it is
easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or
`tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed
in the configuration. Using triple-slash references keeps the default TypeScript
setting of accepting type information from the entire workspace, while also
adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file
allows VS Code to prompt the user to install the recommended extension upon
opening the project.

**Why enable `allowJs` in the TS template?**

While `allowJs: false` would indeed prevent the use of `.js` files in the
project, it does not prevent the use of JavaScript syntax in `.svelte` files. In
addition, it would force `checkJs: false`, bringing the worst of both worlds:
not being able to guarantee the entire codebase is TypeScript, and also having
worse typechecking for the existing JavaScript. In addition, there are valid use
cases in which a mixed codebase may be relevant.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by
default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often
surprising behavior. You can read the details
[here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider
creating an external store which would not be replaced by HMR.

```ts
// store.ts
// An extremely simple external store
import { writable } from 'svelte/store';
export default writable(0);
```

## Project setup steps

1. Project creation - [9b3f7831](https://github.com/erkobridee/vite-svelte-ts/commit/9b3f7831adcd7a77d7ff290d180e45d472b0340e)

   ```
   npm create vite@latest vite-svelte-ts -- --template svelte-ts
   ```

2. Define custom import alias - [793b1124](https://github.com/erkobridee/vite-svelte-ts/commit/793b112423beb512842fc7e3df99d6e060bef6d3)

   ```
   npm i -D vite-tsconfig-paths
   ```

3. Add Tailwind CSS - [ab89a654](https://github.com/erkobridee/vite-svelte-ts/commit/ab89a6541f18607a151cc0aa71843eeb7fc31f37)

   ```
   npm i -S tailwindcss

   npm i -D @tailwindcss/vite
   ```

4. Add Prettier - [d8f189e2](https://github.com/erkobridee/vite-svelte-ts/commit/d8f189e2e9147969598ac9bd7b7aa4930e7f83c0)

   ```
   npm i -D prettier prettier-plugin-svelte prettier-plugin-tailwindcss
   ```

5. Add ESLint - [59de56c1](https://github.com/erkobridee/vite-svelte-ts/commit/59de56c18e62d06936a554ff8223afd0bc65764b)

   ```
   npm i -D globals eslint eslint-plugin-svelte @eslint/compat @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

6. Add git precommit hook - [231dce57](https://github.com/erkobridee/vite-svelte-ts/commit/231dce5752844ad505c67b7a4ad412fecfbfe33e)

   ```
   npm i -D is-ci lint-staged simple-git-hooks
   ```

## Commands

### Development

```
npm start

or

npm run dev
```

### Production Build

```
npm run build
```

#### Preview

```
npm run preview
```

### Create a new project using this as a template

```
npx degit erkobridee/vite-svelte-ts ${project_name}
```

- [Vite.js > Guide > Getting Started > Community Templates](https://vitejs.dev/guide/#community-templates)

## Useful References

- [[GitHub] vitejs / vite](https://github.com/vitejs/vite)
  - [[GitHub] vitejs / vite - package: create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)

- [Vite.js Guide](https://vitejs.dev/guide/)
  - [Features](https://vitejs.dev/guide/features.html)

- [[YouTube] Vite in 100 Seconds | Fireship](https://www.youtube.com/watch?v=KCrXgy8qtjM)
  (2022/02/23)

- [[YouTube] Svelte in 100 Seconds | Fireship](https://www.youtube.com/watch?v=rv3Yq-B8qp4)
  (2021/04/13)

- [[YouTube] Svelte 5 Basics - Complete Svelte 5 Course for Beginners | Syntax](https://www.youtube.com/watch?v=8DQailPy3q8)
  (2024/10/19)
  - [[GitHub] stolinski/svelte-5-course](https://github.com/stolinski/svelte-5-course)

- [The Complete Svelte 5 Course | Joy of Code](https://joyofcode.xyz/learn-svelte)
  (2025/08/14)
