import { Fragment } from 'react';

import HeroSection from '@/components/hero/HeroSection';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import CardImageAndText from '@/components/cardImageAndText/CardImageAndText';

import visionAndTeamStyles from '@/pages/visionAndTeam/VisionAndTeam.module.css';

import heroImageVisionAndTeam from '@/assets/images/blog_image_4.webp';
import teamFrancis from '@/assets/images/team_Francis.webp';
import teamSmilingLady from '@/assets/images/team_smiling_lady.webp';

const visionAndTeamContent = [
  {
    id: 1,
    header: 'Ade',
    text1:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, accusantium. Quos voluptates rerum porro aliquid, sed cupiditate, quod eligendi laboriosam, excepturi earum itaque. Nostrum est repellendus assumenda placeat totam veritatis! Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    text2:
      'Officiis inventore, veniam doloribus temporibus obcaecati nobis est qui nihil cupiditate amet reiciendis deserunt impedit! Quibusdam corrupti optio exercitationem sapiente harum obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur amet dicta, recusandae repudiandae a ad illo aliquam. Aspernatur quisquam sit doloribus et rerum similique recusandae doloremque iste soluta perspiciatis.',
    imageSrc: teamFrancis,
    imageAlt: 'picture of some person',
  },
  {
    id: 2,
    header: 'Mavis',
    text1:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, accusantium. Quos voluptates rerum porro aliquid, sed cupiditate, quod eligendi laboriosam, excepturi earum itaque. Nostrum est repellendus assumenda placeat totam veritatis! Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    text2:
      'Officiis inventore, veniam doloribus temporibus obcaecati nobis est qui nihil cupiditate amet reiciendis deserunt impedit! Quibusdam corrupti optio exercitationem sapiente harum obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur amet dicta, recusandae repudiandae a ad illo aliquam. Aspernatur quisquam sit doloribus et rerum similique recusandae doloremque iste soluta perspiciatis.',
    imageSrc: teamSmilingLady,
    imageAlt: 'picture of some person',
  },
  {
    id: 3,
    header: 'Maku',
    text1:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, accusantium. Quos voluptates rerum porro aliquid, sed cupiditate, quod eligendi laboriosam, excepturi earum itaque. Nostrum est repellendus assumenda placeat totam veritatis! Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    text2:
      'Officiis inventore, veniam doloribus temporibus obcaecati nobis est qui nihil cupiditate amet reiciendis deserunt impedit! Quibusdam corrupti optio exercitationem sapiente harum obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur amet dicta, recusandae repudiandae a ad illo aliquam. Aspernatur quisquam sit doloribus et rerum similique recusandae doloremque iste soluta perspiciatis.',
    imageSrc: teamSmilingLady,
    imageAlt: 'picture of some person',
  },
  {
    id: 4,
    header: 'Chima',
    text1:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, accusantium. Quos voluptates rerum porro aliquid, sed cupiditate, quod eligendi laboriosam, excepturi earum itaque. Nostrum est repellendus assumenda placeat totam veritatis! Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    text2:
      'Officiis inventore, veniam doloribus temporibus obcaecati nobis est qui nihil cupiditate amet reiciendis deserunt impedit! Quibusdam corrupti optio exercitationem sapiente harum obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur amet dicta, recusandae repudiandae a ad illo aliquam. Aspernatur quisquam sit doloribus et rerum similique recusandae doloremque iste soluta perspiciatis.',
    imageSrc: teamSmilingLady,
    imageAlt: 'picture of some person',
  },
];

const VisionAndTeam = () => {
  return (
    <>
      <div className={visionAndTeamStyles['vision-team--container']}>
        <HeroSection h1Text="Vision and Team" pText="" backGroundImage={heroImageVisionAndTeam} />
        <section>
          <HeadingTopSmallVariant h1SmallerVariant="Our" h1BiggerVariant="mission" />
          <p>
            Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix
            ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae
            hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu.
            Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui
            posse omnium mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei
            mea falli legere efficiantur et tollit aliquip debitis mei. No deserunt mediocritatem
            mel. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at
            vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae
            hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu.
            Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui
            posse omnium
          </p>
        </section>

        <section className={visionAndTeamStyles['vision-team--founder']}>
          <HeadingTopSmallVariant h1SmallerVariant="Meeet the founder" h1BiggerVariant="Francis" />
          <CardImageAndText
            text1={visionAndTeamContent[0].text1}
            text2={visionAndTeamContent[0].text2}
            imageSrc={visionAndTeamContent[0].imageSrc}
            imageAlt={visionAndTeamContent[0].imageAlt}
          />
        </section>

        <section className={visionAndTeamStyles['vision-team__working-team']}>
          <HeadingTopSmallVariant h1SmallerVariant="Meeet the" h1BiggerVariant="Working team" />
          <div className={visionAndTeamStyles['vision-team__working-team--card']}>
            {visionAndTeamContent.map(({ id, header, text1, text2, imageSrc, imageAlt }) => (
              <Fragment key={id}>
                <CardImageAndText
                  header={header}
                  text1={text1}
                  text2={text2}
                  imageSrc={imageSrc}
                  imageAlt={imageAlt}
                />
              </Fragment>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default VisionAndTeam;
