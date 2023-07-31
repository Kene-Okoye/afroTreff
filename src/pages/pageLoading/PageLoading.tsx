import pageLoadingStyles from '@/pages/pageLoading/PageLoading.module.css';

const PageLoading = () => {
  return (
    <div className={pageLoadingStyles['page-loading']}>
      <div className={pageLoadingStyles['page-loading--container']}>
        <p>Page is loading</p>
        <div className={pageLoadingStyles['page-loading--loading-line']}></div>
      </div>
    </div>
  );
};

export default PageLoading;
