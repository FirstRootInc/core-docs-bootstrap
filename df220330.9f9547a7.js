(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{252:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"Tag",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(286)),i={id:"fund-ballot-proposal-input",title:"FundBallotProposalInput"},p={unversionedId:"api/inputs/fund-ballot-proposal-input",id:"api/inputs/fund-ballot-proposal-input",isDocsHomePage:!1,title:"FundBallotProposalInput",description:"<span",source:"@site/docs/api/inputs/fund-ballot-proposal-input.mdx",slug:"/api/inputs/fund-ballot-proposal-input",permalink:"/core-docs-bootstrap/docs/api/inputs/fund-ballot-proposal-input",version:"current",sidebar:"Schema",previous:{title:"ForgotPasswordProcessStartInput",permalink:"/core-docs-bootstrap/docs/api/inputs/forgot-password-process-start-input"},next:{title:"JoinPBCycleWithExistingAccountInput",permalink:"/core-docs-bootstrap/docs/api/inputs/join-pb-cycle-with-existing-account-input"}},l=[{value:"Fields",id:"fields",children:[]}],c=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:l,Tag:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Autogenerated input type of FundBallotProposal"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type FundBallotProposalInput {\n  partyBallotId: ID!\n  proposalId: ID!\n  fund: Boolean!\n  clientMutationId: String\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"partyballotid-id"},Object(a.b)("inlineCode",{parentName:"h4"},"partyBallotId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(a.b)("p",null,"The party ballot ID which proposal belongs to"),Object(a.b)("h4",{id:"proposalid-id"},Object(a.b)("inlineCode",{parentName:"h4"},"proposalId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(a.b)("p",null,"The proposal ID in the party ballot"),Object(a.b)("h4",{id:"fund-boolean"},Object(a.b)("inlineCode",{parentName:"h4"},"fund")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/boolean"},Object(a.b)("inlineCode",{parentName:"a"},"Boolean!")),")"),Object(a.b)("p",null,"Set the proposal funding to false or true"),Object(a.b)("h4",{id:"clientmutationid-string"},Object(a.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("p",null,"A unique identifier for the client performing the mutation."))}s.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,f=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return n?o.a.createElement(f,p(p({ref:t},c),{},{components:n})):o.a.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);