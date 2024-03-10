import {FaFlag} from 'react-icons/fa'

export default {
  name: 'countryFlag',
  title: 'Country Flag',
  type: 'document',
  icon: FaFlag,

  fields: [
    {
      name: 'nameOfCountry',
      title: 'Name Of Country',
      type: 'string',
    },
    {
      name: 'imageOfCountryFlag',
      title: 'Image Of Country Flag',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
