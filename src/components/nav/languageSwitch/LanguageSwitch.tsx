import { useTranslation } from 'react-i18next';

import useLanguageBasedRouting from '@/hooks/useLanguageBasedRoutingNew';

import languageSwitchStyles from '@/components/nav/languageSwitch/LanguageSwitch.module.css';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const { handleLanguageChange } = useLanguageBasedRouting();

  return (
    <>
      <fieldset>
        <legend
          className={`${languageSwitchStyles['language-switch__legend']} ${languageSwitchStyles['visually-hidden']}`}
        >
          Select your preferred language:
        </legend>
        {/* Language - ENGLISH */}
        <div className={languageSwitchStyles['language-switch__input-wrapper']}>
          <input
            className={`${languageSwitchStyles['language-switch__input']} ${languageSwitchStyles['visually-hidden']}`}
            key="en"
            id="language-en"
            lang="en"
            type="radio"
            name="language"
            value="en"
            aria-describedby="eng-en"
            defaultChecked={i18n.resolvedLanguage === 'en'}
            onChange={handleLanguageChange}
          />
          <label
            className={`${languageSwitchStyles['language-switch__label']} ${languageSwitchStyles['language-switch__label--en']}`}
            lang="en"
            htmlFor="language-en"
          >
            <span aria-hidden="true">EN</span>
            <span className={languageSwitchStyles['visually-hidden']}>English</span>
          </label>
        </div>

        {/* Language - GERMAN */}
        <div className={languageSwitchStyles['language-switch__input-wrapper']}>
          <input
            className={`${languageSwitchStyles['language-switch__input']} ${languageSwitchStyles['visually-hidden']}`}
            key="de"
            id="language-de"
            lang="de"
            type="radio"
            name="language"
            value="de"
            aria-describedby="eng-de"
            defaultChecked={i18n.resolvedLanguage === 'de'}
            onChange={handleLanguageChange}
          />
          <label
            className={`${languageSwitchStyles['language-switch__label']} ${languageSwitchStyles['language-switch__label--de']}`}
            lang="de"
            htmlFor="language-de"
          >
            <span aria-hidden="true">DE</span>
            <span className={languageSwitchStyles['visually-hidden']}>Deutsch</span>
          </label>

          <span
            className={`${languageSwitchStyles['language-switch__lable-aria-description']} ${languageSwitchStyles['visually-hidden']}`}
            lang="en"
            id="eng-de"
          >
            German
          </span>
        </div>
      </fieldset>
    </>
  );
};

export default LanguageSwitch;
