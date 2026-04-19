import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'timelinePhase',
  title: 'Timeline Phase',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Phase Title',
      type: 'string',
      description: 'e.g. "May - August 2026"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short summary shown under the phase title',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'images',
      title: 'Phase Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
      description: 'Add up to 4 images for this phase',
      validation: (R) => R.max(4),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (e.g. 1, 2, 3)',
      validation: (R) => R.required(),
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
})
