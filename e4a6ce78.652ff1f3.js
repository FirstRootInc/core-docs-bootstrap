(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{260:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"Tag",(function(){return p})),r.d(t,"default",(function(){return d}));var n=r(3),i=(r(0),r(287));const a={id:"set-primary-communication-identifier-payload",title:"SetPrimaryCommunicationIdentifierPayload"},o={unversionedId:"api/objects/set-primary-communication-identifier-payload",id:"api/objects/set-primary-communication-identifier-payload",isDocsHomePage:!1,title:"SetPrimaryCommunicationIdentifierPayload",description:"<span",source:"@site/docs/api/objects/set-primary-communication-identifier-payload.mdx",slug:"/api/objects/set-primary-communication-identifier-payload",permalink:"/core-docs-bootstrap/docs/api/objects/set-primary-communication-identifier-payload",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/objects/set-primary-communication-identifier-payload.mdx",version:"current",sidebar:"Schema",previous:{title:"SelectVotingResultPayload",permalink:"/core-docs-bootstrap/docs/api/objects/select-voting-result-payload"},next:{title:"SetupPBCycleParticipantPayload",permalink:"/core-docs-bootstrap/docs/api/objects/setup-pb-cycle-participant-payload"}},c=[{value:"Fields",id:"fields",children:[]}],p=({children:e,color:t})=>Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),l={toc:c,Tag:p};function d({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Autogenerated return type of SetPrimaryCommunicationIdentifier"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type SetPrimaryCommunicationIdentifierPayload {\n  clientMutationId: String\n  partyId: ID!\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"clientmutationid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("p",null,"A unique identifier for the client performing the mutation."),Object(i.b)("h4",{id:"partyid-id"},Object(i.b)("inlineCode",{parentName:"h4"},"partyId")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"))}d.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,b=u["".concat(o,".").concat(m)]||u[m]||s[m]||a;return r?i.a.createElement(b,c(c({ref:t},l),{},{components:r})):i.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);