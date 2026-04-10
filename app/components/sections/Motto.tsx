export default function Motto() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden -mt-px">
            {/* Gradient overlay — fades in from top so there's no hard line after the Hero */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

            <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-24">
                <div className="max-w-[90%]">
                    {/* Label */}
                    <span className="text-muted text-xs sm:text-sm uppercase tracking-widest mb-6 block">
                        Conference motto
                    </span>

                    {/* Big motto text — massive like the reference */}
                    <h2
                        className="font-display text-[clamp(2.2rem,6.5vw,6.5rem)] font-semibold leading-[1.05] text-white mb-10 tracking-tight"
                        style={{ textShadow: '0 2px 40px rgba(0,0,0,0.4)' }}
                    >
                        More than just an event – it&apos;s a strategic investment in the future of our continent, empowering the next generation of African tech innovators.
                    </h2>

                    {/* Manifesto pill */}
                    <span className="inline-block bg-[#8b7ff5]/70 hover:bg-[#8b7ff5] transition-colors text-white font-medium px-6 py-2.5 rounded-lg text-sm cursor-pointer backdrop-blur-sm">
                        Manifesto
                    </span>
                </div>
            </div>

            {/* Scroll blur fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
        </section>
    )
}
