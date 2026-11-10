import PillButton from '../components/PillButton.jsx';
import { PRICING } from '../data/services.js';

function PriceTable({ rows }) {
  return (
    <table className="table" style={{ fontSize: 17 }}>
      <tbody>
        {rows.map(([label, price]) => (
          <tr key={label}><td>{label}</td><td className="price">{price}</td></tr>
        ))}
      </tbody>
    </table>
  );
}

const col = { display: 'flex', flexDirection: 'column', gap: 24, padding: 'clamp(32px,5vw,72px)' };
const title = { lineHeight: 1, fontSize: 'clamp(32px,4vw,56px)' };
const photo = { width: '100%', height: '100%', minHeight: 360, objectFit: 'cover' };

export default function Services() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="rule-b" style={{ padding: 'clamp(48px,7vw,104px) var(--pad-x) clamp(32px,4vw,56px)' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>2024 Pricing</div>
        <h1 className="display h-page">Services</h1>
      </div>

      <div className="auto-grid rule-b" style={{ '--col-min': '400px' }}>
        <img src="/images/jordan-4.jpg" alt="Jordan Burns with a barbell" style={photo} />
        <div style={col}>
          <div className="num">01</div>
          <h2 className="display" style={title}>Personal Training</h2>
          <PriceTable rows={PRICING.training} />
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55 }}>Private group/parties available to organize upon request. Price determined by party size.</p>
          <div style={{ background: 'var(--color-surface)', padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div className="label">Late cancellation policy</div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55 }}>sh*t happens, so you get one freebie for bailing without 24hr notice. otherwise you will be charged a session. if ongoing late cancellations occur, i will not SCHEDULe ANY FURTHER SESSIONS and re evaluate our terms.</p>
          </div>
        </div>
      </div>

      <div className="auto-grid rule-b" style={{ '--col-min': '400px' }}>
        <div style={col}>
          <div className="num">02</div>
          <h2 className="display" style={title}>Nutrition Services</h2>
          <PriceTable rows={PRICING.nutrition} />
        </div>
        <img src="/images/jordan-20.jpg" alt="Jordan Burns stretching" style={photo} />
      </div>

      <div className="auto-grid rule-b" style={{ '--col-min': '400px' }}>
        <img src="/images/jordan-105.png" alt="Jordan Burns with battle ropes" style={{ ...photo, maxHeight: 640, objectPosition: 'center 40%' }} />
        <div style={col}>
          <div className="num">03</div>
          <h2 className="display" style={title}>Remote Workout Programming</h2>
          <PriceTable rows={PRICING.remote} />
          <div><PillButton to="/contact">Book a session</PillButton></div>
        </div>
      </div>
    </section>
  );
}
