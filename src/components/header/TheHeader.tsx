import { Link } from 'react-router-dom';
import useAnnounceActivePage from '@/hooks/useAnnounceActivePage';

import paths from '@/routes/paths';

import TheNavbar from '@/components/header/TheNavbar';

import { useSkipNavLinkContext } from '@/contexts/skipNavLinkContext/useSkipLinkContext';

import headerStyles from '@/components/header/TheHeader.module.css';
import afroTreffLogo from '@/assets/images/afrotreff_logo.webp';

const TheHeader = () => {
  const { activePageAnnouncerRef } = useAnnounceActivePage();

  const skipNavLinkContext = useSkipNavLinkContext();
  const setSkipNavClicked = skipNavLinkContext?.setSkipNavClicked;

  const handleSkipNavClick = () => {
    setSkipNavClicked && setSkipNavClicked(true);
  };

  return (
    <>
      <div
        tabIndex={-1}
        ref={activePageAnnouncerRef}
        className={headerStyles['visually-hidden']}
      ></div>

      <header>
        <a
          href="#main-content"
          className={headerStyles['skip-to-main']}
          onClick={handleSkipNavClick}
        >
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
