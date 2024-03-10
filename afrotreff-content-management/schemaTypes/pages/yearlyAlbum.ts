import {MdAddPhotoAlternate} from 'react-icons/md'

export default {
  name: 'yearlyAlbum',
  title: 'Yearly Album',
  type: 'document',
  icon: MdAddPhotoAlternate,

  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'month',
      title: 'Month',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'year',
        maxLength: 96,
      },
    },
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      description: 'Maximum upload of 20 photos',
      validation: (rule: any) =>
        rule.required().max(20).error('The maximum number of photo upload is 20'),
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'imageDescription_alt',
              title: 'Image Description (alt)',
              type: 'string',
              description: `When you add an image, please ensure to provide a detailed description of what can be seen on the image. 
              This is very important for accessibility purposes`,
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'year',
      year: 'year',
    },
    prepare(selection: {year: string}) {
      const {year} = selection
      return {...selection, subtitle: year && `Photo albums from the year, ${year}`}
    },
  },
}
