# Project notes for Claude Code

- Stack: React 18 + Vite + react-router-dom v6. Plain JS/JSX, no TypeScript.
- Styling: `src/styles/modernist.css` (design-system tokens, use `var(--color-*)` etc.) + `src/styles/global.css` (site classes). Layout specifics are inline style objects in components.
- Look: light ground #f3f2f2, ink #201e1d, charcoal/dark grays only (no red accent). Headings in Saira, uppercase, bold. Buttons are rounded pills with 1px strokes. 2px rules between sections. Nav marks current page with a thin underline.
- Copy is verbatim from the old WordPress site, typos included. Don't rewrite it.
- Logo: always use `components/Logo/LogoDraw.jsx`. Hero uses `part="twin"` (white, stroke 1.4, draws from centre outward). Header/footer use `part="letters"`, `animate={false}`. No tiger head in the header.
- Editable content (hero photos, page text, services/pricing, gym address) comes from Sanity at runtime via `src/content/ContentProvider.jsx` (`useContent()`). `src/content/defaults.js` is the bundled fallback and the seed source; keep its shape in sync with `src/sanity/query.js` and the schemas in `studio/schemaTypes/`.
- Images: render with `imgProps()` from `src/sanity/image.js`; it handles both bundled `{ src, pos }` images and Sanity images (hotspot → object-position).
- Sanity project ID lives only in `src/sanity/config.js` (the Studio re-exports it). Studio is in `studio/` (own package.json, Sanity-hosted via `npm run deploy`).
- Not editable in Sanity (still in code): nav, reviews (`src/data/reviews.js`), Formspree URL and map embed (`src/data/site.js`).
