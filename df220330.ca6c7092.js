(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{254:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=(n(0),n(286));const a={id:"fund-ballot-proposal-input",title:"FundBallotProposalInput"},i={unversionedId:"api/inputs/fund-ballot-proposal-input",id:"api/inputs/fund-ballot-proposal-input",isDocsHomePage:!1,title:"FundBallotProposalInput",description:"<span",source:"@site/docs/api/inputs/fund-ballot-proposal-input.mdx",slug:"/api/inputs/fund-ballot-proposal-input",permalink:"/core-docs-bootstrap/api/inputs/fund-ballot-proposal-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/inputs/fund-ballot-proposal-input.mdx",version:"current",sidebar:"IntroductionSidebar",previous:{title:"ForgotPasswordProcessStartInput",permalink:"/core-docs-bootstrap/api/inputs/forgot-password-process-start-input"},next:{title:"JoinPBCycleWithExistingAccountInput",permalink:"/core-docs-bootstrap/api/inputs/join-pb-cycle-with-existing-account-input"}},p=[{value:"Fields",id:"fields",children:[]}],l=({children:e,color:t})=>Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),c={toc:p,Tag:l};function u({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Autogenerated input type of FundBallotProposal"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type FundBallotProposalInput {\n  partyBallotId: ID!\n  proposalId: ID!\n  fund: Boolean!\n  clientMutationId: String\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"partyballotid-id"},Object(o.b)("inlineCode",{parentName:"h4"},"partyBallotId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(o.b)("p",null,"The party ballot ID which proposal belongs to"),Object(o.b)("h4",{id:"proposalid-id"},Object(o.b)("inlineCode",{parentName:"h4"},"proposalId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(o.b)("p",null,"The proposal ID in the party ballot"),Object(o.b)("h4",{id:"fund-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"fund")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/boolean"},Object(o.b)("inlineCode",{parentName:"a"},"Boolean!")),")"),Object(o.b)("p",null,"Set the proposal funding to false or true"),Object(o.b)("h4",{id:"clientmutationid-string"},Object(o.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(o.b)("inlineCode",{parentName:"a"},"String")),")"),Object(o.b)("p",null,"A unique identifier for the client performing the mutation."))}u.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,f=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return n?o.a.createElement(f,p(p({ref:t},c),{},{components:n})):o.a.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);