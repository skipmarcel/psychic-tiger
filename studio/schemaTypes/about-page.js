import { defineArrayMember, defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons/User';
import { photoField } from './shared.js';

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({ name: 'heading', type: 'string', validation: (r) => r.required() }),
    photoField('photo', 'Photo'),
    defineField({ name: 'photoCaption', title: 'Photo caption', type: 'string' }),
    defineField({
      name: 'story',
      type: 'array',
      description: 'Use the style menu for "Large text" (the big opening and closing lines) or "Subheading".',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Large text', value: 'lead' },
            { title: 'Subheading', value: 'h3' },
          ],
          lists: [],
          marks: { decorators: [{ title: 'Bold', value: 'strong' }, { title: 'Italic', value: 'em' }], annotations: [] },
        }),
      ],
    }),
    defineField({ name: 'signature', type: 'string', description: 'Name shown at the end of the story.' }),
  ],
  preview: { prepare: () => ({ title: 'About' }) },
});
