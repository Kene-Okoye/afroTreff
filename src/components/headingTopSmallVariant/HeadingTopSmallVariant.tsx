import headingTopSmallVariantStyles from '@/components/headingTopSmallVariant/HeadingTopSmallVariant.module.css';

type HeadingTopSmallVariantProps = {
  h1SmallerVariant: string;
  h1BiggerVariant: string;
};

const HeadingTopSmallVariant = ({
  h1SmallerVariant,
  h1BiggerVariant,
}: HeadingTopSmallVariantProps) => {
  return (
    <>
      <h2 className={headingTopSmallVariantStyles['heading']}>
        <span className={headingTopSmallVariantStyles['heading--small']}>
          {h1SmallerVariant}
          <br />
        </span>
        <span>{h1BiggerVariant}</span>
      </h2>
    </>
  );
};

export default HeadingTopSmallVariant;
