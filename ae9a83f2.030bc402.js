(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{213:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return o})),n.d(e,"toc",(function(){return c})),n.d(e,"Tag",(function(){return p})),n.d(e,"default",(function(){return s}));var r=n(3),a=(n(0),n(286));const i={id:"accept-pb-invitation",title:"acceptPbInvitation"},o={unversionedId:"api/mutations/accept-pb-invitation",id:"api/mutations/accept-pb-invitation",isDocsHomePage:!1,title:"acceptPbInvitation",description:"<span",source:"@site/docs/api/mutations/accept-pb-invitation.mdx",slug:"/api/mutations/accept-pb-invitation",permalink:"/core-docs-bootstrap/api/mutations/accept-pb-invitation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/mutations/accept-pb-invitation.mdx",version:"current",sidebar:"IntroductionSidebar",previous:{title:"verifyAuthTokenStatus",permalink:"/core-docs-bootstrap/api/queries/verify-auth-token-status"},next:{title:"addEmailToUserAccount",permalink:"/core-docs-bootstrap/api/mutations/add-email-to-user-account"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=({children:t,color:e})=>Object(a.b)("span",{style:{backgroundColor:e,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t),u={toc:c,Tag:p};function s({components:t,...e}){return Object(a.b)("wrapper",Object(r.a)({},u,e,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Allows to accept an invitation and register preliminary user data"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"acceptPbInvitation(\n  input: AcceptPBInvitationInput!\n): AcceptPBInvitationPayload\n\n")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("h4",{id:"input-acceptpbinvitationinput"},Object(a.b)("inlineCode",{parentName:"h4"},"input")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/inputs/accept-pb-invitation-input"},Object(a.b)("inlineCode",{parentName:"a"},"AcceptPBInvitationInput!")),")"),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("h4",{id:"acceptpbinvitationpayload"},Object(a.b)("a",{parentName:"h4",href:"/docs/api/objects/accept-pb-invitation-payload"},Object(a.b)("inlineCode",{parentName:"a"},"AcceptPBInvitationPayload"))),Object(a.b)("p",null,"Autogenerated return type of AcceptPBInvitation"))}s.isMDXComponent=!0},286:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=a.a.createContext({}),s=function(t){var e=a.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=s(t.components);return a.a.createElement(u.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),l=s(n),d=r,f=l["".concat(o,".").concat(d)]||l[d]||b[d]||i;return n?a.a.createElement(f,c(c({ref:e},u),{},{components:n})):a.a.createElement(f,c({ref:e},u))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);