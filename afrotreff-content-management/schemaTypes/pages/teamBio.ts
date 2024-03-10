import {defineField, defineType} from 'sanity'
import {BsPersonVcardFill} from 'react-icons/bs'

export default defineType({
  name: 'teamMemberBio',
  title: 'Team Member Bio',
  type: 'document',
  icon: BsPersonVcardFill,

  fields: [
    {
      name: 'nameOfTeamMember',
      title: 'Name of Team Member',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nameOfTeamMember',
        maxLength: 96,
      },
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
})
