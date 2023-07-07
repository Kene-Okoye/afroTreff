import heroSectionStyles from '@/components/hero/HeroSection.module.css';

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
          {linkText && <a href="#">{linkText}</a>}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
