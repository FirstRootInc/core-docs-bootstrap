(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(286)),c={id:"setup-pb-cycle-participant-payload",title:"SetupPBCycleParticipantPayload"},o={unversionedId:"api/objects/setup-pb-cycle-participant-payload",id:"api/objects/setup-pb-cycle-participant-payload",isDocsHomePage:!1,title:"SetupPBCycleParticipantPayload",description:"<span",source:"@site/docs/api/objects/setup-pb-cycle-participant-payload.mdx",slug:"/api/objects/setup-pb-cycle-participant-payload",permalink:"/core-docs-bootstrap/docs/api/objects/setup-pb-cycle-participant-payload",version:"current",sidebar:"Schema",previous:{title:"SetPrimaryCommunicationIdentifierPayload",permalink:"/core-docs-bootstrap/docs/api/objects/set-primary-communication-identifier-payload"},next:{title:"SignInUserPayload",permalink:"/core-docs-bootstrap/docs/api/objects/sign-in-user-payload"}},p=[{value:"Fields",id:"fields",children:[]}],l=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:p,Tag:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Autogenerated return type of SetupPBCycleParticipant"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type SetupPBCycleParticipantPayload {\n  clientMutationId: String\n  organizationPartyId: ID\n  participantPartyId: ID!\n  pbCycleId: ID!\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"clientmutationid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("p",null,"A unique identifier for the client performing the mutation."),Object(i.b)("h4",{id:"organizationpartyid-id"},Object(i.b)("inlineCode",{parentName:"h4"},"organizationPartyId")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(i.b)("h4",{id:"participantpartyid-id"},Object(i.b)("inlineCode",{parentName:"h4"},"participantPartyId")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("h4",{id:"pbcycleid-id"},Object(i.b)("inlineCode",{parentName:"h4"},"pbCycleId")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"))}u.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,y=u["".concat(c,".").concat(s)]||u[s]||b[s]||i;return n?a.a.createElement(y,o(o({ref:t},l),{},{components:n})):a.a.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);