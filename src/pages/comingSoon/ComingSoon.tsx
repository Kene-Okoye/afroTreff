import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LanguageType } from '@/routes/types/languageType';
import paths from '@/routes/paths';

import LanguageSelectContext from '@/contexts/languageSelectContext/LanguageSelectContext';

import HeroSection from '@/components/hero/HeroSection';
import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';

import comingSoonStyles from '@/pages/comingSoon/ComingSoon.module.css';

import heroImageComingSoon from '@/assets/images/hero_image_home.webp';
import instagramLogo from '@/assets/svg/instagram_logo_orange.svg';
import linkedInLogo from '@/assets/svg/linkedin_logo_orange.svg';

function ComingSoon() {
  const languageSelectContext = useContext(LanguageSelectContext);
  const currentLanguage: LanguageType =
    (languageSelectContext?.selectedLanguage as LanguageType) || 'en';

  return (
    <>
      <div className={comingSoonStyles['coming-soon--hero-section-wrapper']}>
        <HeroSection
          h1Text="Coming soon"
          pText="We‘re currently working on this page. Stay tuned for some exciting updates"
          backGroundImage={heroImageComingSoon}
        >
          <Link
            className={comingSoonStyles['coming-soon--link']}
            to={`/${paths[currentLanguage].HOME}`}
          >
            Return to the home page
          </Link>

          <div className={comingSoonStyles['coming-soon--icon-wrapper']}>
            <LinkOpenInNewWindow
              href="https://www.linkedin.com/company/afrotreff/"
              imageSrc={linkedInLogo}
              socialMediaIconAlt="Visit us on LinkedIn"
              hideOpenInNewTablIcon
              styleSocialMediaIcon={{ width: '40px', margin: 0 }}
            />
            <LinkOpenInNewWindow
              href="https://www.instagram.com/afrotreff/?hl=en"
              socialMediaIconAlt="Follow us on Instagram"
              imageSrc={instagramLogo}
              hideOpenInNewTablIcon
              styleSocialMediaIcon={{ width: '50px', marginInlineStart: '10px' }}
            />
            {/* <LinkOpenInNewWindow
              href="https://www.instagram.com/afrotreff/?hl=en"
              imageSrc={instagramLogo}
              socialMediaIconAlt="Visit us on instagram"
            /> */}
          </div>
        </HeroSection>
      </div>
    </>
  );
}

export default ComingSoon;
