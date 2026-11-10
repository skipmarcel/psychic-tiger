// One-time import of the site's current content into Sanity.
// Run from studio/:  npx sanity exec scripts/seed.js --with-user-token
// Safe to re-run: it only creates documents that don't exist yet, so it never
// overwrites anything Jordan has edited.
import { createReadStream } from 'node:fs';
import { basename, resolve } from 'node:path';
import { getCliClient } from 'sanity/cli';
import { DEFAULT_CONTENT as C } from '../../src/content/defaults.js';

const client = getCliClient({ apiVersion: '2025-06-01' });
const PUBLIC_DIR = resolve(process.cwd(), '../public');

// CSS object-position ("50% 30%", "center 40%") → Sanity hotspot.
const axis = (v) => (v === undefined || v === 'center' ? 0.5 : parseFloat(v) / 100);
const hotspotFrom = (pos = 'center') => {
  const [x, y] = pos.split(/\s+/);
  return { _type: 'sanity.imageHotspot', x: axis(x), y: axis(y), width: 1, height: 1 };
};

const uploaded = new Map();
async function image(img, extra = {}) {
  if (!uploaded.has(img.src)) {
    const file = resolve(PUBLIC_DIR, img.src.replace(/^\//, ''));
    console.log('Uploading', basename(file));
    const asset = await client.assets.upload('image', createReadStream(file), { filename: basename(file) });
    uploaded.set(img.src, asset._id);
  }
  return {
    _type: 'image',
    ...extra,
    alt: img.alt,
    asset: { _type: 'reference', _ref: uploaded.get(img.src) },
    hotspot: hotspotFrom(img.pos),
  };
}

const docs = [
  { _id: 'siteSettings', _type: 'siteSettings', ...C.settings },
  {
    _id: 'homePage',
    _type: 'homePage',
    ...C.home,
    heroSlides: await Promise.all(C.home.heroSlides.map((s) => image(s, { _type: 'photo', _key: s._key }))),
  },
  { _id: 'aboutPage', _type: 'aboutPage', ...C.about, photo: await image(C.about.photo) },
  {
    _id: 'servicesPage',
    _type: 'servicesPage',
    ...C.services,
    services: await Promise.all(
      C.services.services.map(async (s) => ({
        ...s,
        _type: 'service',
        image: await image(s.image),
        prices: s.prices.map((p) => ({ ...p, _type: 'priceRow' })),
      })),
    ),
  },
  { _id: 'contactPage', _type: 'contactPage', ...C.contact, photo: await image(C.contact.photo) },
];

const tx = client.transaction();
docs.forEach((d) => tx.createIfNotExists(d));
await tx.commit();
console.log(`Done. Created any missing documents: ${docs.map((d) => d._id).join(', ')}`);
