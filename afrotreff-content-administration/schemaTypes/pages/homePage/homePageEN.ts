import {IoHome} from 'react-icons/io5'

export default {
  name: 'homePage_en',
  title: 'Home page - EN',
  type: 'document',
  icon: IoHome,

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
      name: 'heroSectionHome',
      title: 'Hero Section home',
      type: 'object',
      fields: [
        {
          name: 'backgroundImageHome',
          title: 'Background image home',
          type: 'image',
          validation: (rule: {required: () => any}) => rule.required(),
          options: {
            hotspot: true,
          },
        },
        {
          name: 'heroSectionHeadingText',
          title: 'Hero section seading text',
          type: 'string',
        },
        {
          name: 'dateForNextMeetUp',
          title: 'Date for text meet-up',
          type: 'date',
        },
        {
          name: 'registerButtonText',
          title: 'Register button text',
          type: 'string',
        },
      ],
    },
    {
      name: 'mainSectionHeading',
      title: 'Section Heading',
      type: 'string',
    },
    {
      name: 'mainSectionBodyText',
      title: 'Main section body text',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'CTA',
      title: 'CTA',
      type: 'array',
      of: [
        {
          title: 'ctaButtons',
          type: 'string',
        },
      ],
      description: 'This section MUST include 4 a total of 4 entries',
      validation: (rule: any) =>
        rule.required().length(4).error('The CTA section must contain 4 items'),
    },
  ],

  initialValue: {language: 'english', previewTitle: 'Home Page'},

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
