import { defineArrayMember, defineField, defineType } from 'sanity';
import { TagIcon } from '@sanity/icons/Tag';
import { photoField } from './shared.js';

const service = defineArrayMember({
  name: 'service',
  type: 'object',
  groups: [
    { name: 'page', title: 'Services page', default: true },
    { name: 'home', title: 'Home page summary' },
  ],
  fields: [
    defineField({ name: 'title', type: 'string', group: ['page', 'home'], validation: (r) => r.required() }),
    photoField('image', 'Photo', { group: ['page', 'home'] }),
    defineField({
      name: 'prices',
      type: 'array',
      group: 'page',
      of: [
        defineArrayMember({
          name: 'priceRow',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'What', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'price', type: 'string', description: 'Include the $, e.g. "$70".', validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'label', subtitle: 'price' } },
        }),
      ],
    }),
    defineField({ name: 'note', type: 'text', rows: 2, group: 'page', description: 'Optional small print under the prices.' }),
    defineField({ name: 'policyTitle', title: 'Policy box title', type: 'string', group: 'page', description: 'Optional, e.g. "Late cancellation policy".' }),
    defineField({ name: 'policyText', title: 'Policy box text', type: 'text', rows: 3, group: 'page' }),
    defineField({ name: 'homeSummary', title: 'Short description', type: 'text', rows: 2, group: 'home' }),
    defineField({ name: 'homePrice', title: 'Price line', type: 'string', group: 'home', description: 'e.g. "From $70".' }),
  ],
  preview: { select: { title: 'title', media: 'image' } },
});

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services & pricing',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({ name: 'eyebrow', title: 'Label above heading', type: 'string', description: 'e.g. "2024 Pricing".' }),
    defineField({ name: 'heading', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'services',
      type: 'array',
      description: 'Shown in this order on the Services page and the Home page. Drag to reorder.',
      of: [service],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: { prepare: () => ({ title: 'Services & pricing' }) },
});
