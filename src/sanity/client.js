import { createClient } from '@sanity/client';
import { projectId, dataset, apiVersion } from './config.js';

// Public, read-only, cached (CDN). Only published content is returned.
// Loaded on demand by ContentProvider so it stays out of the initial bundle.
export const client = createClient({ projectId, dataset, apiVersion, useCdn: true, perspective: 'published' });
