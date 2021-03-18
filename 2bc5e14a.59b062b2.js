(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{102:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return u})),r.d(e,"toc",(function(){return c})),r.d(e,"Tag",(function(){return l})),r.d(e,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(286)),i={id:"submit-party-ballot-vote",title:"submitPartyBallotVote"},u={unversionedId:"api/mutations/submit-party-ballot-vote",id:"api/mutations/submit-party-ballot-vote",isDocsHomePage:!1,title:"submitPartyBallotVote",description:"<span",source:"@site/docs/api/mutations/submit-party-ballot-vote.mdx",slug:"/api/mutations/submit-party-ballot-vote",permalink:"/core-docs-bootstrap/docs/api/mutations/submit-party-ballot-vote",version:"current",sidebar:"Schema",previous:{title:"signInUser",permalink:"/core-docs-bootstrap/docs/api/mutations/sign-in-user"},next:{title:"submitVotingWinners",permalink:"/core-docs-bootstrap/docs/api/mutations/submit-voting-winners"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l=function(t){var e=t.children,r=t.color;return Object(o.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e)},p={toc:c,Tag:l};function s(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Registers the party vote for the party ballot."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"submitPartyBallotVote(\n  input: SubmitPartyBallotVoteInput!\n): SubmitPartyBallotVotePayload\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"input-submitpartyballotvoteinput"},Object(o.b)("inlineCode",{parentName:"h4"},"input")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/inputs/submit-party-ballot-vote-input"},Object(o.b)("inlineCode",{parentName:"a"},"SubmitPartyBallotVoteInput!")),")"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"submitpartyballotvotepayload"},Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/submit-party-ballot-vote-payload"},Object(o.b)("inlineCode",{parentName:"a"},"SubmitPartyBallotVotePayload"))),Object(o.b)("p",null,"Autogenerated return type of SubmitPartyBallotVote"))}s.isMDXComponent=!0},286:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=a.a.createContext({}),p=function(t){var e=a.a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},s=function(t){var e=p(t.components);return a.a.createElement(l.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),s=p(r),m=n,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return r?a.a.createElement(d,u(u({ref:e},l),{},{components:r})):a.a.createElement(d,u({ref:e},l))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:n,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);