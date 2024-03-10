import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import paths from '@/routes/paths';
import { LanguageType } from '@/routes/types/languageType';

function useNavigateToDefaultHomepage() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const { i18n } = useTranslation();

  useEffect(() => {
    if (location === '/') {
      navigate(paths[i18n.resolvedLanguage as LanguageType].HOME);
    }
  }, [i18n.resolvedLanguage, location, navigate]);
}

export default useNavigateToDefaultHomepage;
