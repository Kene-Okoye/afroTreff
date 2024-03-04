import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { LanguageType } from '@/routes/types/languageType';
import paths from '@/routes/paths';

import LanguageSelectContext from '@/contexts/languageSelectContext/LanguageSelectContext';

import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';

import footerStyles from '@/components/footer/TheFooter.module.css';

import afroTreffLogo from '@/assets/images/afrotreff_logo.webp';
import instagramLogo from '@/assets/svg/instagram_logo.svg';
import linkedInLogo from '@/assets/svg/linkedin_logo.svg';

const TheFooter = () => {
  const languageSelectContext = useContext(LanguageSelectContext);
  const currentLanguage: LanguageType =
    (languageSelectContext?.selectedLanguage as LanguageType) || 'en';

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
            <p>Made with love in Köln</p>
          </div>
          <div>
            <h2>Get to know us</h2>
            <ul>
              <li>
                <NavLink to={`/${currentLanguage}/${paths[currentLanguage].VISION_AND_TEAM}`}>
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink to={`/${currentLanguage}/${paths[currentLanguage].CONTACT}`}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to={`/${currentLanguage}/${paths[currentLanguage].FAQ}`}>FAQ</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2>Get involved</h2>
            <ul>
              <li>
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=JW4GPY6K2QM6L"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Individual donations
                </a>
                {/* <NavLink to={paths.SUPPORT}>Individual donations</NavLink> */}
              </li>
              <li>
                <NavLink to={`/${currentLanguage}/${paths[currentLanguage].SUPPORT_US}`}>
                  Volunteer
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2>Social</h2>
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
          <NavLink to={`/${currentLanguage}/${paths[currentLanguage].IMPRINT}`}>Imprint</NavLink>
          <NavLink to={`/${currentLanguage}/${paths[currentLanguage].PRIVACY}`}>
            Privacy policy
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default TheFooter;
