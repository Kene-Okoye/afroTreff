import {MdCategory} from 'react-icons/md'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  initialValue: {previewTitle: 'Get Involved Page'},
  icon: MdCategory,

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        list: [
          {title: 'News', value: 'news'},
          {title: 'Story', value: 'story'},
          {title: 'Interviews', value: 'interviews'},
          {title: 'Life Style', value: 'lifeStyle'},
        ],
      },
    },
  ],
}
