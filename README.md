# Psychic Tiger — psychictiger.com

React + Vite site for Jordan Burns / Psychic Tiger personal training.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

## Structure

```
public/images/            photos (hero slideshow, services, about, contact)
src/
  main.jsx                entry, imports global styles
  App.jsx                 router + shared layout (header, reviews, footer)
  styles/
    modernist.css         design-system tokens + component classes (.nav .btn .card .table .field .input .seg-opt)
    global.css            site layer: Saira display type, pill buttons, nav underline, grid helpers
  components/
    Header.jsx            sticky nav, outlined-letters logo, current page underlined
    Footer.jsx            CTA, links, address, map, large outlined logo
    HeroSlideshow.jsx     crossfading photo hero + animated twin-tiger logo
    ReviewsCarousel.jsx   Google reviews carousel (placeholder data)
    GymMap.jsx            grayscale Google Maps embed
    PillButton.jsx        rounded thin-stroke button / link
    Logo/
      LogoDraw.jsx        SVG line-draw logo (parts: twin | letters | tiger | all)
      logoPaths.js        logo path data
  pages/                  Home, About, Services, Contact
  data/                   site.js (address, nav), slides.js, services.js, reviews.js
```

## Open tasks

- **Google reviews**: `src/data/reviews.js` holds old testimonials as placeholders. Swap for a live feed (Google Places API via a serverless function, or an embed widget) in `ReviewsCarousel.jsx`.
- **Contact form**: `Contact.jsx` → `submit()` only logs. Wire to Formspree / Netlify Forms / an API route.
- **Phone & email**: not yet on the Contact page.
- **Copy**: Home "Mi Casa Su Casa" block and About still mention the garage gym near the St. Johns Bridge; the gym is now at 1500 NW 17th Ave.
- **Hosting**: uses `BrowserRouter`; configure SPA fallback (all routes → index.html) on the host.
