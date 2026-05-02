<script>
  import { base } from '$app/paths';
  import { TITLE, AUTHOR, YEAR } from '$lib/config.js';

  $effect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute(
      'style',
      '--bg:#ffffff;--ink:#14110d;--muted:rgba(20,17,13,0.56);--rule:rgba(20,17,13,0.16);--accent:#6a6a6a;'
    );
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = prevOverflow; };
  });
</script>

<svelte:head><title>About — {TITLE}</title></svelte:head>

<main class="page">
  <header class="top">
    <a class="mark" href="{base}/">{TITLE}</a>
    <nav class="top-nav"><a class="cover-link" href="{base}/">Cover ←</a></nav>
  </header>

  <article class="about">
    <div class="kicker">About</div>
    <h1>On this book</h1>

    <p class="lede">
      A sample sveltekitbook that explains sveltekitbook. Twelve pages, one
      topic each, walked in order. The book you are reading is also the
      reference you would use to scaffold your own.
    </p>

    <section>
      <h2>Why it exists</h2>
      <p>
        Most LLM output is a wall of text. Useful, but shapeless — no
        edges, no architecture, nowhere for a reader to stand. This format
        is a wager that the failure is in the container, not the model.
        Give the same content one topic per page, with a one-sentence
        hook and a plain-terms aside, and a reader can hold it. The
        scaffold is also a prompt: walk an agent through what a *book*
        needs and the output comes back human-shaped.
      </p>
      <p>
        The need came out of trying to think clearly about what religion
        says about gender roles, about politics, and about therapy —
        subjects that punish flat prose. The first proof was
        <a href="https://andygauge.github.io/by-degrees/">By Degrees</a>,
        which lays U.S. policy on a −5..+5 spectrum so a reader can find
        the degree they actually agree with rather than the one they
        thought they did. The tool came after.
      </p>
    </section>

    <section>
      <h2>The two packages</h2>
      <p>
        <a href="https://www.npmjs.com/package/sveltekitbook">sveltekitbook</a>
        — the runtime. Small on purpose: gestures, inline markdown, the
        spectrum palette helper, and a Giscus comment component. Imported
        as a dependency.
      </p>
      <p>
        <a href="https://www.npmjs.com/package/create-sveltekitbook">create-sveltekitbook</a>
        — the scaffolder. <code>npm create sveltekitbook@latest my-book</code>
        walks you through the choices in this book (continuum format,
        rooms, title) and writes a complete SvelteKit project to disk.
      </p>
    </section>

    <section>
      <h2>Try it</h2>
      <p>
        <code>npm create sveltekitbook@latest my-book</code> in a terminal.
        Pick a continuum, pick rooms, hit enter. Then <code>cd my-book</code>
        and <code>npm run dev</code>. You will be looking at a working
        empty version of this book that you can fill in.
      </p>
    </section>

    <section>
      <h2>Colophon</h2>
      <p>
        {TITLE}{AUTHOR ? `, by ${AUTHOR}` : ''}, {YEAR}.
      </p>
      <p>
        Built with SvelteKit and
        <a href="https://github.com/AndyGauge/create-sveltekitbook">create-sveltekitbook</a>.
        Typeset in Fraunces and Inter.
      </p>
    </section>
  </article>
</main>

<style>
  .page { min-height: 100vh; min-height: 100dvh; padding: 4vw 7vw 6vw; display: flex; flex-direction: column; gap: 3vw; }
  .top { display: flex; justify-content: space-between; align-items: center; font-family: var(--sans); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.24em; color: var(--muted); }
  .mark { font-family: var(--serif); font-style: italic; font-size: 1rem; letter-spacing: 0; text-transform: none; color: var(--ink); }
  .cover-link { color: var(--muted); transition: color 160ms; }
  .cover-link:hover { color: var(--ink); }

  .about { max-width: 60ch; }
  .kicker { font-family: var(--sans); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.28em; color: var(--muted); margin-bottom: 1.2rem; }
  h1 { font-family: var(--serif); font-weight: 300; font-style: italic; font-size: clamp(2.4rem, 6vw, 4.8rem); line-height: 0.98; letter-spacing: -0.025em; color: var(--ink); }

  .lede { font-family: var(--serif); font-style: italic; font-weight: 300; font-size: clamp(1.1rem, 1.3vw, 1.3rem); color: var(--ink); margin-top: 1.6rem; line-height: 1.5; }

  h2 { font-family: var(--serif); font-weight: 300; font-size: clamp(1.2rem, 1.7vw, 1.5rem); color: var(--ink); margin-top: 2.4rem; border-top: 1px solid var(--rule); padding-top: 1.4rem; }

  section p {
    font-family: var(--serif);
    font-weight: 300;
    font-size: clamp(0.95rem, 1.05vw, 1.05rem);
    line-height: 1.55;
    color: var(--ink);
    margin-top: 1rem;
  }

  a { color: var(--accent); border-bottom: 1px solid transparent; }
  a:hover { border-bottom-color: var(--accent); }

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.88em;
    padding: 0.08em 0.32em;
    background: rgba(20, 17, 13, 0.06);
    border-radius: 3px;
  }
</style>
