import { LanguageType } from '@/routes/types/languageType';

export type languageRoutesMapType = {
  [key: string]: {
    [key in LanguageType]: string;
  };
};
