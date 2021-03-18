(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{268:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(291)),o={id:"create-pb-cycle-invitation-token-input",title:"CreatePBCycleInvitationTokenInput"},c={unversionedId:"api/inputs/create-pb-cycle-invitation-token-input",id:"api/inputs/create-pb-cycle-invitation-token-input",isDocsHomePage:!1,title:"CreatePBCycleInvitationTokenInput",description:"<span",source:"@site/docs/api/inputs/create-pb-cycle-invitation-token-input.mdx",slug:"/api/inputs/create-pb-cycle-invitation-token-input",permalink:"/core-docs-bootstrap/docs/api/inputs/create-pb-cycle-invitation-token-input",version:"current",sidebar:"Schema",previous:{title:"CreatePBCycleInput",permalink:"/core-docs-bootstrap/docs/api/inputs/create-pb-cycle-input"},next:{title:"CreatePersonWithUserAccountInput",permalink:"/core-docs-bootstrap/docs/api/inputs/create-person-with-user-account-input"}},p=[{value:"Fields",id:"fields",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:p,Tag:u};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Autogenerated input type of CreatePBCycleInvitationToken"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type CreatePBCycleInvitationTokenInput {\n  pbCycleId: ID!\n  category: TokenTypesEnum\n  password: String!\n  clientMutationId: String\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"pbcycleid-id"},Object(a.b)("inlineCode",{parentName:"h4"},"pbCycleId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(a.b)("h4",{id:"category-tokentypesenum"},Object(a.b)("inlineCode",{parentName:"h4"},"category")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/enums/token-types-enum"},Object(a.b)("inlineCode",{parentName:"a"},"TokenTypesEnum")),")"),Object(a.b)("h4",{id:"password-string"},Object(a.b)("inlineCode",{parentName:"h4"},"password")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(a.b)("h4",{id:"clientmutationid-string"},Object(a.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("p",null,"A unique identifier for the client performing the mutation."))}s.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,f=s["".concat(o,".").concat(d)]||s[d]||b[d]||a;return n?i.a.createElement(f,c(c({ref:t},u),{},{components:n})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);