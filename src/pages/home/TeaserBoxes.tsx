import { useTranslation } from 'react-i18next';
import { LanguageType } from '@/routes/types/languageType';

import LinkButton from '@/components/linkButton/LinkButton';
import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';

import teaserBoxesStyles from '@/pages/home/TeaserBoxes.module.css';

import instagramLogo from '@/assets/svg/instagram_logo.svg';
import linkedInLogo from '@/assets/svg/linkedin_logo_outlined.svg';
import paths from '@/routes/paths';
import { PathsType } from '@/routes/types/routesType';

export type TeaserBoxesType = {
  buttonPath: keyof PathsType['en'];
  ctaButtonText: string;
};

export type TeaserBoxesProps = {
  teaserBoxTextContent: TeaserBoxesType[];
};

const TeaserBoxes = ({ teaserBoxTextContent }: TeaserBoxesProps) => {
  const { i18n } = useTranslation();
  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  return (
    <>
      <div className={teaserBoxesStyles['teaser-box__wrapper--group-text-only']}>
        {teaserBoxTextContent &&
          teaserBoxTextContent.map(({ buttonPath, ctaButtonText }) => (
            <div key={ctaButtonText} className={teaserBoxesStyles['teaser-box__CTA-box-text-only']}>
              <LinkButton
                linkText={ctaButtonText}
                path={
                  paths[currentLanguage][buttonPath] !== 'contact'
                    ? `/${currentLanguage}/${paths[currentLanguage][buttonPath]}`
                    : ''
                }
                href={
                  paths[currentLanguage][buttonPath] === 'contact'
                    ? 'mailto:hallo@afrotreff.de, hallo@afrotreff.de?subject=Volunteer with Afrotreff'
                    : ''
                }
              />
            </div>
          ))}
      </div>
      <div className={teaserBoxesStyles['teaser-box__CTA-box-social-media-container']}>
        <div className={teaserBoxesStyles['teaser-box__CTA-box--instagram']}>
          <LinkOpenInNewWindow
            href="https://www.instagram.com/afrotreff/?hl=en"
            socialMediaIconAlt="Follow us on Instagram"
            imageSrc={instagramLogo}
            useWhiteIcon
            hideOpenInNewTablIcon
            styleSocialMediaIcon={{ width: '50px', margin: 0 }}
          />
        </div>
        <div className={teaserBoxesStyles['teaser-box__CTA-box--linkedIn']}>
          <LinkOpenInNewWindow
            href="https://www.linkedin.com/company/afrotreff/"
            socialMediaIconAlt="Stay up to date on LinkedIn"
            imageSrc={linkedInLogo}
            useWhiteIcon
            hideOpenInNewTablIcon
            styleSocialMediaIcon={{ width: '50px', margin: 0 }}
          />
        </div>
      </div>
    </>
  );
};

export default TeaserBoxes;
