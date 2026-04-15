import Link from 'next/link'
import Navbar from '@/app/components/sections/Navbar'
import Footer from '@/app/components/sections/Footer'

export const metadata = {
    title: 'Sponsorship Packages — Code Innovation Festival',
    description: 'Explore sponsorship tiers for the Code Innovation Festival and partner with us to empower young African tech innovators.',
}

const packages = [
    {
        tier: 'Bronze',
        price: 'KES 50,000',
        color: '#cd7f32',
        perks: [
            'Logo on event website',
            'Social media mention (×1)',
            '2 complimentary passes',
            'Programme booklet listing',
        ],
    },
    {
        tier: 'Silver',
        price: 'KES 120,000',
        color: '#a8a9ad',
        perks: [
            'All Bronze benefits',
            'Logo on banners & stage backdrop',
            'Social media mentions (×3)',
            '5 complimentary passes',
            'Exhibition table (1 m²)',
        ],
    },
    {
        tier: 'Gold',
        price: 'KES 250,000',
        color: '#f5c842',
        perks: [
            'All Silver benefits',
            'Speaking slot (10 min)',
            'Premium banner placement',
            'Social media mentions (×6)',
            '10 complimentary passes',
            'Exhibition booth (4 m²)',
            'Brand on all printed materials',
        ],
        featured: true,
    },
    {
        tier: 'Platinum',
        price: 'KES 500,000',
        color: '#8b7ff5',
        perks: [
            'All Gold benefits',
            'Title sponsorship credit',
            'Keynote introduction slot',
            'Full-page programme ad',
            'Social media mentions (×12)',
            '20 complimentary passes',
            'Exclusive networking dinner seat',
            'Award category naming rights',
        ],
    },
]

export default function SponsorshipPackagesPage() {
    return (
        <div className="bg-background min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 px-4 sm:px-6 md:px-12 lg:px-16 pt-36 pb-24">
                {/* Header */}
                <div className="mb-16">
                    <span className="text-white/50 text-xs sm:text-sm uppercase tracking-widest mb-4 block">
                        Partner with us
                    </span>
                    <h1 className="font-display text-[clamp(2.8rem,7vw,7rem)] font-semibold leading-[1] tracking-tight text-white mb-6">
                        Sponsorship<br />Packages
                    </h1>
                    <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
                        Choose the partnership level that fits your organisation. All packages support young innovators across Mombasa's schools.
                    </p>
                </div>

                {/* Package cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.tier}
                            className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 ${
                                pkg.featured
                                    ? 'border-[#f5c842]/40 bg-[#f5c842]/5'
                                    : 'border-white/10 bg-white/5'
                            }`}
                        >
                            {pkg.featured && (
                                <span className="absolute -top-3 left-7 bg-[#f5c842] text-black text-xs font-bold px-3 py-1 rounded-full">
                                    Most Popular
                                </span>
                            )}

                            {/* Tier badge */}
                            <div
                                className="w-10 h-10 rounded-xl mb-6 flex items-center justify-center shrink-0"
                                style={{ backgroundColor: pkg.color + '33' }}
                            >
                                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: pkg.color }} />
                            </div>

                            <h2
                                className="font-display text-2xl font-semibold mb-1"
                                style={{ color: pkg.color }}
                            >
                                {pkg.tier}
                            </h2>
                            <p className="text-white text-xl font-bold mb-6">{pkg.price}</p>

                            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                                {pkg.perks.map((perk) => (
                                    <li key={perk} className="flex items-start gap-2 text-white/70 text-sm">
                                        <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mt-0.5 shrink-0" style={{ color: pkg.color }}>
                                            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" />
                                        </svg>
                                        {perk}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/sponsor"
                                className="block text-center py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border"
                                style={{
                                    backgroundColor: pkg.featured ? pkg.color : 'transparent',
                                    color: pkg.featured ? '#000' : pkg.color,
                                    borderColor: pkg.color + '66',
                                }}
                            >
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Custom CTA */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div>
                        <h3 className="font-display text-2xl font-semibold text-white mb-2">Need a custom package?</h3>
                        <p className="text-white/50 text-sm">We're happy to tailor a partnership that works for your brand and budget.</p>
                    </div>
                    <Link
                        href="/sponsor"
                        className="shrink-0 inline-flex items-center bg-[#8b7ff5]/70 hover:bg-[#8b7ff5] text-white font-semibold px-7 py-3 rounded-full text-sm transition-all duration-200 backdrop-blur-sm"
                    >
                        Contact Us
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    )
}
