import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'sponsorApplication',
    title: 'Sponsor Applications',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'organisation',
            title: 'Organisation',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email Address',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        }),
        defineField({
            name: 'tier',
            title: 'Sponsorship Tier',
            type: 'string',
            options: {
                list: [
                    { title: 'Bronze', value: 'Bronze' },
                    { title: 'Silver', value: 'Silver' },
                    { title: 'Gold', value: 'Gold' },
                    { title: 'Platinum', value: 'Platinum' },
                    { title: 'Custom', value: 'Custom' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
        }),
    ],
    orderings: [
        {
            title: 'Newest First',
            name: 'submittedAtDesc',
            by: [{ field: 'submittedAt', direction: 'desc' }],
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'organisation',
            tier: 'tier',
        },
        prepare({ title, subtitle, tier }) {
            return {
                title,
                subtitle: `${subtitle} — ${tier}`,
            }
        },
    },
})
