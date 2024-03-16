import {FcPrivacy} from 'react-icons/fc'

export default {
  name: 'privacyPolicyPage_de',
  title: 'Privacy Policy Page - DE',
  type: 'document',
  icon: FcPrivacy,

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
      name: 'privacyMainHeading',
      title: 'Privacy Main Heading',
      type: 'string',
    },
    {
      name: 'privacyBodyText',
      title: 'Privacy Body Text',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],

  initialValue: {language: 'german', previewTitle: 'Privacy Policy Page'},

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
        subtitle: language && `Privacy Policy page translation in ${language}`,
      }
    },
  },
}
