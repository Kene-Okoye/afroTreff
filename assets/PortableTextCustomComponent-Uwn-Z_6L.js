import{r as T,j as c}from"./index-Bxl9WmHa.js";function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?S(Object(n),!0).forEach(function(r){F(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function F(e,t,n){return t=z(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){var t=R(e,"string");return typeof t=="symbol"?t:String(t)}function R(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function v(e){return e._type==="span"&&"text"in e&&typeof e.text=="string"&&(typeof e.marks>"u"||Array.isArray(e.marks)&&e.marks.every(t=>typeof t=="string"))}function K(e){return typeof e._type=="string"&&e._type[0]!=="@"&&(!("markDefs"in e)||!e.markDefs||Array.isArray(e.markDefs)&&e.markDefs.every(t=>typeof t._key=="string"))&&"children"in e&&Array.isArray(e.children)&&e.children.every(t=>typeof t=="object"&&"_type"in t)}function U(e){return K(e)&&"listItem"in e&&typeof e.listItem=="string"&&(typeof e.level>"u"||typeof e.level=="number")}function W(e){return e._type==="@list"}function A(e){return e._type==="@span"}function q(e){return e._type==="@text"}const D=["strong","em","code","underline","strike-through"];function V(e,t,n){if(!v(e)||!e.marks)return[];if(!e.marks.length)return[];const r=e.marks.slice(),l={};return r.forEach(i=>{l[i]=1;for(let a=t+1;a<n.length;a++){const y=n[a];if(y&&v(y)&&Array.isArray(y.marks)&&y.marks.indexOf(i)!==-1)l[i]++;else break}}),r.sort((i,a)=>G(l,i,a))}function G(e,t,n){const r=e[t],l=e[n];if(r!==l)return l-r;const i=D.indexOf(t),a=D.indexOf(n);return i!==a?i-a:t.localeCompare(n)}function J(e){var t;const{children:n,markDefs:r=[]}=e;if(!n||!n.length)return[];const l=n.map(V),i={_type:"@span",children:[],markType:"<unknown>"};let a=[i];for(let y=0;y<n.length;y++){const h=n[y];if(!h)continue;const j=l[y]||[];let x=1;if(a.length>1)for(x;x<a.length;x++){const s=((t=a[x])==null?void 0:t.markKey)||"",u=j.indexOf(s);if(u===-1)break;j.splice(u,1)}a=a.slice(0,x);let o=a[a.length-1];if(o){for(const s of j){const u=r.find(d=>d._key===s),p=u?u._type:s,f={_type:"@span",_key:h._key,children:[],markDef:u,markType:p,markKey:s};o.children.push(f),a.push(f),o=f}if(v(h)){const s=h.text.split(`
`);for(let u=s.length;u-- >1;)s.splice(u,0,`
`);o.children=o.children.concat(s.map(u=>({_type:"@text",text:u})))}else o.children=o.children.concat(h)}}return i.children}function Q(e,t){const n=[];let r;for(let l=0;l<e.length;l++){const i=e[l];if(i){if(!U(i)){n.push(i),r=void 0;continue}if(!r){r=_(i,l,t),n.push(r);continue}if(X(i,r)){r.children.push(i);continue}if((i.level||1)>r.level){const a=_(i,l,t);if(t==="html"){const y=r.children[r.children.length-1],h=L(L({},y),{},{children:[...y.children,a]});r.children[r.children.length-1]=h}else r.children.push(a);r=a;continue}if((i.level||1)<r.level){const a=n[n.length-1],y=a&&I(a,i);if(y){r=y,r.children.push(i);continue}r=_(i,l,t),n.push(r);continue}if(i.listItem!==r.listItem){const a=n[n.length-1],y=a&&I(a,{level:i.level||1});if(y&&y.listItem===i.listItem){r=y,r.children.push(i);continue}else{r=_(i,l,t),n.push(r);continue}}console.warn("Unknown state encountered for block",i),n.push(i)}}return n}function X(e,t){return(e.level||1)===t.level&&e.listItem===t.listItem}function _(e,t,n){return{_type:"@list",_key:"".concat(e._key||"".concat(t),"-parent"),mode:n,level:e.level||1,listItem:e.listItem,children:[e]}}function I(e,t){const n=t.level||1,r=t.listItem||"normal",l=typeof t.listItem=="string";if(W(e)&&(e.level||1)===n&&l&&(e.listItem||"normal")===r)return e;if(!("children"in e))return;const i=e.children[e.children.length-1];return i&&!v(i)?I(i,t):void 0}function C(e){let t="";return e.children.forEach(n=>{q(n)?t+=n.text:A(n)&&(t+=C(n))}),t}const Y="html",Z=["block","list","listItem","marks","types"],ee=["listItem"],te=["_key"];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?B(Object(n),!0).forEach(function(r){ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ne(e,t,n){return t=re(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e){var t=ie(e,"string");return typeof t=="symbol"?t:String(t)}function ie(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function P(e,t){if(e==null)return{};var n=le(e,t),r,l;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function le(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function oe(e,t){const n=P(t,Z);return g(g({},e),{},{block:w(e,t,"block"),list:w(e,t,"list"),listItem:w(e,t,"listItem"),marks:w(e,t,"marks"),types:w(e,t,"types")},n)}function w(e,t,n){const r=t[n],l=e[n];return typeof r=="function"||r&&typeof l=="function"?r:r?g(g({},l),r):l}const se=e=>{let{children:t,value:n}=e;return c.jsx("a",{href:n==null?void 0:n.href,children:t})},ce={textDecoration:"underline"},ue={em:e=>{let{children:t}=e;return c.jsx("em",{children:t})},strong:e=>{let{children:t}=e;return c.jsx("strong",{children:t})},code:e=>{let{children:t}=e;return c.jsx("code",{children:t})},underline:e=>{let{children:t}=e;return c.jsx("span",{style:ce,children:t})},"strike-through":e=>{let{children:t}=e;return c.jsx("del",{children:t})},link:se},ae={number:e=>{let{children:t}=e;return c.jsx("ol",{children:t})},bullet:e=>{let{children:t}=e;return c.jsx("ul",{children:t})}},fe=e=>{let{children:t}=e;return c.jsx("li",{children:t})},O=(e,t)=>"[@portabletext/react] Unknown ".concat(e,", specify a component for it in the `components.").concat(t,"` prop"),$=e=>O('block type "'.concat(e,'"'),"types"),ye=e=>O('mark type "'.concat(e,'"'),"marks"),pe=e=>O('block style "'.concat(e,'"'),"block"),he=e=>O('list style "'.concat(e,'"'),"list"),de=e=>O('list item style "'.concat(e,'"'),"listItem");function ke(e){console.warn(e)}const M={display:"none"},me=e=>{let{value:t,isInline:n}=e;const r=$(t._type);return n?c.jsx("span",{style:M,children:r}):c.jsx("div",{style:M,children:r})},be=e=>{let{markType:t,children:n}=e;return c.jsx("span",{className:"unknown__pt__mark__".concat(t),children:n})},ge=e=>{let{children:t}=e;return c.jsx("p",{children:t})},xe=e=>{let{children:t}=e;return c.jsx("ul",{children:t})},je=e=>{let{children:t}=e;return c.jsx("li",{children:t})},we=()=>c.jsx("br",{}),Oe={normal:e=>{let{children:t}=e;return c.jsx("p",{children:t})},blockquote:e=>{let{children:t}=e;return c.jsx("blockquote",{children:t})},h1:e=>{let{children:t}=e;return c.jsx("h1",{children:t})},h2:e=>{let{children:t}=e;return c.jsx("h2",{children:t})},h3:e=>{let{children:t}=e;return c.jsx("h3",{children:t})},h4:e=>{let{children:t}=e;return c.jsx("h4",{children:t})},h5:e=>{let{children:t}=e;return c.jsx("h5",{children:t})},h6:e=>{let{children:t}=e;return c.jsx("h6",{children:t})}},N={types:{},block:Oe,marks:ue,list:ae,listItem:fe,hardBreak:we,unknownType:me,unknownMark:be,unknownList:xe,unknownListItem:je,unknownBlockStyle:ge};function Pe(e){let{value:t,components:n,listNestingMode:r,onMissingComponent:l=ke}=e;const i=l||ve,a=Array.isArray(t)?t:[t],y=Q(a,r||Y),h=T.useMemo(()=>n?oe(N,n):N,[n]),j=T.useMemo(()=>_e(h,i),[h,i]),x=y.map((o,s)=>j({node:o,index:s,isInline:!1,renderNode:j}));return c.jsx(c.Fragment,{children:x})}const _e=(e,t)=>{function n(o){const{node:s,index:u,isInline:p}=o,f=s._key||"node-".concat(u);return W(s)?i(s,u,f):U(s)?l(s,u,f):A(s)?a(s,u,f):r(s)?x(s,u,f,p):K(s)?y(s,u,f,p):q(s)?h(s,f):j(s,u,f,p)}function r(o){return o._type in e.types}function l(o,s,u){const p=E({node:o,index:s,isInline:!1,renderNode:n}),f=e.listItem,k=(typeof f=="function"?f:f[o.listItem])||e.unknownListItem;if(k===e.unknownListItem){const b=o.listItem||"bullet";t(de(b),{type:b,nodeType:"listItemStyle"})}let m=p.children;if(o.style&&o.style!=="normal"){const b=P(o,ee);m=n({node:b,index:s,isInline:!1,renderNode:n})}return c.jsx(k,{value:o,index:s,isInline:!1,renderNode:n,children:m},u)}function i(o,s,u){const p=o.children.map((m,b)=>n({node:m._key?m:g(g({},m),{},{_key:"li-".concat(s,"-").concat(b)}),index:b,isInline:!1,renderNode:n})),f=e.list,k=(typeof f=="function"?f:f[o.listItem])||e.unknownList;if(k===e.unknownList){const m=o.listItem||"bullet";t(he(m),{nodeType:"listStyle",type:m})}return c.jsx(k,{value:o,index:s,isInline:!1,renderNode:n,children:p},u)}function a(o,s,u){const{markDef:p,markType:f,markKey:d}=o,k=e.marks[f]||e.unknownMark,m=o.children.map((b,H)=>n({node:b,index:H,isInline:!0,renderNode:n}));return k===e.unknownMark&&t(ye(f),{nodeType:"mark",type:f}),c.jsx(k,{text:C(o),value:p,markType:f,markKey:d,renderNode:n,children:m},u)}function y(o,s,u,p){const f=E({node:o,index:s,isInline:p,renderNode:n}),d=P(f,te),k=d.node.style||"normal",b=(typeof e.block=="function"?e.block:e.block[k])||e.unknownBlockStyle;return b===e.unknownBlockStyle&&t(pe(k),{nodeType:"blockStyle",type:k}),c.jsx(b,g(g({},d),{},{value:d.node,renderNode:n}),u)}function h(o,s){if(o.text===`
`){const u=e.hardBreak;return u?c.jsx(u,{},s):`
`}return o.text}function j(o,s,u,p){const f={value:o,isInline:p,index:s,renderNode:n};t($(o._type),{nodeType:"block",type:o._type});const d=e.unknownType;return c.jsx(d,g({},f),u)}function x(o,s,u,p){const f={value:o,isInline:p,index:s,renderNode:n},d=e.types[o._type];return d?c.jsx(d,g({},f),u):null}return n};function E(e){const{node:t,index:n,isInline:r,renderNode:l}=e,a=J(t).map((y,h)=>l({node:y,isInline:!0,index:h,renderNode:l}));return{_key:t._key||"block-".concat(n),children:a,index:n,isInline:r,node:t}}function ve(){}const Te={block:{normal:({children:e})=>c.jsx("p",{className:"portableText-paragraph",children:e}),blockquote:({children:e})=>c.jsx("blockquote",{className:"portableText-blockquote",children:e}),strong:({children:e})=>c.jsx("strong",{className:"portableText-strong",children:e})},marks:{link:({children:e,value:t})=>{const n=((t==null?void 0:t.href)||"").startsWith("http")?"_blank":void 0;return c.jsx("a",{href:t==null?void 0:t.href,target:n,rel:n==="_blank"&&"noopener noreferrer nofollow"||void 0,className:"portableText-link",children:e})}}};export{Pe as P,Te as c};