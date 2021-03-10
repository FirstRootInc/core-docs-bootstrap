(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{286:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,b=l["".concat(c,".").concat(m)]||l[m]||s[m]||o;return n?a.a.createElement(b,i(i({ref:t},d),{},{components:n})):a.a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"Tag",(function(){return d})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(286)),c={id:"add-email-to-user-account",title:"addEmailToUserAccount"},i={unversionedId:"api/mutations/add-email-to-user-account",id:"api/mutations/add-email-to-user-account",isDocsHomePage:!1,title:"addEmailToUserAccount",description:"<span",source:"@site/docs/api/mutations/add-email-to-user-account.mdx",slug:"/api/mutations/add-email-to-user-account",permalink:"/core-docs-bootstrap/api/mutations/add-email-to-user-account",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/mutations/add-email-to-user-account.mdx",version:"current",sidebar:"IntroductionSidebar",previous:{title:"acceptPbInvitation",permalink:"/core-docs-bootstrap/api/mutations/accept-pb-invitation"},next:{title:"confirmPbInvitationAccount",permalink:"/core-docs-bootstrap/api/mutations/confirm-pb-invitation-account"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],d=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:u,Tag:d};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Allows the user to add an email to its user account"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"addEmailToUserAccount(\n  input: AddEmailToUserAccountInput!\n): AddEmailToUserAccountPayload\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"input-addemailtouseraccountinput"},Object(o.b)("inlineCode",{parentName:"h4"},"input")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/inputs/add-email-to-user-account-input"},Object(o.b)("inlineCode",{parentName:"a"},"AddEmailToUserAccountInput!")),")"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"addemailtouseraccountpayload"},Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/add-email-to-user-account-payload"},Object(o.b)("inlineCode",{parentName:"a"},"AddEmailToUserAccountPayload"))),Object(o.b)("p",null,"Autogenerated return type of AddEmailToUserAccount"))}l.isMDXComponent=!0}}]);