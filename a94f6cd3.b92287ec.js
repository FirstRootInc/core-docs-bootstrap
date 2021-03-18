(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{209:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"Tag",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(3),o=a(7),n=(a(0),a(291)),c={id:"react-to-party-ballot-proposal-payload",title:"ReactToPartyBallotProposalPayload"},i={unversionedId:"api/objects/react-to-party-ballot-proposal-payload",id:"api/objects/react-to-party-ballot-proposal-payload",isDocsHomePage:!1,title:"ReactToPartyBallotProposalPayload",description:"<span",source:"@site/docs/api/objects/react-to-party-ballot-proposal-payload.mdx",slug:"/api/objects/react-to-party-ballot-proposal-payload",permalink:"/core-docs-bootstrap/docs/api/objects/react-to-party-ballot-proposal-payload",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/objects/react-to-party-ballot-proposal-payload.mdx",version:"current",sidebar:"Schema",previous:{title:"ProposalUpdatedPayload",permalink:"/core-docs-bootstrap/docs/api/objects/proposal-updated-payload"},next:{title:"ReactToProposalPayload",permalink:"/core-docs-bootstrap/docs/api/objects/react-to-proposal-payload"}},p=[{value:"Fields",id:"fields",children:[]}],l=function(e){var t=e.children,a=e.color;return Object(n.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:p,Tag:l};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Autogenerated return type of ReactToPartyBallotProposal"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-graphql"},"type ReactToPartyBallotProposalPayload {\n  clientMutationId: String\n  partyBallotId: ID!\n  proposalId: ID!\n  reactionId: ID!\n}\n")),Object(n.b)("h3",{id:"fields"},"Fields"),Object(n.b)("h4",{id:"clientmutationid-string"},Object(n.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(n.b)("inlineCode",{parentName:"a"},"String")),")"),Object(n.b)("p",null,"A unique identifier for the client performing the mutation."),Object(n.b)("h4",{id:"partyballotid-id"},Object(n.b)("inlineCode",{parentName:"h4"},"partyBallotId")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(n.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(n.b)("h4",{id:"proposalid-id"},Object(n.b)("inlineCode",{parentName:"h4"},"proposalId")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(n.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(n.b)("h4",{id:"reactionid-id"},Object(n.b)("inlineCode",{parentName:"h4"},"reactionId")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(n.b)("inlineCode",{parentName:"a"},"ID!")),")"))}s.isMDXComponent=!0},291:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return f}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(a),u=r,f=s["".concat(c,".").concat(u)]||s[u]||b[u]||n;return a?o.a.createElement(f,i(i({ref:t},l),{},{components:a})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<n;l++)c[l]=a[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);