# sveltekitbook tour

A sample [sveltekitbook](https://www.npmjs.com/package/sveltekitbook) that
explains [sveltekitbook](https://www.npmjs.com/package/sveltekitbook).
Twelve pages, one topic each — the book *is* the documentation.

Live: https://andygauge.github.io/sveltekitbook-tour/

## What this book covers

Why the format exists (LLM output is a wall — a book is a shape), where
it came from (a worked example built around U.S. policy on a left/right
spectrum: [By Degrees](https://andygauge.github.io/by-degrees/)), the
anatomy of a page, the outline as single source of truth, the three
continuum formats, the optional rooms, the runtime, gestures, static
deployability, and editing.

## Run it

```sh
npm install
npm run dev
```

Open http://localhost:5173.

## Edit it

`src/lib/outline.js` is the book — each entry is a page. Reorder the
array and page numbers renumber. `src/lib/glossary.js` is the glossary;
reference any term from a body with `[[term]]`.

## Related

- [create-sveltekitbook](https://github.com/AndyGauge/create-sveltekitbook) — the scaffolder that generated this book
- [sveltekitbook (npm)](https://www.npmjs.com/package/sveltekitbook) — the runtime imported as a dependency
