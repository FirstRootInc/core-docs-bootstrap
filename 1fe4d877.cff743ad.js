(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{287:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,f=s["".concat(a,".").concat(b)]||s[b]||d[b]||o;return n?i.a.createElement(f,c(c({ref:t},p),{},{components:n})):i.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),o=(n(0),n(287)),a={id:"select-voting-result-input",title:"SelectVotingResultInput"},c={unversionedId:"api/inputs/select-voting-result-input",id:"api/inputs/select-voting-result-input",isDocsHomePage:!1,title:"SelectVotingResultInput",description:"<span",source:"@site/docs/api/inputs/select-voting-result-input.mdx",slug:"/api/inputs/select-voting-result-input",permalink:"/core-docs-bootstrap/docs/api/inputs/select-voting-result-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/inputs/select-voting-result-input.mdx",version:"current",sidebar:"Schema",previous:{title:"ResendAccountVerificationInput",permalink:"/core-docs-bootstrap/docs/api/inputs/resend-account-verification-input"},next:{title:"SetPrimaryCommunicationIdentifierInput",permalink:"/core-docs-bootstrap/docs/api/inputs/set-primary-communication-identifier-input"}},l=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:l,Tag:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Autogenerated input type of SelectVotingResult"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type SelectVotingResultInput {\n  ballotResultsId: ID!\n  proposalId: ID!\n  clientMutationId: String\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"ballotresultsid-id"},Object(o.b)("inlineCode",{parentName:"h4"},"ballotResultsId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(o.b)("p",null,"The ballot results ID in which the proposals is included"),Object(o.b)("h4",{id:"proposalid-id"},Object(o.b)("inlineCode",{parentName:"h4"},"proposalId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(o.b)("p",null,"The ballot result proposal ID to be selected"),Object(o.b)("h4",{id:"clientmutationid-string"},Object(o.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(o.b)("inlineCode",{parentName:"a"},"String")),")"),Object(o.b)("p",null,"A unique identifier for the client performing the mutation."))}s.isMDXComponent=!0}}]);