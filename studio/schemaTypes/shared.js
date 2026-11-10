import { defineField } from 'sanity';

// An image with a focal point (hotspot) and a required description for screen readers.
export const photoField = (name, title, extra = {}) =>
  defineField({
    name,
    title,
    ...extra,
    type: 'image',
    options: { hotspot: true },
    fields: [
      defineField({
        name: 'alt',
        title: 'Description',
        type: 'string',
        description: 'Describe the photo for people using screen readers, e.g. "Jordan Burns with a barbell".',
        validation: (rule) => rule.required().warning('Please add a short description.'),
      }),
    ],
    validation: (rule) => rule.required(),
  });
