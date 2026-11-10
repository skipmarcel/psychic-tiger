import { defineArrayMember, defineField, defineType } from 'sanity';
import { EnvelopeIcon } from '@sanity/icons/Envelope';
import { photoField } from './shared.js';

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({ name: 'eyebrow', title: 'Label above heading', type: 'string' }),
    defineField({ name: 'heading', type: 'string', validation: (r) => r.required() }),
    photoField('photo', 'Photo'),
    defineField({
      name: 'serviceChoices',
      title: '"Interested in" choices',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      validation: (r) => r.min(1),
    }),
    defineField({ name: 'successHeading', title: 'After sending: heading', type: 'string' }),
    defineField({ name: 'successText', title: 'After sending: text', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: 'Contact' }) },
});
