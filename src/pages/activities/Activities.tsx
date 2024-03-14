import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageType } from '@/routes/types/languageType';
import { heroSectionGeneralDataType } from '../types/pagesDataType';

import HeroSection from '@/components/hero/HeroSection';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import ActivitiesCard from '@/pages/activities/ActivitiesCard';
import PageLoading from '../pageLoading/PageLoading';

import afroTreffLogo from '@/assets/images/afrotreff_logo.webp';
import eventImage1 from '@/assets/images/blog_image_4.webp';

import useFetchData from '@/hooks/useFetchData';
import { formatDate, formatTime } from '@/utils/formatDate';

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

const LANGUAGES: { [key: string]: string } = {
  en: 'english',
  de: 'german',
};

export type queryHomeType = {
  language: string;
  heroSection_activities: heroSectionGeneralDataType;
  upcomingEventsHeading: { [key: string]: string };
  upcomingEventsList: { [key: string]: string }[];
};

const Activities = () => {
  const { i18n } = useTranslation();
  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  const [data, isLoading] = useFetchData<queryHomeType>(
    `*[_type == "activitiesPage_${currentLanguage}" && language == '${LANGUAGES[currentLanguage]}']{
      language,
      heroSection_activities{
        ...,
        "imageUrl": backgroundImage.asset->url
      },
      upcomingEventsHeading,
      upcomingEventsList | order(eventDateAndTime desc),
    }`,
    [],
  );

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {data &&
        data.map(({ heroSection_activities, upcomingEventsHeading, upcomingEventsList }) => (
          <Fragment key={heroSection_activities.headingText}>
            <HeroSection
              h1Text={heroSection_activities.headingText}
              pText={heroSection_activities.smallText}
              backGroundImage={heroSection_activities.imageUrl}
            />
            <section>
              <HeadingTopSmallVariant
                h2SmallerVariant={upcomingEventsHeading.headingSmallerVariant}
                h2BiggerVariant={upcomingEventsHeading.headingLargerVariant}
              />
              {upcomingEventsList &&
                upcomingEventsList.map(
                  ({
                    eventDateAndTime,
                    eventTitle,
                    eventLocation,
                    buttonText,
                    //TODO: Discuss with Francis about the issue with the dynamic backgroundColor and
                    // reintegrate if fixed.
                    // backgroundColor,
                  }) => (
                    <ActivitiesCard
                      key={eventTitle}
                      eventName={eventTitle}
                      eventDate={formatDate(
                        eventDateAndTime,
                        currentLanguage === 'de' ? 'de-DE' : 'en-US',
                      )}
                      eventTime={formatTime(
                        eventDateAndTime,
                        currentLanguage === 'de' ? 'de-DE' : 'en-US',
                      )}
                      eventVenue={eventLocation}
                      linkText={buttonText}
                      href="#"

                      //TODO: Discuss with Francis about the issue with the dynamic backgroundColor and
                      // reintegrate if fixed.
                      // backgroundColor={backgroundColor}
                    />
                  ),
                )}
            </section>
          </Fragment>
        ))}
    </>
  );
};

export default Activities;
