import {IoText} from 'react-icons/io5'

export default {
  name: 'smallLargeHeading',
  title: 'Small Large Heading',
  type: 'document',
  icon: IoText,

  fields: [
    {
      name: 'headingSmallerVariant',
      title: 'Heading smaller variant',
      type: 'string',
    },
    {
      name: 'headingLargerVariant',
      title: 'Heading larger variant',
      type: 'string',
    },
  ],
}
