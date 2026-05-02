// The book. One object per page, in reading order.
// Page numbers (01, 02, …) are assigned automatically based on this order.

const raw = [
  {
    title: 'Why a book',
    gesture: 'Most LLM output is a wall. A book is a shape.',
    body: 'A model can answer almost anything, but the answer arrives flat — paragraph after paragraph with no architecture, no edges, no place for a reader to stand. [[sveltekitbook]] is a wager that the failure is not in the model, it is in the container. Give the same content one topic per page, with a [[gesture]], a body, and a plain-terms aside, and a reader can hold it. The container is the argument.',
    eli5: 'When you ask an AI a big question, the answer is usually a giant blob of text. This project is a different shape to put that text in — one idea per page, like a book — so the words land instead of pile up.'
  },
  {
    title: 'Where it came from',
    gesture: 'A worked example: take real policy, lay it on a spectrum, let the reader find themselves.',
    body: 'The first book that worked this way was [By Degrees](https://andygauge.github.io/by-degrees/) — a tour of U.S. policy from 1976 to 2026 with each law placed on a −5..+5 political [[spectrum]]. Reading order is left-to-right along the axis, not chronological. You don\'t argue with the reader; you just walk them past Oregon\'s Measure 110 at −5, the SAFE-T Act at −4, Washington\'s paid family leave, on through the center, and out to the far right. By the time the palette has shifted four times, the reader knows which degree they actually nod along with — and which ones surprised them. It is a gut check the prose alone cannot deliver. The tool came out of needing that experience for other subjects too: what religion says about gender roles, therapy, history.',
    eli5: 'The first book in this format walks every U.S. policy from far-left to far-right. Reading it, you notice which laws you nod at and which ones make you tense up — that\'s your political gut, not your political opinion.'
  },
  {
    title: 'The wager',
    gesture: 'Walk an agent through what a book needs and the output comes back human-shaped.',
    body: 'When you ask an LLM to write *content*, you get content. When you ask it to fill the next page of a book that has a cover, a [[contents]] room, a [[glossary]], and a known house style, you get something else — output bent by the scaffold. The architecture is a prompt. This sample book is one of the proofs: every page is short, every page knows its number, and the next-page link is the next idea, not whatever the model felt like saying.',
    eli5: 'The trick is that giving the AI a shape to fill — pages, sections, a table of contents — makes its writing better. The form forces the discipline.'
  },
  {
    title: 'The page',
    gesture: 'Title. Gesture. Body. Plain terms. Optional source. Always one screen.',
    body: 'Every page in a sveltekitbook follows the same skeleton. The **title** is what this page is. The [[gesture]] is the one sentence the reader could quote back. The body is the argument — under 400 words. The "in plain terms" block is the same idea, simpler, for a reader without your background. Source and citation are optional. None of this is enforced by code; it is the discipline the format invites.',
    eli5: 'Every page has the same parts in the same places. You always know where to find the headline and where to find the simple version.'
  },
  {
    title: 'The outline',
    gesture: 'One file. One source of truth. Page numbers fall out of order.',
    body: '`src/lib/outline.js` is the book. Each page is a plain object — `title`, `gesture`, `body`, optional `eli5`, optional `citation`, optional `link`, optional `year` or `spectrum`. Reorder the array, the page numbers renumber. Drop a page, the rest close up. There is no CMS, no database, no admin UI. The text and the order live next to the code that renders them, in a file you can read top to bottom.',
    eli5: 'All the writing lives in one JavaScript file. Move things around in the list and the page numbers fix themselves.'
  },
  {
    title: 'The continuum',
    gesture: 'Three formats: none, timeline, spectrum. Pick the axis the book lives on.',
    body: 'A flat sequence is fine when order is the only structure. A [[timeline]] adds a `year` to every page and renders a decade axis the reader can scrub. A [[spectrum]] places every page on a −N..+N integer axis with palette shifts as you cross stops — useful when the book is *about* a continuum (left/right, secular/religious, denying/integrating). The same outline format works for all three. You pick once at scaffold time, and you can change later.',
    eli5: 'A book can be a straight line, a timeline of years, or a left-to-right spectrum. The same outline supports all three; you just pick which one.'
  },
  {
    title: 'Rooms',
    gesture: 'A book is more than its pages. The other rooms make the pages legible.',
    body: 'Beyond the cover and the numbered pages, a sveltekitbook can include a contents room, a glossary, an index (every occurrence of every indexed term), an authors / sources room for citations, a topics room for thematic grouping, an about page for front matter, and a standalone continuum visualization. Each is opt-in at scaffold time and editable after. They are not features — they are the shape of a book.',
    eli5: 'A book has more than just pages — it has a table of contents, a glossary, an "about" page. You pick which of those to include.'
  },
  {
    title: 'Chapters and steps',
    gesture: 'When the book is long enough to need internal structure, sections group into chapters and pages can alternate prose with code.',
    body: 'For longer books, the chaptered structure groups sections under chapters. Each section carries a `chapterId`, a `chapterNum`, and a `chapterTitle`; consecutive sections with the same id fall into the same chapter automatically — there is no separate tree to maintain. The reader gets a chapter rail at the top of every page that names the current chapter and lets them jump to the previous or next one. Inside a section, the optional `steps` array lets a page alternate prose and code in a strict rhythm — `{ prose, code, lang }` per step. The renderer shows a paragraph, then a syntax-highlighted block, then another paragraph, in turn. Useful for tutorials and explainers where the argument moves a few lines of code at a time. [Too Many Lists](https://andygauge.github.io/too-many-lists/16) is the longest demonstration: dozens of chapters that build progressively more correct linked lists in Rust, each chapter a sequence of prose/code steps.',
    eli5: 'A long book gets chapters. Inside a section, you can also alternate explanation and code, like a tutorial that walks you through a snippet paragraph by paragraph.'
  },
  {
    title: 'The runtime',
    gesture: 'Small on purpose: gestures, md, palette, Giscus. Everything else is yours.',
    body: 'The `sveltekitbook` npm package holds only the parts that are truly shared and stable. `createPager` turns wheel + touch + arrow keys into next/previous navigation. `md(text, opts)` parses inline `**bold**`, `*em*`, and `[[term]]`. `makeSpectrum` builds the −N..+N color ramp. `Giscus.svelte` mounts GitHub Discussions comments per page. Everything else — the cover, the page layout, the rooms — gets scaffolded *into* your project as editable files.',
    eli5: 'The shared library is tiny. It only holds the bits every book needs the same way. The visual stuff — covers, page styling, rooms — is copied into your project so you can change it freely.'
  },
  {
    title: 'Cross-links',
    gesture: 'Write `[[term]]` anywhere in a body. It auto-links to the glossary.',
    body: 'In any field rendered through `md()` — `body`, `gesture`, `eli5` — wrap a term in double square brackets and it becomes a link to that entry in the glossary. The match is case-insensitive against the glossary keys. The glossary itself is a single object in `src/lib/glossary.js`. Cross-references between glossary entries are supported via a `see` array. There is no separate authoring step; you just write `[[gesture]]` and it links.',
    eli5: 'If you put double brackets around a word, it turns into a link to that word\'s definition. Like a wiki, but the wiki is a single file you control.'
  },
  {
    title: 'Gestures',
    gesture: 'Wheel right, swipe left, press →. The same intent, three input devices.',
    body: 'The page does not scroll between sections — it pages. `createPager` listens for a horizontal wheel gesture, a touch drag, or an arrow keypress, and turns all three into the same outcome: next page or previous page. The view-transition API animates the title across the swap. On a phone you swipe; on a laptop you scroll; on a keyboard you press →. The book feels the same on each.',
    eli5: 'Whatever device you read on, "next page" works the way that device expects. Swipe on a phone, scroll on a laptop, arrow key on a keyboard.'
  },
  {
    title: 'Static, deployable',
    gesture: 'It is a SvelteKit site with adapter-static. `npm run build`, drop the folder, done.',
    body: 'The output is a plain static site — HTML, CSS, JS, no server. GitHub Pages, Netlify, Cloudflare, an S3 bucket, a USB stick. There is no backend to keep alive. Comments piggyback on GitHub Discussions through Giscus, so even the dynamic part is hosted somewhere stable. A book you write today should still load in ten years.',
    eli5: 'When you build the site, you get a folder of files that runs anywhere. There is no server to maintain. It will keep working.'
  },
  {
    title: 'Edit freely',
    gesture: 'The scaffold is a starting point, not a contract. Routes are yours.',
    body: '`create-sveltekitbook` writes a complete SvelteKit project to disk and steps back. The cover, the per-page layout, the contents room — all of it is normal Svelte you can rewrite. The runtime is small precisely so you are not locked into anyone\'s design choices. Make the book yours. The format is a discipline, not a cage.',
    eli5: 'Once the book is on your computer, every file is yours to change. Nothing is hidden. The tool gets out of the way.'
  }
];

export const flat = raw.map((s, i) => ({
  ...s,
  num: String(i + 1).padStart(2, '0'),
  orderIndex: i
}));

export function next(num) {
  const i = flat.findIndex((s) => s.num === num);
  return i >= 0 && i < flat.length - 1 ? flat[i + 1] : null;
}

export function prev(num) {
  const i = flat.findIndex((s) => s.num === num);
  return i > 0 ? flat[i - 1] : null;
}
