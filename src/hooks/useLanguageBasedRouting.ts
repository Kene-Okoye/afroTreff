/* NOTES ABOUT THIS HOOK
-------------------------------------------------------------------------------
* @Purpose: This custom hook is primarily for the multi-language routing. 
* The implementation only has use cases for the languages English (EN) and German (DE)
* but this can be extended to include other languages if needed.
* The hook is also created to support route names in multiple languages and 
* automatically redirect a users to the correct individual language routes
* (example /en/summary for English and /de/Zusammenfassung for German) when they 
* change to languages


* HOW TO USE THE HOOK
--------------------------------------------------------------------------------
* PLEASE NOTE: that this hook is meant to be used globally. 
* Simply import and call the hook/function where needed. It is already imported and used
* within the <App/> component. As such, there is no need to use it else where.
* 
* X--- Please refer to the component 'App.tsx' to see where it is used. ---X
*/

import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import languageRoutesMap from '@/routes/languageRoutesMap';
import LanguageSelectContext from '@/contexts/languageSelectContext/LanguageSelectContext';

import { LanguageType } from '@/routes/types/languageType';

import paths from '@/routes/paths';

const useLanguageBasedRouting = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const languageSelectContext = useContext(LanguageSelectContext);
  const currentLanguage: LanguageType =
    (languageSelectContext?.selectedLanguage as LanguageType) || 'en';

  useEffect(() => {
    const currentRoute = languageRoutesMap[location];
    const newLocation = currentRoute?.[currentLanguage];

    if (newLocation && newLocation !== location) {
      navigate(newLocation, { replace: true });
    }

    if (
      !currentRoute &&
      location !== `/${currentLanguage}/${paths[currentLanguage].PAGE_NOT_FOUND}`
    ) {
      navigate(`/${currentLanguage}/${paths[currentLanguage].PAGE_NOT_FOUND}`, {
        replace: true,
      });
    }
  }, [currentLanguage, location, navigate]);
};

export default useLanguageBasedRouting;
