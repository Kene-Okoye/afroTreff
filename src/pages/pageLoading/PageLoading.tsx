import pageLoadingStyles from '@/pages/pageLoading/PageLoading.module.css';

const PageLoading = () => {
  return (
    <div className={pageLoadingStyles['page-loading']}>
      <p>page is loading</p>
    </div>
  );
};

export default PageLoading;
