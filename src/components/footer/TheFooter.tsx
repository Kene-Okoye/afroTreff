import { Link } from 'react-router-dom';

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
            <Link to={paths.HOME} className={footerStyles['logo-wrapper']}>
              <img
                src={afroTreffLogo}
                alt="AfroTreff homepage"
                className={footerStyles['logo-image']}
              />
              <p>Made with love in Köln</p>
            </Link>
          </div>
          <div>
            <h2>Get to know us</h2>
            <ul>
              <li>
                <Link to={paths.VISION_AND_TEAM}>About us</Link>
              </li>
              <li>
                <Link to={paths.CONTACT}>Contact</Link>
              </li>
              <li>
                <Link to={paths.FAQ}>FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Get involved</h2>
            <ul>
              <li>
                <Link to={paths.SUPPORT}>Individual donations</Link>
              </li>
              <li>
                <Link to={paths.SUPPORT}>Volunteer</Link>
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
          <Link to={paths.IMPRINT}>Imprint</Link>
          <Link to={paths.PRIVACY}>Privacy policy</Link>
        </div>
      </footer>
    </>
  );
};

export default TheFooter;
