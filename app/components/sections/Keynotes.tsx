"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { keynotesQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { BentoGrid } from '@/components/ui/bento-grid'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import type { SanityImageSource } from '@sanity/image-url'

interface Keynote {
  _id: string
  title: string
  description: string
  image: SanityImageSource
}

const fallbackKeynotes: Omit<Keynote, 'image'>[] = [
  {
    _id: '1',
    title: 'Future Visions: Navigating the Creative Landscape in the Age of AI',
    description:
      'Exploring the intersection of creativity and artificial intelligence, envisioning the future of innovation.',
  },
  {
    _id: '2',
    title: 'Ethics in Augmented Reality: Designing Responsibility into the Virtual Realm',
    description:
      'A deep dive into the ethical considerations of augmented reality and the responsibility of designers in this dynamic space.',
  },
  {
    _id: '3',
    title: 'Creative Alchemy: Unlocking Innovation with Big Data',
    description:
      'Exploring the fusion of creativity and big data, revealing untapped potential for innovative solutions.',
  },
]

function KeynoteCard({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image?: SanityImageSource
}) {
  return (
    <li className="list-none min-h-[570px]">
      <div className="relative h-full rounded-[3rem] p-px">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative h-full rounded-[3rem] overflow-hidden bg-white/5 border border-white/30 p-5 flex flex-col gap-5">
          {/* Image */}
          <div className="relative w-full h-48 overflow-hidden rounded-[2.5rem] shrink-0">
            {image ? (
              <Image
                src={urlFor(image).width(800).height(500).fit('crop').url()}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-900/60 via-indigo-900/60 to-blue-900/60" />
            )}
          </div>

          {/* Text */}
          <div className="flex flex-col gap-9">
            <h3 className="font-display text-3xl font-bold text-white leading-snug">
              {title}
            </h3>
            <p className="text-base text-neutral-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Keynotes() {
  const [keynotes, setKeynotes] = useState<Keynote[]>([])

  useEffect(() => {
    client.fetch(keynotesQuery).then(setKeynotes).catch(() => {})
  }, [])

  const displayItems = keynotes.length > 0 ? keynotes : null
  const count = keynotes.length > 0 ? keynotes.length : fallbackKeynotes.length

  return (
    <section className="bg-background py-20 px-4 sm:px-6 md:px-12 lg:px-16">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="inline-block text-5xl sm:text-6xl font-bold text-white mb-4 border border-white/20 rounded-[2rem] px-8 py-4">
          {count} Keynotes
        </h2>
        <p className="text-neutral-400 text-lg">
          Inspiring Keynotes: Thought Leaders Shaping the Future
        </p>
      </div>

      {/* Cards */}
      <BentoGrid className="max-w-none md:grid-cols-3 md:auto-rows-[auto] gap-5">
        {displayItems
          ? displayItems.map((keynote) => (
              <KeynoteCard
                key={keynote._id}
                title={keynote.title}
                description={keynote.description}
                image={keynote.image}
              />
            ))
          : fallbackKeynotes.map((keynote) => (
              <KeynoteCard
                key={keynote._id}
                title={keynote.title}
                description={keynote.description}
              />
            ))}
      </BentoGrid>
    </section>
  )
}
