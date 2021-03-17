(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{248:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"Tag",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(3),n=(r(0),r(287));const o={id:"create-phase-payload",title:"CreatePhasePayload"},c={unversionedId:"api/objects/create-phase-payload",id:"api/objects/create-phase-payload",isDocsHomePage:!1,title:"CreatePhasePayload",description:"<span",source:"@site/docs/api/objects/create-phase-payload.mdx",slug:"/api/objects/create-phase-payload",permalink:"/core-docs-bootstrap/docs/api/objects/create-phase-payload",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/objects/create-phase-payload.mdx",version:"current",sidebar:"Schema",previous:{title:"CreatePersonWithUserAccountPayload",permalink:"/core-docs-bootstrap/docs/api/objects/create-person-with-user-account-payload"},next:{title:"CreateProposalPayload",permalink:"/core-docs-bootstrap/docs/api/objects/create-proposal-payload"}},i=[{value:"Fields",id:"fields",children:[]}],p=({children:e,color:t})=>Object(n.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),s={toc:i,Tag:p};function l({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Autogenerated return type of CreatePhase"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-graphql"},"type CreatePhasePayload {\n  clientMutationId: String\n  pbCycleId: ID\n  phaseId: ID\n}\n")),Object(n.b)("h3",{id:"fields"},"Fields"),Object(n.b)("h4",{id:"clientmutationid-string"},Object(n.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(n.b)("inlineCode",{parentName:"a"},"String")),")"),Object(n.b)("p",null,"A unique identifier for the client performing the mutation."),Object(n.b)("h4",{id:"pbcycleid-id"},Object(n.b)("inlineCode",{parentName:"h4"},"pbCycleId")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(n.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(n.b)("h4",{id:"phaseid-id"},Object(n.b)("inlineCode",{parentName:"h4"},"phaseId")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(n.b)("inlineCode",{parentName:"a"},"ID")),")"))}l.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),b=a,f=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return r?n.a.createElement(f,i(i({ref:t},s),{},{components:r})):n.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);