import { useState, ChangeEvent } from 'react';
import languageSwitchStyles from '@/components/nav/languageSwitch/LanguageSwitch.module.css';

const LanguageSwitch = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLangugeChange = (event: ChangeEvent<HTMLInputElement>) => {
    // event.preventDefault();
    setSelectedLanguage(event.target.value);
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
            lang="en"
            type="radio"
            name="language"
            id="language-en"
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
            EN <span className={languageSwitchStyles['visually-hidden']}>English</span>
          </label>
          {selectedLanguage === 'de' && (
            <span
              className={`${languageSwitchStyles['language-switch__lable-aria-description']} ${languageSwitchStyles['visually-hidden']}`}
              lang="de"
              id="eng-en"
            >
              Englisch
            </span>
          )}
        </div>

        {/* Language - GERMAN */}
        <div className={languageSwitchStyles['language-switch__input-wrapper']}>
          <input
            className={`${languageSwitchStyles['language-switch__input']} ${languageSwitchStyles['visually-hidden']}`}
            key="de"
            lang="de"
            type="radio"
            name="language"
            id="language-de"
            value="de"
            aria-describedby="eng-de"
            // checked={selectedLanguage === 'de'}
            onChange={handleLangugeChange}
          />
          <label
            className={`${languageSwitchStyles['language-switch__label']} ${languageSwitchStyles['language-switch__label--de']}`}
            lang="de"
            htmlFor="language-de"
          >
            DE <span className={languageSwitchStyles['visually-hidden']}>Deutsch</span>
          </label>
          {selectedLanguage === 'en' && (
            <span
              className={`${languageSwitchStyles['language-switch__lable-aria-description']} ${languageSwitchStyles['visually-hidden']}`}
              lang="en"
              id="eng-de"
            >
              German
            </span>
          )}
        </div>
      </fieldset>
    </>
  );
};

export default LanguageSwitch;
