(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(286)),c={id:"create-pb-cycle-invitation-token",title:"createPbCycleInvitationToken"},i={unversionedId:"api/mutations/create-pb-cycle-invitation-token",id:"api/mutations/create-pb-cycle-invitation-token",isDocsHomePage:!1,title:"createPbCycleInvitationToken",description:"<span",source:"@site/docs/api/mutations/create-pb-cycle-invitation-token.mdx",slug:"/api/mutations/create-pb-cycle-invitation-token",permalink:"/core-docs-bootstrap/docs/api/mutations/create-pb-cycle-invitation-token",version:"current",sidebar:"Schema",previous:{title:"createPbCycle",permalink:"/core-docs-bootstrap/docs/api/mutations/create-pb-cycle"},next:{title:"createPersonWithUserAccount",permalink:"/core-docs-bootstrap/docs/api/mutations/create-person-with-user-account"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:p,Tag:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Allow to create a new invitation token for PB cycles. PB cycles can have only one invitation active, so if the PB cycle has an invitation already created this mutation will return an error."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"createPbCycleInvitationToken(\n  input: CreatePBCycleInvitationTokenInput!\n): CreatePBCycleInvitationTokenPayload\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"input-createpbcycleinvitationtokeninput"},Object(o.b)("inlineCode",{parentName:"h4"},"input")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/inputs/create-pb-cycle-invitation-token-input"},Object(o.b)("inlineCode",{parentName:"a"},"CreatePBCycleInvitationTokenInput!")),")"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"createpbcycleinvitationtokenpayload"},Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/create-pb-cycle-invitation-token-payload"},Object(o.b)("inlineCode",{parentName:"a"},"CreatePBCycleInvitationTokenPayload"))),Object(o.b)("p",null,"Autogenerated return type of CreatePBCycleInvitationToken"))}s.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),y=r,d=s["".concat(c,".").concat(y)]||s[y]||b[y]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);