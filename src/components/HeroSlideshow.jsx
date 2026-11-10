import { useEffect, useState } from 'react';
import LogoDraw from './Logo/LogoDraw.jsx';
import { useContent } from '../content/ContentProvider.jsx';
import { imgProps } from '../sanity/image.js';

// Full-height hero: photos crossfade on a loop; logo draws once from the centre outward.
export default function HeroSlideshow({ logoFill = false }) {
  const { home } = useContent();
  const slides = home.heroSlides ?? [];
  const seconds = home.slideSeconds || 6;
  const [i, setI] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), seconds * 1000);
    return () => clearInterval(id);
  }, [seconds, slides.length]);

  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 66px)', minHeight: 560, maxHeight: 1000, overflow: 'hidden', background: '#111' }}>
      {slides.map((s, n) => {
        const p = imgProps(s, 2000);
        return (
          <img key={s._key} src={p.src} alt={n === i ? p.alt : ''} aria-hidden={n !== i}
            className="hero-slide" style={{ ...p.style, opacity: n === i ? 1 : 0 }} />
        );
      })}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 18%, rgba(0,0,0,0) 38%)' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'clamp(20px,3.5vw,52px)', display: 'flex', justifyContent: 'center', padding: '0 var(--pad-x)' }}>
        <div style={{ width: 'min(1000px,100%)' }}>
          <LogoDraw width={1000} part="twin" color="#ffffff" stroke={1.4} fill={logoFill} />
        </div>
      </div>
      <button type="button" className="scroll-cue" aria-label="Scroll down"
        onClick={(e) => window.scrollBy({ top: e.currentTarget.parentElement.getBoundingClientRect().bottom - 66, behavior: 'smooth' })}>
        <svg width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden="true">
          <path d="M1 1.5 14 14.5 27 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
