(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"Tag",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(287)),c={id:"create-phase",title:"createPhase"},i={unversionedId:"api/mutations/create-phase",id:"api/mutations/create-phase",isDocsHomePage:!1,title:"createPhase",description:"<span",source:"@site/docs/api/mutations/create-phase.mdx",slug:"/api/mutations/create-phase",permalink:"/core-docs-bootstrap/docs/api/mutations/create-phase",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/mutations/create-phase.mdx",version:"current",sidebar:"Schema",previous:{title:"createPersonWithUserAccount",permalink:"/core-docs-bootstrap/docs/api/mutations/create-person-with-user-account"},next:{title:"createProposal",permalink:"/core-docs-bootstrap/docs/api/mutations/create-proposal"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:p,Tag:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"createPhase(\n  input: CreatePhaseInput!\n): CreatePhasePayload\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"input-createphaseinput"},Object(o.b)("inlineCode",{parentName:"h4"},"input")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/inputs/create-phase-input"},Object(o.b)("inlineCode",{parentName:"a"},"CreatePhaseInput!")),")"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"createphasepayload"},Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/create-phase-payload"},Object(o.b)("inlineCode",{parentName:"a"},"CreatePhasePayload"))),Object(o.b)("p",null,"Autogenerated return type of CreatePhase"))}l.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,m=l["".concat(c,".").concat(b)]||l[b]||d[b]||o;return r?a.a.createElement(m,i(i({ref:t},s),{},{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);