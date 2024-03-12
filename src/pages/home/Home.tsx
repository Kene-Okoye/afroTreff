import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageType } from '@/routes/types/languageType';
import { heroSectionDataType } from '../types/heroSectionDataType';

import HeroSection from '@/components/hero/HeroSection';
import TeaserBoxes, { TeaserBoxesType } from '@/pages/home/TeaserBoxes';
import PageLoading from '../pageLoading/PageLoading';

import homeStyles from '@/pages/home/Home.module.css';

import useFetchData from '@/hooks/useFetchData';

const LANGUAGES: { [key: string]: string } = {
  en: 'english',
  de: 'german',
};

export type queryHomeType = {
  language: string;
  heroSectionHome: heroSectionDataType;
  mainSectionHeading: string;
  mainSectionBodyText: object[];
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
        data.map(({ mainSectionHeading, heroSectionHome, CTA }) => (
          <Fragment key={heroSectionHome.heroSectionHeadingText}>
            <div className={homeStyles['home--hero-section-wrapper']}>
              <HeroSection
                h1Text={heroSectionHome.heroSectionHeadingText}
                pText={heroSectionHome.dateForNextMeetUp}
                linkText={heroSectionHome.registerButtonText}
                backGroundImage={heroSectionHome.imageUrl}
              />
            </div>

            <section>
              <h2>{mainSectionHeading}</h2>
              <p>
                Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at
                vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae
                hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius
                cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis
                mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui tation
                efficiendi in eos. Ei mea falli legere efficiantur et tollit aliquip debitis mei. No
                deserunt mediocritatem mel. Lorem ipsum dolor sit amet et delectus accommodare his
                consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet
                eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut.
                Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli
                consulatu at vis. Te facilisis mnesarchum qui posse omnium
              </p>
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
