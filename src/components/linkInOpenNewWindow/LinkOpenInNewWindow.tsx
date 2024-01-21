import { CSSProperties, PropsWithChildren } from 'react';

import linkOpenInNewWindowStyles from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow.module.css';

import newWindowIconWhite from '@/assets/svg/new_window_white.svg';
import newWindowIconBlack from '@/assets/svg/new_window_black.svg';

type LinkOpenInNewWindowProps = {
  href: string;
  socialMediaIconAlt?: string;
  text?: string;
  imageSrc?: string;
  styleSocialMediaIcon?: CSSProperties;
  styleNewTabIcon?: CSSProperties;
  useWhiteIcon?: boolean;
  showOpenInNewTabIcon?: boolean;
};

const LinkOpenInNewWindow = ({
  href,
  socialMediaIconAlt,
  text,
  imageSrc,
  styleSocialMediaIcon,
  styleNewTabIcon,
  useWhiteIcon,
  showOpenInNewTabIcon = false,
  children,
}: PropsWithChildren<LinkOpenInNewWindowProps>) => {
  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href={href}
        className={linkOpenInNewWindowStyles['link__container']}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={`${socialMediaIconAlt ? socialMediaIconAlt : ''}`}
            role="image"
            className={linkOpenInNewWindowStyles['link__social-media-icon']}
            style={styleSocialMediaIcon}
          />
        )}
        {text && <span>{text}</span>}
        {children}
        {!showOpenInNewTabIcon && useWhiteIcon && (text || socialMediaIconAlt) && (
          <img
            src={newWindowIconWhite}
            alt="(Opens in a new tab)"
            role="image"
            className={linkOpenInNewWindowStyles['link__new-tab-icon']}
            style={styleNewTabIcon}
          />
        )}
        {!showOpenInNewTabIcon && !useWhiteIcon && (text || socialMediaIconAlt) && (
          <img
            src={newWindowIconBlack}
            alt="(Opens in a new tab)"
            role="image"
            className={linkOpenInNewWindowStyles['link__new-tab-icon']}
            style={styleNewTabIcon}
          />
        )}
      </a>
    </>
  );
};

export default LinkOpenInNewWindow;
