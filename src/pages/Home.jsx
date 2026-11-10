import { Link } from 'react-router-dom';
import HeroSlideshow from '../components/HeroSlideshow.jsx';
import { useContent } from '../content/ContentProvider.jsx';
import { imgProps } from '../sanity/image.js';

export default function Home() {
  const { home, services } = useContent();
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <HeroSlideshow />

      <div className="auto-grid rule-b" style={{ gap: 'clamp(24px,4vw,64px)', padding: 'var(--section-y) var(--pad-x)' }}>
        <h2 className="display" style={{ lineHeight: 0.98, fontSize: 'clamp(36px,5vw,72px)', textWrap: 'balance' }}>{home.introHeading}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignSelf: 'end', maxWidth: 560 }}>
          {(home.introParagraphs ?? []).map((t, n) => (
            <p key={n} style={{ margin: 0, fontSize: 18, lineHeight: 1.6 }}>{t}</p>
          ))}
          <Link to="/about" className="text-link">Read Jordan’s story →</Link>
        </div>
      </div>

      <div style={{ padding: 'var(--section-y) var(--pad-x) 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 16 }}>
        <h2 className="display h-section">{services.heading}</h2>
        <Link to="/services" className="text-link">Full pricing →</Link>
      </div>
      <div style={{ padding: '32px var(--pad-x) var(--section-y)', display: 'flex', flexDirection: 'column' }}>
        {(services.services ?? []).map((s, n) => {
          const img = imgProps(s.image, 1200);
          return (
          <div key={s._key} className="auto-grid" style={{ '--col-min': '340px', borderTop: '2px solid var(--color-divider)' }}>
            <div style={{ aspectRatio: '3/2', overflow: 'hidden', margin: '20px 0' }}>
              <img src={img.src} alt={img.alt} className="cover" style={img.style} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24, padding: '20px 0 20px clamp(0px,3vw,48px)' }}>
              <div className="num">{String(n + 1).padStart(2, '0')}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 className="display" style={{ lineHeight: 1, fontSize: 'clamp(28px,3vw,44px)' }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, maxWidth: 440 }}>{s.homeSummary}</p>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18 }}>{s.homePrice}</div>
              </div>
            </div>
          </div>
          );
        })}
      </div>

      <div className="auto-grid" style={{ background: 'var(--color-text)', color: 'var(--color-bg)', padding: 'var(--section-y) var(--pad-x)', gap: 'clamp(24px,4vw,64px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="eyebrow" style={{ color: 'inherit' }}>{home.gymEyebrow}</div>
          <h2 className="display" style={{ lineHeight: 0.95, fontSize: 'clamp(48px,8vw,120px)' }}>{home.gymHeading}</h2>
        </div>
        <p style={{ margin: 0, alignSelf: 'end', fontSize: 20, lineHeight: 1.5, maxWidth: 560 }}>{home.gymText}</p>
      </div>
    </section>
  );
}
