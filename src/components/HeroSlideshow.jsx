import { useEffect, useState } from 'react';
import LogoDraw from './Logo/LogoDraw.jsx';
import { SLIDES, SLIDE_SECONDS } from '../data/slides.js';

// Full-height hero: photos crossfade on a loop; logo draws once from the centre outward.
export default function HeroSlideshow({ seconds = SLIDE_SECONDS, logoFill = false }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % SLIDES.length), seconds * 1000);
    return () => clearInterval(id);
  }, [seconds]);

  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 66px)', minHeight: 560, maxHeight: 1000, overflow: 'hidden', background: '#111' }}>
      {SLIDES.map((s, n) => (
        <img key={s.src} src={s.src} alt={n === i ? 'Jordan Burns training' : ''} aria-hidden={n !== i}
          className="hero-slide" style={{ objectPosition: s.pos, opacity: n === i ? 1 : 0 }} />
      ))}
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
