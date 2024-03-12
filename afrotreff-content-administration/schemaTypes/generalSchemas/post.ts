import {RiArticleFill} from 'react-icons/ri'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: RiArticleFill,

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      description: 'Select a category',
      of: [
        {
          name: 'categories',
          title: 'Categories',
          type: 'string',
          options: {
            list: [
              {title: 'News', value: 'news'},
              {title: 'Story', value: 'story'},
              {title: 'Interviews', value: 'interviews'},
            ],
          },
        },
      ],
    },

    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection: {author: any}) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
}
