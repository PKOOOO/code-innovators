import { client } from '@/sanity/lib/client'
import { heroQuery } from '@/sanity/lib/queries'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Motto from './components/sections/Motto'
import Keynotes from './components/sections/Keynotes'
import Footer from './components/sections/Footer'
import SponsorCTA from './components/sections/SponsorCTA'

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

      <Motto />

      <Keynotes />

      <SponsorCTA />

      <Footer />
    </main>
  )
}