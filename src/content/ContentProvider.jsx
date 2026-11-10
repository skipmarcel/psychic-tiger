import { createContext, useContext, useEffect, useState } from 'react';
import { DEFAULT_CONTENT } from './defaults.js';
import { sanityEnabled } from '../sanity/config.js';

const ContentContext = createContext(DEFAULT_CONTENT);
const WAIT_MS = 2500; // Show bundled content if Sanity hasn't answered by then.

// Use each Sanity document if it exists; otherwise the bundled default for that page.
const merge = (fetched) =>
  Object.fromEntries(Object.entries(DEFAULT_CONTENT).map(([k, v]) => [k, fetched?.[k] ?? v]));

export function ContentProvider({ children }) {
  const [content, setContent] = useState(sanityEnabled ? null : DEFAULT_CONTENT);

  useEffect(() => {
    if (!sanityEnabled) return;
    let done = false;
    const fallback = setTimeout(() => {
      if (!done) setContent((c) => c ?? DEFAULT_CONTENT);
    }, WAIT_MS);
    // Loaded on demand so the Sanity client isn't in the initial bundle when unused.
    Promise.all([import('../sanity/client.js'), import('../sanity/query.js')])
      .then(([{ client }, { SITE_QUERY }]) => client.fetch(SITE_QUERY))
      .then((data) => setContent(merge(data)))
      .catch((err) => {
        console.error('Sanity content failed to load; using bundled content.', err);
        setContent((c) => c ?? DEFAULT_CONTENT);
      })
      .finally(() => {
        done = true;
        clearTimeout(fallback);
      });
    return () => clearTimeout(fallback);
  }, []);

  if (!content) return null; // Brief blank (usually well under a second) instead of a flash of old text.
  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export const useContent = () => useContext(ContentContext);
