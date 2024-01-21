import LinkButton from '@/components/linkButton/LinkButton';
import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';

import teaserBoxesStyles from '@/pages/home/TeaserBoxes.module.css';

import instagramLogo from '@/assets/svg/instagram_logo.svg';
import linkedInLogo from '@/assets/svg/linkedin_logo_outlined.svg';
import whatsAppLogo from '@/assets/svg/whatsapp_logo.svg';

const teaserBoxContent = [
  { id: 1, linkButtonText: 'Discover the previous events', path: 'activities' },
  {
    id: 2,
    // eslint-disable-next-line quotes
    linkButtonText: "We'll be thrilled for your support to the community",
    path: 'support',
  },
  { id: 3, linkButtonText: 'Meet the team', path: 'vision-and-team' },
  { id: 4, linkButtonText: 'Get in touch', path: 'contact' },
];

const TeaserBoxes = () => {
  return (
    <>
      <div className={teaserBoxesStyles['teaser-box__wrapper--group-text-only']}>
        {teaserBoxContent &&
          teaserBoxContent.map(({ id, linkButtonText, path }) => (
            <div key={id} className={teaserBoxesStyles['teaser-box__CTA-box-text-only']}>
              <LinkButton linkText={linkButtonText} path={path} />
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
            showOpenInNewTabIcon
            styleSocialMediaIcon={{ width: '50px', margin: 0 }}
          />
        </div>
        <div className={teaserBoxesStyles['teaser-box__CTA-box--whatsApp']}>
          <LinkOpenInNewWindow
            href="https://chat.whatsapp.com/KmsOopPvdgOKcHSG5EyITe"
            socialMediaIconAlt="Join the community on whatsApp"
            imageSrc={whatsAppLogo}
            useWhiteIcon
            showOpenInNewTabIcon
            styleSocialMediaIcon={{ width: '50px', margin: 0 }}
          />
        </div>
        <div className={teaserBoxesStyles['teaser-box__CTA-box--linkedIn']}>
          <LinkOpenInNewWindow
            href="https://www.linkedin.com/company/afrotreff/"
            socialMediaIconAlt="Stay up to date on LinkedIn"
            imageSrc={linkedInLogo}
            useWhiteIcon
            showOpenInNewTabIcon
            styleSocialMediaIcon={{ width: '50px', margin: 0 }}
          />
        </div>
      </div>
    </>
  );
};

export default TeaserBoxes;
