(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{173:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"Tag",(function(){return l})),r.d(t,"default",(function(){return d}));var a=r(3),n=(r(0),r(291));const o={id:"party-ballot-updated",title:"partyBallotUpdated"},p={unversionedId:"api/subscriptions/party-ballot-updated",id:"api/subscriptions/party-ballot-updated",isDocsHomePage:!1,title:"partyBallotUpdated",description:"<span",source:"@site/docs/api/subscriptions/party-ballot-updated.mdx",slug:"/api/subscriptions/party-ballot-updated",permalink:"/core-docs-bootstrap/docs/api/subscriptions/party-ballot-updated",version:"current",sidebar:"Schema",previous:{title:"ballotVotingResultsUpdated",permalink:"/core-docs-bootstrap/docs/api/subscriptions/ballot-voting-results-updated"},next:{title:"proposalUpdated",permalink:"/core-docs-bootstrap/docs/api/subscriptions/proposal-updated"}},i=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l=({children:e,color:t})=>Object(n.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),c={toc:i,Tag:l};function d({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Subscription to retrieve a party ballot updates. This subscription requires the user is logged in and user represents a party owner of the party ballot specified in the ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"partyBallotId"))," argument."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-graphql"},"partyBallotUpdated(\n  partyBallotId: ID!\n): PartyBallotUpdatedPayload!\n\n")),Object(n.b)("h3",{id:"arguments"},"Arguments"),Object(n.b)("h4",{id:"partyballotid-id"},Object(n.b)("inlineCode",{parentName:"h4"},"partyBallotId")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(n.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(n.b)("p",null,"The party ballot ID. This ballot must belong to current user."),Object(n.b)("h3",{id:"type"},"Type"),Object(n.b)("h4",{id:"partyballotupdatedpayload"},Object(n.b)("a",{parentName:"h4",href:"/docs/api/objects/party-ballot-updated-payload"},Object(n.b)("inlineCode",{parentName:"a"},"PartyBallotUpdatedPayload"))),Object(n.b)("p",null,"Autogenerated return type of PartyBallotUpdated"))}d.isMDXComponent=!0},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(r),b=a,y=s["".concat(p,".").concat(b)]||s[b]||u[b]||o;return r?n.a.createElement(y,i(i({ref:t},c),{},{components:r})):n.a.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);