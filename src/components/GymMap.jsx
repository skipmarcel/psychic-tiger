import { GYM } from '../data/site.js';

export default function GymMap({ minHeight = 300 }) {
  return (
    <div style={{ position: 'relative', minHeight, border: '1px solid var(--color-neutral-600)', overflow: 'hidden', background: '#2a2827' }}>
      <iframe src={GYM.mapEmbed} title={'Map to ' + GYM.name} loading="lazy"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, filter: 'grayscale(1)' }} />
    </div>
  );
}
