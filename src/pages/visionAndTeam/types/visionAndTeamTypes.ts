import { heroSectionGeneralDataType } from '@/pages/types/pagesDataType';
import { PortableTextBlock } from '@portabletext/types';

export type ImageOfTeamMemberType = {
  imageDescription_alt: string;
  imageUrl: string;
};

export type TeamMemberBioType = {
  firstName: string;
  slug: { current: string };
  imageOfTeamMember: ImageOfTeamMemberType;
  bio_TeamMember: PortableTextBlock;
};

export type SectionHeadingType = {
  headingSmallerVariant: string;
  headingLargerVariant: string;
};

export type QueryVisionAndTeamType = {
  language: string;
  heroSection_VisonAndTeam: heroSectionGeneralDataType;
  heading_OurMission: SectionHeadingType;
  textContent_OurMission: PortableTextBlock;
  heading_MeetTheFounder: SectionHeadingType;
  bio_Founder: TeamMemberBioType;
  heading_WorkingTeam: SectionHeadingType;
  workingTeam: TeamMemberBioType[];
};
