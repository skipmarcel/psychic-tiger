import { defineArrayMember, defineField, defineType } from 'sanity';
import { HomeIcon } from '@sanity/icons/Home';
import { photoField } from './shared.js';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  groups: [
    { name: 'hero', title: 'Photo slideshow', default: true },
    { name: 'text', title: 'Text' },
  ],
  fields: [
    defineField({
      name: 'heroSlides',
      title: 'Slideshow photos',
      type: 'array',
      group: 'hero',
      description: 'Shown in this order. Drag to reorder. Click a photo and use the crop tool to set its focal point.',
      of: [defineArrayMember(photoField('photo', 'Photo'))],
      options: { layout: 'grid' },
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'slideSeconds',
      title: 'Seconds per photo',
      type: 'number',
      group: 'hero',
      initialValue: 6,
      validation: (r) => r.required().min(2).max(30),
    }),
    defineField({ name: 'introHeading', title: 'Intro heading', type: 'string', group: 'text', validation: (r) => r.required() }),
    defineField({
      name: 'introParagraphs',
      title: 'Intro paragraphs',
      type: 'array',
      group: 'text',
      of: [defineArrayMember({ type: 'text', rows: 3 })],
    }),
    defineField({ name: 'gymEyebrow', title: 'Gym section label', type: 'string', group: 'text', description: 'Small text above the gym heading.' }),
    defineField({ name: 'gymHeading', title: 'Gym section heading', type: 'string', group: 'text' }),
    defineField({ name: 'gymText', title: 'Gym section text', type: 'text', rows: 3, group: 'text' }),
  ],
  preview: { prepare: () => ({ title: 'Home' }) },
});
