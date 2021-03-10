(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{286:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,f=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return n?a.a.createElement(f,o(o({ref:t},l),{},{components:n})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(286)),c={id:"accept-pb-invitation-payload",title:"AcceptPBInvitationPayload"},o={unversionedId:"api/objects/accept-pb-invitation-payload",id:"api/objects/accept-pb-invitation-payload",isDocsHomePage:!1,title:"AcceptPBInvitationPayload",description:"<span",source:"@site/docs/api/objects/accept-pb-invitation-payload.mdx",slug:"/api/objects/accept-pb-invitation-payload",permalink:"/core-docs-bootstrap/api/objects/accept-pb-invitation-payload",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/objects/accept-pb-invitation-payload.mdx",version:"current",sidebar:"IntroductionSidebar",previous:{title:"specifiedBy",permalink:"/core-docs-bootstrap/api/directives/specified-by"},next:{title:"AddEmailToUserAccountPayload",permalink:"/core-docs-bootstrap/api/objects/add-email-to-user-account-payload"}},p=[{value:"Fields",id:"fields",children:[]}],l=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:p,Tag:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Autogenerated return type of AcceptPBInvitation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type AcceptPBInvitationPayload {\n  clientMutationId: String\n  pbCycle: PBCycle!\n  status: ID!\n  token: String!\n  type: String!\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"clientmutationid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("p",null,"A unique identifier for the client performing the mutation."),Object(i.b)("h4",{id:"pbcycle-pbcycle"},Object(i.b)("inlineCode",{parentName:"h4"},"pbCycle")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/objects/pb-cycle"},Object(i.b)("inlineCode",{parentName:"a"},"PBCycle!")),")"),Object(i.b)("p",null,"The PB cycle that the user is trying to join when accepting the invite."),Object(i.b)("h4",{id:"status-id"},Object(i.b)("inlineCode",{parentName:"h4"},"status")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("p",null,"The result status. If no error detected, this value will be ",Object(i.b)("inlineCode",{parentName:"p"},"success"),"."),Object(i.b)("h4",{id:"token-string"},Object(i.b)("inlineCode",{parentName:"h4"},"token")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("h4",{id:"type-string"},Object(i.b)("inlineCode",{parentName:"h4"},"type")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("p",null,"The original invitation type. This type indicates the type of account that has been created for user in the PB cycle. Possible values are ",Object(i.b)("inlineCode",{parentName:"p"},"ADMIN_INVITATION")," or ",Object(i.b)("inlineCode",{parentName:"p"},"PARTICIPANT_INVITATION")))}s.isMDXComponent=!0}}]);