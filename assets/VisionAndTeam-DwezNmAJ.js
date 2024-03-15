import{j as e,a as b,P as k,r as h}from"./index-Bxl9WmHa.js";import{P as u,c as v}from"./PortableTextCustomComponent-Uwn-Z_6L.js";import{H as w}from"./HeroSection-QQsHBg6g.js";import{H as o}from"./HeadingTopSmallVariant-C_S3W-6M.js";import{u as S}from"./useFetchData-BGt6npwu.js";const c={"image-text-container":"_image-text-container_jyyj6_1","text-wrapper":"_text-wrapper_jyyj6_13","image-wrapper":"_image-wrapper_jyyj6_39"},j=({header:n,text1:a,text2:i,text3:s,imageSrc:t,imageAlt:r,portableTextContent:m})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:c["image-text-container"],children:[e.jsxs("div",{className:c["text-wrapper"],children:[n&&e.jsx("h3",{children:n}),a&&e.jsx("p",{children:a}),m&&e.jsx(u,{value:m,components:v}),i&&e.jsx("p",{children:i}),s&&e.jsx("p",{children:s})]}),e.jsx("div",{className:c["image-wrapper"],children:e.jsx("img",{src:t,alt:r})})]})}),g={"vision-team__working-team":"_vision-team__working-team_6dsk1_1","vision-team__working-team--card":"_vision-team__working-team--card_6dsk1_11","vision-team--founder":"_vision-team--founder_6dsk1_19","vision-team__header--small":"_vision-team__header--small_6dsk1_47"},N={en:"english",de:"german"},U=()=>{const{i18n:n}=b(),a=n.resolvedLanguage,[i,s]=S(`*[_type == "visionAndTeamPage_${a}" && language == '${N[a]}']{
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
    }`,[]);return s?e.jsx(k,{}):e.jsx(e.Fragment,{children:i&&i.map(({heading_OurMission:t,heroSection_VisonAndTeam:r,textContent_OurMission:m,heading_MeetTheFounder:d,bio_Founder:l,heading_WorkingTeam:_,workingTeam:x})=>e.jsx(h.Fragment,{children:e.jsxs("div",{className:g["vision-team--container"],children:[e.jsx(w,{h1Text:r.headingText,pText:"",backGroundImage:r.imageUrl}),e.jsxs("section",{children:[e.jsx(o,{h2SmallerVariant:t.headingSmallerVariant,h2BiggerVariant:t.headingLargerVariant}),e.jsx(u,{value:m,components:v})]}),e.jsxs("section",{className:g["vision-team--founder"],children:[e.jsx(o,{h2SmallerVariant:d.headingSmallerVariant,h2BiggerVariant:d.headingLargerVariant}),e.jsx(j,{portableTextContent:l.bio_TeamMember,imageSrc:l.imageOfTeamMember.imageUrl,imageAlt:l.imageOfTeamMember.imageDescription_alt})]}),e.jsxs("section",{className:g["vision-team__working-team"],children:[e.jsx(o,{h2SmallerVariant:_.headingSmallerVariant,h2BiggerVariant:_.headingLargerVariant}),e.jsx("div",{className:g["vision-team__working-team--card"],children:x&&x.map(({firstName:T,slug:f,imageOfTeamMember:p,bio_TeamMember:V})=>e.jsx(h.Fragment,{children:e.jsx(j,{header:T,portableTextContent:V,imageSrc:p.imageUrl,imageAlt:p.imageDescription_alt})},f.current))})]})]})},r.headingText))})};export{U as default};
