(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{258:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"Tag",(function(){return b})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),o=(a(0),a(291)),i={id:"party-ballot",title:"PartyBallot"},c={unversionedId:"api/objects/party-ballot",id:"api/objects/party-ballot",isDocsHomePage:!1,title:"PartyBallot",description:"<span",source:"@site/docs/api/objects/party-ballot.mdx",slug:"/api/objects/party-ballot",permalink:"/core-docs-bootstrap/docs/api/objects/party-ballot",version:"current",sidebar:"Schema",previous:{title:"Party",permalink:"/core-docs-bootstrap/docs/api/objects/party"},next:{title:"PartyBallotProposal",permalink:"/core-docs-bootstrap/docs/api/objects/party-ballot-proposal"}},l=[{value:"Fields",id:"fields",children:[]}],b=function(e){var t=e.children,a=e.color;return Object(o.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:l,Tag:b};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type PartyBallot {\n  ballot: Ballot!\n  ballotBudget: Decimal!\n  ballotProposals: [PartyBallotProposal!]!\n  createdAt: ISO8601Date!\n  firstSubmittedAt: ISO8601Date\n  id: ID!\n  isSubmitted: Boolean\n  lastSubmittedAt: ISO8601Date\n  party: Party!\n  remainingBudget: Decimal!\n  updatedAt: ISO8601Date!\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"ballot-ballot"},Object(o.b)("inlineCode",{parentName:"h4"},"ballot")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/ballot"},Object(o.b)("inlineCode",{parentName:"a"},"Ballot!")),")"),Object(o.b)("h4",{id:"ballotbudget-decimal"},Object(o.b)("inlineCode",{parentName:"h4"},"ballotBudget")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/decimal"},Object(o.b)("inlineCode",{parentName:"a"},"Decimal!")),")"),Object(o.b)("h4",{id:"ballotproposals-partyballotproposal"},Object(o.b)("inlineCode",{parentName:"h4"},"ballotProposals")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/party-ballot-proposal"},Object(o.b)("inlineCode",{parentName:"a"},"[PartyBallotProposal!]!")),")"),Object(o.b)("h4",{id:"createdat-iso8601date"},Object(o.b)("inlineCode",{parentName:"h4"},"createdAt")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date"},Object(o.b)("inlineCode",{parentName:"a"},"ISO8601Date!")),")"),Object(o.b)("h4",{id:"firstsubmittedat-iso8601date"},Object(o.b)("inlineCode",{parentName:"h4"},"firstSubmittedAt")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date"},Object(o.b)("inlineCode",{parentName:"a"},"ISO8601Date")),")"),Object(o.b)("h4",{id:"id-id"},Object(o.b)("inlineCode",{parentName:"h4"},"id")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(o.b)("h4",{id:"issubmitted-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"isSubmitted")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/boolean"},Object(o.b)("inlineCode",{parentName:"a"},"Boolean")),")"),Object(o.b)("h4",{id:"lastsubmittedat-iso8601date"},Object(o.b)("inlineCode",{parentName:"h4"},"lastSubmittedAt")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date"},Object(o.b)("inlineCode",{parentName:"a"},"ISO8601Date")),")"),Object(o.b)("h4",{id:"party-party"},Object(o.b)("inlineCode",{parentName:"h4"},"party")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/party"},Object(o.b)("inlineCode",{parentName:"a"},"Party!")),")"),Object(o.b)("h4",{id:"remainingbudget-decimal"},Object(o.b)("inlineCode",{parentName:"h4"},"remainingBudget")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/decimal"},Object(o.b)("inlineCode",{parentName:"a"},"Decimal!")),")"),Object(o.b)("h4",{id:"updatedat-iso8601date"},Object(o.b)("inlineCode",{parentName:"h4"},"updatedAt")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date"},Object(o.b)("inlineCode",{parentName:"a"},"ISO8601Date!")),")"))}d.isMDXComponent=!0},291:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||o;return a?n.a.createElement(m,c(c({ref:t},b),{},{components:a})):n.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);