import { heroSectionGeneralDataType } from '@/pages/types/pagesDataType';
import { PortableTextBlock } from '@portabletext/types';

export type AuthorType = {
  name: string;
  slug: { current: string };
};

export type PostType = {
  title: string;
  author: AuthorType;
  slug: { current: string };
  categories: string;
  publishedAt: string;
  briefIntro: string;
  body: PortableTextBlock;
  mainImage: { url: string };
};

export type SectionHeadingType = {
  headingSmallerVariant: string;
  headingLargerVariant: string;
};

export type queryPostType = {
  language: string;
  heroSection_Blog: heroSectionGeneralDataType;
  postSectionheading: SectionHeadingType;
  post: PostType[];
};

export type PhotoGalleryDataType = {
  language: string;
  month: string;
  year: string;
  images: { imageDescription_alt: string; url: string }[];
  previewBackgroundImage: { url: string };
};
