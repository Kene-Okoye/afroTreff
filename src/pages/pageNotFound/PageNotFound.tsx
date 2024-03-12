import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LanguageType } from '@/routes/types/languageType';
import paths from '@/routes/paths';

import pageNotFoundStyles from '@/pages/pageNotFound/PageNotFound.module.css';

const PageNotFound = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  return (
    <div className={pageNotFoundStyles['page-not-found']}>
      <div className={pageNotFoundStyles['page-not-found--content-wrapper']}>
        <p>{t('page_not_found')}</p>
        <Link to={`/${paths[currentLanguage].HOME}`}>{t('return_to_homepage')}</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
