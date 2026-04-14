import { type SchemaTypeDefinition } from 'sanity'
import hero from '../schemas/hero'
import sponsorApplication from '../schemas/sponsorApplication'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, sponsorApplication],
}
