'use client'

import { useState } from 'react'
import Navbar from '@/app/components/sections/Navbar'
import Footer from '@/app/components/sections/Footer'
import { submitSponsorApplication } from '@/app/actions/submitSponsor'

const tiers = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Custom']

export default function SponsorPage() {
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({
        name: '',
        organisation: '',
        email: '',
        phone: '',
        tier: '',
        message: '',
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        setError(null)
        const result = await submitSponsorApplication(form)
        setLoading(false)
        if (result.success) {
            setSubmitted(true)
        } else {
            setError(result.error ?? 'Something went wrong. Please try again.')
        }
    }

    return (
        <div className="bg-background min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 px-4 sm:px-6 md:px-12 lg:px-16 pt-36 pb-24">
                {/* Header */}
                <div className="mb-14">
                    <span className="text-white/50 text-xs sm:text-sm uppercase tracking-widest mb-4 block">
                        Partnership
                    </span>
                    <h1 className="font-display text-[clamp(2.8rem,7vw,7rem)] font-semibold leading-[1] tracking-tight text-white">
                        Become a<br />Sponsor
                    </h1>
                </div>

                {submitted ? (
                    <div className="max-w-xl bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#00e6b4]/20 flex items-center justify-center mb-2">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#00e6b4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </div>
                        <h2 className="font-display text-2xl font-semibold text-white">Application received!</h2>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Thank you, <span className="text-white">{form.name}</span>. Our team will review your application and get back to you at <span className="text-white">{form.email}</span> within 2–3 business days.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="max-w-2xl flex flex-col gap-6">
                        {/* Row: name + org */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-white/60 text-xs uppercase tracking-widest">Full Name *</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Jane Doe"
                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#8b7ff5] transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="organisation" className="text-white/60 text-xs uppercase tracking-widest">Organisation *</label>
                                <input
                                    id="organisation"
                                    name="organisation"
                                    type="text"
                                    required
                                    value={form.organisation}
                                    onChange={handleChange}
                                    placeholder="Acme Corp"
                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#8b7ff5] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Row: email + phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-white/60 text-xs uppercase tracking-widest">Email Address *</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="jane@acme.com"
                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#8b7ff5] transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="text-white/60 text-xs uppercase tracking-widest">Phone Number</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+254 700 000 000"
                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#8b7ff5] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Tier select */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="tier" className="text-white/60 text-xs uppercase tracking-widest">Sponsorship Tier *</label>
                            <select
                                id="tier"
                                name="tier"
                                required
                                value={form.tier}
                                onChange={handleChange}
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#8b7ff5] transition-colors appearance-none"
                            >
                                <option value="" disabled className="bg-[#1a1a1a]">Select a tier…</option>
                                {tiers.map((t) => (
                                    <option key={t} value={t} className="bg-[#1a1a1a]">{t}</option>
                                ))}
                            </select>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-white/60 text-xs uppercase tracking-widest">Message (optional)</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell us about your organisation and how you'd like to partner…"
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#8b7ff5] transition-colors resize-none"
                            />
                        </div>

                        {error && (
                            <p className="text-red-400 text-sm">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="self-start bg-[#8b7ff5] hover:bg-[#7a6ee0] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-full text-sm transition-all duration-200 shadow-lg shadow-[#8b7ff5]/20"
                        >
                            {loading ? 'Submitting…' : 'Submit Application'}
                        </button>
                    </form>
                )}
            </main>

            <Footer />
        </div>
    )
}
