import { Link } from 'react-router-dom';

// Rounded thin-stroke button. Pass `to` for a route link, otherwise renders a <button>.
export default function PillButton({ to, children, ...rest }) {
  if (to) return <Link to={to} className="pill" {...rest}>{children}</Link>;
  return <button className="pill" {...rest}>{children}</button>;
}
