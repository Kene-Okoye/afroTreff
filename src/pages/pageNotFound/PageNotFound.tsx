import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LanguageType } from '@/routes/types/languageType';
import paths from '@/routes/paths';

import LanguageSelectContext from '@/contexts/languageSelectContext/LanguageSelectContext';

import pageNotFoundStyles from '@/pages/pageNotFound/PageNotFound.module.css';

const PageNotFound = () => {
  const languageSelectContext = useContext(LanguageSelectContext);
  const currentLanguage: LanguageType =
    (languageSelectContext?.selectedLanguage as LanguageType) || 'en';

  return (
    <div className={pageNotFoundStyles['page-not-found']}>
      <div className={pageNotFoundStyles['page-not-found--content-wrapper']}>
        <p>404: The page you requested could not be found.</p>
        <Link to={`/${paths[currentLanguage].HOME}`}>Return to the Home Page</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
