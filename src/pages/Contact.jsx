import { useState } from 'react';
import { GYM, FORMSPREE_URL } from '../data/site.js';

const CHOICES = ['Personal training', 'Nutrition', 'Remote programming', 'Group / party'];
const input = { minHeight: 44, fontSize: 16 };

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.errors?.map((x) => x.message).join(' ') || 'Request failed');
      }
      setSent(true);
    } catch (err) {
      console.error('contact form', err);
      setError('Sorry, your message didn’t send. Please try again in a moment.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="auto-grid rule-b">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 'clamp(48px,7vw,104px) var(--pad-x)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="eyebrow">Contact</div>
          <h1 className="display" style={{ lineHeight: 0.92, fontSize: 'clamp(48px,7vw,112px)' }}>Let’s train.</h1>
        </div>

        {!sent ? (
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 560 }}>
            <input type="hidden" name="_subject" value="New message from psychictiger.com" />
            {/* Spam trap: hidden from people, bots fill it in and Formspree drops the submission. */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 18 }}>
              <div className="field"><label htmlFor="f-name">Name</label><input id="f-name" name="name" className="input" required style={input} /></div>
              <div className="field"><label htmlFor="f-email">Email</label><input id="f-email" name="email" type="email" className="input" required style={input} /></div>
            </div>
            <div className="field"><label htmlFor="f-phone">Phone (optional)</label><input id="f-phone" name="phone" type="tel" className="input" style={input} /></div>
            <div className="field">
              <label>Interested in</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {CHOICES.map((c, i) => (
                  <label key={c} className="seg-opt choice"><input type="radio" name="service" value={c} defaultChecked={i === 0} />{c}</label>
                ))}
              </div>
            </div>
            <div className="field"><label htmlFor="f-msg">Message</label><textarea id="f-msg" name="message" className="input" style={{ minHeight: 140, fontSize: 16 }} /></div>
            {error && <p role="alert" style={{ margin: 0, fontSize: 16 }}>{error}</p>}
            <div><button type="submit" className="pill" disabled={sending} style={{ opacity: sending ? 0.5 : 1 }}>{sending ? 'Sending…' : 'Send'}</button></div>
          </form>
        ) : (
          <div style={{ borderTop: '2px solid var(--color-divider)', paddingTop: 24, maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div className="display" style={{ fontSize: 28 }}>Message sent.</div>
            <p style={{ margin: 0, fontSize: 17 }}>Thanks. Jordan will be in touch soon.</p>
          </div>
        )}

        <div style={{ borderTop: '2px solid var(--color-divider)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 560 }}>
          <div className="label">{GYM.name}</div>
          <p style={{ margin: 0, fontSize: 17 }}>{GYM.addressLine1}, {GYM.addressLine2}</p>
          <a href={GYM.mapsUrl} target="_blank" rel="noopener noreferrer" className="small-link" style={{ marginTop: 6 }}>Open in Google Maps</a>
        </div>
      </div>
      <img src="/images/jordan-11.jpg" alt="Jordan Burns training at the gym" style={{ width: '100%', height: '100%', minHeight: 420, objectFit: 'cover', objectPosition: '45% center' }} />
    </section>
  );
}
