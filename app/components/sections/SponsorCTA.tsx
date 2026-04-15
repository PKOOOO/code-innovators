import Link from 'next/link'

function ArrowIcon({ color }: { color: string }) {
    const size = 'w-36 h-36 sm:w-44 sm:h-44'
    return (
        <div
            className={`flex items-center justify-center ${size} rounded-3xl shrink-0 p-7`}
            style={{ backgroundColor: color }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111111"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
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
                    className="group flex flex-row items-center justify-between gap-6 min-h-[280px] sm:min-h-[340px] bg-transparent hover:bg-[#8b7ff5] border border-white/20 hover:border-[#8b7ff5] rounded-[2.5rem] px-8 py-10 sm:px-10 sm:py-12 transition-all duration-300"
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
                    className="group flex flex-row items-center justify-between gap-6 min-h-[280px] sm:min-h-[340px] bg-transparent hover:bg-[#00e6b4] border border-white/20 hover:border-[#00e6b4] rounded-[2.5rem] px-8 py-10 sm:px-10 sm:py-12 transition-all duration-300"
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
