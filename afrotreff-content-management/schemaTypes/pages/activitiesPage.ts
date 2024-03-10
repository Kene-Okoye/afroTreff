import {FaMeetup} from 'react-icons/fa6'

export default {
  name: 'activitiesPage',
  title: 'Activities Page',
  type: 'document',
  initialValue: {previewTitle: 'Activities Page'},
  icon: FaMeetup,

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
      name: 'heroSection_activities',
      title: 'HERO SECTION - ACTIVITIES',
      type: 'heroSection',
    },
    {
      name: 'upcomingEventsSection',
      title: 'UPCOMING EVENTS SECTION',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'smallLargeHeading',
        },
        {
          name: 'upcomingEventsSection',
          title: 'UPCOMING EVENTS SECTION',
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
              ],
            },
          ],
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
        subtitle: language && `Activities page translation for ${LANGUAGES[language]}`,
      }
    },
  },
}
