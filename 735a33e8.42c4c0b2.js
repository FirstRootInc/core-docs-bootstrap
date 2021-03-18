(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return b}));var i=n(3),r=(n(0),n(286));const o={id:"pb-invitation-info",title:"PBInvitationInfo"},a={unversionedId:"api/objects/pb-invitation-info",id:"api/objects/pb-invitation-info",isDocsHomePage:!1,title:"PBInvitationInfo",description:"<span",source:"@site/docs/api/objects/pb-invitation-info.mdx",slug:"/api/objects/pb-invitation-info",permalink:"/core-docs-bootstrap/docs/api/objects/pb-invitation-info",version:"current",sidebar:"Schema",previous:{title:"PBCycle",permalink:"/core-docs-bootstrap/docs/api/objects/pb-cycle"},next:{title:"Phase",permalink:"/core-docs-bootstrap/docs/api/objects/phase"}},c=[{value:"Fields",id:"fields",children:[]}],p=({children:e,color:t})=>Object(r.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),s={toc:c,Tag:p};function b({components:e,...t}){return Object(r.b)("wrapper",Object(i.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"No description"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"type PBInvitationInfo {\n  acceptedInvitations: PBAcceptedInvitationsStatistics\n  invitationsTokens: [VerificationToken!]!\n  pbCycle: PBCycle!\n}\n")),Object(r.b)("h3",{id:"fields"},"Fields"),Object(r.b)("h4",{id:"acceptedinvitations-pbacceptedinvitationsstatistics"},Object(r.b)("inlineCode",{parentName:"h4"},"acceptedInvitations")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/objects/pb-accepted-invitations-statistics"},Object(r.b)("inlineCode",{parentName:"a"},"PBAcceptedInvitationsStatistics")),")"),Object(r.b)("p",null,"Information about users that has been accepted the invitation"),Object(r.b)("h4",{id:"invitationstokens-verificationtoken"},Object(r.b)("inlineCode",{parentName:"h4"},"invitationsTokens")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/objects/verification-token"},Object(r.b)("inlineCode",{parentName:"a"},"[VerificationToken!]!")),")"),Object(r.b)("p",null,"Information about the invitations tokens."),Object(r.b)("h4",{id:"pbcycle-pbcycle"},Object(r.b)("inlineCode",{parentName:"h4"},"pbCycle")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/objects/pb-cycle"},Object(r.b)("inlineCode",{parentName:"a"},"PBCycle!")),")"),Object(r.b)("p",null,"PB Cycle information"))}b.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(n),d=i,f=l["".concat(a,".").concat(d)]||l[d]||u[d]||o;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);