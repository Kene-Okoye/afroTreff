import { heroSectionGeneralDataType } from '@/pages/types/pagesDataType';
import { PortableTextBlock } from '@portabletext/types';

export type AlbumsType = {
  year: string;
  month: string;
  slug: { current: string };
  previewBackgroundImage: { url: string };
};

export type queryAlbumType = {
  language: string;
  heroSection_albumsPage: heroSectionGeneralDataType;
  albumsSectionheading: { [key: string]: string };
  bodyText: PortableTextBlock;
  albums: AlbumsType[];
};

export type PhotoGalleryDataType = {
  language: string;
  month: string;
  year: string;
  images: { imageDescription_alt: string; url: string }[];
  previewBackgroundImage: { url: string };
};
