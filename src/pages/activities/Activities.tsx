import HeroSection from '@/components/hero/HeroSection';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import ActivitiesCard from '@/pages/activities/ActivitiesCard';

import afroTreffLogo from '@/assets/images/afrotreff_logo.webp';
import eventImage1 from '@/assets/images/blog_image_4.webp';
import heroImageActivities from '@/assets/images/blog_image_5.webp';

const activitiesContent = [
  {
    id: 1,
    eventName: 'AfroTreff 15.0',
    eventDate: 'Fri, Aug. 25, 2023',
    eventTime: '18:30 CET',
    eventVenue: 'Rautenstrauch-Joest-Museum',
    imageSrc: afroTreffLogo,
    imageAlt: 'event image',
    linkText: 'register',
    href: '#',
    backgroundColorNumber: '1',

    //TODO: Discuss with Francis about the issue with the dynamic backgroundColor and
    // reintegrate if fixed.
    // backgroundColor: '#BF0D0D',
  },
  {
    id: 2,
    eventName: 'Smile Workshop, 2023',
    eventDate: 'Fri, Sep. 1, 2023 ',
    eventVenue: 'TBD',
    eventTime: '17:00 CET',
    imageSrc: eventImage1,
    imageAlt: 'event image',
    linkText: 'find out more',
    href: '#',
    backgroundColorNumber: '2',

    //TODO: Discuss with Francis about the issue with the dynamic backgroundColor and
    // reintegrate if fixed.
    // backgroundColor: '#0097b2',
  },
  {
    id: 3,
    eventName: 'AfroTreff 16.0',
    eventDate: 'Fri, Sep. 22, 2023 ',
    eventTime: '18:30 CET',
    eventVenue: 'Rautenstrauch-Joest-Museum',
    imageSrc: afroTreffLogo,
    imageAlt: 'event image',
    linkText: 'register',
    href: '#',
    backgroundColorNumber: '3',

    //TODO: Discuss with Francis about the issue with the dynamic backgroundColor and
    // reintegrate if fixed.
    // backgroundColor: '#004AAD',
  },
];

const Faq = () => {
  return (
    <>
      <HeroSection
        h1Text="Activities"
        pText="Discover AfroTreff events, workshops, outreach, and networking opportunities taking place in Germany"
        backGroundImage={heroImageActivities}
      />
      <section>
        <HeadingTopSmallVariant h2SmallerVariant="Our 2023" h2BiggerVariant="Events" />
        {activitiesContent.map(
          ({
            id,
            eventName,
            eventDate,
            eventTime,
            eventVenue,
            linkText,
            href,
            backgroundColorNumber,

            //TODO: Discuss with Francis about the issue with the dynamic backgroundColor and
            // reintegrate if fixed.
            // backgroundColor,
          }) => (
            <ActivitiesCard
              key={id}
              eventName={eventName}
              eventDate={eventDate}
              eventTime={eventTime}
              eventVenue={eventVenue}
              linkText={linkText}
              href={href}
              backgroundColorNumber={backgroundColorNumber}

              //TODO: Discuss with Francis about the issue with the dynamic backgroundColor and
              // reintegrate if fixed.
              // backgroundColor={backgroundColor}
            />
          ),
        )}
      </section>
    </>
  );
};

export default Faq;
