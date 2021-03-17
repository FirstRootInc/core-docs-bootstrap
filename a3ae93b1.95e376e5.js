(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{199:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"Tag",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=(r(0),r(287));const a={id:"remove-reaction-from-party-ballot-proposal-input",title:"RemoveReactionFromPartyBallotProposalInput"},i={unversionedId:"api/inputs/remove-reaction-from-party-ballot-proposal-input",id:"api/inputs/remove-reaction-from-party-ballot-proposal-input",isDocsHomePage:!1,title:"RemoveReactionFromPartyBallotProposalInput",description:"<span",source:"@site/docs/api/inputs/remove-reaction-from-party-ballot-proposal-input.mdx",slug:"/api/inputs/remove-reaction-from-party-ballot-proposal-input",permalink:"/core-docs-bootstrap/docs/api/inputs/remove-reaction-from-party-ballot-proposal-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/inputs/remove-reaction-from-party-ballot-proposal-input.mdx",version:"current",sidebar:"Schema",previous:{title:"RefreshAuthTokenInput",permalink:"/core-docs-bootstrap/docs/api/inputs/refresh-auth-token-input"},next:{title:"RemoveReactionFromProposalInput",permalink:"/core-docs-bootstrap/docs/api/inputs/remove-reaction-from-proposal-input"}},p=[{value:"Fields",id:"fields",children:[]}],c=({children:e,color:t})=>Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),l={toc:p,Tag:c};function u({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Autogenerated input type of RemoveReactionFromPartyBallotProposal"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type RemoveReactionFromPartyBallotProposalInput {\n  partyBallotId: ID!\n  proposalId: ID!\n  clientMutationId: String\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"partyballotid-id"},Object(o.b)("inlineCode",{parentName:"h4"},"partyBallotId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(o.b)("p",null,"The party ballot ID which proposal belongs to"),Object(o.b)("h4",{id:"proposalid-id"},Object(o.b)("inlineCode",{parentName:"h4"},"proposalId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(o.b)("p",null,"The party proposal id which will be removed the reaction from"),Object(o.b)("h4",{id:"clientmutationid-string"},Object(o.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(o.b)("inlineCode",{parentName:"a"},"String")),")"),Object(o.b)("p",null,"A unique identifier for the client performing the mutation."))}u.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return r?o.a.createElement(m,p(p({ref:t},l),{},{components:r})):o.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);