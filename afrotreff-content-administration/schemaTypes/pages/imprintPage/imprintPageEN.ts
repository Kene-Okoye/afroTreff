import {FaRegRegistered} from 'react-icons/fa'

export default {
  name: 'imprintPage_en',
  title: 'Imprint Page - EN',
  type: 'document',
  icon: FaRegRegistered,

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
      name: 'imprintMainHeading',
      title: 'Imprint Main Heading',
      type: 'string',
    },
    {
      name: 'imprintBodyText',
      title: 'Imprint Body Text',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],

  initialValue: {language: 'english', previewTitle: 'Imprint Page Page'},

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
        subtitle: language && `Imprint Page page translation in ${language}`,
      }
    },
  },
}
