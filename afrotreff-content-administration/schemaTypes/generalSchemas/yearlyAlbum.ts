import {MdAddPhotoAlternate} from 'react-icons/md'

export default {
  name: 'yearlyAlbum',
  title: 'Yearly Album',
  type: 'document',
  icon: MdAddPhotoAlternate,

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
        source: (doc: {year: string; month: string}) =>
          `${doc.month}-${doc.year}_${
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)
          }`,
        maxLength: 96,
      },
    },
    {
      name: 'previewBackgroundImage',
      title: 'Preview Background Image',
      type: 'image',
      options: {
        hotspot: true,
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
          title: 'Album Photo',
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
      month: 'month',
      year: 'year',
      language: 'language',
    },
    prepare(selection: {year: string; month: string; language: string}) {
      const {year, month, language} = selection
      const LANGUAGES: {[key: string]: string} = {
        english: 'EN',
        german: 'DE',
      }
      return {
        ...selection,
        subtitle:
          year &&
          `Photo album from ${month.toUpperCase()}, ${year} - (${LANGUAGES[language].toUpperCase()}) `,
      }
    },
  },
}
