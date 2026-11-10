import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LogoDraw from './Logo/LogoDraw.jsx';
import PillButton from './PillButton.jsx';
import { NAV } from '../data/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav className="nav" style={{ position: 'sticky', top: 0, zIndex: 20, background: 'var(--color-bg)', padding: '14px clamp(16px,4vw,48px)', gap: 'clamp(14px,3vw,32px)' }}>
      <Link to="/" className="nav-brand" aria-label="Psychic Tiger home" style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
        <LogoDraw width={240} part="letters" color="#201e1d" stroke={1} animate={false} />
      </Link>

      <div className="nav-desktop">
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} end className="nav-link" style={{ color: 'var(--color-text)' }}>{n.label}</NavLink>
        ))}
        <PillButton to="/contact">Book a session</PillButton>
      </div>

      <button type="button" className="nav-burger" aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
        <span className={open ? 'burger open' : 'burger'} aria-hidden="true"><i /><i /><i /></span>
      </button>

      <div id="mobile-menu" className={open ? 'nav-mobile open' : 'nav-mobile'} hidden={!open}>
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} end className="nav-link" style={{ color: 'var(--color-text)' }}>{n.label}</NavLink>
        ))}
        <div><PillButton to="/contact">Book a session</PillButton></div>
      </div>
    </nav>
  );
}
