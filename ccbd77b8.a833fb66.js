(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"Tag",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=(n(0),n(286));const a={id:"invitation-token-status",title:"invitationTokenStatus"},i={unversionedId:"api/queries/invitation-token-status",id:"api/queries/invitation-token-status",isDocsHomePage:!1,title:"invitationTokenStatus",description:"<span",source:"@site/docs/api/queries/invitation-token-status.mdx",slug:"/api/queries/invitation-token-status",permalink:"/core-docs-bootstrap/docs/api/queries/invitation-token-status",version:"current",sidebar:"Schema",previous:{title:"forgotPasswordProcessStatus",permalink:"/core-docs-bootstrap/docs/api/queries/forgot-password-process-status"},next:{title:"myPbCycles",permalink:"/core-docs-bootstrap/docs/api/queries/my-pb-cycles"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s=({children:e,color:t})=>Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),u={toc:c,Tag:s};function p({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Checks the status of the PB Cycle invitation token"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"invitationTokenStatus(\n  token: String!\n): VerificationTokenStatus!\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"token-string"},Object(o.b)("inlineCode",{parentName:"h4"},"token")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(o.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(o.b)("p",null,"The invitation token provided when the invitation was created."),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"verificationtokenstatus"},Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/verification-token-status"},Object(o.b)("inlineCode",{parentName:"a"},"VerificationTokenStatus"))))}p.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,f=l["".concat(i,".").concat(d)]||l[d]||b[d]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);