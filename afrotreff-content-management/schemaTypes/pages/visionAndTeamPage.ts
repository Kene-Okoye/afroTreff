import {RiTeamFill} from 'react-icons/ri'

export default {
  name: 'visionAndTeamPage',
  title: 'Vision and team page',
  type: 'document',
  initialValue: {previewTitle: 'Vision & Team'},
  icon: RiTeamFill,

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
      readOnly: true,
    },

    /*-------------------------
     * Other Fields
     *------------------------*/
    {
      name: 'heroSection_VisonAndTeam',
      title: 'HERO SECTION - VISION AND TEAM',
      type: 'heroSection',
    },
    {
      name: 'ourMissionSection',
      title: 'OUR MISSION SECTION',
      type: 'object',
      fields: [
        {
          name: 'heading_OurMission',
          title: 'Heading - Our Mission',
          type: 'smallLargeHeading',
        },
        {
          name: 'textContent_OurMission',
          title: 'Text Content - Our Mission',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [{title: 'Normal', value: 'normal'}],
              lists: [],
            },
          ],
        },
      ],
    },
    {
      name: 'teamSection',
      title: 'TEAM SECTION',
      type: 'object',
      fields: [
        {
          name: 'heading_MeetTheFounder',
          title: 'Heading - Meet The Founder',
          type: 'smallLargeHeading',
        },
        {
          name: 'bio_Founder',
          title: 'Bio - Founder',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [{title: 'Normal', value: 'normal'}],
              lists: [],
            },
          ],
        },
        {
          name: 'heading_WorkingTeam',
          title: 'Heading - Working Team',
          type: 'smallLargeHeading',
        },
        {
          name: 'workingTeam',
          title: 'Working Team',
          type: 'array',
          of: [{type: 'teamMemberBio'}],
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
        subtitle: language && `Vison & Team translation for ${LANGUAGES[language]}`,
      }
    },
  },
}
