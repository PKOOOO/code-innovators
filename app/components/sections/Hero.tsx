"use client"

import Image from 'next/image'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'

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
        <section className="relative min-h-[100dvh] w-full overflow-hidden">
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
            <div className="absolute inset-0 flex flex-col justify-end pb-24 sm:pb-32 lg:pb-10 px-4 sm:px-6 md:px-12 lg:px-16">
                <div className="w-full">
                    {/* Typewriter title — two lines like the original layout */}
                    {(() => {
                        const allWords = title.trim().split(' ')
                        const lastWord = allWords.pop()!
                        return (
                            <div className="mb-6 sm:mb-8">
                                {/* Line 1: "Code Innovators" */}
                                <TypewriterEffectSmooth
                                    words={allWords.map((word) => ({
                                        text: word,
                                        className: 'text-white dark:text-white',
                                    }))}
                                    className="font-display"
                                    cursorClassName="hidden"
                                />
                                {/* Line 2: "Festival" */}
                                <TypewriterEffectSmooth
                                    words={[{
                                        text: lastWord,
                                        className: 'text-accent dark:text-accent',
                                    }]}
                                    className="font-display"
                                    cursorClassName="bg-accent"
                                />
                            </div>
                        )
                    })()}

                    {/* Pills — stacked rows like reference: date on first row, location + format below */}
                    <div className="flex flex-col gap-3">
                        {/* Row 1: Date + Location */}
                        <div className="flex flex-wrap items-center gap-3">
                            {/* Date pill — filled green, larger */}
                            <span className="bg-accent text-background font-bold px-4 py-2.5 sm:px-6 sm:py-4 md:px-10 md:py-6 rounded-2xl sm:rounded-3xl text-base sm:text-2xl md:text-4xl whitespace-nowrap shadow-lg shadow-accent/25">
                                {eventDate}
                            </span>

                            {/* Location pill — outlined, larger */}
                            <span className="border border-pill-border text-white font-semibold px-4 py-2.5 sm:px-6 sm:py-4 md:px-10 md:py-6 rounded-2xl sm:rounded-3xl text-base sm:text-2xl md:text-4xl backdrop-blur-sm whitespace-nowrap">
                                {location}
                            </span>
                        </div>

                        {/* Row 2: Format */}
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="border border-pill-border text-white font-semibold px-4 py-2.5 sm:px-6 sm:py-4 md:px-10 md:py-6 rounded-2xl sm:rounded-3xl text-base sm:text-2xl md:text-4xl backdrop-blur-sm whitespace-nowrap">
                                {format}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
