import { Link } from 'react-router-dom';
import LogoDraw from './Logo/LogoDraw.jsx';
import PillButton from './PillButton.jsx';
import GymMap from './GymMap.jsx';
import { GYM, NAV } from '../data/site.js';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-text)', color: 'var(--color-bg)', padding: 'clamp(48px,6vw,88px) var(--pad-x) clamp(24px,3vw,40px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,6vw,88px)' }}>
      <div className="auto-grid" style={{ gap: 'clamp(32px,5vw,72px)', alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 'clamp(32px,4vw,56px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h2 className="display" style={{ lineHeight: 0.95, fontSize: 'clamp(32px,4vw,52px)' }}>Ready when you are.</h2>
            <div><PillButton to="/contact">Book a session</PillButton></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr)', gap: 'clamp(32px,5vw,72px)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NAV.map((n) => <Link key={n.to} to={n.to} className="nav-link" style={{ color: 'inherit' }}>{n.label}</Link>)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 15, lineHeight: 1.5, maxWidth: 260 }}>
              <div className="label">{GYM.name}</div>
              <div>{GYM.addressLine1}<br />{GYM.addressLine2}</div>
              <a href={GYM.mapsUrl} target="_blank" rel="noopener noreferrer" className="small-link" style={{ marginTop: 4, color: 'inherit' }}>Get directions</a>
            </div>
          </div>
        </div>
        <GymMap />
      </div>
      <div style={{ borderTop: '2px solid color-mix(in srgb,#f3f2f2 30%,transparent)', paddingTop: 'clamp(24px,3vw,40px)' }}>
        <LogoDraw width={1400} part="letters" color="#f3f2f2" stroke={1.5} animate={false} style={{ width: '100%' }} />
      </div>
      <div style={{ fontSize: 13, color: 'var(--color-neutral-400)' }}>© 2026 Psychic Tiger · psychictiger.com</div>
    </footer>
  );
}
