import { Link } from 'react-router-dom';

import paths from '@/routes/paths';

import TheNavbar from '@/components/header/TheNavbar';
import headerStyles from '@/components/header/TheHeader.module.css';
import afroTreffLogo from '@/assets/images/afrotreff_logo.webp';

const TheHeader = () => {
  return (
    <>
      <header>
        <a href="#main-content" className={headerStyles['skip-to-main']}>
          Skip to Main Content
        </a>
        <Link to={paths.HOME} className={headerStyles['logo']}>
          <img
            src={afroTreffLogo}
            alt="AfroTreff homepage"
            className={headerStyles['logo-image']}
          />
        </Link>
        <TheNavbar />
      </header>
    </>
  );
};

export default TheHeader;
