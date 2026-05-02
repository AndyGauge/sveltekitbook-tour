// Book-wide metadata + service ids.
// Edit these freely; nothing else reads them outside of routes/.

export const TITLE = 'sveltekitbook';
export const AUTHOR = 'Andy Gauger';
export const YEAR = 2026;

// Canonical deployed URL. Used for QR generation, og:url, canonical link.
// To regenerate the cover QR after this changes:
//   ~/.claude/skills/qrgen/crate/target/release/qrgen \
//     "$SITE_URL" static/qr.svg --dark='#14110d' --light='#ece8df'
export const SITE_URL = 'https://andygauge.github.io/sveltekitbook-tour/';

// Giscus (GitHub Discussions comments). Open https://giscus.app, select your
// repo, copy the four ids here. If any is blank, the comment widget simply
// doesn't render — safe default.
export const GISCUS = {
  repo: '',
  repoId: '',
  category: 'General',
  categoryId: ''
};
