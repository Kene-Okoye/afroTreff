import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';

import { LanguageType } from '@/routes/types/languageType';

import PageLoading from '../pageLoading/PageLoading';
import { componentsPrivacy } from '@/components/portableTextCustomComponent/PortableTextCustomComponentPrivacy';

import privacyPolicyStyles from '@/pages/privacyPolicy/PrivacyPolicy.module.css';

import useFetchData from '@/hooks/useFetchData';

const LANGUAGES: { [key: string]: string } = {
  en: 'english',
  de: 'german',
};

export type queryPrivacypolicyType = {
  language: string;
  privacyMainHeading: string;
  privacyBodyText: PortableTextBlock;
};

const PrivacyPolicy = () => {
  const { i18n } = useTranslation();
  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  const [data, isLoading] = useFetchData<queryPrivacypolicyType>(
    `*[_type == "privacyPolicyPage_${currentLanguage}" && language == '${LANGUAGES[currentLanguage]}']{
      language,
      privacyMainHeading,
      privacyBodyText
  }`,
    [],
  );

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {data &&
        data.map(({ privacyMainHeading, privacyBodyText }) => (
          <Fragment key={privacyMainHeading}>
            <section className={privacyPolicyStyles['privacyPolicy__container']}>
              <h1>{privacyMainHeading}</h1>
              <PortableText value={privacyBodyText} components={componentsPrivacy} />
            </section>
          </Fragment>
        ))}
    </>
  );
};

export default PrivacyPolicy;
