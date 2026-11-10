import { useRef, useState } from 'react';
import { REVIEWS } from '../data/reviews.js';

// TODO: replace REVIEWS with a live Google reviews source (Places API or a widget).
export default function ReviewsCarousel() {
  const track = useRef(null);
  const [open, setOpen] = useState({});
  const scroll = (dir) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 832), behavior: 'smooth' });
  };

  return (
    <section className="rule-b" style={{ padding: 'var(--section-y) 0' }}>
      <div style={{ padding: '0 var(--pad-x) 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span>Google reviews</span>
            <span style={{ letterSpacing: 2, color: 'var(--color-text)', fontSize: 16 }}>★★★★★</span>
          </div>
          <h2 className="display h-section">What clients say</h2>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="round-btn" onClick={() => scroll(-1)} aria-label="Previous reviews">←</button>
          <button className="round-btn" onClick={() => scroll(1)} aria-label="Next reviews">→</button>
        </div>
      </div>
      <div ref={track} className="review-track">
        {REVIEWS.map(([name, text], i) => {
          const long = text.length > 420;
          const isOpen = !!open[i];
          return (
            <article key={name} className="card" style={{ flex: '0 0 min(400px,84vw)', scrollSnapAlign: 'start', padding: 28, gap: 16, alignSelf: 'flex-start' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ letterSpacing: 2, fontSize: 18 }}>★★★★★</span>
                <span style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-neutral-700)' }}>Google</span>
              </div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, maxHeight: long && !isOpen ? '12.8em' : 'none', overflow: 'hidden' }}>{text}</p>
              {long && (
                <button className="btn" onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
                  style={{ alignSelf: 'flex-start', padding: '4px 0', fontSize: 14, fontWeight: 500, color: 'var(--color-text)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  {isOpen ? 'Show less' : 'Read more'}
                </button>
              )}
              <div className="display" style={{ borderTop: '2px solid var(--color-divider)', paddingTop: 12, letterSpacing: '0.04em', fontSize: 16 }}>{name}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
