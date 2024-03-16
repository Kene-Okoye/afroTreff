import {BiSolidDonateHeart} from 'react-icons/bi'

export default {
  name: 'getInvolvedPage_de',
  title: 'Get Involved Page - DE',
  type: 'document',
  icon: BiSolidDonateHeart,

  fields: [
    /*-------------------------
     * Mandatory Fields
     *------------------------*/
    {
      name: 'previewTitle',
      title: 'Preview Title',
      type: 'string',
      description: `Please enter a title for the document. 
      This would be used for the preview header content found on the left hand side tab`,
      // hidden: true,
      validation: (rule: {required: () => any}) => rule.required(),
    },
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
      readOnly: true,
    },

    /*-------------------------
     * Other Fields
     *------------------------*/
    {
      name: 'heroSection_getInvolved',
      title: 'HERO SECTION - GET INVOLVED',
      type: 'object',
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
          name: 'heroSectionHeadingText',
          title: 'Hero section heading text',
          type: 'string',
        },
        {
          name: 'heroSectionshortText',
          title: 'Hero section Short text',
          type: 'string',
        },
        {
          name: 'payPalButtonText',
          title: 'PayPal button text',
          type: 'string',
        },
        {
          name: 'volunteerButtonText',
          title: 'Volunteer button text',
          type: 'string',
        },
      ],
    },

    {
      name: 'headingDonationSection',
      title: 'Heading Donation Section',
      type: 'smallLargeHeading',
    },
    {
      name: 'textDonationSection',
      title: 'Text Donation Section',
      type: 'array',
      of: [{type: 'block'}],
    },

    {
      name: 'headingSponsorsSection',
      title: 'Heading Sponsors Section',
      type: 'string',
    },
    {
      name: 'sponsorLogo',
      title: 'Sponsor Logo',
      type: 'array',
      of: [
        {
          name: 'imageOfLogo',
          title: 'Image of Logo',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'imageDescription_alt',
              title: 'Image Description (alt)',
              type: 'string',
              description: `Please provide the name of the sponsor or donor.
                  This is very important for accessibility purposes`,
            },
          ],
        },
      ],
    },

    {
      name: 'closingTextSponsorsSection',
      title: 'Closing Text Sponsors Section',
      type: 'string',
    },
  ],

  initialValue: {language: 'german', previewTitle: 'Get Involved Page'},

  preview: {
    select: {
      previewTitle: 'previewTitle',
      language: 'language',
    },
    prepare(selection: {previewTitle: string; language: string}) {
      const {previewTitle, language} = selection
      const LANGUAGES: {[key: string]: string} = {
        english: 'EN',
        german: 'DE',
      }
      return {
        ...selection,
        title:
          previewTitle && language && `${previewTitle} (${LANGUAGES[language].toUpperCase()}) `,
        subtitle: language && `Get Involved page translation in ${language}`,
      }
    },
  },
}
