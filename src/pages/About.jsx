import { PortableText } from '@portabletext/react';
import { useContent } from '../content/ContentProvider.jsx';
import { imgProps } from '../sanity/image.js';

// Story styles chosen in the Studio: Normal, Large text (lead), Subheading (h3).
const storyComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    lead: ({ children }) => <p className="lead">{children}</p>,
    h3: ({ children }) => (
      <h3 className="display" style={{ lineHeight: 1, margin: '24px 0 0', fontSize: 'clamp(28px,3vw,40px)' }}>{children}</h3>
    ),
  },
};

export default function About() {
  const { about } = useContent();
  const photo = imgProps(about.photo, 1200);

  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="rule-b" style={{ padding: 'clamp(48px,7vw,104px) var(--pad-x) clamp(32px,4vw,56px)' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>About</div>
        <h1 className="display h-page" style={{ maxWidth: 1200 }}>{about.heading}</h1>
      </div>
      <div className="auto-grid" style={{ '--col-min': '400px', gap: 'clamp(32px,5vw,80px)', padding: 'clamp(40px,6vw,88px) var(--pad-x)' }}>
        <div>
          <div style={{ position: 'sticky', top: 96, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <img src={photo.src} alt={photo.alt} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', ...photo.style }} />
            {about.photoCaption && (
              <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{about.photoCaption}</p>
            )}
          </div>
        </div>
        <div className="prose" style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 640, fontSize: 18, lineHeight: 1.65 }}>
          <PortableText value={about.story ?? []} components={storyComponents} />
          {about.signature && (
            <p className="display" style={{ fontSize: 22, letterSpacing: '0.02em', color: 'var(--color-neutral-700)' }}>{about.signature}</p>
          )}
        </div>
      </div>
    </section>
  );
}
