import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { PortableText } from '@portabletext/react';
import { components } from '@/components/portableTextCustomComponent/PortableTextCustomComponent';

import HeroSection from '@/components/hero/HeroSection';
import HeadingTopSmallVariant from '@/components/headingTopSmallVariant/HeadingTopSmallVariant';
import CardImageAndText from '@/components/cardImageAndText/CardImageAndText';
import PageLoading from '../pageLoading/PageLoading';

import visionAndTeamStyles from '@/pages/visionAndTeam/VisionAndTeam.module.css';

import { LanguageType } from '@/routes/types/languageType';
import { QueryVisionAndTeamType } from './types/visionAndTeamTypes';

import useFetchData from '@/hooks/useFetchData';

const LANGUAGES: { [key: string]: string } = {
  en: 'english',
  de: 'german',
};

const VisionAndTeam = () => {
  const { i18n } = useTranslation();
  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  const [data, isLoading] = useFetchData<QueryVisionAndTeamType>(
    `*[_type == "visionAndTeamPage_${currentLanguage}" && language == '${LANGUAGES[currentLanguage]}']{
      language,
      heroSection_VisonAndTeam{
        ...,
        "imageUrl": backgroundImage.asset->url
      },
      heading_OurMission,
      textContent_OurMission,
      heading_MeetTheFounder,
      bio_Founder->{
        firstName,
        slug,
        imageOfTeamMember{
          "imageDescription_alt": imageDescription_alt,
          "imageUrl": asset->url
        },
        bio_TeamMember,
      },
      heading_WorkingTeam,
      workingTeam[]-> {
        firstName,
        slug,
        imageOfTeamMember{
          "imageDescription_alt": imageDescription_alt,
          "imageUrl": asset->url
        },
        bio_TeamMember,
      },
    }`,
    [],
  );

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {data &&
        data.map(
          ({
            heading_OurMission,
            heroSection_VisonAndTeam,
            textContent_OurMission,
            heading_MeetTheFounder,
            bio_Founder,
            heading_WorkingTeam,
            workingTeam,
          }) => (
            <Fragment key={heroSection_VisonAndTeam.headingText}>
              <div className={visionAndTeamStyles['vision-team--container']}>
                <HeroSection
                  h1Text={heroSection_VisonAndTeam.headingText}
                  pText=""
                  backGroundImage={heroSection_VisonAndTeam.imageUrl}
                />
                <section>
                  <HeadingTopSmallVariant
                    h2SmallerVariant={heading_OurMission.headingSmallerVariant}
                    h2BiggerVariant={heading_OurMission.headingLargerVariant}
                  />
                  <PortableText value={textContent_OurMission} components={components} />
                </section>

                <section className={visionAndTeamStyles['vision-team--founder']}>
                  <HeadingTopSmallVariant
                    h2SmallerVariant={heading_MeetTheFounder.headingSmallerVariant}
                    h2BiggerVariant={heading_MeetTheFounder.headingLargerVariant}
                  />
                  <CardImageAndText
                    portableTextContent={bio_Founder.bio_TeamMember}
                    imageSrc={bio_Founder.imageOfTeamMember.imageUrl}
                    imageAlt={bio_Founder.imageOfTeamMember.imageDescription_alt}
                  />
                </section>

                <section className={visionAndTeamStyles['vision-team__working-team']}>
                  <HeadingTopSmallVariant
                    h2SmallerVariant={heading_WorkingTeam.headingSmallerVariant}
                    h2BiggerVariant={heading_WorkingTeam.headingLargerVariant}
                  />
                  <div className={visionAndTeamStyles['vision-team__working-team--card']}>
                    {workingTeam &&
                      workingTeam.map(({ firstName, slug, imageOfTeamMember, bio_TeamMember }) => (
                        <Fragment key={slug.current}>
                          <CardImageAndText
                            header={firstName}
                            portableTextContent={bio_TeamMember}
                            imageSrc={imageOfTeamMember.imageUrl}
                            imageAlt={imageOfTeamMember.imageDescription_alt}
                          />
                        </Fragment>
                      ))}
                  </div>
                </section>
              </div>
            </Fragment>
          ),
        )}
    </>
  );
};

export default VisionAndTeam;
