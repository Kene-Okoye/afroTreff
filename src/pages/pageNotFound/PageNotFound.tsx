import pageNotFoundStyles from '@/pages/pageNotFound/PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={pageNotFoundStyles['page-not-found']}>
      <p>404: The page you requested could not be found.</p>
    </div>
  );
};

export default PageNotFound;
