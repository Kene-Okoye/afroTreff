import { LanguageType } from './languageType';

export type LanguagePathType = {
  HOME: string;
  PAGE_NOT_FOUND: string;
  VISION_AND_TEAM: string;
  ACTIVITIES: string;
  BLOG: string;
  ALBUMS: string;
  SUPPORT_US: string;
  FAQ: string;
  CONTACT: string;
  REGISTER: string;
  THANKYOU: string;
  IMPRINT: string;
  PRIVACY: string;
};

export type PathsType = {
  [key in LanguageType]: LanguagePathType;
};
