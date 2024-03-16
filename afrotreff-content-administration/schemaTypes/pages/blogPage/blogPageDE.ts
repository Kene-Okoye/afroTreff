import {FaBlog} from 'react-icons/fa'

export default {
  name: 'blogPage_de',
  title: 'Blog Page - DE',
  type: 'document',
  icon: FaBlog,

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
      name: 'heroSection_Blog',
      title: 'HERO SECTION - BLOG',
      type: 'heroSection',
    },
    {
      name: 'postSectionheading',
      title: 'Post Section Heading',
      type: 'smallLargeHeading',
    },
    {
      name: 'post',
      title: 'Post',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
    },
  ],

  initialValue: {language: 'german', previewTitle: 'Blog Page'},

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
        subtitle: language && `Blog page translation in ${language}`,
      }
    },
  },
}
