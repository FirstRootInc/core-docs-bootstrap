(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{261:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"Tag",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),a=(r(0),r(287));const o={id:"create-pb-cycle-payload",title:"CreatePBCyclePayload"},c={unversionedId:"api/objects/create-pb-cycle-payload",id:"api/objects/create-pb-cycle-payload",isDocsHomePage:!1,title:"CreatePBCyclePayload",description:"<span",source:"@site/docs/api/objects/create-pb-cycle-payload.mdx",slug:"/api/objects/create-pb-cycle-payload",permalink:"/core-docs-bootstrap/docs/api/objects/create-pb-cycle-payload",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/objects/create-pb-cycle-payload.mdx",version:"current",sidebar:"Schema",previous:{title:"CreatePBCycleInvitationTokenPayload",permalink:"/core-docs-bootstrap/docs/api/objects/create-pb-cycle-invitation-token-payload"},next:{title:"CreatePersonWithUserAccountPayload",permalink:"/core-docs-bootstrap/docs/api/objects/create-person-with-user-account-payload"}},i=[{value:"Fields",id:"fields",children:[]}],l=({children:e,color:t})=>Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),p={toc:i,Tag:l};function d({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Autogenerated return type of CreatePBCycle"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type CreatePBCyclePayload {\n  clientMutationId: String\n  pbCycleId: ID\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"clientmutationid-string"},Object(a.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("p",null,"A unique identifier for the client performing the mutation."),Object(a.b)("h4",{id:"pbcycleid-id"},Object(a.b)("inlineCode",{parentName:"h4"},"pbCycleId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID")),")"))}d.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(r),b=n,y=s["".concat(c,".").concat(b)]||s[b]||u[b]||o;return r?a.a.createElement(y,i(i({ref:t},p),{},{components:r})):a.a.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);