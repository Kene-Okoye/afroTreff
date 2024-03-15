import{a as x,j as a,P as p,r as m,L as b}from"./index-Bxl9WmHa.js";import{P as h,c as j}from"./PortableTextCustomComponent-Uwn-Z_6L.js";import{H as k}from"./HeroSection-QQsHBg6g.js";import{H as f}from"./HeadingTopSmallVariant-C_S3W-6M.js";import{u as T}from"./useFetchData-BGt6npwu.js";const L="_album__grid_jkwmo_1",w="_album__link_jkwmo_23",r={album__grid:L,"album__paragraph-text":"_album__paragraph-text_jkwmo_13",album__link:w,"album__link-text":"_album__link-text_jkwmo_73"},y="/afroTreff/assets/photo-gallery_default-CBTxhKAN.webp",N={en:"english",de:"german"},G=()=>{const{i18n:o,t:g}=x(),t=o.resolvedLanguage,[l,u]=T(`*[_type == "albumsPage_${t}" && language == '${N[t]}']{
      language,
      heroSection_albumsPage{
        ...,
        "imageUrl": backgroundImage.asset->url
      },
      albumsSectionheading,
      bodyText,
      albums[]-> {
        month,
        slug,
        previewBackgroundImage{
          'url': asset->url
        },
        "images": photos[]{
          imageDescription_alt,
          "url": asset->url,
        }
    }  
  }`,[]);return u?a.jsx(p,{}):a.jsx(a.Fragment,{children:l&&l.map(({albumsSectionheading:n,heroSection_albumsPage:e,bodyText:_,albums:s})=>a.jsxs(m.Fragment,{children:[a.jsx(k,{h1Text:e.headingText,pText:e.smallText,backGroundImage:e.imageUrl}),a.jsxs("section",{children:[a.jsx(f,{h2SmallerVariant:n.headingSmallerVariant,h2BiggerVariant:n.headingLargerVariant}),a.jsx(h,{value:_,components:j}),a.jsx("div",{className:r.album__grid,children:s&&s.map(({month:c,slug:i,previewBackgroundImage:d})=>a.jsx(m.Fragment,{children:a.jsx(b,{to:`${g("photo-collection-from")}__${i.current}`,className:r.album__link,style:{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                            url(${d.url||y})`},children:a.jsx("span",{className:r["album__link-text"],children:c})})},i.current))})]})]},e.headingText))})};export{G as default};
