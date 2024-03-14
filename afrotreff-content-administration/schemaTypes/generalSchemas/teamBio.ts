import {defineField, defineType} from 'sanity'
import {BsPersonVcardFill} from 'react-icons/bs'

export default defineType({
  name: 'teamMemberBio',
  title: 'Team Member Bio',
  type: 'document',
  icon: BsPersonVcardFill,

  fields: [
    /*-------------------------
     * Mandatory Fields
     *------------------------*/
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
      description: `Please ensure to select your desired language. This would be used for the
          preview pane on the left and help you as an editor to get a quick overview of 
          the albums for the individual languages (DE & EN)`,
    },

    /*-------------------------
     * Other Fields
     *------------------------*/
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (rule: any) =>
        rule.required().error(`The first name MUST be icluded as this is used to generate 
        a unique slug for each person's bio.`),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (rule: any) =>
        rule.required().error(`The last name MUST be icluded as this is used to generate 
        a unique slug for each person's bio.`),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc: {firstName: string; lastName: string; language: string}) =>
          `team-member-${doc.firstName}-${doc.lastName}-bio-in-${doc.language}`,
        maxLength: 96,
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'imageOfTeamMember',
      title: 'Image of Team Member',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'imageDescription_alt',
          title: 'Image Description (Alt)',
          type: 'string',
          description: `When you add an image, please ensure to provide a detailed description of what can be seen on the image. 
                This is very important for accessibility purposes`,
        },
      ],
    },

    {
      name: 'bio_TeamMember',
      title: 'Bio - Team Member',
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

  preview: {
    select: {
      title: 'firstName',
      firstName: 'firstName',
      media: 'imageOfTeamMember',
      language: 'language',
    },
    prepare(selection: {firstName: any; language: string}) {
      const {firstName, language} = selection
      const LANGUAGES: {[key: string]: string} = {
        english: 'EN',
        german: 'DE',
      }
      return {
        ...selection,
        subtitle:
          firstName &&
          `${firstName}'s bio in ${language.toUpperCase()} (${LANGUAGES[language].toUpperCase()})`,
      }
    },
  },
})
