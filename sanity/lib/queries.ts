import { groq } from 'next-sanity'

export const heroQuery = groq`
  *[_type == "hero"][0] {
    title,
    eventDate,
    location,
    format,
    "backgroundImage": backgroundImage.asset->url,
    primaryCta,
    secondaryCta
  }
`
