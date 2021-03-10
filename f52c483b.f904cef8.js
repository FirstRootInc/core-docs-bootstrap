(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{272:function(e,r,o){"use strict";o.r(r),o.d(r,"frontMatter",(function(){return i})),o.d(r,"metadata",(function(){return c})),o.d(r,"toc",(function(){return p})),o.d(r,"Tag",(function(){return l})),o.d(r,"default",(function(){return s}));var t=o(3),n=o(7),a=(o(0),o(286)),i={id:"remove-reaction-from-proposal",title:"removeReactionFromProposal"},c={unversionedId:"api/mutations/remove-reaction-from-proposal",id:"api/mutations/remove-reaction-from-proposal",isDocsHomePage:!1,title:"removeReactionFromProposal",description:"<span",source:"@site/docs/api/mutations/remove-reaction-from-proposal.mdx",slug:"/api/mutations/remove-reaction-from-proposal",permalink:"/core-docs-bootstrap/api/mutations/remove-reaction-from-proposal",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/mutations/remove-reaction-from-proposal.mdx",version:"current",sidebar:"IntroductionSidebar",previous:{title:"removeReactionFromPartyBallotProposal",permalink:"/core-docs-bootstrap/api/mutations/remove-reaction-from-party-ballot-proposal"},next:{title:"resendAccountVerification",permalink:"/core-docs-bootstrap/api/mutations/resend-account-verification"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l=function(e){var r=e.children,o=e.color;return Object(a.b)("span",{style:{backgroundColor:o,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},u={toc:p,Tag:l};function s(e){var r=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,o,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Removes a reaction from a proposal"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"removeReactionFromProposal(\n  input: RemoveReactionFromProposalInput!\n): RemoveReactionFromProposalPayload\n\n")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("h4",{id:"input-removereactionfromproposalinput"},Object(a.b)("inlineCode",{parentName:"h4"},"input")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/inputs/remove-reaction-from-proposal-input"},Object(a.b)("inlineCode",{parentName:"a"},"RemoveReactionFromProposalInput!")),")"),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("h4",{id:"removereactionfromproposalpayload"},Object(a.b)("a",{parentName:"h4",href:"/docs/api/objects/remove-reaction-from-proposal-payload"},Object(a.b)("inlineCode",{parentName:"a"},"RemoveReactionFromProposalPayload"))),Object(a.b)("p",null,"Autogenerated return type of RemoveReactionFromProposal"))}s.isMDXComponent=!0},286:function(e,r,o){"use strict";o.d(r,"a",(function(){return s})),o.d(r,"b",(function(){return d}));var t=o(0),n=o.n(t);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function i(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function p(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),u=function(e){var r=n.a.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):c(c({},r),e)),o},s=function(e){var r=u(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},f=n.a.forwardRef((function(e,r){var o=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(o),f=t,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||a;return o?n.a.createElement(d,c(c({ref:r},l),{},{components:o})):n.a.createElement(d,c({ref:r},l))}));function d(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=o.length,i=new Array(a);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}f.displayName="MDXCreateElement"}}]);