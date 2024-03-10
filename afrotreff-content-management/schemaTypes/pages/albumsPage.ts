import {BiSolidPhotoAlbum} from 'react-icons/bi'

export default {
  name: 'albumsPage',
  title: 'Albums Page',
  type: 'document',
  initialValue: {previewTitle: 'Albums Page'},
  icon: BiSolidPhotoAlbum,

  fields: [
    /*-------------------------
     * Mandatory Fields
     *------------------------*/
    {
      name: 'PreviewTitle',
      title: 'preview Title',
      type: 'string',
      description: `Please enter a title for the document. 
    This would be used for the preview header content found on the left hand side tab`,
      // hidden: true,
      validation: (rule: {required: () => any}) => rule.required(),
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
    },

    /*-------------------------
     * Other Fields
     *------------------------*/
    {
      name: 'heroSection_albumsPage',
      title: 'HERO SECTION - ALBUMS PAGE',
      type: 'heroSection',
    },
    {
      name: 'albumsSection',
      title: 'ALBUMS SECTION',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'smallLargeHeading',
        },
        {
          name: 'bodyText',
          title: 'Body Text',
          type: 'blockContent',
        },
        {
          name: 'albums',
          title: 'Albums',
          type: 'array',
          of: [{type: 'reference', to: {type: 'yearlyAlbum'}}],
        },
      ],
    },
  ],

  preview: {
    select: {
      previewTitle: 'previewTitle',
      language: 'language',
    },
    prepare(selection: {previewTitle: string; language: string}) {
      const {previewTitle, language} = selection
      const LANGUAGES: {[key: string]: string} = {
        en: 'English',
        de: 'German',
      }
      return {
        ...selection,
        title: previewTitle && language && `${previewTitle} - ${language.toUpperCase()}`,
        subtitle: language && `Albums page translation for ${LANGUAGES[language]}`,
      }
    },
  },
}
