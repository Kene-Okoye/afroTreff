import { NavLink } from 'react-router-dom';

import paths from '@/routes/paths';
import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';

import footerStyles from '@/components/footer/TheFooter.module.css';
import afroTreffLogo from '@/assets/images/afrotreff_logo.webp';
import instagramLogo from '@/assets/svg/instagram_logo.svg';
import linkedInLogo from '@/assets/svg/linkedin_logo.svg';

const TheFooter = () => {
  return (
    <>
      <footer>
        <div className={footerStyles['footer-container']}>
          <div>
            <NavLink to={paths.HOME} className={footerStyles['logo-wrapper']}>
              <img
                src={afroTreffLogo}
                alt="AfroTreff homepage"
                className={footerStyles['logo-image']}
              />
              <p>Made with love in Köln</p>
            </NavLink>
          </div>
          <div>
            <h2>Get to know us</h2>
            <ul>
              <li>
                <NavLink to={paths.VISION_AND_TEAM}>About us</NavLink>
              </li>
              <li>
                <NavLink to={paths.CONTACT}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={paths.FAQ}>FAQ</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2>Get involved</h2>
            <ul>
              <li>
                <NavLink to={paths.SUPPORT}>Individual donations</NavLink>
              </li>
              <li>
                <NavLink to={paths.SUPPORT}>Volunteer</NavLink>
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
          <NavLink to={paths.IMPRINT}>Imprint</NavLink>
          <NavLink to={paths.PRIVACY}>Privacy policy</NavLink>
        </div>
      </footer>
    </>
  );
};

export default TheFooter;
