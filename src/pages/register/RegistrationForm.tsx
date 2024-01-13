import Input from '@/components/input/Input';

import registrationFormStyles from '@/pages/register/RegistrationForm.module.css';

const RegistrationForm = () => {
  return (
    <>
      <form className={registrationFormStyles['registration-form__form']} noValidate>
        <div className={registrationFormStyles['registration-form__form-container']}>
          <h1 className={registrationFormStyles['registration-form__heading']}>Regisration Form</h1>
          <p className={registrationFormStyles['registration-form__info-text']}>
            We are looking forward to meeting your at the next event
          </p>

          <Input
            type="text"
            name="name"
            label="name"
            errorMessage="Error message name"
            aria-required="true"
          />

          <Input
            type="email"
            name="email"
            label="email"
            errorMessage="error message email"
            aria-required="true"
          />

          <button
            type="submit"
            className={registrationFormStyles['registration-form__submit-button']}
          >
            register
          </button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
