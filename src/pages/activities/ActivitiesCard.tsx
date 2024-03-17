import { useTranslation } from 'react-i18next';

import LinkButton from '@/components/linkButton/LinkButton';
import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';

import activitiesCardStyles from '@/pages/activities/ActivitiesCard.module.css';

import googleMapsIcon from '@/assets/svg/google_maps_logo.svg';

type ActivitiesCardProps = {
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventVenue: string;
  eventRegisterUrlLink?: string;
  linkText: string;
  href?: string;
  backgroundColorNumber?: string;
};

const ActivitiesCard = ({
  eventName,
  eventDate,
  eventTime,
  eventVenue,
  eventRegisterUrlLink,
  linkText,
  href,
}: ActivitiesCardProps) => {
  const { t } = useTranslation();

  return (
    <div className={activitiesCardStyles['activities__container']}>
      <div
        // style={{ backgroundColor: `${backgroundColor}` }}
        // TODO: There seems to be an issue when backgroundColor is used in the CSS style attribute.
        // TODO: The attribute does not appear. FIX THIS! Then reintergarte else leave out
        className={`${activitiesCardStyles['activities__banner-wrapper']} ${activitiesCardStyles['activities__banner-backround-color']}`}
      >
        <p className={activitiesCardStyles['activities__text-large']}>{eventName}</p>
      </div>
      <div className={activitiesCardStyles['activities__text-button-wrapper']}>
        <div className={activitiesCardStyles['activities__text-wrapper']}>
          <h3>{eventName}</h3>
          <strong>{t('date')}</strong>
          <p>{eventDate}</p>
          <strong>{t('time')}</strong>
          <p>{eventTime}</p>
          <strong>{t('venue')}</strong>
          {href && (
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
                  href={href ? href : ''}
                  text={eventVenue}
                  hideOpenInNewTablIcon
                />
              </span>
            </p>
          )}
          {!href && (
            <p className={activitiesCardStyles['activities__venue-text-only']}>{eventVenue}</p>
          )}
        </div>
        {linkText && eventRegisterUrlLink && (
          <LinkButton linkText={linkText} href={eventRegisterUrlLink} />
        )}
      </div>
    </div>
  );
};

export default ActivitiesCard;
