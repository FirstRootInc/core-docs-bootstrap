(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{273:function(e,r,o){"use strict";o.r(r),o.d(r,"frontMatter",(function(){return a})),o.d(r,"metadata",(function(){return i})),o.d(r,"toc",(function(){return c})),o.d(r,"Tag",(function(){return p})),o.d(r,"default",(function(){return s}));var t=o(3),n=(o(0),o(287));const a={id:"remove-reaction-from-proposal",title:"removeReactionFromProposal"},i={unversionedId:"api/mutations/remove-reaction-from-proposal",id:"api/mutations/remove-reaction-from-proposal",isDocsHomePage:!1,title:"removeReactionFromProposal",description:"<span",source:"@site/docs/api/mutations/remove-reaction-from-proposal.mdx",slug:"/api/mutations/remove-reaction-from-proposal",permalink:"/core-docs-bootstrap/docs/api/mutations/remove-reaction-from-proposal",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/mutations/remove-reaction-from-proposal.mdx",version:"current",sidebar:"Schema",previous:{title:"removeReactionFromPartyBallotProposal",permalink:"/core-docs-bootstrap/docs/api/mutations/remove-reaction-from-party-ballot-proposal"},next:{title:"resendAccountVerification",permalink:"/core-docs-bootstrap/docs/api/mutations/resend-account-verification"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=({children:e,color:r})=>Object(n.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),l={toc:c,Tag:p};function s({components:e,...r}){return Object(n.b)("wrapper",Object(t.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Removes a reaction from a proposal"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-graphql"},"removeReactionFromProposal(\n  input: RemoveReactionFromProposalInput!\n): RemoveReactionFromProposalPayload\n\n")),Object(n.b)("h3",{id:"arguments"},"Arguments"),Object(n.b)("h4",{id:"input-removereactionfromproposalinput"},Object(n.b)("inlineCode",{parentName:"h4"},"input")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/inputs/remove-reaction-from-proposal-input"},Object(n.b)("inlineCode",{parentName:"a"},"RemoveReactionFromProposalInput!")),")"),Object(n.b)("h3",{id:"type"},"Type"),Object(n.b)("h4",{id:"removereactionfromproposalpayload"},Object(n.b)("a",{parentName:"h4",href:"/docs/api/objects/remove-reaction-from-proposal-payload"},Object(n.b)("inlineCode",{parentName:"a"},"RemoveReactionFromProposalPayload"))),Object(n.b)("p",null,"Autogenerated return type of RemoveReactionFromProposal"))}s.isMDXComponent=!0},287:function(e,r,o){"use strict";o.d(r,"a",(function(){return u})),o.d(r,"b",(function(){return f}));var t=o(0),n=o.n(t);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function i(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function p(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),s=function(e){var r=n.a.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):c(c({},r),e)),o},u=function(e){var r=s(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var o=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(o),d=t,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return o?n.a.createElement(f,c(c({ref:r},l),{},{components:o})):n.a.createElement(f,c({ref:r},l))}));function f(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=o.length,i=new Array(a);i[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);