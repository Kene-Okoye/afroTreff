import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';

import HeroSection from '@/components/hero/HeroSection';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import LinkButton from '@/components/linkButton/LinkButton';
import PageLoading from '../pageLoading/PageLoading';
import { components } from '@/components/portableTextCustomComponent/PortableTextCustomComponent';

import { LanguageType } from '@/routes/types/languageType';
import { heroSectionSupportUsDataType } from '@/pages/types/pagesDataType';

import supportStyles from '@/pages/support/Support.module.css';

import paypalLogo from '@/assets/svg/paypal_logo.svg';
import useFetchData from '@/hooks/useFetchData';

const LANGUAGES: { [key: string]: string } = {
  en: 'english',
  de: 'german',
};

export type ImageType = {
  imageDescription_alt: string;
  imageUrl: string;
  _key: string;
};

export type queryHomeType = {
  language: string;
  heroSection_getInvolved: heroSectionSupportUsDataType;
  headingDonationSection: { [key: string]: string };
  textDonationSection: PortableTextBlock;
  headingSponsorsSection: string;
  sponsorLogo: ImageType[];
  closingTextSponsorsSection: string;
};
function Support() {
  const { i18n } = useTranslation();
  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  const [data, isLoading] = useFetchData<queryHomeType>(
    `*[_type == "getInvolvedPage_${currentLanguage}" && language == '${LANGUAGES[currentLanguage]}']{
      language,
        heroSection_getInvolved{
        ...,
        "imageUrl": backgroundImage.asset->url
      },
      headingDonationSection,
      textDonationSection,
      headingSponsorsSection,
      sponsorLogo[]{
        imageDescription_alt,
        "imageUrl": asset->url,
        _key
      },
      closingTextSponsorsSection
  }`,
    [],
  );

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {data &&
        data.map(
          ({
            heroSection_getInvolved,
            headingDonationSection,
            headingSponsorsSection,
            textDonationSection,
            sponsorLogo,
            closingTextSponsorsSection,
          }) => (
            <Fragment key={heroSection_getInvolved.heroSectionHeadingText}>
              <div className={supportStyles['support__hero-section-wrapper']}>
                <HeroSection
                  h1Text={heroSection_getInvolved.heroSectionHeadingText}
                  pText={heroSection_getInvolved.heroSectionshortText}
                  backGroundImage={heroSection_getInvolved.imageUrl}
                >
                  <div className={supportStyles['support__hero-section-buttons-wrapper']}>
                    <a
                      href="https://www.paypal.com/donate/?hosted_button_id=JW4GPY6K2QM6L"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className={supportStyles['support__paypal-link']}
                    >
                      <img
                        src={paypalLogo}
                        alt=""
                        aria-hidden="true"
                        role="image"
                        className={supportStyles['support__paypal-logo']}
                      />
                      <span>{heroSection_getInvolved.payPalButtonText}</span>
                    </a>
                    <LinkButton
                      linkText={heroSection_getInvolved.volunteerButtonText}
                      href={
                        'mailto:hallo@afrotreff.de, hallo@afrotreff.de?subject=Volunteer with Afrotreff'
                      }
                    />
                  </div>
                </HeroSection>
              </div>

              <section className={supportStyles['support__donote-message-container']}>
                <HeadingTopSmallVariant
                  h2SmallerVariant={headingDonationSection.headingSmallerVariant}
                  h2BiggerVariant={headingDonationSection.headingLargerVariant}
                />

                <PortableText value={textDonationSection} components={components} />
              </section>

              <section className={supportStyles['support__donors-container']}>
                <h2>{headingSponsorsSection}</h2>

                <div className={supportStyles['support__donors-logo-grid']}>
                  {sponsorLogo &&
                    sponsorLogo.map(({ _key, imageUrl, imageDescription_alt }) => (
                      <Fragment key={_key}>
                        <div className={supportStyles['support__donors-logo-wrapper']}>
                          <img
                            src={imageUrl}
                            alt={imageDescription_alt}
                            className={supportStyles['support__donors-logo']}
                          />
                        </div>
                      </Fragment>
                    ))}
                </div>

                <p>{closingTextSponsorsSection}</p>
              </section>
            </Fragment>
          ),
        )}
    </>
  );
}

export default Support;
