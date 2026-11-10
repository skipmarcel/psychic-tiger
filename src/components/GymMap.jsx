import { MAP_EMBED } from '../data/site.js';
import { useContent } from '../content/ContentProvider.jsx';

export default function GymMap({ minHeight = 300 }) {
  const { settings } = useContent();
  return (
    <div style={{ position: 'relative', minHeight, border: '1px solid var(--color-neutral-600)', overflow: 'hidden', background: '#2a2827' }}>
      <iframe src={MAP_EMBED} title={'Map to ' + settings.gymName} loading="lazy"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, filter: 'grayscale(1)' }} />
    </div>
  );
}
