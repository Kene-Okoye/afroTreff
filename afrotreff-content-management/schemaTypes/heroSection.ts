import {PiFlagBannerFill} from 'react-icons/pi'

export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  icon: PiFlagBannerFill,

  fields: [
    {
      name: 'backgroundImage',
      title: 'Background image',
      type: 'image',
      validation: (rule: {required: () => any}) => rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'headingText',
      title: 'Heading text',
      type: 'string',
    },
    {
      name: 'smallText',
      title: 'Small text',
      type: 'string',
    },
  ],
}
