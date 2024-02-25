import { ChangeEvent, useContext } from 'react';

import LanguageSelectContext from '@/contexts/languageSelectContext/LanguageSelectContext';

import languageSwitchStyles from '@/components/nav/languageSwitch/LanguageSwitch.module.css';

const LanguageSwitch = () => {
  const languageSelectContext = useContext(LanguageSelectContext);

  const handleLangugeChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Update the language context value
    languageSelectContext?.setSelectedLanguage(event.target.value);
    // Dynamically update the HTML lang attribute to the selected language
    document.documentElement.setAttribute('lang', event.target.value);
  };

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
            defaultChecked
            onChange={handleLangugeChange}
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
            onChange={handleLangugeChange}
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
