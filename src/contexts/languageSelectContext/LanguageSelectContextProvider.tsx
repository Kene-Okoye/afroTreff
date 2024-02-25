import { useState } from 'react';
import LanguageSelectContext from './LanguageSelectContext';

import { LanguageSelectProviderPropsType } from '@/contexts/types/LanguageSelectContextType';

/* Export Component for the LanguageSelect Context Provider */
const LanguageSelectContextProvider = ({ children }: LanguageSelectProviderPropsType) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  return (
    <LanguageSelectContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageSelectContext.Provider>
  );
};

export default LanguageSelectContextProvider;
