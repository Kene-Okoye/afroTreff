import RegistrationForm from './RegistrationForm';

import registerStyles from '@/pages/register/Register.module.css';

import heroImageRegister from '@/assets/images/blog_image_5.webp';

const Register = () => {
  return (
    <section className={registerStyles['register__container']}>
      <div
        className={registerStyles['register__background']}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${heroImageRegister})`,
        }}
      ></div>
      <div className={registerStyles['register__form-container']}>
        <RegistrationForm />
      </div>
    </section>
  );
};

export default Register;
