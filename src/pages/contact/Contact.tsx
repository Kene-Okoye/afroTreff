import HeroSection from '@/components/hero/HeroSection';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import contactStyles from '@/pages/contact/Contact.module.css';

import heroImageContact from '@/assets/images/blog_image_5.webp';

const Contact = () => {
  return (
    <>
      <HeroSection
        h1Text="Contact"
        pText="Feel free to get in touch"
        backGroundImage={heroImageContact}
      />
      <section>
        <HeadingTopSmallVariant h1SmallerVariant="write us a" h1BiggerVariant="Message" />
        <div className={contactStyles['contact--form-wrapper']}>
          <form className={contactStyles['contact--form']} noValidate>
            <div className={contactStyles['contact--form-info-text-wrapper']}>
              <p>
                We are always glad to get your thoughts and answer any question you may have. Just
                post us a message and we&apos;ll get back to you ASAP!
              </p>
              <p>
                Alternatively, you can also{' '}
                <a href="mailto:hallo.afrotreff.de">shoot us an email via hallo.afrotreff.de</a>
              </p>
            </div>

            <div className={contactStyles['contact--form-fields-wrapper']}>
              <div className={contactStyles['contact--input-wrapper']}>
                <label htmlFor="name" className={contactStyles['contact--field-label']}>
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  className={contactStyles['contact--field-input']}
                  autoComplete="off"
                  required
                />
              </div>

              <div className={contactStyles['contact--input-wrapper']}>
                <label htmlFor="email" className={contactStyles['contact--field-label']}>
                  Email:
                </label>
                <input
                  id="email"
                  type="text"
                  className={contactStyles['contact--field-input']}
                  autoComplete="off"
                  required
                />
              </div>

              <div className={contactStyles['contact--textarea-wrapper']}>
                <label htmlFor="message" className={contactStyles['contact--field-label']}>
                  Your message:
                </label>
                <textarea
                  id="message"
                  className={contactStyles['contact--field-text-area']}
                  rows={5}
                  maxLength={500}
                  autoComplete="off"
                  required
                />
              </div>
              <button type="submit" className={contactStyles['contact--form-submit-button']}>
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
