import {FcFaq} from 'react-icons/fc'

export default {
  name: 'FAQPage_de',
  title: 'FAQ Page - DE',
  type: 'document',
  icon: FcFaq,

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
      name: 'heroSection_Faq',
      title: 'HERO SECTION - FAQ',
      type: 'heroSection',
    },
    {
      name: 'questionAndAnswersSection',
      title: 'QUESTION AND ANSWERS SECTION',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'qandAs',
          title: 'Q & As',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'question',
                  title: 'Question',
                  type: 'text',
                },
                {
                  name: 'answer',
                  title: 'Answer',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  initialValue: {language: 'german', previewTitle: 'FAQ Page'},

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
