import Link from 'next/link'

function ArrowIcon({ color }: { color: string }) {
    return (
        <div
            className="flex items-center justify-center w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] shrink-0 transition-transform duration-[1200ms] ease-in-out group-hover:scale-125"
            style={{ backgroundColor: color }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111111"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24"
                aria-hidden="true"
            >
                <path d="M4 20L20 4" />
                <path d="M4 4h16v16" />
            </svg>
        </div>
    )
}

export default function SponsorCTA() {
    return (
        <section className="relative z-10 bg-background px-4 sm:px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{transform:'translateZ(0)'}}>
            {/* Heading pill */}
            <div className="mb-10">
                <span className="inline-block border border-white/20 text-white font-display font-semibold text-2xl sm:text-3xl md:text-4xl px-6 py-3 rounded-full">
                    Ready To Make An Impact
                </span>
            </div>

            {/* Cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1 — Become a Sponsor */}
                <Link
                    href="/sponsor"
                    className="group flex flex-row items-center justify-between gap-4 min-h-[180px] sm:min-h-[280px] md:min-h-[320px] bg-white/5 hover:bg-[#8b7ff5] border border-white/10 hover:border-[#8b7ff5] rounded-[2rem] sm:rounded-[2.5rem] px-6 py-8 sm:px-10 sm:py-12 transition-all duration-300"
                >
                    <div className="flex flex-col gap-4 sm:gap-8">
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                            Become a<br />Sponsor
                        </h2>
                        <p className="text-white/50 group-hover:text-white/80 text-sm leading-relaxed max-w-[200px] transition-colors duration-300">
                            Partner with us to empower the next generation of African tech innovators.
                        </p>
                    </div>
                    <ArrowIcon color="#8b7ff5" />
                </Link>

                {/* Card 2 — See Sponsorship Packages */}
                <Link
                    href="/sponsorship-packages"
                    className="group flex flex-row items-center justify-between gap-4 min-h-[180px] sm:min-h-[280px] md:min-h-[320px] bg-white/5 hover:bg-[#00e6b4] border border-white/10 hover:border-[#00e6b4] rounded-[2rem] sm:rounded-[2.5rem] px-6 py-8 sm:px-10 sm:py-12 transition-all duration-300"
                >
                    <div className="flex flex-col gap-4 sm:gap-8">
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white group-hover:text-black leading-tight transition-colors duration-300">
                            See Sponsorship<br />Packages
                        </h2>
                        <p className="text-white/50 group-hover:text-black/60 text-sm leading-relaxed max-w-[200px] transition-colors duration-300">
                            Explore our tiers and find the right level of partnership for your organisation.
                        </p>
                    </div>
                    <ArrowIcon color="#00e6b4" />
                </Link>
            </div>
        </section>
    )
}
