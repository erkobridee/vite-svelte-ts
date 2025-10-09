<script lang="ts">
  import Counter from '~/components/Counter.svelte';

  import svelteLogo from '~/assets/svelte.svg';

  // https://vitejs.dev/guide/assets.html#explicit-url-imports
  // that looks on the public directory
  import viteLogo from '/vite.svg?url';

  import '~/styles/global.css';
</script>

<svelte:head>
  <title>Vite + TS + Svelte + TailwindCSS</title>
</svelte:head>

<main class="flex flex-col gap-5">
  <div class="flex justify-center gap-5">
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>

  <h1>Vite v7.x + TypeScript v5.x + Svelte v5.x + TailwindCSS v4.x</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .card {
    padding: 2em;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

  .read-the-docs {
    color: #888;
  }
</style>
