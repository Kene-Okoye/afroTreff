import heroSectionStyles from '@/components/hero/HeroSection.module.css';
import LinkButton from '@/components/linkButton/LinkButton';

type heroSectionProps = {
  h1Text: string;
  pText: string;
  linkText?: string;
};

const HeroSection = ({ h1Text, pText, linkText }: heroSectionProps) => {
  return (
    <>
      <section className={heroSectionStyles['hero']}>
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
