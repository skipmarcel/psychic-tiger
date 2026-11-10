import { defineField, defineType } from 'sanity';
import { CogIcon } from '@sanity/icons/Cog';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({ name: 'gymName', title: 'Gym name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'addressLine1', title: 'Address line 1', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'addressLine2', title: 'Address line 2', type: 'string', description: 'City, state and ZIP.' }),
    defineField({
      name: 'mapsUrl',
      title: 'Google Maps link',
      type: 'url',
      description: 'Used for the "Get directions" links. The map picture itself is set in the website code.',
    }),
  ],
  preview: { prepare: () => ({ title: 'Site settings' }) },
});
