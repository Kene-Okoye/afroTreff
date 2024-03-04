/* NOTES ABOUT THIS HOOK
-------------------------------------------------------------------------------
* @Purpose: This custom hook is primarily for the multi-language routing. 
* The implementation only has use cases for the languages English (EN) and German (DE)
* which are the languages currently used in the project.
* The language list can however be extended to include other languages if needed. To 
* extend the language list, you'll need to add the new language paths to the 
* paths.ts (src\routes\paths.ts) file this serves as the key used to automatically 
* redirect a user to the correct individual language routes
* (for e.g. /en/albums for English and /de/alben for German) when they 
* change switch bewteen languages.


* HOW TO USE THE HOOK
--------------------------------------------------------------------------------
* PLEASE NOTE: that this hook is meant to be used within the component that handles the
* language switch. 
* Simply import and use the handleLanguageChange function where needed. It is already 
* imported and used within the <LanguageSwitch/> component. As such, there is no need to 
* use it else where within this project.
* 
* X--- Please refer to the component 'LanguageSwitch.tsx' to see where it is used. ---X
*/

// Import necessary dependencies
import { ChangeEvent, useCallback, useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import LanguageSelectContext from '@/contexts/languageSelectContext/LanguageSelectContext';
import paths from '@/routes/paths';
import { LanguagePathType, PathsType } from '@/routes/types/routesType';

const useLanguageBasedRouting = () => {
  /* HOOKS */
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const languageSelectContext = useContext(LanguageSelectContext); // Get language select context

  // THE EVENT HANDLER FOR SWITCHING THE LANGUAGE
  const handleLanguageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedLanguage = event.target.value;
    updateLanguageContext(selectedLanguage); // Update language context
    updateHTMLLangAttribute(selectedLanguage); // Update the HTML lang attribute
    updateRoute(selectedLanguage); // Update route based on selected language
  };

  /* HELPER FUNCTIONS */
  // Update language context with selected language
  const updateLanguageContext = useCallback(
    (selectedLanguage: string) => {
      languageSelectContext?.setSelectedLanguage(selectedLanguage);
    },
    [languageSelectContext],
  );

  // Update HTML lang attribute with selected language
  const updateHTMLLangAttribute = useCallback((selectedLanguage: string) => {
    document.documentElement.setAttribute('lang', selectedLanguage);
  }, []);

  // Get key from value in the paths object. This is used to get the
  // respective language path value from the paths.ts file
  const getKeyFromValue = (selectedValue: string) => {
    for (const lang in paths) {
      const routes = paths[lang as keyof PathsType];
      for (const key in routes) {
        if (routes[key as keyof LanguagePathType] === selectedValue) {
          return key;
        }
      }
    }
    return null;
  };

  // Update the route based on selected language
  const updateRoute = useCallback(
    (selectedLanguage: string) => {
      const pathName = location.pathname;
      const firstSegmentURL = pathName.split('/')[1];
      const secondSegmentURL = pathName.split('/')[2];
      const key = getKeyFromValue(secondSegmentURL ? secondSegmentURL : firstSegmentURL);
      const paramsKey = Object.keys(params);
      const paramsPath = paramsKey.length > 0 ? `/${params[paramsKey[0]]}` : '';
      const newPath = secondSegmentURL
        ? `/${selectedLanguage}/${
            paths[selectedLanguage as keyof PathsType][key as keyof LanguagePathType]
          }${paramsPath}`
        : `/${selectedLanguage}`;
      navigate(newPath, { replace: true }); // Navigate to the new path
    },
    [location.pathname, navigate, params],
  );

  return {
    handleLanguageChange,
  };
};

export default useLanguageBasedRouting;
