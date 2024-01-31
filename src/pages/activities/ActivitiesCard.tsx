import LinkButton from '@/components/linkButton/LinkButton';
import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';

import activitiesCardStyles from '@/pages/activities/ActivitiesCard.module.css';

import googleMapsIcon from '@/assets/svg/google_maps_logo.svg';

type ActivitiesCardProps = {
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventVenue: string;
  linkText: string;
  href: string;
  backgroundColorNumber?: string;

  // backgroundColor?: string;
};

const ActivitiesCard = ({
  eventName,
  eventDate,
  eventTime,
  eventVenue,
  linkText,
  href,
  backgroundColorNumber = '0',
}: // backgroundColor = '#736357',
ActivitiesCardProps) => {
  return (
    <div className={activitiesCardStyles['activities__container']}>
      <div
        // style={{ backgroundColor: `${backgroundColor}` }}
        // TODO: There seems to be an issue when backgroundColor is used in the CSS style attribute.
        // TODO: The attribute does not appear. FIX THIS! Then reintergarte else leave out
        className={`${activitiesCardStyles['activities__banner-wrapper']} ${
          activitiesCardStyles[`activities__banner-backround-color-${backgroundColorNumber}`]
        }`}
      >
        <p>Afro treff 18.0</p>
      </div>
      <div className={activitiesCardStyles['activities__text-button-wrapper']}>
        <div className={activitiesCardStyles['activities__text-wrapper']}>
          <h3>{eventName}</h3>
          <strong>Date:</strong>
          <p>{eventDate}</p>
          <strong>Time:</strong>
          <p>{eventTime}</p>
          <strong>Venue:</strong>
          <p className={activitiesCardStyles['activities__venue']}>
            <img
              src={googleMapsIcon}
              alt=""
              role="presentation"
              aria-hidden="true"
              className={activitiesCardStyles['activities__google-maps-icon']}
            />

            <span className={activitiesCardStyles['activities__open-in-maps-wrapper']}>
              <LinkOpenInNewWindow
                href="https://www.google.com/maps/search/?api=1&query=Rautenstrauch-Joest-Museum"
                text={eventVenue}
                hideOpenInNewTablIcon
              />
            </span>
          </p>
        </div>
        <LinkButton linkText={linkText} href={href} />
      </div>
    </div>
  );
};

export default ActivitiesCard;
