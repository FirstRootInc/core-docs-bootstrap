(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{214:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"Tag",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(3),o=(r(0),r(286));const a={id:"ballot-voting-results-updated",title:"ballotVotingResultsUpdated"},l={unversionedId:"api/subscriptions/ballot-voting-results-updated",id:"api/subscriptions/ballot-voting-results-updated",isDocsHomePage:!1,title:"ballotVotingResultsUpdated",description:"<span",source:"@site/docs/api/subscriptions/ballot-voting-results-updated.mdx",slug:"/api/subscriptions/ballot-voting-results-updated",permalink:"/core-docs-bootstrap/docs/api/subscriptions/ballot-voting-results-updated",version:"current",sidebar:"Schema",previous:{title:"updateProposal",permalink:"/core-docs-bootstrap/docs/api/mutations/update-proposal"},next:{title:"partyBallotUpdated",permalink:"/core-docs-bootstrap/docs/api/subscriptions/party-ballot-updated"}},i=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s=({children:e,color:t})=>Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),p={toc:i,Tag:s};function c({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Subscription to retrieve the ballot voting results updates."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"ballotVotingResultsUpdated(\n  ballotResultsId: ID!\n): BallotVotingResultsUpdatedPayload!\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"ballotresultsid-id"},Object(o.b)("inlineCode",{parentName:"h4"},"ballotResultsId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"ballotvotingresultsupdatedpayload"},Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/ballot-voting-results-updated-payload"},Object(o.b)("inlineCode",{parentName:"a"},"BallotVotingResultsUpdatedPayload"))),Object(o.b)("p",null,"Autogenerated return type of BallotVotingResultsUpdated"))}c.isMDXComponent=!0},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),b=n,f=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(f,i(i({ref:t},p),{},{components:r})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);