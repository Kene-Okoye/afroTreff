import { PropsWithChildren } from 'react';

import footerStyles from '@/components/footer/TheFooter.module.css';
import newWindowIconWhite from '@/assets/svg/new_window_white.svg';
import newWindowIconBlack from '@/assets/svg/new_window_black.svg';

type LinkOpenInNewWindowProps = {
  href: string;
  text: string;
  imageSrc?: string;
  useWhiteIcon?: boolean;
};

const LinkOpenInNewWindow = ({
  href,
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
        {imageSrc && <img src={imageSrc} alt="" role="image" />}
        <span>{text}</span>
        {children}
        {useWhiteIcon && <img src={newWindowIconWhite} alt="(Opens in a new tab)" role="image" />}
        {!useWhiteIcon && <img src={newWindowIconBlack} alt="(Opens in a new tab)" role="image" />}
      </a>
    </>
  );
};

export default LinkOpenInNewWindow;
