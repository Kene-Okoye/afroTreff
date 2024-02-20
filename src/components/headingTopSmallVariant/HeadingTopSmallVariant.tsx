import headingTopSmallVariantStyles from '@/components/headingTopSmallVariant/HeadingTopSmallVariant.module.css';

type HeadingTopSmallVariantProps = {
  h1SmallerVariant?: string;
  h1BiggerVariant?: string;
  h2SmallerVariant?: string;
  h2BiggerVariant?: string;
};

const HeadingTopSmallVariant = ({
  h1SmallerVariant,
  h1BiggerVariant,
  h2SmallerVariant,
  h2BiggerVariant,
}: HeadingTopSmallVariantProps) => {
  return (
    <>
      {h1SmallerVariant && h1BiggerVariant && (
        <h1 className={headingTopSmallVariantStyles['heading']}>
          <span className={headingTopSmallVariantStyles['heading--small']}>
            {h1SmallerVariant}
            <br />
          </span>
          <span>{h1BiggerVariant}</span>
        </h1>
      )}

      {h2SmallerVariant && h2BiggerVariant && (
        <h2 className={headingTopSmallVariantStyles['heading']}>
          <span className={headingTopSmallVariantStyles['heading--small']}>
            {h2SmallerVariant}
            <br />
          </span>
          <span>{h2BiggerVariant}</span>
        </h2>
      )}
    </>
  );
};

export default HeadingTopSmallVariant;
