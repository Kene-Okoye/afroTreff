import HeroSection from '@/components/hero/HeroSection';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import LinkButton from '@/components/linkButton/LinkButton';

import supportStyles from '@/pages/support/Support.module.css';

import heroImageSupport from '@/assets/images/cologne_germany.webp';
import koelnMuseum from '@/assets/images/Rautenstrauch_Joest_Museum_Koeln.webp';
import visibilitiLogo from '@/assets/images/visibiliti_logo.webp';
import integrationshausEvLogo from '@/assets/images/integrationshaus_ev_logo.webp';

import paypalLogo from '@/assets/svg/paypal_logo.svg';

function Support() {
  return (
    <>
      <div className={supportStyles['support__hero-section-wrapper']}>
        <HeroSection h1Text="Our community is our backbone" backGroundImage={heroImageSupport}>
          <div className={supportStyles['support__hero-section-buttons-wrapper']}>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=JW4GPY6K2QM6L"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={supportStyles['support__paypal-link']}
            >
              <img
                src={paypalLogo}
                alt=""
                aria-hidden="true"
                role="image"
                className={supportStyles['support__paypal-logo']}
              />
              <span>donate</span>
            </a>
            <LinkButton linkText="Volunteer" path="/contact" />
          </div>
        </HeroSection>
      </div>

      <section>
        <HeadingTopSmallVariant h2SmallerVariant="make a donation" h2BiggerVariant="today!" />
        <p>
          AfroTreff is made possible by generous contributions and sponsorship from individuals,
          community organizations, and businesses that share our vision. Donations made to AfroTreff
          go towards making drinks and snacks available, securing venues and rental equipment, and
          spreading the word about our event. You can donate via PayPal or you can also write us an
          email. If you are interested in sponsoring or volunteering, kindly also write us an email.
          You can find the list of our current, sponsors, and community partners below.
        </p>
      </section>

      <section>
        <h2>Our donors and sponsors</h2>
        <div className={supportStyles['support__donors-logo-grid']}>
          <div className={supportStyles['support__donors-logo-wrapper']}>
            <img
              src={koelnMuseum}
              alt="Logo of the Rautenstrauch Joest Museum, Cologne"
              className={supportStyles['support__donors-logo']}
            />
          </div>
          <div className={supportStyles['support__donors-logo-wrapper']}>
            <img
              src={visibilitiLogo}
              alt="Logo of the Visibiliti Media, Cologne"
              className={supportStyles['support__donors-logo']}
            />
          </div>
          <div
            className={supportStyles['support__donors-logo-wrapper']}
            style={{ backgroundColor: '#232222' }}
          >
            <img
              src={integrationshausEvLogo}
              alt="Logo of the integrationshaus e.v"
              className={supportStyles['support__donors-logo']}
            />
          </div>
        </div>

        <p>Special thanks to all our donors, sponsors and volunteers.</p>
      </section>
    </>
  );
}

export default Support;
