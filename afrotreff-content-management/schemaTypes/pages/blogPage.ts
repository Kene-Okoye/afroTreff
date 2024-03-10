import {FaBlog} from 'react-icons/fa'

export default {
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  initialValue: {previewTitle: 'Blog Page'},
  icon: FaBlog,

  fields: [
    /*-------------------------
     * Mandatory Fields
     *------------------------*/
    {
      name: 'previewTitle',
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
      name: 'heroSection_Blog',
      title: 'HERO SECTION - BLOG',
      type: 'heroSection',
    },
    {
      name: 'blogPostsSection',
      title: 'BLOG POSTS SECTION',
      type: 'object',
      fields: [
        {
          name: 'post',
          title: 'Post',
          type: 'array',
          of: [{type: 'reference', to: {type: 'post'}}],
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
        subtitle: language && `Blog page translation for ${LANGUAGES[language]}`,
      }
    },
  },
}
