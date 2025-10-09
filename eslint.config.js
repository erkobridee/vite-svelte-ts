// https://eslint.org/docs/latest/use/configure/configuration-files
import js from '@eslint/js';

// https://github.com/sveltejs/eslint-plugin-svelte?tab=readme-ov-file#configuration
import eslintPluginSvelte from 'eslint-plugin-svelte';

// https://www.npmjs.com/package/globals
import globals from 'globals';

//---//

// https://eslint.org/docs/latest/use/configure/ignore#including-gitignore-files

import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

//---//

import svelteConfig from './svelte.config.js';

//---///

/** @type {import('eslint').Linter.Config[]} */
export default [
  includeIgnoreFile(gitignorePath),

  js.configs.recommended,

  // https://sveltejs.github.io/eslint-plugin-svelte/user-guide/
  ...eslintPluginSvelte.configs.base,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  {
    files: ['**/*.svelte'],

    languageOptions: {
      parserOptions: {
        // Specify the `svelte.config.js`.
        svelteConfig,

        // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
        parser: '@typescript-eslint/parser',
      },
    },

    rules: {
      // https://github.com/sveltejs/eslint-plugin-svelte/blob/main/packages/eslint-plugin-svelte/src/configs/flat/recommended.ts

      // eslint-plugin-svelte rules
      'svelte/comment-directive': 'error',
      'svelte/infinite-reactive-loop': 'error',
      'svelte/no-at-debug-tags': 'warn',
      'svelte/no-at-html-tags': 'error',
      'svelte/no-dom-manipulating': 'error',
      'svelte/no-dupe-else-if-blocks': 'error',
      'svelte/no-dupe-on-directives': 'error',
      'svelte/no-dupe-style-properties': 'error',
      'svelte/no-dupe-use-directives': 'error',
      'svelte/no-export-load-in-svelte-module-in-kit-pages': 'error',
      'svelte/no-immutable-reactive-statements': 'error',
      'svelte/no-inner-declarations': [
        // https://sveltejs.github.io/eslint-plugin-svelte/rules/no-inner-declarations/
        'error',
        'functions',
        {
          blockScopedFunctions: 'disallow', //'allow' // or "disallow"
        },
      ],
      'svelte/no-inspect': 'warn',
      'svelte/no-not-function-handler': 'error',
      'svelte/no-object-in-text-mustaches': 'error',
      'svelte/no-raw-special-elements': 'error',
      'svelte/no-reactive-functions': 'error',
      'svelte/no-reactive-literals': 'error',
      'svelte/no-reactive-reassign': 'error',
      'svelte/no-shorthand-style-property-overrides': 'error',
      'svelte/no-store-async': 'error',
      'svelte/no-svelte-internal': 'error',
      'svelte/no-unknown-style-directive-property': 'error',
      'svelte/no-unnecessary-state-wrap': 'error',
      'svelte/no-unused-props': 'error',
      'svelte/no-unused-svelte-ignore': 'error',
      'svelte/no-useless-children-snippet': 'error',
      'svelte/no-useless-mustaches': 'error',
      'svelte/require-each-key': 'error',
      'svelte/require-event-dispatcher-types': 'error',
      'svelte/require-store-reactive-access': 'error',
      'svelte/system': 'error',
      'svelte/valid-each-key': 'error',
      'svelte/valid-prop-names-in-kit-pages': 'error',
    },
  },

  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"

      'no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },

    ignores: ['*.d.ts'],
  },

  // overrides
  {
    files: ['**/*.svelte'],

    // allow cases like `interface $$Props { ... }`
    rules: {
      'no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_|^\\$',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_|^\\$',
          destructuredArrayIgnorePattern: '^_|^\\$',
          varsIgnorePattern: '^_|^\\$',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
];
