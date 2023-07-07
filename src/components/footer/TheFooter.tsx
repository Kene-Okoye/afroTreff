import LinkOpenInNewWindow from '@/components/LinkOpenInNewWindow';

import footerStyles from '@/components/footer/TheFooter.module.css';

import afroTreffLogo from '@/assets/images/afrotreff_logo.webp';
import twitterLogo from '@/assets/svg/twitter_logo.svg';
import instagramLogo from '@/assets/svg/instagram_logo.svg';
import facebookLogo from '@/assets/svg/facebook_logo.svg';
import linkedInLogo from '@/assets/svg/linkedin_logo.svg';

const TheFooter = () => {
  return (
    <>
      <footer>
        <div className={footerStyles['footer-container']}>
          <div>
            <a href="#" className={footerStyles['logo-wrapper']}>
              <img
                src={afroTreffLogo}
                alt="AfroTreff homepage"
                className={footerStyles['logo-image']}
              />
              <p>Made with love in Köln</p>
            </a>
          </div>
          <div>
            <h2>Get to know us</h2>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Get involved</h2>
            <ul>
              <li>
                <a href="#">Individual donations</a>
              </li>
              <li>
                <a href="#">Volunteer</a>
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
                <LinkOpenInNewWindow href="" text="Facebook" useWhiteIcon imageSrc={facebookLogo} />
              </li>
              <li>
                <LinkOpenInNewWindow
                  href="https://www.linkedin.com/company/afrotreff/"
                  text="LinkedIn"
                  useWhiteIcon
                  imageSrc={linkedInLogo}
                />
              </li>
              <li>
                <LinkOpenInNewWindow href="" text="Twitter" useWhiteIcon imageSrc={twitterLogo} />
              </li>
            </ul>
          </div>
        </div>

        <div className={footerStyles['privacy-wrapper']}>
          <a href="#">&copy;Afrotreff 2023</a>
          <a href="#">Imprint</a>
          <a href="#">Privacy policy</a>
        </div>
      </footer>
    </>
  );
};

export default TheFooter;
