import { defineConfig, defineSingleton } from 'sanity';
import { structureTool } from 'sanity/structure';
import { CogIcon } from '@sanity/icons/Cog';
import { HomeIcon } from '@sanity/icons/Home';
import { UserIcon } from '@sanity/icons/User';
import { TagIcon } from '@sanity/icons/Tag';
import { EnvelopeIcon } from '@sanity/icons/Envelope';
import { projectId, dataset } from './env.js';
import { schemaTypes } from './schemaTypes/index.js';

// Every editable page is a single fixed document (a "singleton").
const PAGES = [
  { id: 'siteSettings', title: 'Site settings', icon: CogIcon },
  { id: 'homePage', title: 'Home', icon: HomeIcon },
  { id: 'aboutPage', title: 'About', icon: UserIcon },
  { id: 'servicesPage', title: 'Services & pricing', icon: TagIcon },
  { id: 'contactPage', title: 'Contact', icon: EnvelopeIcon },
];

const item = (S, p) => S.listItem().title(p.title).icon(p.icon).singleton(p.id);

export default defineConfig({
  name: 'default',
  title: 'Psychic Tiger',
  projectId,
  dataset,
  schema: { types: schemaTypes },
  document: {
    singletons: PAGES.map((p) => defineSingleton({ id: p.id, documentId: p.id, schemaType: p.id })),
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website')
          .items([item(S, PAGES[1]), item(S, PAGES[2]), item(S, PAGES[3]), item(S, PAGES[4]), S.divider(), item(S, PAGES[0])]),
    }),
  ],
});
