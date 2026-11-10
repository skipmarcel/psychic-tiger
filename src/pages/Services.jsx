import PillButton from '../components/PillButton.jsx';
import { useContent } from '../content/ContentProvider.jsx';
import { imgProps } from '../sanity/image.js';

function PriceTable({ rows }) {
  return (
    <table className="table" style={{ fontSize: 17 }}>
      <tbody>
        {rows.map((r) => (
          <tr key={r._key}><td>{r.label}</td><td className="price">{r.price}</td></tr>
        ))}
      </tbody>
    </table>
  );
}

const col = { display: 'flex', flexDirection: 'column', gap: 24, padding: 'clamp(32px,5vw,72px)' };
const title = { lineHeight: 1, fontSize: 'clamp(32px,4vw,56px)' };

// The photo fills its half of the row without making the row taller, whatever shape it is.
function Photo({ image }) {
  const p = imgProps(image, 1400);
  return (
    <div style={{ position: 'relative', minHeight: 360 }}>
      <img src={p.src} alt={p.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', ...p.style }} />
    </div>
  );
}

export default function Services() {
  const { services } = useContent();
  const list = services.services ?? [];

  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="rule-b" style={{ padding: 'clamp(48px,7vw,104px) var(--pad-x) clamp(32px,4vw,56px)' }}>
        {services.eyebrow && <div className="eyebrow" style={{ marginBottom: 16 }}>{services.eyebrow}</div>}
        <h1 className="display h-page">{services.heading}</h1>
      </div>

      {list.map((s, n) => {
        const text = (
          <div style={col}>
            <div className="num">{String(n + 1).padStart(2, '0')}</div>
            <h2 className="display" style={title}>{s.title}</h2>
            {s.prices?.length > 0 && <PriceTable rows={s.prices} />}
            {s.note && <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55 }}>{s.note}</p>}
            {s.policyText && (
              <div style={{ background: 'var(--color-surface)', padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.policyTitle && <div className="label">{s.policyTitle}</div>}
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55 }}>{s.policyText}</p>
              </div>
            )}
            {n === list.length - 1 && <div><PillButton to="/contact">Book a session</PillButton></div>}
          </div>
        );
        // Alternate photo left / right.
        return (
          <div key={s._key} className="auto-grid rule-b" style={{ '--col-min': '400px' }}>
            {n % 2 === 0 ? <><Photo image={s.image} />{text}</> : <>{text}<Photo image={s.image} /></>}
          </div>
        );
      })}
    </section>
  );
}
