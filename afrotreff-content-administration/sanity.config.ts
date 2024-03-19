import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './deskStructure'
import {media} from 'sanity-plugin-media'

import AfroTreffLogo from './components/AfroTreffLogo'

const {theme} = (await import(
  // @ts-expect-error -- TODO setup themer.d.ts to get correct typings
  'https://themer.sanity.build/api/hues?primary=793101'
)) as {theme: import('sanity').StudioTheme}

export default defineConfig({
  name: 'default',
  title: 'afrotreff-content-administration',
  icon: AfroTreffLogo,
  theme: theme,

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
