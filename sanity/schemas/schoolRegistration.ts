import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'schoolRegistration',
    title: 'School Registrations',
    type: 'document',
    fields: [
        defineField({ name: 'schoolName',    title: 'School Name',    type: 'string', validation: (R) => R.required() }),
        defineField({ name: 'contactPerson', title: 'Contact Person', type: 'string', validation: (R) => R.required() }),
        defineField({ name: 'email',         title: 'Email Address',  type: 'string', validation: (R) => R.required().email() }),
        defineField({ name: 'phone',         title: 'Phone Number',   type: 'string' }),
        defineField({
            name: 'teams',
            title: 'Teams',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'teamName',     title: 'Team Name',     type: 'string' }),
                    defineField({ name: 'category',     title: 'Category',      type: 'string' }),
                    defineField({ name: 'thematicArea', title: 'Thematic Area', type: 'string' }),
                    defineField({ name: 'learnerNames', title: 'Learner Names', type: 'array', of: [{ type: 'string' }] }),
                ],
                preview: {
                    select: { title: 'teamName', subtitle: 'category' },
                },
            }],
        }),
        defineField({ name: 'totalLearners',  title: 'Total Learners',    type: 'number' }),
        defineField({ name: 'totalAmountKes', title: 'Total Amount (KES)', type: 'number' }),
        defineField({ name: 'paystackReference', title: 'Paystack Reference', type: 'string' }),
        defineField({ name: 'couponCode',     title: 'Coupon Code',       type: 'string' }),
        defineField({ name: 'submittedAt',    title: 'Submitted At',      type: 'datetime' }),
    ],
    orderings: [
        { title: 'Newest First', name: 'submittedAtDesc', by: [{ field: 'submittedAt', direction: 'desc' }] },
    ],
    preview: {
        select: {
            title: 'schoolName',
            subtitle: 'contactPerson',
            learners: 'totalLearners',
        },
        prepare({ title, subtitle, learners }) {
            return {
                title,
                subtitle: `${subtitle}${learners != null ? ` · ${learners} learner${learners !== 1 ? 's' : ''}` : ''}`,
            }
        },
    },
})
