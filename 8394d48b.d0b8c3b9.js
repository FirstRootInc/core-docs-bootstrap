(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),i=(n(0),n(286));const o={id:"confirm-pb-invitation-account-input",title:"ConfirmPBInvitationAccountInput"},a={unversionedId:"api/inputs/confirm-pb-invitation-account-input",id:"api/inputs/confirm-pb-invitation-account-input",isDocsHomePage:!1,title:"ConfirmPBInvitationAccountInput",description:"<span",source:"@site/docs/api/inputs/confirm-pb-invitation-account-input.mdx",slug:"/api/inputs/confirm-pb-invitation-account-input",permalink:"/core-docs-bootstrap/docs/api/inputs/confirm-pb-invitation-account-input",version:"current",sidebar:"Schema",previous:{title:"AddEmailToUserAccountInput",permalink:"/core-docs-bootstrap/docs/api/inputs/add-email-to-user-account-input"},next:{title:"CreateBallotInput",permalink:"/core-docs-bootstrap/docs/api/inputs/create-ballot-input"}},c=[{value:"Fields",id:"fields",children:[]}],p=({children:e,color:t})=>Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),u={toc:c,Tag:p};function l({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Autogenerated input type of ConfirmPBInvitationAccount"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type ConfirmPBInvitationAccountInput {\n  token: String!\n  password: String!\n  clientMutationId: String\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"token-string"},Object(i.b)("inlineCode",{parentName:"h4"},"token")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("p",null,"The confirmation token sent in verification email."),Object(i.b)("h4",{id:"password-string"},Object(i.b)("inlineCode",{parentName:"h4"},"password")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("p",null,"The password for the new account."),Object(i.b)("h4",{id:"clientmutationid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("p",null,"A unique identifier for the client performing the mutation."))}l.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,f=s["".concat(a,".").concat(d)]||s[d]||b[d]||o;return n?i.a.createElement(f,c(c({ref:t},u),{},{components:n})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);