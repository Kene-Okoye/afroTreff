import{b as i,c as b,r as e,j as t,P as m}from"./index-Bxl9WmHa.js";import{P as p,c as u}from"./PortableTextCustomComponent-Uwn-Z_6L.js";import{u as d}from"./useFetchData-BGt6npwu.js";const a={"blog-post__container":"_blog-post__container_1f7om_1","blog-post__background":"_blog-post__background_1f7om_9","blog-post__article-container":"_blog-post__article-container_1f7om_33","blog-post__article":"_blog-post__article_1f7om_33","blog-post__article-heading":"_blog-post__article-heading_1f7om_61","blog-post__article-content":"_blog-post__article-content_1f7om_71"},P=()=>{const s=i(),r=b().blogId,[o,l]=d(`*[slug.current == "${r}"]{
      language, 
      month,
      title,
      author->{
        name,
        slug
      },
      slug,
      mainImage{
        'url': asset->url
      },
      categories,
      publishedAt,
      briefIntro,
      body,
    }`,[]);return e.useEffect(()=>{o||s("../",{replace:!0})},[o,s]),l||o.length===0?t.jsx(m,{}):t.jsx("section",{className:a["blog-post__container"],children:o&&o.map(({slug:n,title:_,body:c,mainImage:g})=>t.jsxs(e.Fragment,{children:[t.jsx("div",{className:a["blog-post__background"],style:{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                  url(${g.url})`}}),t.jsx("div",{className:a["blog-post__article-container"],children:t.jsxs("article",{className:a["blog-post__article"],children:[t.jsx("h1",{className:a["blog-post__article-heading"],children:_}),t.jsx(p,{value:c,components:u})]})})]},n.current))})};export{P as default};
