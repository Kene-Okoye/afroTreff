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
        <a href="#" className={headerStyles['logo']}>
          <img
            src={afroTreffLogo}
            alt="AfroTreff homepage"
            className={headerStyles['logo-image']}
          />
        </a>
        <TheNavbar />
      </header>
    </>
  );
};

export default TheHeader;
