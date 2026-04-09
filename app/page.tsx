import { client } from '@/sanity/lib/client'
import { heroQuery } from '@/sanity/lib/queries'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'

// Fallback data when Sanity document hasn't been created yet
const fallbackHero = {
  title: 'Code Innovation Festival',
  eventDate: 'Sep 27, 2025',
  location: 'Mombasa, Kenya',
  format: 'Inter-School Competition',
  backgroundImage: null,
  primaryCta: 'Register Your School',
  secondaryCta: 'Learn More',
}

export default async function Home() {
  const hero = await client.fetch(heroQuery).catch(() => null)
  const data = hero || fallbackHero

  return (
    <main>
      <Navbar />
      <Hero
        title={data.title}
        eventDate={data.eventDate}
        location={data.location}
        format={data.format}
        backgroundImage={data.backgroundImage}
        primaryCta={data.primaryCta}
        secondaryCta={data.secondaryCta}
      />

      {/* Future sections will go here */}
      <section className="min-h-screen bg-background px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-white">
            About the Festival
          </h2>
          <p className="text-muted mt-4 text-lg max-w-2xl">
            More sections coming soon — About, Categories, Judging, Sponsors, Register, and Footer.
          </p>
        </div>
      </section>
    </main>
  )
}