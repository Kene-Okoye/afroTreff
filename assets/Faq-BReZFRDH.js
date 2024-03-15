import{a as g,j as a,P as c,r as m}from"./index-Bxl9WmHa.js";import{H as x}from"./HeroSection-QQsHBg6g.js";import{u as h}from"./useFetchData-BGt6npwu.js";const u={"faq--mobile":"_faq--mobile_1b1hd_1","faq--desktop":"_faq--desktop_1b1hd_3"},p={en:"english",de:"german"},T=()=>{const{i18n:t}=g(),s=t.resolvedLanguage,[n,i]=h(`*[_type == "FAQPage_${s}" && language == '${p[s]}']{
      language,
      heroSection_Faq{
        ...,
        "imageUrl": backgroundImage.asset->url
      },
      QandAheading,
      qandAs
  }`,[]);return i?a.jsx(c,{}):a.jsx(a.Fragment,{children:n&&n.map(({heroSection_Faq:e,QandAheading:l,qandAs:d})=>a.jsxs(m.Fragment,{children:[a.jsx(x,{h1Text:e.headingText,pText:e.smallText,backGroundImage:e.imageUrl}),a.jsxs("section",{children:[a.jsx("h2",{children:l}),a.jsx("ul",{className:u["faq--desktop"],role:"list",children:d.map(({question:r,answer:o})=>a.jsxs("li",{children:[a.jsxs("h3",{children:[" ",r]}),a.jsx("p",{children:o})]},r))})]})]},e.headingText))})};export{T as default};
