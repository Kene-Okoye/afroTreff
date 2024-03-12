import {BiSolidPhotoAlbum} from 'react-icons/bi'

export default {
  name: 'albumsPage_en',
  title: 'Albums Page - EN',
  type: 'document',
  icon: BiSolidPhotoAlbum,

  fields: [
    /*-------------------------
     * Mandatory Fields
     *------------------------*/
    {
      name: 'previewTitle',
      title: 'Preview Title',
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
      options: {
        list: [
          {title: 'English', value: 'english'},
          {title: 'German', value: 'german'},
        ],
      },
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
      name: 'albumsSectionheading',
      title: 'Albums Section Heading',
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

  initialValue: {language: 'english', previewTitle: 'Albums Page'},

  preview: {
    select: {
      previewTitle: 'previewTitle',
      language: 'language',
    },
    prepare(selection: {previewTitle: string; language: string}) {
      const {previewTitle, language} = selection
      const LANGUAGES: {[key: string]: string} = {
        english: 'EN',
        german: 'DE',
      }
      return {
        ...selection,
        title:
          previewTitle && language && `${previewTitle} (${LANGUAGES[language].toUpperCase()}) `,
        subtitle: language && `Home page translation in ${language}`,
      }
    },
  },
}
