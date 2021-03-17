(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"Tag",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(287)),l={id:"ballot-results-updates-response",title:"BallotResultsUpdatesResponse"},s={unversionedId:"api/objects/ballot-results-updates-response",id:"api/objects/ballot-results-updates-response",isDocsHomePage:!1,title:"BallotResultsUpdatesResponse",description:"<span",source:"@site/docs/api/objects/ballot-results-updates-response.mdx",slug:"/api/objects/ballot-results-updates-response",permalink:"/core-docs-bootstrap/docs/api/objects/ballot-results-updates-response",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/objects/ballot-results-updates-response.mdx",version:"current",sidebar:"Schema",previous:{title:"BallotResultProposal",permalink:"/core-docs-bootstrap/docs/api/objects/ballot-result-proposal"},next:{title:"BallotVotingResultsUpdatedPayload",permalink:"/core-docs-bootstrap/docs/api/objects/ballot-voting-results-updated-payload"}},i=[{value:"Fields",id:"fields",children:[]}],c=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:i,Tag:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The payload to notify updates on a party ballot."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type BallotResultsUpdatesResponse {\n  action: String!\n  ballotResultsId: ID!\n  newValue: Boolean\n  remainingBudget: Decimal!\n  resultsProposalId: ID\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"action-string"},Object(o.b)("inlineCode",{parentName:"h4"},"action")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(o.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(o.b)("p",null,"Indicates the action type performed by the admin. Possiblevalues could be: ",Object(o.b)("inlineCode",{parentName:"p"},"selected"),", ",Object(o.b)("inlineCode",{parentName:"p"},"submitted"),"."),Object(o.b)("h4",{id:"ballotresultsid-id"},Object(o.b)("inlineCode",{parentName:"h4"},"ballotResultsId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(o.b)("p",null,"The party ballot results ID."),Object(o.b)("h4",{id:"newvalue-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"newValue")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/boolean"},Object(o.b)("inlineCode",{parentName:"a"},"Boolean")),")"),Object(o.b)("p",null,"The new value after the user action."),Object(o.b)("h4",{id:"remainingbudget-decimal"},Object(o.b)("inlineCode",{parentName:"h4"},"remainingBudget")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/decimal"},Object(o.b)("inlineCode",{parentName:"a"},"Decimal!")),")"),Object(o.b)("p",null,"The total remaining budget in ballot. Every time the admin select or remove selection from a proposal remaining budget is updated."),Object(o.b)("h4",{id:"resultsproposalid-id"},Object(o.b)("inlineCode",{parentName:"h4"},"resultsProposalId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(o.b)("p",null,"The proposal included in the voting results list when admin has performed a selected action over it."))}b.isMDXComponent=!0},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);