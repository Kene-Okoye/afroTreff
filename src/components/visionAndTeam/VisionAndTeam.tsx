import CardImageAndText from '@/components/cardImageAndText/CardImageAndText';

import visionAndTeamStyles from '@/components/visionAndTeam/VisionAndTeam.module.css';

const VisionAndTeam = () => {
  return (
    <>
      <section className={visionAndTeamStyles['vision-team-section']}>
        <CardImageAndText />
      </section>
    </>
  );
};

export default VisionAndTeam;
