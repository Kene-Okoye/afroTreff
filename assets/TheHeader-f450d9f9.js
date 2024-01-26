import{r as i,u as y,j as e,p as g,N as f,L as j}from"./index-eb380ac2.js";import{a as w}from"./afrotreff_logo-96f33fdc.js";const E="_logo_ng144_31",l={"logo-image":"_logo-image_ng144_31",logo:E,"skip-to-main":"_skip-to-main_ng144_57","nav-fixed":"_nav-fixed_ng144_131","focus-indicator":"_focus-indicator_ng144_147","sub-menu":"_sub-menu_ng144_199","sub-menu--button-arrow-up":"_sub-menu--button-arrow-up_ng144_203","child-active":"_child-active_ng144_219","main-menu":"_main-menu_ng144_233","sub-menu--button-arrow-down":"_sub-menu--button-arrow-down_ng144_365","visually-hidden":"_visually-hidden_ng144_665","hamburger-menu":"_hamburger-menu_ng144_685","is-active":"_is-active_ng144_713","hamburger-menu-inner":"_hamburger-menu-inner_ng144_713","hamburger-menu-box":"_hamburger-menu-box_ng144_725","hamburger-menu--spring":"_hamburger-menu--spring_ng144_807","hamburger-menu-label":"_hamburger-menu-label_ng144_873"},N=(a,t)=>{const r=i.useRef(null),u=i.useRef(null),_=i.useRef(null),[d,h]=i.useState(!1);return i.useEffect(()=>{const c=document.querySelector("#root"),m=u.current,x=m?Array.from(m.querySelectorAll("*")):[],o=c?Array.from(c.querySelectorAll("*")).filter(n=>m&&!n.contains(m)&&!x.includes(n)):[],b=_.current;let p=null;const v=n=>{n.key==="Escape"&&(t(),h(!0))};return a?(o.forEach(n=>{n==null||n.setAttribute("inert",""),n==null||n.setAttribute("aria-hidden","true"),n.style.pointerEvents="none",n.style.backgroundColor="rgba(0, 0, 0, 0.5)",n.style.transition="all 0.5s"}),p=setTimeout(()=>{b==null||b.focus()},100),document.addEventListener("keydown",v)):(o.forEach(n=>{n==null||n.removeAttribute("inert"),n==null||n.removeAttribute("aria-hidden"),n.style.pointerEvents="",n.style.backgroundColor="",n.style.transition=""}),document.removeEventListener("keydown",v)),()=>{o.forEach(n=>{n==null||n.removeAttribute("inert"),n==null||n.removeAttribute("aria-hidden"),n.style.pointerEvents="",n.style.backgroundColor="",n.style.transition=""}),p&&clearTimeout(p),document.removeEventListener("keydown",v)}},[a,t]),i.useEffect(()=>{var c;!a&&d&&((c=r.current)==null||c.focus(),h(!1))},[a,d]),{triggerRef:r,dialogRef:u,firstFocusableElementRef:_}},k=({firstFocusableElementRef:a,onNavLinkClick:t})=>{const[r,u]=i.useState(!1),_=i.useRef(null),d=y(),h=d==null?void 0:d.pathname.split("/").pop(),c=()=>{u(!r)},m=()=>{u(!1)},x=()=>{c()},o=()=>{t(),m()},b=p=>{p.key==="Escape"&&m()};return i.useEffect(()=>(document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)}),[]),e.jsx(e.Fragment,{children:e.jsxs("ul",{role:"list",className:l["main-menu"],children:[e.jsxs("li",{className:`${l["sub-menu"]}`,children:[e.jsx("button",{type:"button",ref:a,onClick:x,"aria-expanded":r,className:`${l["sub-menu--button-arrow-down"]} ${r&&l["sub-menu--button-arrow-up"]} ${(g.VISION_AND_TEAM===h||g.GALLERY===h||g.BLOG===h)&&l["child-active"]}`,children:"About"}),e.jsxs("ul",{ref:_,children:[e.jsx("li",{children:e.jsx(f,{to:g.VISION_AND_TEAM,onClick:o,children:"Vision & Team"})}),e.jsx("li",{children:e.jsx(f,{to:g.GALLERY,onClick:o,children:"Gallery"})}),e.jsx("li",{children:e.jsx(f,{to:g.BLOG,onClick:o,children:"News / Blog"})})]})]}),e.jsx("li",{children:e.jsx(f,{to:g.ACTIVITIES,onClick:o,children:"Activities"})}),e.jsx("li",{children:e.jsx(f,{to:g.SUPPORT,onClick:o,children:"Support"})}),e.jsx("li",{children:e.jsx("a",{href:"https://community.afrotreff.com/",target:"_blank",rel:"noreferrer noopener",children:"Community"})})]})})},s={"visually-hidden":"_visually-hidden_1bng8_1","language-switch__input":"_language-switch__input_1bng8_35","language-switch__label":"_language-switch__label_1bng8_73","language-switch__label--en":"_language-switch__label--en_1bng8_87","language-switch__label--de":"_language-switch__label--de_1bng8_95","language-switch__lable-aria-description":"_language-switch__lable-aria-description_1bng8_113"},$=()=>{const[a,t]=i.useState("en"),r=u=>{t(u.target.value)};return console.log({selectedLanguage:a}),e.jsx(e.Fragment,{children:e.jsxs("fieldset",{children:[e.jsx("legend",{className:`${s["language-switch__legend"]} ${s["visually-hidden"]}`,children:"Select your preferred language:"}),e.jsxs("div",{className:s["language-switch__input-wrapper"],children:[e.jsx("input",{className:`${s["language-switch__input"]} ${s["visually-hidden"]}`,lang:"en",type:"radio",name:"language",id:"language-en",value:"en","aria-describedby":"eng-en",defaultChecked:!0,onChange:r},"en"),e.jsxs("label",{className:`${s["language-switch__label"]} ${s["language-switch__label--en"]}`,lang:"en",htmlFor:"language-en",children:["EN ",e.jsx("span",{className:s["visually-hidden"],children:"English"})]}),a==="de"&&e.jsx("span",{className:`${s["language-switch__lable-aria-description"]} ${s["visually-hidden"]}`,lang:"de",id:"eng-en",children:"Englisch"})]}),e.jsxs("div",{className:s["language-switch__input-wrapper"],children:[e.jsx("input",{className:`${s["language-switch__input"]} ${s["visually-hidden"]}`,lang:"de",type:"radio",name:"language",id:"language-de",value:"de","aria-describedby":"eng-de",onChange:r},"de"),e.jsxs("label",{className:`${s["language-switch__label"]} ${s["language-switch__label--de"]}`,lang:"de",htmlFor:"language-de",children:["DE ",e.jsx("span",{className:s["visually-hidden"],children:"Deutsch"})]}),a==="en"&&e.jsx("span",{className:`${s["language-switch__lable-aria-description"]} ${s["visually-hidden"]}`,lang:"en",id:"eng-de",children:"German"})]})]})})},L=()=>{const[a,t]=i.useState(!1),r=()=>{_()},u=()=>{t(!a)},_=()=>{t(!1)},{triggerRef:d,dialogRef:h,firstFocusableElementRef:c}=N(a,_);return e.jsx(e.Fragment,{children:e.jsxs("nav",{ref:h,id:"main-nav","aria-label":"Select a page",className:`${a&&l["nav-fixed"]}`,children:[e.jsx($,{}),e.jsxs("button",{ref:d,type:"button","aria-expanded":a,"aria-controls":"main-nav",onClick:u,className:`${l["hamburger-menu"]} ${l["hamburger-menu--spring"]} ${a&&l["is-active"]}`,children:[e.jsx("span",{className:l["hamburger-menu-box"],children:e.jsx("span",{className:l["hamburger-menu-inner"]})}),!a&&e.jsx("span",{className:`${l["hamburger-menu-label"]} ${l["visually-hidden"]}`,children:"menu"}),a&&e.jsx("span",{className:`${l["hamburger-menu-label"]} ${l["visually-hidden"]}`,children:"close"})]}),e.jsx(k,{firstFocusableElementRef:c,onNavLinkClick:r})]})})},A=()=>e.jsx(e.Fragment,{children:e.jsxs("header",{children:[e.jsx("a",{href:"#main-content",className:l["skip-to-main"],children:"Skip to Main Content"}),e.jsx(j,{to:g.HOME,className:l.logo,children:e.jsx("img",{src:w,alt:"AfroTreff homepage",className:l["logo-image"]})}),e.jsx(L,{})]})});export{A as default};
