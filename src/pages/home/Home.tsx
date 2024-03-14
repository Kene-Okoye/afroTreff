import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { PortableText } from '@portabletext/react';

import { PortableTextBlock } from '@portabletext/types';
import { LanguageType } from '@/routes/types/languageType';
import { heroSectionHomeDataType } from '@/pages/types/pagesDataType';

import { components } from '@/components/portableTextCustomComponent/PortableTextCustomComponent';
import HeroSection from '@/components/hero/HeroSection';
import TeaserBoxes, { TeaserBoxesType } from '@/pages/home/TeaserBoxes';
import PageLoading from '../pageLoading/PageLoading';

import homeStyles from '@/pages/home/Home.module.css';

import useFetchData from '@/hooks/useFetchData';
import { formatDate } from '@/utils/formatDate';

const LANGUAGES: { [key: string]: string } = {
  en: 'english',
  de: 'german',
};

export type queryHomeType = {
  language: string;
  heroSectionHome: heroSectionHomeDataType;
  mainSectionHeading: string;
  mainSectionBodyText: PortableTextBlock;
  CTA: string[];
};

const Home = () => {
  const { i18n } = useTranslation();
  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  const [data, isLoading] = useFetchData<queryHomeType>(
    `*[_type == "homePage_${currentLanguage}" && language == '${LANGUAGES[currentLanguage]}']{
    language,
    heroSectionHome{
      ...,
      "imageUrl": backgroundImageHome.asset->url
    },
    mainSectionHeading,
    mainSectionBodyText,
    CTA
  }`,
    [],
  );

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {data &&
        data.map(({ mainSectionHeading, heroSectionHome, CTA, mainSectionBodyText }) => (
          <Fragment key={heroSectionHome.heroSectionHeadingText}>
            <div className={homeStyles['home--hero-section-wrapper']}>
              <HeroSection
                h1Text={heroSectionHome.heroSectionHeadingText}
                pText={formatDate(
                  heroSectionHome.dateForNextMeetUp,
                  currentLanguage === 'de' ? 'de-DE' : 'en-US',
                )}
                linkText={heroSectionHome.registerButtonText}
                backGroundImage={heroSectionHome.imageUrl}
              />
            </div>

            <section>
              <h2>{mainSectionHeading}</h2>
              <PortableText value={mainSectionBodyText} components={components} />
            </section>

            <section>
              <TeaserBoxes teaserBoxTextContent={CTA as unknown as TeaserBoxesType[]} />
            </section>
          </Fragment>
        ))}
    </>
  );
};

export default Home;
