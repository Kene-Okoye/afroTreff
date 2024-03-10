import {StructureBuilder} from 'sanity/structure'

import {SiPowerpages} from 'react-icons/si'
import {IoHome} from 'react-icons/io5'
import {RiTeamFill} from 'react-icons/ri'
import {FaMeetup} from 'react-icons/fa6'
import {BiSolidDonateHeart} from 'react-icons/bi'
import {FcFaq} from 'react-icons/fc'
import {BiSolidPhotoAlbum} from 'react-icons/bi'
import {FaBlog} from 'react-icons/fa'

export const listStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Add a visual divider
      S.divider(),

      S.listItem()
        .title('Pages')
        .icon(SiPowerpages)
        .child(
          S.list()
            // Sets a title for our new list
            .title('Pages Documents')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              // Add a visual divider
              S.divider(),
              S.listItem()
                .title('Home Page')
                .icon(IoHome)
                .child(S.document().schemaType('homePage').documentId('homePage')),
              S.listItem()
                .title('Vision and Team Page')
                .icon(RiTeamFill)
                .child(
                  S.document().schemaType('visionAndTeamPage').documentId('visionAndTeamPage'),
                ),
              S.listItem()
                .title('Activities Page')
                .icon(FaMeetup)
                .child(S.document().schemaType('activitiesPage').documentId('activitiesPage')),
              S.listItem()
                .title('Get Involved Page')
                .icon(BiSolidDonateHeart)
                .child(S.document().schemaType('getInvolvedPage').documentId('getInvolvedPage')),
              S.listItem()
                .title('FAQ Page')
                .icon(FcFaq)
                .child(S.document().schemaType('FAQPage').documentId('FAQPage')),
              S.listItem()
                .title('Albums Page')
                .icon(BiSolidPhotoAlbum)
                .child(S.document().schemaType('albumsPage').documentId('albumsPage')),
              S.listItem()
                .title('Blog Page')
                .icon(FaBlog)
                .child(S.document().schemaType('blogPage').documentId('blogPage')),
            ]),
        ),

      S.divider(),
      // Remove the new singletons above from the main list
      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            'homePage',
            'visionAndTeamPage',
            'activitiesPage',
            'getInvolvedPage',
            'FAQPage',
            'albumsPage',
            'blogPage',
          ].includes(listItem.getId()),
      ),
      S.divider(),
    ])
