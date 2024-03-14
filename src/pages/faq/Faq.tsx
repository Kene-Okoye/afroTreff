import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageType } from '@/routes/types/languageType';
import { heroSectionGeneralDataType } from '@/pages/types/pagesDataType';

import HeroSection from '@/components/hero/HeroSection';
import PageLoading from '../pageLoading/PageLoading';

import faqStyles from '@/pages/faq/Faq.module.css';

import useFetchData from '@/hooks/useFetchData';

const LANGUAGES: { [key: string]: string } = {
  en: 'english',
  de: 'german',
};

export type queryHomeType = {
  language: string;
  heroSection_Faq: heroSectionGeneralDataType;
  QandAheading: string;
  qandAs: { [key: string]: string }[];
};

const Faq = () => {
  const { i18n } = useTranslation();
  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  const [data, isLoading] = useFetchData<queryHomeType>(
    `*[_type == "FAQPage_${currentLanguage}" && language == '${LANGUAGES[currentLanguage]}']{
      language,
      heroSection_Faq{
       ...,
       "imageUrl": backgroundImage.asset->url
     },
     QandAheading,
     qandAs
  }`,
    [],
  );

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {data &&
        data.map(({ heroSection_Faq, QandAheading, qandAs }) => (
          <Fragment key={heroSection_Faq.headingText}>
            <HeroSection
              h1Text={heroSection_Faq.headingText}
              pText={heroSection_Faq.smallText}
              backGroundImage={heroSection_Faq.imageUrl}
            />
            <section>
              <h2>{QandAheading}</h2>

              <ul className={faqStyles['faq--desktop']} role="list">
                {qandAs.map(({ question, answer }) => (
                  <li key={question}>
                    <h3> {question}</h3>
                    <p>{answer}</p>
                  </li>
                ))}
              </ul>
            </section>
          </Fragment>
        ))}
    </>
  );
};

export default Faq;
