import heroSectionStyles from '@/components/hero/HeroSection.module.css';
import LinkButton from '@/components/linkButton/LinkButton';

type heroSectionProps = {
  h1Text: string;
  pText: string;
  linkText?: string;
  backGroundImage: string;
};

const HeroSection = ({ h1Text, pText, linkText, backGroundImage }: heroSectionProps) => {
  return (
    <>
      <section
        className={heroSectionStyles['hero']}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
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
          {linkText && <LinkButton linkText={linkText} href="#" />}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
