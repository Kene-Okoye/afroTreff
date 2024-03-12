import { useTranslation } from 'react-i18next';

import pageLoadingStyles from '@/pages/pageLoading/PageLoading.module.css';

const PageLoading = () => {
  const { t } = useTranslation();

  return (
    <div className={pageLoadingStyles['page-loading']}>
      <div className={pageLoadingStyles['page-loading--container']}>
        <p>{t('page_is_loading')}</p>
        <div className={pageLoadingStyles['page-loading--loading-line']}></div>
      </div>
    </div>
  );
};

export default PageLoading;
