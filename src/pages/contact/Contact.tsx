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
          <form
            className={contactStyles['contact--form']}
            action="https://formsubmit.co/mr.kene.okoye@gmail.com"
            method="POST"
          >
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
                <label htmlFor="name" className={contactStyles['contact--input-label']}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className={contactStyles['contact--input']}
                  autoComplete="off"
                />
              </div>

              <div className={contactStyles['contact--input-wrapper']}>
                <label htmlFor="email" className={contactStyles['contact--input-label']}>
                  Email (required)
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={contactStyles['contact--input']}
                  autoComplete="off"
                  required={true}
                />
              </div>

              <div className={contactStyles['contact--textarea-wrapper']}>
                <label htmlFor="message" className={contactStyles['contact--input-label']}>
                  Your message (required)
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={contactStyles['contact--text-area']}
                  rows={5}
                  maxLength={500}
                  autoComplete="off"
                  required
                />
              </div>

              <input type="hidden" name="_next" value="http://localhost:5173/afroTreff/thank-you" />
              <input
                type="hidden"
                name="_subject"
                value="New email submitted via the AfroTreff website!"
              />
              <label htmlFor="_honey" className={contactStyles['contact--hidden-field']}>
                Honeypot field
              </label>
              <input
                id="_honey"
                type="text"
                name="_honey"
                className={contactStyles['contact--hidden-field']}
              />

              <button type="submit" className={contactStyles['contact--submit-button']}>
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
