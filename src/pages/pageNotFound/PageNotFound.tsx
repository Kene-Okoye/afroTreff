import { Link } from 'react-router-dom';

import paths from '@/routes/paths';
import pageNotFoundStyles from '@/pages/pageNotFound/PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={pageNotFoundStyles['page-not-found']}>
      <div className={pageNotFoundStyles['page-not-found--content-wrapper']}>
        <p>404: The page you requested could not be found.</p>
        <Link to={paths.HOME}>Return to the Home Page</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
