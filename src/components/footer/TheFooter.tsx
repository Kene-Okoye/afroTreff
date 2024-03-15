import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LanguageType } from '@/routes/types/languageType';
import paths from '@/routes/paths';

import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';

import footerStyles from '@/components/footer/TheFooter.module.css';

import afroTreffLogo from '@/assets/images/afrotreff_logo.webp';
import instagramLogo from '@/assets/svg/instagram_logo.svg';
import linkedInLogo from '@/assets/svg/linkedin_logo.svg';

const TheFooter = () => {
  const { i18n, t } = useTranslation();

  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  return (
    <>
      <footer>
        <div className={footerStyles['footer-container']}>
          <div>
            <NavLink
              to={`/${paths[currentLanguage].HOME}`}
              className={footerStyles['logo-wrapper']}
            >
              <img
                src={afroTreffLogo}
                alt="AfroTreff homepage"
                className={footerStyles['logo-image']}
              />
            </NavLink>
            <p>{t('made_with_love_in_Cologne')}</p>
          </div>
          <div>
            <h2>{t('get_to_know_us')}</h2>
            <ul>
              <li>
                <NavLink to={`/${currentLanguage}/${paths[currentLanguage].VISION_AND_TEAM}`}>
                  {t('about_us')}
                </NavLink>
              </li>
              <li>
                <a href="mailto:hallo@afrotreff.de, hallo@afrotreff.de?subject=Volunteer with Afrotreff">
                  {t('contact')}
                </a>
              </li>
              <li>
                <NavLink to={`/${currentLanguage}/${paths[currentLanguage].FAQ}`}>
                  {' '}
                  {t('faq')}
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2>{t('get_involved')}</h2>
            <ul>
              <li>
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=JW4GPY6K2QM6L"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {t('individual_donations')}
                </a>
              </li>
              <li>
                <NavLink to={`/${currentLanguage}/${paths[currentLanguage].SUPPORT_US}`}>
                  {t('volunteer')}
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2>{t('social')}</h2>
            <ul>
              <li>
                <LinkOpenInNewWindow
                  href="https://www.instagram.com/afrotreff/?hl=en"
                  text="Instagram"
                  useWhiteIcon
                  imageSrc={instagramLogo}
                />
              </li>

              <li>
                <LinkOpenInNewWindow
                  href="https://www.linkedin.com/company/afrotreff/"
                  text="LinkedIn"
                  useWhiteIcon
                  imageSrc={linkedInLogo}
                  styleSocialMediaIcon={{
                    width: '25px',
                    marginInlineEnd: '9px',
                    marginInlineStart: '3px',
                  }}
                />
              </li>
            </ul>
          </div>
        </div>

        <div className={footerStyles['privacy-wrapper']}>
          <p>&copy;Afrotreff {new Date().getFullYear()}</p>
          <NavLink to={`/${currentLanguage}/${paths[currentLanguage].IMPRINT}`}>
            {t('imprint')}
          </NavLink>
          <NavLink to={`/${currentLanguage}/${paths[currentLanguage].PRIVACY}`}>
            {t('privacy')}
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default TheFooter;
