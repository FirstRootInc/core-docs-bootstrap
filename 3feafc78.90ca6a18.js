(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"Tag",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(286)),i={id:"parties",title:"parties"},p={unversionedId:"api/queries/parties",id:"api/queries/parties",isDocsHomePage:!1,title:"parties",description:"<span",source:"@site/docs/api/queries/parties.mdx",slug:"/api/queries/parties",permalink:"/core-docs-bootstrap/api/queries/parties",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/queries/parties.mdx",version:"current",sidebar:"IntroductionSidebar",previous:{title:"myProposals",permalink:"/core-docs-bootstrap/api/queries/my-proposals"},next:{title:"party",permalink:"/core-docs-bootstrap/api/queries/party"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:c,Tag:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Find parties by type"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"parties(\n  type: PartyTypesEnum\n): [Party!]!\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"type-partytypesenum"},Object(o.b)("inlineCode",{parentName:"h4"},"type")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/enums/party-types-enum"},Object(o.b)("inlineCode",{parentName:"a"},"PartyTypesEnum")),")"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"party"},Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/party"},Object(o.b)("inlineCode",{parentName:"a"},"Party"))))}l.isMDXComponent=!0},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,y=l["".concat(i,".").concat(d)]||l[d]||b[d]||o;return r?a.a.createElement(y,p(p({ref:t},u),{},{components:r})):a.a.createElement(y,p({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);