import {RiArticleFill} from 'react-icons/ri'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: RiArticleFill,

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
              {title: 'Biography', value: 'biography'},
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
      name: 'briefIntro',
      title: 'Brief Intro',
      type: 'text',
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
      language: 'language',
    },
    prepare(selection: {author: any; language: string}) {
      const {author, language} = selection
      const LANGUAGES: {[key: string]: string} = {
        english: 'EN',
        german: 'DE',
      }
      return {
        ...selection,
        subtitle:
          author &&
          `by ${author} - written in ${language.toUpperCase()} (${LANGUAGES[language].toUpperCase()})`,
      }
    },
  },
}
