import { PropsWithChildren } from 'react';

import footerStyles from '@/components/footer/TheFooter.module.css';
import newWindowIconWhite from '@/assets/svg/new_window_white.svg';
import newWindowIconBlack from '@/assets/svg/new_window_black.svg';

type LinkOpenInNewWindowProps = {
  href: string;
  socialMediaIconAlt?: string;
  text?: string;
  imageSrc?: string;
  useWhiteIcon?: boolean;
};

const LinkOpenInNewWindow = ({
  href,
  socialMediaIconAlt,
  text,
  imageSrc,
  useWhiteIcon,
  children,
}: PropsWithChildren<LinkOpenInNewWindowProps>) => {
  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer nofollow"
        href={href}
        className={footerStyles['social--logos-svg-wrapper']}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={`${socialMediaIconAlt ? socialMediaIconAlt + ' ' : ''}`}
            role="image"
          />
        )}
        {text && <span>{text}</span>}
        {children}
        {useWhiteIcon && text && (
          <img src={newWindowIconWhite} alt="(Opens in a new tab)" role="image" />
        )}
        {!useWhiteIcon && text && (
          <img src={newWindowIconBlack} alt="(Opens in a new tab)" role="image" />
        )}
      </a>
    </>
  );
};

export default LinkOpenInNewWindow;
