# Project notes for Claude Code

- Stack: React 18 + Vite + react-router-dom v6. Plain JS/JSX, no TypeScript.
- Styling: `src/styles/modernist.css` (design-system tokens, use `var(--color-*)` etc.) + `src/styles/global.css` (site classes). Layout specifics are inline style objects in components.
- Look: light ground #f3f2f2, ink #201e1d, charcoal/dark grays only (no red accent). Headings in Saira, uppercase, bold. Buttons are rounded pills with 1px strokes. 2px rules between sections. Nav marks current page with a thin underline.
- Copy is verbatim from the old WordPress site, typos included. Don't rewrite it.
- Logo: always use `components/Logo/LogoDraw.jsx`. Hero uses `part="twin"` (white, stroke 1.4, draws from centre outward). Header/footer use `part="letters"`, `animate={false}`. No tiger head in the header.
- Hero slideshow order and crops live in `src/data/slides.js`.
- Gym address + Google Maps link live in `src/data/site.js`.
