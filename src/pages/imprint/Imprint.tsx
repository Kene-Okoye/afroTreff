import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';

import { LanguageType } from '@/routes/types/languageType';

import PageLoading from '../pageLoading/PageLoading';
import { componentsPrivacy } from '@/components/portableTextCustomComponent/PortableTextCustomComponentPrivacy';

import imprintStyles from '@/pages/imprint/Imprint.module.css';

import useFetchData from '@/hooks/useFetchData';

const LANGUAGES: { [key: string]: string } = {
  en: 'english',
  de: 'german',
};

export type queryImprintType = {
  language: string;
  imprintMainHeading: string;
  imprintBodyText: PortableTextBlock;
};

const Imprint = () => {
  const { i18n } = useTranslation();
  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  const [data, isLoading] = useFetchData<queryImprintType>(
    `*[_type == "imprintPage_${currentLanguage}" && language == '${LANGUAGES[currentLanguage]}']{
      language,
      imprintMainHeading,
      imprintBodyText
  }`,
    [],
  );

  if (isLoading) {
    return <PageLoading />;
  }
  return (
    <>
      {data &&
        data.map(({ imprintMainHeading, imprintBodyText }) => (
          <Fragment key={imprintMainHeading}>
            <section className={imprintStyles['imprint__container']}>
              <h1>{imprintMainHeading}</h1>
              <PortableText value={imprintBodyText} components={componentsPrivacy} />
            </section>
          </Fragment>
        ))}
    </>
  );
};

export default Imprint;
