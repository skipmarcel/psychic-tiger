import { createImageUrlBuilder } from '@sanity/image-url';
import { projectId, dataset } from './config.js';

const builder = createImageUrlBuilder({ projectId, dataset });
const urlFor = (source) => builder.image(source);

// Focal point (hotspot) → CSS object-position, adjusted for any crop.
function hotspotPosition({ hotspot, crop }) {
  if (!hotspot) return 'center';
  const c = { top: 0, bottom: 0, left: 0, right: 0, ...crop };
  const x = (hotspot.x - c.left) / (1 - c.left - c.right || 1);
  const y = (hotspot.y - c.top) / (1 - c.top - c.bottom || 1);
  const pct = (v) => `${Math.round(Math.min(1, Math.max(0, v)) * 100)}%`;
  return `${pct(x)} ${pct(y)}`;
}

/**
 * Props for an <img> from either a bundled default ({ src, pos, alt })
 * or a Sanity image ({ asset, hotspot, crop, alt }).
 */
export function imgProps(image, width = 1600) {
  if (!image) return { src: undefined, alt: '', style: {} };
  if (image.src) return { src: image.src, alt: image.alt || '', style: { objectPosition: image.pos || 'center' } };
  return {
    src: urlFor(image).width(width).fit('max').auto('format').url(),
    alt: image.alt || '',
    style: { objectPosition: hotspotPosition(image) },
  };
}
