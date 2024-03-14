import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './deskStructure'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'afrotreff-content-administration',

  projectId: 'hc828wun',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
})
