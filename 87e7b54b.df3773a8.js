(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{179:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return i})),r.d(t,"Tag",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=(r(0),r(287));const c={id:"create-pb-cycle",title:"createPbCycle"},o={unversionedId:"api/mutations/create-pb-cycle",id:"api/mutations/create-pb-cycle",isDocsHomePage:!1,title:"createPbCycle",description:"<span",source:"@site/docs/api/mutations/create-pb-cycle.mdx",slug:"/api/mutations/create-pb-cycle",permalink:"/core-docs-bootstrap/docs/api/mutations/create-pb-cycle",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/mutations/create-pb-cycle.mdx",version:"current",sidebar:"Schema",previous:{title:"createCategory",permalink:"/core-docs-bootstrap/docs/api/mutations/create-category"},next:{title:"createPbCycleInvitationToken",permalink:"/core-docs-bootstrap/docs/api/mutations/create-pb-cycle-invitation-token"}},i=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=({children:e,color:t})=>Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),l={toc:i,Tag:p};function u({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"createPbCycle(\n  input: CreatePBCycleInput!\n): CreatePBCyclePayload\n\n")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("h4",{id:"input-createpbcycleinput"},Object(a.b)("inlineCode",{parentName:"h4"},"input")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/inputs/create-pb-cycle-input"},Object(a.b)("inlineCode",{parentName:"a"},"CreatePBCycleInput!")),")"),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("h4",{id:"createpbcyclepayload"},Object(a.b)("a",{parentName:"h4",href:"/docs/api/objects/create-pb-cycle-payload"},Object(a.b)("inlineCode",{parentName:"a"},"CreatePBCyclePayload"))),Object(a.b)("p",null,"Autogenerated return type of CreatePBCycle"))}u.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,y=b["".concat(o,".").concat(d)]||b[d]||s[d]||c;return r?a.a.createElement(y,i(i({ref:t},l),{},{components:r})):a.a.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);