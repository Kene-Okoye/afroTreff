import LinkButton from '@/components/linkButton/LinkButton';

import activitiesCardStyles from '@/components/activities/ActivitiesCard.module.css';

type ActivitiesCardProps = {
  eventName: string;
  eventDate: string;
  eventVenue: string;
  imageSrc: string;
  imageAlt: string;
  linkText: string;
  href: string;
};

const ActivitiesCard = ({
  eventName,
  eventDate,
  eventVenue,
  imageSrc,
  imageAlt,
  linkText,
  href,
}: ActivitiesCardProps) => {
  return (
    <div className={activitiesCardStyles['activities--container']}>
      <div className={activitiesCardStyles['activities--image-wrapper']}>
        {/* //TODO: Reintergrate after pics with the perfect dimension are ontained from Francis */}
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className={activitiesCardStyles['activities--text-button-wrapper']}>
        <div className={activitiesCardStyles['activities--text-wrapper']}>
          <h3>{eventName}</h3>
          <p className={activitiesCardStyles['activities--text-date']}>{eventDate}</p>
          <p>Venue: {eventVenue}</p>
        </div>
        <LinkButton linkText={linkText} href={href} />
      </div>
    </div>
  );
};

export default ActivitiesCard;
