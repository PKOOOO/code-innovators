import { type SchemaTypeDefinition } from 'sanity'
import hero from '../schemas/hero'
import sponsorApplication from '../schemas/sponsorApplication'
import keynote from '../schemas/keynote'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, sponsorApplication, keynote],
}
