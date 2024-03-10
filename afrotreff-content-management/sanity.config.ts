import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'
import {listStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'AfroTreff Content Management',

  projectId: '5ir4p4o5',
  dataset: 'production',

  plugins: [
    structureTool({structure: listStructure}),
    visionTool(),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        {id: 'de', title: 'German'},
        {id: 'en', title: 'English'},
      ],
      schemaTypes: [
        'homePage',
        'visionAndTeamPage',
        'activitiesPage',
        'getInvolvedPage',
        'FAQPage',
        'albumsPage',
        'blogPage',
        'post',
        'author',
        'category',
      ],
      languageField: `language`,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
