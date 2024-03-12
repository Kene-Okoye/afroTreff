import {IoHome} from 'react-icons/io5'

export default {
  name: 'homePage_de',
  title: 'Home page - DE',
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
          title: 'Cta Button',
          type: 'object',
          fields: [
            {
              name: 'ctaButtonText',
              title: 'Cta Button Text',
              type: 'string',
            },
            {
              name: 'buttonPath',
              title: 'Button Path',
              type: 'string',
              options: {
                list: [
                  {title: 'Activities', value: 'ACTIVITIES'},
                  {title: 'Support Us', value: 'SUPPORT_US'},
                  {title: 'Vision and Team', value: 'VISION_AND_TEAM'},
                  {title: 'Contact', value: 'CONTACT'},
                ],
              },
              description: '⛔ This section MUST NOT be altered!',
              readOnly: true,
            },
          ],
        },
      ],
      description: 'This section MUST include 4 a total of 4 entries',
      validation: (rule: any) =>
        rule.required().length(4).error('The CTA section must contain 4 items'),
    },
  ],

  initialValue: {language: 'german', previewTitle: 'Home Page'},

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
