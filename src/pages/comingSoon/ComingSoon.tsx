import { Link } from 'react-router-dom';

import paths from '@/routes/paths';
import HeroSection from '@/components/hero/HeroSection';
import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';

import comingSoonStyles from '@/pages/comingSoon/ComingSoon.module.css';

import heroImageComingSoon from '@/assets/images/hero_image_home.webp';
import instagramLogo from '@/assets/svg/instagram_logo_orange.svg';
import linkedInLogo from '@/assets/svg/linkedin_logo_orange.svg';

function ComingSoon() {
  return (
    <>
      <div className={comingSoonStyles['coming-soon--hero-section-wrapper']}>
        <HeroSection
          h1Text="Coming soon"
          pText="We‘re currently working on this page. Stay tuned for some exciting updates"
          backGroundImage={heroImageComingSoon}
        >
          <Link className={comingSoonStyles['coming-soon--link']} to={paths.HOME}>
            Return to the home page
          </Link>

          <div className={comingSoonStyles['coming-soon--icon-wrapper']}>
            <LinkOpenInNewWindow
              href="https://www.linkedin.com/company/afrotreff/"
              imageSrc={linkedInLogo}
              socialMediaIconAlt="Visit us on instagram"
            />
            <LinkOpenInNewWindow
              href="https://www.instagram.com/afrotreff/?hl=en"
              imageSrc={instagramLogo}
              socialMediaIconAlt="Visit us on instagram"
            />
          </div>
        </HeroSection>
      </div>
    </>
  );
}

export default ComingSoon;