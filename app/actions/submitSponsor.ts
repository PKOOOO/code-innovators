'use server'

import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'

// Write client — uses the Editor token, never exposed to the browser
const writeClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_WRITE_TOKEN,
})

export interface SponsorFormData {
    name: string
    organisation: string
    email: string
    phone: string
    tier: string
    message: string
}

export async function submitSponsorApplication(data: SponsorFormData) {
    try {
        await writeClient.create({
            _type: 'sponsorApplication',
            name: data.name,
            organisation: data.organisation,
            email: data.email,
            phone: data.phone || undefined,
            tier: data.tier,
            message: data.message || undefined,
            submittedAt: new Date().toISOString(),
        })
        return { success: true }
    } catch (err) {
        console.error('Sanity write error:', err)
        return { success: false, error: 'Failed to submit. Please try again.' }
    }
}
