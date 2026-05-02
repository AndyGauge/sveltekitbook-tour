// Term definitions. Reference any of these from a section's `body`, `hook`,
// `eli5`, or any other rendered-through-md field as `[[term]]` — it will
// auto-link to `/glossary#term-slug`. Case-insensitive match.
//
// Keys are the canonical display term; values are plain-markdown definitions.
// You can also use an object with { definition, see } if a term cross-refs
// another term — the render page will display both.

export const GLOSSARY = {
  sveltekitbook: {
    definition:
      'A SvelteKit-based reading format: one topic per page, hook + body + plain-terms, navigated by wheel / swipe / arrow. Two packages: `sveltekitbook` (the small runtime — gestures, md, palette, Giscus) and `create-sveltekitbook` (the scaffolder).',
    see: ['hook', 'continuum']
  },
  hook: {
    definition:
      'The one-sentence hook at the top of every page — what the reader could quote back. Distinct from the body, which carries the argument. The hook lives where a pull-quote would sit in print.',
    see: ['page']
  },
  page: {
    definition:
      'One topic, one screen. Title, hook, body (under ~400 words), optional plain-terms aside, optional source. Rendered from a single object in `outline.js`; numbered automatically by reading order.',
    see: ['outline', 'hook']
  },
  outline: {
    definition:
      '`src/lib/outline.js` — the array of page objects that *is* the book. Reorder it and page numbers renumber. There is no CMS; the file is the database.',
    see: ['page']
  },
  continuum: {
    definition:
      'The axis a book lives on. Three formats: **none** (flat sequence), **timeline** (year axis with decade dots), **spectrum** (−N..+N integer axis with palette shifts at each stop). Picked at scaffold; the same outline format works for all three.',
    see: ['timeline', 'spectrum']
  },
  timeline: {
    definition:
      'Continuum format where each page carries a `year` and the cover renders a decade axis with one dot per page. Best for histories.',
    see: ['continuum']
  },
  spectrum: {
    definition:
      'Continuum format where each page carries a `spectrum` integer in [−N..+N] and the palette shifts as the reader crosses stops. Best for books *about* a continuum (left/right, secular/religious).',
    see: ['continuum']
  },
  contents: {
    definition:
      'Optional room: a flat list (or grouped list) of every section, linkable. Recommended for any book past a handful of pages.',
    see: ['rooms']
  },
  glossary: {
    definition:
      'You\'re reading it. A single object in `src/lib/glossary.js` whose keys are linkable from any page body via `[[term]]`. Cross-refs between entries are supported via a `see` array.',
    see: ['rooms']
  },
  rooms: {
    definition:
      'Optional pages beyond the cover and numbered sections — contents, glossary, index, authors, topics, about, standalone continuum. Each is opt-in at scaffold time and editable after.',
    see: ['contents', 'glossary']
  }
};
