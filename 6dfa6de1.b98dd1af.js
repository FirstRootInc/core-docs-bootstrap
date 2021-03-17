(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{158:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return a})),n.d(e,"Tag",(function(){return p})),n.d(e,"default",(function(){return l}));var i=n(3),o=(n(0),n(287));const r={id:"join-pb-cycle-with-existing-account",title:"joinPbCycleWithExistingAccount"},c={unversionedId:"api/mutations/join-pb-cycle-with-existing-account",id:"api/mutations/join-pb-cycle-with-existing-account",isDocsHomePage:!1,title:"joinPbCycleWithExistingAccount",description:"<span",source:"@site/docs/api/mutations/join-pb-cycle-with-existing-account.mdx",slug:"/api/mutations/join-pb-cycle-with-existing-account",permalink:"/core-docs-bootstrap/docs/api/mutations/join-pb-cycle-with-existing-account",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/mutations/join-pb-cycle-with-existing-account.mdx",version:"current",sidebar:"Schema",previous:{title:"fundBallotProposal",permalink:"/core-docs-bootstrap/docs/api/mutations/fund-ballot-proposal"},next:{title:"reactToPartyBallotProposal",permalink:"/core-docs-bootstrap/docs/api/mutations/react-to-party-ballot-proposal"}},a=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=({children:t,color:e})=>Object(o.b)("span",{style:{backgroundColor:e,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t),u={toc:a,Tag:p};function l({components:t,...e}){return Object(o.b)("wrapper",Object(i.a)({},u,e,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Join a PB cycle with a token invite if logged in."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"joinPbCycleWithExistingAccount(\n  input: JoinPBCycleWithExistingAccountInput!\n): JoinPBCycleWithExistingAccountPayload\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"input-joinpbcyclewithexistingaccountinput"},Object(o.b)("inlineCode",{parentName:"h4"},"input")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/inputs/join-pb-cycle-with-existing-account-input"},Object(o.b)("inlineCode",{parentName:"a"},"JoinPBCycleWithExistingAccountInput!")),")"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"joinpbcyclewithexistingaccountpayload"},Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/join-pb-cycle-with-existing-account-payload"},Object(o.b)("inlineCode",{parentName:"a"},"JoinPBCycleWithExistingAccountPayload"))),Object(o.b)("p",null,"Autogenerated return type of JoinPBCycleWithExistingAccount"))}l.isMDXComponent=!0},287:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return y}));var i=n(0),o=n.n(i);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=o.a.createContext({}),l=function(t){var e=o.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=l(t.components);return o.a.createElement(u.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},d=o.a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=l(n),d=i,y=s["".concat(c,".").concat(d)]||s[d]||b[d]||r;return n?o.a.createElement(y,a(a({ref:e},u),{},{components:n})):o.a.createElement(y,a({ref:e},u))}));function y(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,c=new Array(r);c[0]=d;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=t,a.mdxType="string"==typeof t?t:i,c[1]=a;for(var u=2;u<r;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);