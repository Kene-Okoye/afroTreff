import {RiTeamFill} from 'react-icons/ri'

export default {
  name: 'visionAndTeamPage_en',
  title: 'Vision and team page - EN',
  type: 'document',
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
      name: 'heroSection_VisonAndTeam',
      title: 'HERO SECTION - VISION AND TEAM',
      type: 'heroSection',
    },
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

    {
      name: 'heading_MeetTheFounder',
      title: 'Heading - Meet The Founder',
      type: 'smallLargeHeading',
    },
    {
      name: 'bio_Founder',
      title: 'Bio - Founder',
      type: 'reference',
      to: [{type: 'teamMemberBio'}],
      validation: (rule: any) =>
        rule.required().error('Only the bio for the founder (Francis) is allowed here.'),
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
      of: [{type: 'reference', to: {type: 'teamMemberBio'}}],
    },
  ],

  initialValue: {language: 'english', previewTitle: 'Vision and Team Page'},

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
        subtitle: language && `Vision and Team page translation in ${language}`,
      }
    },
  },
}
