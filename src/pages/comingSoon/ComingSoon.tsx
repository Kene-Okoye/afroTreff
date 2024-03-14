import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LanguageType } from '@/routes/types/languageType';
import paths from '@/routes/paths';

import HeroSection from '@/components/hero/HeroSection';
import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';

import comingSoonStyles from '@/pages/comingSoon/ComingSoon.module.css';

import heroImageComingSoon from '@/assets/images/hero_image_home.webp';
import instagramLogo from '@/assets/svg/instagram_logo_orange.svg';
import linkedInLogo from '@/assets/svg/linkedin_logo_orange.svg';

function ComingSoon() {
  const { i18n, t } = useTranslation();
  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  return (
    <>
      <div className={comingSoonStyles['coming-soon--hero-section-wrapper']}>
        <HeroSection
          h1Text={`${t('coming_soon')}`}
          pText={`${t('coming_soon_elaboration_text')}`}
          backGroundImage={heroImageComingSoon}
        >
          <Link
            className={comingSoonStyles['coming-soon--link']}
            to={`/${paths[currentLanguage].HOME}`}
          >
            {t('return_to_homepage')}
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
          </div>
        </HeroSection>
      </div>
    </>
  );
}

export default ComingSoon;
