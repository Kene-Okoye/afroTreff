import {StructureBuilder} from 'sanity/structure'

import {SiPowerpages} from 'react-icons/si'
import {IoHome} from 'react-icons/io5'
import {RiTeamFill} from 'react-icons/ri'
import {FaMeetup} from 'react-icons/fa6'
import {BiSolidDonateHeart} from 'react-icons/bi'
import {FcFaq} from 'react-icons/fc'
import {BiSolidPhotoAlbum} from 'react-icons/bi'
import {FaBlog} from 'react-icons/fa'

export const deskStructure = (S: StructureBuilder) =>
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
                .title('Home Page (EN)')
                .icon(IoHome)
                .child(S.document().schemaType('homePage_en').documentId('homePage_en')),
              S.listItem()
                .title('Home Page (DE)')
                .icon(IoHome)
                .child(S.document().schemaType('homePage_de').documentId('homePage_de')),
              S.divider(),

              S.listItem()
                .title('Activities Page (EN)')
                .icon(FaMeetup)
                .child(
                  S.document().schemaType('activitiesPage_en').documentId('activitiesPage_en'),
                ),
              S.listItem()
                .title('Activities Page (DE)')
                .icon(FaMeetup)
                .child(
                  S.document().schemaType('activitiesPage_de').documentId('activitiesPage_de'),
                ),
              S.divider(),

              S.listItem()
                .title('Vision and team page (EN)')
                .icon(RiTeamFill)
                .child(
                  S.document()
                    .schemaType('visionAndTeamPage_en')
                    .documentId('visionAndTeamPage_en'),
                ),
              S.listItem()
                .title('Vision and team page (DE)')
                .icon(RiTeamFill)
                .child(
                  S.document()
                    .schemaType('visionAndTeamPage_de')
                    .documentId('visionAndTeamPage_de'),
                ),
              S.divider(),

              S.listItem()
                .title('Get Involved Page (EN)')
                .icon(BiSolidDonateHeart)
                .child(
                  S.document().schemaType('getInvolvedPage_en').documentId('getInvolvedPage_en'),
                ),
              S.listItem()
                .title('Get Involved Page (DE)')
                .icon(BiSolidDonateHeart)
                .child(
                  S.document().schemaType('getInvolvedPage_de').documentId('getInvolvedPage_de'),
                ),
              S.divider(),

              S.listItem()
                .title('FAQ Page (EN)')
                .icon(FcFaq)
                .child(S.document().schemaType('FAQPage_en').documentId('FAQPage_en')),
              S.listItem()
                .title('FAQ Page (DE)')
                .icon(FcFaq)
                .child(S.document().schemaType('FAQPage_de').documentId('FAQPage_de')),
              S.divider(),

              S.listItem()
                .title('Albums Page (EN)')
                .icon(BiSolidPhotoAlbum)
                .child(S.document().schemaType('albumsPage_en').documentId('albumsPage_en')),
              S.listItem()
                .title('Albums Page (DE)')
                .icon(BiSolidPhotoAlbum)
                .child(S.document().schemaType('albumsPage_de').documentId('albumsPage_de')),
              S.divider(),

              S.listItem()
                .title('Blog Page (EN)')
                .icon(FaBlog)
                .child(S.document().schemaType('blogPage_en').documentId('blogPage_en')),
              S.listItem()
                .title('Blog Page (DE)')
                .icon(FaBlog)
                .child(S.document().schemaType('blogPage_de').documentId('blogPage_de')),
              S.divider(),
            ]),
        ),

      S.divider(),
      // Remove the new singletons above from the main list
      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            'homePage_en',
            'homePage_de',
            'activitiesPage_en',
            'activitiesPage_de',
            'visionAndTeamPage_en',
            'visionAndTeamPage_de',
            'getInvolvedPage_en',
            'getInvolvedPage_de',
            'FAQPage_en',
            'FAQPage_de',
            'albumsPage_en',
            'albumsPage_de',
            'blogPage_en',
            'blogPage_de',
          ].includes(listItem.getId()),
      ),
      S.divider(),
    ])
