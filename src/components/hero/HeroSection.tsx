import { PropsWithChildren } from 'react';

import heroSectionStyles from '@/components/hero/HeroSection.module.css';

import LinkButton from '@/components/linkButton/LinkButton';

type heroSectionProps = {
  h1Text: string;
  pText?: string;
  linkText?: string;
  backGroundImage: string;
  href?: string;
};

const HeroSection = ({
  h1Text,
  pText,
  linkText,
  backGroundImage,
  children,
  href,
}: PropsWithChildren<heroSectionProps>) => {
  return (
    <>
      <section
        className={heroSectionStyles['hero']}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${backGroundImage})`,
        }}
      >
        <div
          className={`${heroSectionStyles['hero--content']} ${
            linkText && heroSectionStyles['hero--content-center']
          }`}
        >
          <h1>{h1Text}</h1>
          <p>{pText}</p>
          {linkText && <LinkButton linkText={linkText} href={href} />}
          {children}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
