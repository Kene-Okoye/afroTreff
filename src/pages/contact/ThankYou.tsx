import thankYouStyles from '@/pages/contact/ThankYou.module.css';

const ThankYou = () => {
  return (
    <section>
      <div className={thankYouStyles['thank-you--container']}>
        <div className={thankYouStyles['thank-you--wrapper']}>
          <h2 className={thankYouStyles['thank-you--header']}>Thanks for reaching out!</h2>
          <p>We&apos;ll go through your message and get back to you as soon as possible.</p>
          <p>In the meantime, stay awesome! 😊</p>
          <a className="redirect-icon-wrapper" href="http://localhost:5173/afroTreff/">
            Return to home
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
