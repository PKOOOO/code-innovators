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

export const keynotesQuery = groq`
  *[_type == "keynote"] | order(order asc) {
    _id,
    title,
    description,
    image
  }
`

export const timelineQuery = groq`
  *[_type == "timelinePhase"] | order(order asc) {
    _id,
    title,
    description,
    "images": images[].asset->url,
    order
  }
`
