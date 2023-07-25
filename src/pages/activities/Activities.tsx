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
    eventDate: 'Fri, Aug. 25, 2023 18:30 CET',
    eventVenue: 'Rautenstrauch-Joest-Museum',
    imageSrc: afroTreffLogo,
    imageAlt: 'event image',
    linkText: 'register',
    href: '#',
  },
  {
    id: 2,
    eventName: 'Smile Workshop, 2023',
    eventDate: 'Fri, Sep. 1, 2023 17:00 CET',
    eventVenue: 'TBD',
    imageSrc: eventImage1,
    imageAlt: 'event image',
    linkText: 'find out more',
    href: '#',
  },
  {
    id: 3,
    eventName: 'AfroTreff 16.0',
    eventDate: 'Fri, Sep. 22, 2023 18:30 CET',
    eventVenue: 'Rautenstrauch-Joest-Museum',
    imageSrc: afroTreffLogo,
    imageAlt: 'event image',
    linkText: 'register',
    href: '#',
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
        <HeadingTopSmallVariant h1SmallerVariant="Our 2023" h1BiggerVariant="Events" />
        {activitiesContent.map(
          ({ id, eventName, eventDate, eventVenue, imageSrc, imageAlt, linkText, href }) => (
            <ActivitiesCard
              key={id}
              eventName={eventName}
              eventDate={eventDate}
              eventVenue={eventVenue}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              linkText={linkText}
              href={href}
            />
          ),
        )}
      </section>
    </>
  );
};

export default Faq;
