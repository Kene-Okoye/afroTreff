import {FaMeetup} from 'react-icons/fa6'

export default {
  name: 'activitiesPage_en',
  title: 'Activities Page - EN',
  type: 'document',
  icon: FaMeetup,

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
      name: 'heroSection_activities',
      title: 'HERO SECTION - ACTIVITIES',
      type: 'heroSection',
    },

    {
      name: 'upcomingEventsHeading',
      title: 'UPCOMING EVENTS HEADING',
      type: 'smallLargeHeading',
    },
    {
      name: 'upcomingEventsList',
      title: 'UPCOMING EVENTS LIST',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'eventTitle',
              title: 'Event Title',
              type: 'string',
            },
            {
              name: 'eventDateAndTime',
              title: 'Event Date and Time',
              type: 'datetime',
              options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 15,
                calendarTodayLabel: 'Today',
              },
            },
            {
              name: 'eventLocation',
              title: 'Event Location',
              type: 'string',
            },
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
            },
            {
              name: 'buttonLink',
              title: 'Button Link',
              type: 'string',
              description: `Please entire a valid URL 
              where the button should rediredt the user to. For e.g. http://example.com`,
            },
          ],
        },
      ],
    },
  ],

  initialValue: {language: 'english', previewTitle: 'Activities Page'},

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
