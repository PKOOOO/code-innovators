import Image from 'next/image'

interface HeroProps {
    title: string
    eventDate: string
    location: string
    format: string
    backgroundImage: string | null
    primaryCta?: string
    secondaryCta?: string
}

export default function Hero({
    title,
    eventDate,
    location,
    format,
    backgroundImage,
}: HeroProps) {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background image — fixed so it stays while content scrolls */}
            {backgroundImage ? (
                <div className="fixed inset-0 -z-10">
                    <Image
                        src={backgroundImage}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/55 mix-blend-multiply" />
                    {/* Purple tint overlay */}
                    <div className="absolute inset-0 bg-overlay-purple" />
                </div>
            ) : (
                /* Fallback gradient when no image is set yet */
                <div className="fixed inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#222222] via-[#1a1a1a] to-background" />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
            )}

            {/* Hero Content — Bottom-left aligned */}
            <div className="absolute inset-0 flex flex-col justify-end pb-28 sm:pb-32 lg:pb-36 px-6 md:px-12 lg:px-16">
                <div className="w-full">
                    {/* Big title — "Code Innovators" on line 1, last word on line 2 */}
                    <h1
                        className="font-display text-[clamp(4.5rem,14vw,13rem)] font-black leading-[0.85] text-white mb-8 tracking-tight"
                        style={{ textShadow: '0 4px 60px rgba(0,0,0,0.5)' }}
                    >
                        {(() => {
                            const words = title.trim().split(' ')
                            const lastWord = words.pop()
                            return (
                                <>
                                    <span className="block">{words.join(' ')}</span>
                                    <span className="block">{lastWord}</span>
                                </>
                            )
                        })()}
                    </h1>

                    {/* Pills — stacked rows like reference: date on first row, location + format below */}
                    <div className="flex flex-col gap-3">
                        {/* Row 1: Date + Location */}
                        <div className="flex flex-wrap items-center gap-3">
                            {/* Date pill — filled green, larger */}
                            <span className="bg-accent text-background font-bold px-10 py-6 rounded-3xl text-3xl sm:text-4xl whitespace-nowrap shadow-lg shadow-accent/25">
                                {eventDate}
                            </span>

                            {/* Location pill — outlined, larger */}
                            <span className="border border-pill-border text-white font-semibold px-10 py-6 rounded-3xl text-3xl sm:text-4xl backdrop-blur-sm whitespace-nowrap">
                                {location}
                            </span>
                        </div>

                        {/* Row 2: Format */}
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="border border-pill-border text-white font-semibold px-10 py-6 rounded-3xl text-3xl sm:text-4xl backdrop-blur-sm whitespace-nowrap">
                                {format}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll blur fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
        </section>
    )
}
