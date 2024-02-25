import { ReactNode } from 'react';

export type LanguageSelectContextType = {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
};

export type LanguageSelectProviderPropsType = {
  children: ReactNode;
};
